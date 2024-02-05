import React, { useState, useEffect } from "react";
import { Button, Card, FileInput, Label, Modal } from "flowbite-react";
import { Toaster, toast } from "react-hot-toast";
import { BASE_IMAGE_URL, BASE_URL } from "../utils/utils";
import axios from "axios";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { LottieAnimation } from "../components/LottieAnimation";
import { AdminInfo } from "../components/adminInfo";
import { Logout } from "../components/Logout";
const GalleryData = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [photoCount, setPhotoCount] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openMod, setOpenMod] = useState(false);
  const [file, setFile] = useState(null);
  function onCloseMod() {
    setOpenMod(false);
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handlePhotoChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpdatePhoto = async () => {
    const formData = new FormData();
    formData.append("photo", file); // Append the file to the FormData object

    try {
      const response = await axios.patch(
        `${BASE_IMAGE_URL}/photo/update/${photos.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        }
      );
      console.log(response.data); // Log success message or handle it as needed
      // You can perform additional actions after successful update if required
      toast.success("image updated successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error updating photo:", error);
      // Handle error scenarios here
      toast.error("something went wrong");
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append("photo", selectedFile);

    try {
      const response = await axios.post(`${BASE_URL}/photo/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Upload success:", response.data);
      toast.success("photo uploaded successfully");
      window.location.reload();
      setPhotoCount(photoCount + 1);

      if (photoCount >= 5) {
        toast.error("limit excedded, delete some photos and try again");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("something went wrong try again");
    }
  };

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await axios.get(`${BASE_URL}/photo/getall`);
        setPhotos(response.data.photos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    }

    fetchPhotos();
  }, []);
  const handleClearData = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/photo/deleteall`);

      if (response.status === 200) {
        setOpenModal(false);
        toast.success("data cleared successfully");
      }
    } catch (error) {
      console.error("Error clearing data:", error);
    }
  };

  const handleDeletePhoto = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/photo/delete/${id}`);
      toast.success("photo deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting photo:", error);
      toast.error("error  deleting photo, please try again ");
    }
  };
  return (
    <>
      <Toaster />
      <Modal
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
                  handleClearData();
                  setOpenModal(false);
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
      {/* edit modal */}
      <Modal show={openMod} size="md" onClose={onCloseMod} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Edit Photo
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="photo" value="update photo" />
              </div>
              <input type="file" onChange={handleFileChange} />
            </div>
            <div className="w-full flex flex-row gap-3">
              <Button
                size="sm"
                color="blue"
                onClick={() => {
                  handleUpdatePhoto();
                  setOpenMod(false);
                }}
              >
                Save Changes
              </Button>
              <Button
                size="sm"
                color="failure"
                onClick={() => setOpenMod(false)}
              >
                cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="m-7 flex flex-col gap-5">
        <form className="flex flex-col gap-4" onSubmit={handleUpload}>
          <label>New Photo</label>
          <input type="file" onChange={handleFileChange} />
          <div className="flex flex-row gap-3">
            <Button type="submit" color="blue" size="sm">
              Upload
            </Button>
            <Button
              type="button"
              color="failure"
              size="sm"
              onClick={() => setOpenModal(true)}
            >
              Clear Data
            </Button>
          </div>
        </form>
        <div className="flex flex-row  justify-end gap-5">
          <AdminInfo />
          <Logout className="ml-24" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="flex justify-center items-center text-2xl">Gallery</h2>
          <div className="overflow-x-auto">
            <div className="m-5 flex flex-row gap-5">
              {photos.length == 0 ? (
                <div className="flex justify-center items-center ml-72">
                  <LottieAnimation />
                </div>
              ) : (
                photos.map((photo, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <Card className="w-[300px] h-[300px] rounded-xl">
                      {/* {console.log("image url:" + JSON.stringify(photo))} */}
                      <img
                        src={BASE_IMAGE_URL + photo.photo}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full rounded-2xl"
                        onError={(e) => {
                          console.error("Image failed to load:", e);
                        }}
                      />
                    </Card>
                    <div className="flex flex-row gap-5 items-center justify-center">
                      <Button
                        size="sm"
                        color="dark"
                        onClick={() => setOpenMod(true)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        color="failure"
                        onClick={() => handleDeletePhoto(photo.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryData;
