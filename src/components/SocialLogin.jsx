import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "@/Hooks/useAuth";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <>
      {/* my custom divider */}
      <div className="flex mx-auto items-center my-4 w-[400px]">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="mx-auto text-center w-[400px]">
        <div className="flex justify-between">
          <Button onClick={handleGoogleSignIn}>
            <FaGoogle /> Continue with Google
          </Button>
          <Button>
            <FaGithub /> Continue with Github
          </Button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
