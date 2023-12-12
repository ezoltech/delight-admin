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

import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { ContentCommands } from "../components/contentCommands";
const ContentData = () => {
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  return (
    <>
      <div id="content-data" className="flex flex-col gap-3">
        <ContentCommands />
        <div className="">
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
                  <Button>Cancel</Button>
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
                    >
                      <MdDelete />
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Microsoft Surface Pro
                  </Table.Cell>
                  <Table.Cell>White</Table.Cell>
                  <Table.Cell>Laptop PC</Table.Cell>
                  <Table.Cell>$1999</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell className="flex flex-row gap-6">
                    <Button
                      className="flex flex-row gap-4"
                      size="sm"
                      color="dark"
                    >
                      <FaEdit />
                      Edit
                    </Button>
                    <Button
                      className="flex flex-row gap-4"
                      size="sm"
                      color="failure"
                    >
                      <MdDelete />
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Magic Mouse 2
                  </Table.Cell>
                  <Table.Cell>Black</Table.Cell>
                  <Table.Cell>Accessories</Table.Cell>
                  <Table.Cell>$99</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell className="flex flex-row gap-6">
                    <Button
                      className="flex flex-row gap-4"
                      size="sm"
                      color="dark"
                    >
                      <FaEdit />
                      Edit
                    </Button>
                    <Button
                      className="flex flex-row gap-4"
                      size="sm"
                      color="failure"
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
