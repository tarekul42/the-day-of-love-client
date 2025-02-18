import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import React, { useContext } from "react";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import { AuthContext } from "@/Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const signup = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    event.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.confirmedPassword.value;
    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(name)
        .then(() => {
          // create user entry in the database
          const userInfo = {
            name: name,
            email: email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              form.reset();
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <form onSubmit={handleSignUp}>
      <Card>
        <CardHeader>
          <CardDescription>Create your account to get started.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name here"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email here"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="current">Password</Label>
            <Input
              id="current"
              type="password"
              name="password"
              placeholder="Give a unique password"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirm">Confirm password</Label>
            <Input
              id="confirm"
              type="password"
              name="confirmedPassword"
              placeholder="Re-type your given password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Sign Up</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default signup;
