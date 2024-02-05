
import React, { useState } from "react";
import {
  Button,
  Modal,
  Label,
  TextInput,
  Textarea,
  FileInput,
  Select,
} from "flowbite-react";
import axios from "axios";
import { BASE_URL } from "../utils/utils";
import { AdminInfo } from "./adminInfo";
import { Logout } from "./Logout";
import { Toaster, toast } from "react-hot-toast";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export const ContentCommands = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMod, setOpenMod] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [place, setPlace] = useState("");

  const handleAddContent = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("place", place);
      formData.append("photo", file);

      const response = await axios.post(
        `${BASE_URL}/contents/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      onCloseModal();
      toast.success("content added successfully!");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/contents/deleteall`);
      console.log(response.data); // Logging the response data
      toast.success("data cleared successfully");
      window.location.reload();
      setOpenMod(false);
    } catch (error) {
      // Handle errors if any
      console.error(error);
      toast.error("error clearing data, please try again");
    }
  };
  const onCloseModal = () => {
    setOpenModal(false);
    setTitle("");
    setDescription("");
    setFile(null);
    setPlace("");
  };

  return (
    <>
      {/* Modal for Content Addition */}
      <Toaster />
      <Modal
        dismissible
        show={openModal}
        size="md"
        onClose={onCloseModal}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={handleAddContent}>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Add New Content
              </h3>
              <div>
                <Label htmlFor="title" value="Title" />
                <TextInput
                  id="title"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description" value="Description" />
                <Textarea
                  id="description"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="file-upload" value="Choose File" />
                <FileInput
                  id="file-upload"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div>
                <Label value="Select Place" />
                <Select
                  label="Place"
                  dismissOnClick={false}
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                >
                  <option value="Top">Top</option>
                  <option value="Middle">Middle</option>
                  <option value="Carousel-First">Carousel-First</option>
                  <option value="Carousel-Next">Carousel-Nextt</option>
                </Select>
              </div>
              <div className="w-full flex flex-row gap-5">
                <Button type="submit">Add Content</Button>
                <Button onClick={onCloseModal}>Cancel</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={openMod}
        size="md"
        onClose={() => setOpenMod(false)}
        popup
        dismissible
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
                  setOpenMod(false);
                  handleDelete();
                }}
              >
                {"Yes, I'm sure"}
              </Button>

              <Button color="gray" onClick={() => setOpenMod(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Buttons and Layout */}
      <div className="flex flex-row gap-7 justify-between m-8">
        <div className="flex flex-row justify-start gap-5">
          <Button
            size="sm"
            color="blue"
            onClick={() => setOpenModal(true)}
            className="w-[60px] h-[50px]"
          >
            Add
          </Button>
          <Button
            color="failure"
            onClick={() => setOpenMod(true)}
            className="w-[110px] h-[50px]"
          >
            Clear Data
          </Button>
        </div>
        <div className="flex flex-row gap-7 justify-between m-8">
          <div className="flex flex-row justify-between gap-5">
            <AdminInfo />
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCommands;
