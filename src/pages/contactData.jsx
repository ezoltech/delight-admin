import React, { useEffect, useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BASE_URL } from "../utils/utils";
import axios from "axios";
import { Table, Card, Button } from "flowbite-react";
import { LottieAnimation } from "../components/LottieAnimation";
import { ContactCommands } from "../components/ContactCommands";
const ContactData = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/contact/allcontacts`);
        setContacts(response.data.contacts);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      <ContactCommands />
      <Card className="m-8">
        <div className="overflow-hidden">
          {contacts.length > 0 ? (
            <Table>
              <Table.Head>
                <Table.HeadCell className="w-[4px]">ID</Table.HeadCell>
                <Table.HeadCell>email</Table.HeadCell>
                <Table.HeadCell> subject</Table.HeadCell>
                <Table.HeadCell> message</Table.HeadCell>
                <Table.HeadCell>created at</Table.HeadCell>
                <Table.HeadCell>updated at</Table.HeadCell>
                <Table.HeadCell className="flex flex-row gap-3">
                  <CiSettings className="w-[25px] h-[25px]" />
                  <span className="">Settings</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {contacts.map((contact) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={contact.id}
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {contact.id}
                    </Table.Cell>
                    <Table.Cell>{contact.email}</Table.Cell>
                    <Table.Cell>{contact.subject}</Table.Cell>
                    <Table.Cell>{contact.message}</Table.Cell>
                    <Table.Cell>{contact.created_at}</Table.Cell>
                    <Table.Cell>{contact.updated_at}</Table.Cell>
                    <Table.Cell className="flex flex-row gap-6">
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

export default ContactData;
