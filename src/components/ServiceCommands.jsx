import React, { useState } from "react";
import { Button, Modal, Label, TextInput, Textarea } from "flowbite-react";
import axios from "axios";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Logout } from "./Logout";
import { AdminInfo } from "./adminInfo";
import { BASE_URL } from "../utils/utils";
import { toast, Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
export const ServiceCommands = () => {
  // const navigate = new useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openMod, setOpenMod] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onCloseMod = () => {
    setOpenMod(false);
  };

  const handleCreate = async (e) => {
    // e.preventDefault();
    try {
      const createResponse = await axios.post(`${BASE_URL}/services/create`, {
        title,
        description,
        price,
      });
      if (createResponse.status === 200) {
        setOpenModal(false);
        toast.success("New service created successfully!", { duration: 7000 });
      }
    } catch (error) {
      console.error("Error creating service:", error);
      toast.error("Error creating service, please try again later");
    }
  };

  const handleClearData = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/services/deleteall`);
      console.log(response.data);
      toast.success("data cleared successfully", { duration: 6000 });
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Toaster />
      {/* Warning Modal */}
      <Modal
        dismissible
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to clear the entire data?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  setOpenModal(false);
                  handleClearData();
                }}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Add Service Modal */}
      <Modal show={openMod} size="md" onClose={onCloseMod} popup dismissible>
        <Modal.Header />
        <Modal.Body>
          <form
            onSubmit={() => {
              handleCreate();
            }}
          >
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add Service
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Title" />
                </div>
                <TextInput
                  id="title"
                  placeholder="Add title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <Textarea
                  id="description"
                  placeholder="Add description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Price" />
                </div>
                <TextInput
                  id="price"
                  placeholder="Add Price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  required
                />
              </div>
              <div className="w-full flex flex-row gap-5">
                <Button type="submit ">Add Service</Button>
                <Button onClick={onCloseMod}>Cancel</Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* Buttons and layout */}
      <div className="flex flex-row gap-7 justify-between m-8">
        <div className="flex flex-row justify-start gap-5">
          <Button size="sm" color="blue" onClick={() => setOpenMod(true)}>
            Add
          </Button>
          <Button size="sm" onClick={() => setOpenModal(true)} color="failure">
            Clear Data
          </Button>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <div className="flex flex-row justify-end">
            <div>
              <AdminInfo />
            </div>
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
};
