import React, { useState } from "react";
import { Card, Button, Label, TextInput } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/utils";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const createResponse = await axios.post(BASE_URL + "/admin/login", {
        email,
        password,
      });

      console.log(createResponse);
      if (createResponse.status == 200) {
       
        navigate("/main");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("invalid email or password please try again");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Toaster />
      <Card className="w-[400px] h-[450px]">
        <form className="flex  flex-col gap-4" onSubmit={handleLogin}>
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

          <Button type="submit">Login</Button>
          <div className="flex justify-end items-end mt-7">
            <p>
              don't you have an account?,{" "}
              <a href="/" className="font-bold">
                signup
              </a>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
