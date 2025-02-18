import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SocialLogin from "@/components/SocialLogin";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Authentication = () => {
  return (
    <div className="min-h-screen content-center">
      <Tabs defaultValue="account" className="mx-auto w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Login />
        </TabsContent>
        <TabsContent value="signup">
          <Signup />
        </TabsContent>
      </Tabs>
      <SocialLogin />
    </div>
  );
};

export default Authentication;
