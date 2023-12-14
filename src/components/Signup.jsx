import React, { useState } from "react";
import { Card, Button, Label, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/utils";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const createResponse = await axios.post(BASE_URL + "/admin/create", {
        email,
        password,
      });
      // console.log(createResponse.status);
      if (createResponse.status == 200) {
        navigate("/main");
        toast.success("New admin created successfully!", { duration: 7000 });
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Error signing up, please try again");
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center m-8">
        <Card className="w-[400px] h-[450px]">
          <form className="flex flex-col gap-4" onSubmit={handleSignup}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                value={email}
                placeholder="name@flowbite.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button type="submit">Register</Button>
            <div className="flex justify-end items-end mt-7">
              <p>
                Already have an account?{" "}
                <a href="/login" className="font-bold">
                  Login
                </a>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Signup;
