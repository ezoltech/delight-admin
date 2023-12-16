import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Card,
  Button,
  Modal,
  Label,
  TextInput,
  Textarea,
} from "flowbite-react";
import { CiSettings } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ServiceCommands } from "../components/serviceCommands";
import { LottieAnimation } from "../components/LottieAnimation";
import { BASE_URL } from "../utils/utils";
import { HiOutlineExclamationCircle } from "react-icons/hi";
const ServicesData = () => {
  const [services, setServices] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [includes, setIncludes] = useState("");
  const [places, setPlaces] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/services/allservices`);
        setServices(response.data.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/services/delete/${id}`);

      if (response.status === 200) {
        console.log("Service deleted successfully");
        setServices(services.filter((service) => service.id !== id));
      }
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(`${BASE_URL}/services/update/${id}`, {
        title: title,
        includes: includes,
        places: places,
        duration: duration,
        price: price,
      });

      console.log(response.data);
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const openEditModal = (
    id,
    initialTitle,
    initialIncludes,
    initialPlaces,
    initialDuration,
    initialPrice
  ) => {
    setSelectedServiceId(id), setTitle(initialTitle);
    setIncludes(initialIncludes),
      setPlaces(initialPlaces),
      setDuration(initialDuration),
      setPrice(initialPrice);
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div id="service">
      <ServiceCommands />
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
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-6">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Edit Service
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="title" value="Title" />
                  </div>
                  <TextInput
                    id="title"
                    placeholder="Edit title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="includes" value="Includes" />
                  </div>
                  <TextInput
                    id="Includes"
                    placeholder="Edit Includes"
                    value={includes}
                    onChange={(event) => setIncludes(event.target.value)}
                    required
                  />

                  <div className="mb-2 block">
                    <Label htmlFor="places" value="Places" />
                  </div>
                  <TextInput
                    id="places"
                    placeholder="Edit Places"
                    value={places}
                    onChange={(event) => setPlaces(event.target.value)}
                    required
                  />

                  <div className="mb-2 block">
                    <Label htmlFor="duration" value="Duration" />
                  </div>
                  <TextInput
                    id="duration"
                    placeholder="Edit Duration"
                    value={duration}
                    onChange={(event) => setDuration(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="price" value="Price" />
                  </div>
                  <TextInput
                    id="price"
                    placeholder="Edit Price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    required
                  />
                </div>
                <div className="w-full flex flex-row gap-5">
                  <Button onClick={() => handleUpdate(selectedServiceId)}>
                    Save Changes
                  </Button>
                  <Button onClick={onCloseModal}>Cancel</Button>
                </div>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
      <Card className="m-8">
        <div className="overflow-hidden">
          {services.length > 0 ? (
            <Table>
              <Table.Head>
                <Table.HeadCell className="w-[4px]">ID</Table.HeadCell>
                <Table.HeadCell>title</Table.HeadCell>
                <Table.HeadCell>Includes</Table.HeadCell>
                <Table.HeadCell>Places</Table.HeadCell>
                <Table.HeadCell>Duration</Table.HeadCell>
                <Table.HeadCell>price</Table.HeadCell>
                <Table.HeadCell>created at</Table.HeadCell>
                <Table.HeadCell>updated at</Table.HeadCell>
                <Table.HeadCell className="flex flex-row gap-3">
                  <CiSettings className="w-[25px] h-[25px]" />
                  <span className="">Settings</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {services.map((service, index) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={index}
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {index + 1}
                    </Table.Cell>
                    <Table.Cell>{service.title}</Table.Cell>
                    <Table.Cell>{service.includes}</Table.Cell>
                    <Table.Cell>{service.places}</Table.Cell>
                    <Table.Cell>{service.duration}</Table.Cell>
                    <Table.Cell>{service.price}</Table.Cell>
                    <Table.Cell>{service.created_at}</Table.Cell>
                    <Table.Cell>{service.updated_at}</Table.Cell>
                    <Table.Cell className="flex flex-row gap-6">
                      <Button
                        className="flex flex-row gap-4"
                        size="sm"
                        color="dark"
                        onClick={() =>
                          openEditModal(
                            service.id,
                            service.title,
                            service.includes,
                            service.places,
                            service.duration,
                            service.price
                          )
                        }
                      >
                        <FaEdit />
                        Edit
                      </Button>
                      <Button
                        className="flex flex-row gap-4"
                        size="sm"
                        color="failure"
                        onClick={() => handleDelete(service.id)}
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
            <LottieAnimation />
          )}
        </div>
      </Card>
    </div>
  );
};

export default ServicesData;
