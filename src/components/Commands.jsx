import React, { useState } from "react";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { HiOutlineExclamationCircle } from "react-icons/hi";
export const Commands = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="">
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
                  <Button color="failure" onClick={() => setOpenModal(false)}>
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
        <div className="add modal"></div>
      </div>
      <div className="flex flex-row gap-7 justify-between m-8">
        <div className="flex flex-row justify-start gap-5">
          <Button size="sm" color="blue">
            Add
          </Button>
          <Button size="sm" onClick={() => setOpenModal(true)} color="failure">
            clear data
          </Button>
        </div>
        <div className="flex flex-row justify-end gap-5">
          <Button size="xs">
            <HiOutlineArrowLeft className="h-6 w-6" />
          </Button>
          <Button size="xs">
            <HiOutlineArrowRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </>
  );
};
