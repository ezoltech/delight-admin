import React, { useEffect, useState } from "react";
import { Table, Card, Button, Modal } from "flowbite-react";
import { CiSettings } from "react-icons/ci";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { Loader } from "../components/Loader";
import axios from "axios";
import { BASE_URL } from "../utils/utils";
import { ContentCommands } from "../components/contentCommands";
import { LottieAnimation } from "../components/LottieAnimation";
import { AdminCommands } from "../components/adminCommands";
const AdminData = ({}) => {
  const [admins, setAdmins] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/admin/alladmins`);
        setAdmins(response.data.admins);
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };

    fetchAdmins();
  }, []);

  const handleDeleteAdmin = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/admin/delete`, {
        data: { id },
      });
      if (response.status === 200) {
        setAdmins(admins.filter((admin) => admin.id !== id));
      }
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setOpenModal(true);
  };

  const handleConfirmation = () => {
    setOpenModal(false);
    if (deleteId) {
      handleDeleteAdmin(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <div>
      <div className="modal">
        {openModal && (
          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
            dismissible
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete the admin?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button
                    color="failure"
                    onClick={() => {
                      setOpenModal(false);
                      handleConfirmation;
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
        )}
      </div>
      <AdminCommands />

      <Card className="m-8">
        <div>
          {admins.length > 0 ? (
            <Table>
              <Table.Head>
                <Table.HeadCell className="w-[4px]">ID</Table.HeadCell>
                <Table.HeadCell>email</Table.HeadCell>
                {/* <Table.HeadCell>password</Table.HeadCell> */}
                <Table.HeadCell>created at</Table.HeadCell>
                <Table.HeadCell>updated at</Table.HeadCell>
                <Table.HeadCell className="flex flex-row gap-3">
                  <CiSettings className="w-[25px] h-[25px]" />
                  <span className="">Settings</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {admins.map((admin) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={admin.id}
                  >
                    <Table.Cell>{admin.id}</Table.Cell>
                    <Table.Cell>{admin.email}</Table.Cell>
                    {/* <Table.Cell aria-disabled>{admin.password}</Table.Cell> */}
                    <Table.Cell>{admin.created_at}</Table.Cell>
                    <Table.Cell>{admin.updated_at}</Table.Cell>
                    <div className="flex justify-center items-center">
                      <Button
                        className="flex flex-row gap-3"
                        color="failure"
                        onClick={() => setOpenModal(true)}
                      >
                        {" "}
                        <MdDelete />
                        Delete
                      </Button>
                    </div>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          ) : (
            <div className="m-10">
              <LottieAnimation />
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default AdminData;
