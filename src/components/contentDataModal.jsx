import React from "react";
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
export const contentDataModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setText("");
  }
  return (
    <div>
      <Button onClick={() => setOpenModal(true)}>Edit</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
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
  );
};
