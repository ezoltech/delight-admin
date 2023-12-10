import React, { useState } from "react";
import { Card, Button, Label, TextInput } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async () => {
    try {
      const response = await axios.post("https://localhost:3000/admin/create", {
        email,
        password,
      });
      toast.success("error signing up!, please try again", {
        duration: 7000,
      });
    } catch (error) {
      toast.error("error signing up!, please try again", {
        duration: 7000,
      });
      console.error(error.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center m-8">
      <Toaster />
      <Card className="w-[400px] h-[450px]">
        <form className="flex  flex-col gap-4">
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

          <Button type="submit" onClick={handleSignup}>
            Register
          </Button>
          <div className="flex justify-end items-end mt-7">
            <p>
              already have an account?,{" "}
              {/* <p href="/login" className="font-bold">
                login
              </p> */}
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default Signup;
