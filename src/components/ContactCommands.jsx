import React, { useState } from "react";
import { AdminInfo } from "./adminInfo";
import { Modal, Button } from "flowbite-react";
import { Logout } from "./Logout";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BASE_URL } from "../utils/utils";
import axios from "axios";
export const ContactCommands = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClearData = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/contact/clear`);
      console.log(response.data);
      toast.success("data cleared successfully", { duration: 6000 });
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="warning-modal">
        <div className="warning-modal">
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
        </div>
      </div>
      <div className="flex flex-row gap-7 justify-between m-8">
        <div className="flex flex-row justify-start gap-5">
          <Button size="sm" onClick={() => setOpenModal(true)} color="failure">
            clear data
          </Button>
        </div>
        <div className="flex flex-row  justify-between gap-5">
          <AdminInfo />

          <Logout className="ml-24" />
        </div>
      </div>
    </div>
  );
};
