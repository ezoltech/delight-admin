import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Card,
  Button,
  Label,
  Modal,
  TextInput,
  Textarea,
  FileInput,
  Dropdown,
  Select,
} from "flowbite-react";
import { CiSettings } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";
import { ContentCommands } from "../components/ContentCommands";
import { BASE_URL } from "../utils/utils";
import { BASE_IMAGE_URL } from "../utils/utils";
import { LottieAnimation } from "../components/LottieAnimation";
import CarouselCommands from "../components/CarouselCommands";

const CarouselData = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("top");
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [carousels, setCarousels] = useState([])

  const dummyImage = "/download.png";

  useEffect(() => {
    const fetchCarousels = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/carousel/getall`);
        setCarousels(response.data.carousels);
        toast.success("Carousel fetched successfully");
      } catch (error) {
        console.error("Error fetching carousel:", error);
        toast.error("Couldn't fetch carousel, please try again");
      }
    };

    fetchCarousels();
  }, []);

  useEffect(() => {
    console.log(place);
  }, [place]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("place", place);
      if (selectedImage) {
        formData.append("file", selectedImage);
      }

      const response = await axios.put(
        `${BASE_URL}/carousel/update/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const openEditModal = (
    id,
    initialTitle,
    initialDescription,
    initialPhoto,
    initialPlace
  ) => {
    setSelectedServiceId(id),
      setTitle(initialTitle),
      setDescription(initialDescription),
      setPlace(initialPlace),
      setSelectedImage(initialPhoto),
      setOpenModal(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/carousel/delete/${id}`);

      if (response.status === 200) {
        console.log("Carousel deleted successfully");
        setCarousels((prevContents) =>
          prevContents.filter((content) => content.id !== id)
        );
        toast.success("Carousel deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting carousel:", error);
      toast.error("Failed to delete carousel");
    }
  };

  const onCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
    setTitle("");
    setDescription("");
    setPlace("");
  };

  return (
    <>
      <Toaster />
      <div id="content" className="flex flex-col gap-3">
        <CarouselCommands />
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
                  Edit carousel
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="text" value="Text input" />
                  </div>
                  <TextInput
                    id="text"
                    placeholder="Edit title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="description" value="Edit description" />
                  </div>
                  <Textarea
                    id="description"
                    placeholder="Edit description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-2 block">
                  <Label value="Edit photo" />
                </div>
                <div className="flex items-center justify-center">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      style={{
                        maxWidth: "150px",
                        maxHeight: "150px",
                      }}
                    />
                  ) : (
                    <img
                      src={dummyImage}
                      alt="Default"
                      style={{
                        maxWidth: "150px",
                        maxHeight: "150px",
                      }}
                    />
                  )}
                </div>
                <div className="flex justify-between">
                  <FileInput
                    id="file-upload"
                    onChange={(event) => {
                      handleImageChange(event);
                    }}
                  />
                </div>
                <div className="flex items-center">
                  <div className="flex justify-between">
                    <Label value="Select where it will be" />
                    {/* <Dropdown
                      label="Place"
                      dismissOnClick={false}
                      value={place}
                      onChange={(value) => setPlace(value)}
                    >
                      <Dropdown.Item value="Top">Top</Dropdown.Item>
                      <Dropdown.Item value="Middle">Middle</Dropdown.Item>
                      <Dropdown.Item value="Bottom">Bottom</Dropdown.Item>
                    </Dropdown> */}

                    <Select
                      value={place}
                      onChange={(event) => setPlace(event.target.value)}
                    >
                      <option value="Top">First</option>
                      <option value="Middle">Next</option>
                    </Select>
                  </div>
                </div>
                <div className="w-full flex flex-row gap-5">
                  <Button onClick={() => handleUpdate(selectedServiceId)}>
                    Save Changes
                  </Button>
                  <Button onClick={onCloseModal}>Cancel</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        <Card className="m-8">
          <div className="overflow-hidden" style={{ overflowX: "auto" }}>
            {carousels > 0 ? (
              <Table>
                <Table.Head>
                  <Table.HeadCell className="w-[2px]">ID</Table.HeadCell>
                  <Table.HeadCell className="w-[2px]">Title</Table.HeadCell>
                  <Table.HeadCell>Description</Table.HeadCell>
                  <Table.HeadCell>Photo</Table.HeadCell>
                  <Table.HeadCell>Place</Table.HeadCell>
                  <Table.HeadCell>Created At</Table.HeadCell>
                  <Table.HeadCell>Updated At</Table.HeadCell>
                  <Table.HeadCell className="flex flex-row gap-3">
                    <CiSettings className="w-[25px] h-[25px]" />
                    <span className="">Settings</span>
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {carousels.map((carousel, index) => (
                    <Table.Row
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={index}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {content.id}
                      </Table.Cell>
                      <Table.Cell>{carousel.title}</Table.Cell>
                      <Table.Cell>{carousel.description}</Table.Cell>
                      <Table.Cell>
                        {carousel.photo ? (
                          <img
                            src={BASE_IMAGE_URL + carousel.photo}
                            alt="Content"
                            style={{ maxWidth: "50px", maxHeight: "50px" }}
                          />
                        ) : (
                          "No Photo"
                        )}
                      </Table.Cell>
                      <Table.Cell>{carousel.place}</Table.Cell>
                      <Table.Cell>{carousel.created_at}</Table.Cell>
                      <Table.Cell>{carousel.updated_at}</Table.Cell>
                      <Table.Cell className="flex flex-row gap-6">
                        <Button
                          className="flex flex-row gap-4"
                          size="sm"
                          color="dark"
                          onClick={() =>
                            openEditModal(
                              carousel.id,
                              carousel.title,
                              carousel.description,
                              carousel.photo,
                              carousel.place
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
                          onClick={() => handleDelete(carousel.id)}
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
    </>
  );
};

export default CarouselData;
