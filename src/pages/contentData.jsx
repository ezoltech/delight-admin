import React from "react";
import {
  Table,
  Card,
  Button,
  Label,
  Modal,
  TextInput,
  Textarea,
  FileInput,
} from "flowbite-react";
import { CiSettings } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { ContentCommands } from "../components/contentCommands";
const ContentData = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMod, setOpenMod] = useState(false);
  const [text, setText] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  function onCloseMod() {
    setOpenModal(false);
    setText("");
  }

  return (
    <>
      <div id="content" className="flex flex-col gap-3">
        <ContentCommands />
        <div className="edit modal">
          <Modal
            show={openModal}
            size="md"
            onClose={onCloseModal}
            popup
            dismissible
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Edit content
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="text" value="text input" />
                  </div>
                  <TextInput
                    id="text"
                    placeholder="Edit title"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="description" value="edit description" />
                  </div>
                  <Textarea id="text" type="text" required />
                </div>
                <div className="flex justify-between">
                  <Label value="edit photo" />
                  <FileInput id="file-upload" />
                </div>
                <div className="w-full flex flex-row gap-5">
                  <Button>Save Changes</Button>
                  <Button onClick={setOpenModal(false)}>Cancel</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        <div className="delete-modal">
          <Modal
            dismissible
            show={openMod}
            size="md"
            onClose={() => setOpenMod(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this content
                </h3>
                <div className="flex justify-center gap-4">
                  <Button
                    color="failure"
                    onClick={() => {
                      setOpenModal(false);
                      // handleDeleteContent();
                    }}
                  >
                    {"Yes, I'm Sure"}
                  </Button>
                  <Button color="gray" onClick={() => setOpenMod(false)}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <Card className="m-8">
          <div className="overflow-hidden">
            <Table>
              <Table.Head>
                <Table.HeadCell className="w-[4px]">ID</Table.HeadCell>
                <Table.HeadCell>title</Table.HeadCell>
                <Table.HeadCell> description</Table.HeadCell>
                <Table.HeadCell> photo</Table.HeadCell>
                <Table.HeadCell>created at</Table.HeadCell>
                <Table.HeadCell>updated at</Table.HeadCell>
                <Table.HeadCell className="flex flex-row gap-3">
                  <CiSettings className="w-[25px] h-[25px]" />
                  <span className="">Settings</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {"01"}
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>Laptop</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell className="flex flex-row gap-6">
                    <Button
                      className="flex flex-row gap-4"
                      size="sm"
                      color="dark"
                      onClick={() => setOpenModal(true)}
                    >
                      <FaEdit />
                      Edit
                    </Button>

                    <Button
                      className="flex flex-row gap-4"
                      size="sm"
                      color="failure"
                      onClick={() => setOpenMod(true)}
                    >
                      <MdDelete />
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ContentData;
