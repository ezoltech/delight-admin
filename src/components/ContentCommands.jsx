import React, { useState } from "react";
import {
  Button,
  Modal,
  Label,
  TextInput,
  Textarea,
  FileInput,
} from "flowbite-react";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Logout } from "./Logout";
import { AdminInfo } from "./adminInfo";
export const ContentCommands = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMod, setOpenMod] = useState(false);
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  function onCloseModal() {
    setOpenModal(false);
    setText("");
  }

  function onCloseMod() {
    setOpenMod(false);
    setWord("");
  }
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
        <div className="add modal">
          <Modal show={openMod} size="md" onClose={onCloseMod} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Add content
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="text" value="text input" />
                  </div>
                  <TextInput
                    id="text"
                    placeholder="Add title"
                    value={word}
                    onChange={(event) => setWord(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="description" value="add description" />
                  </div>
                  <Textarea id="text" type="text" required />
                </div>
                <div className="flex justify-between">
                  <Label value="add a new photo" />
                  <FileInput id="file-upload" />
                </div>
                <div className="w-full flex flex-row gap-5">
                  <Button>Add Content</Button>
                  <Button>Cancel</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <div className="flex flex-row gap-7 justify-between m-8">
        <div className="flex flex-row justify-start gap-5">
          <Button size="sm" color="blue" onClick={() => setOpenMod(true)}>
            Add
          </Button>
          <Button size="sm" onClick={() => setOpenModal(true)} color="failure">
            clear data
          </Button>
        </div>
        <div className="flex flex-row  justify-between gap-5">
          <AdminInfo />
          <Logout className="ml-24" />
        </div>
      </div>
    </>
  );
};
