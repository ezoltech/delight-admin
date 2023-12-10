import React, { useState } from "react";
import { Card, Button, Label, TextInput } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/utils";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Check if email already exists
      // const response = await axios.get(
      //   `${BASE_URL}/admin/getemail?email=${email}`
      // );
      // if (response.data.email) {
      //   toast.error("Email already exists!");
      // } else {

      const createResponse = await axios.post(BASE_URL + "/admin/create", {
        email,
        password,
      });
      console.log(createResponse);
      if (createResponse.status == 200) {
        toast.success("New admin created successfully!");
        navigate("/main");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Error signing up, please try again");
    }
  };

  return (
    <div className="flex justify-center items-center m-8">
      <Toaster />
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
  );
};

export default Signup;
