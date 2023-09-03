import { useState } from "react";
import Forminput from "../../Common/FormInput";
import { Image } from "react-bootstrap";
import SaviWhiteLogo from "../../../Assests/svg/White_Logo.svg";
import Logo from "../../../Assests/svg/Savi..svg";
import { togglePasswordType } from "../../../Utils/common";
import { ButtonComp } from "../../Common/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../../Utils/Auth";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../../../Api/auth";
import { useToast } from "@chakra-ui/react";
import backgroundImage from '../../../Assests/svg/SaviImage.png';


export const Signup = () => {
  //const navigate = useNavigate();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const { mutate, isLoading } = useMutation((data) => signup(data), {
    onSuccess: (data) => {
      toast({
        title: "Account created.",
        description: data?.displayMessage,
        position: "top-right",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log(data);
      reset();
    },
    onError: (error) => {},
  });

  const formSubmit = (data) => {
    mutate(data);
  };

  const [passwordType, setPasswordType] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");
  const handlePasswordType = () => {
    togglePasswordType(passwordType, setPasswordType);
  };

  const handleConfirmPasswordType = () => {
    togglePasswordType(confirmPassword, setConfirmPassword);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
        <div className="col-md-6 firstSection" style={{ backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', position: 'relative', height: '100vh' }}>
          <Image
            src={SaviWhiteLogo}
            alt="logo"
            style={{ width: "71px", height: "45px", marginBottom: "40px", marginTop: "40px" }}
          />
          <div className="innerFirstSection mb-4" style={{ color: 'white', position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', maxWidth: '80%', width: '80%' }}>
            <h2 className="font-weight-bold mt-3">Welcome to Savi</h2>
            <p>
              Start saving securely and hassle-free with Savi, the smart savings
              platform.
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center mt-4 align-items-center">
          <div className="d-flex flex-column align-items-center">
            <img src={Logo} alt="Savi Logo" className="mb-3" />
            <p className="text-savi mb-4">Welcome to Savi.</p>
            {/* <GoogleServices /> */}
            <div id="spacetag">
              <img src="/Divider.png" alt="Divider" />
              <p className="d-flex flex-column align-items-center mt-2">SignUp</p>
              <img src="/Divider.png" alt="Divider" />
            </div>
            <form className="d-flex flex-column align-items-center">
              <Forminput
                title="First Name"
                placeholder="Enter your first name"
                inputtype="text"
                register={{ ...register("firstName") }}
                error={errors?.firstName?.message}
                isDisabled={isLoading}
              />
              <Forminput
                title="Last Name"
                placeholder="Enter your last name"
                inputtype="text"
                register={{ ...register("lastName") }}
                error={errors?.lastName?.message}
                isDisabled={isLoading}
              />
              <Forminput
                title="Email Address"
                placeholder="Enter your email"
                inputtype="text"
                register={{ ...register("email") }}
                error={errors?.email?.message}
                isDisabled={isLoading}
              />
              <Forminput
                title="Phone Number"
                placeholder="Enter your phone number"
                inputtype="text"
                register={{ ...register("phoneNumber") }}
                error={errors?.phoneNumber?.message}
                isDisabled={isLoading}
              />
              <Forminput
                title="Password"
                placeholder="Password"
                inputtype={passwordType}
                // rightIcon={passwordType === "password" ? EyeIcon : CloseEye}
                register={{ ...register("password") }}
                error={errors?.password?.message}
                onClick={handlePasswordType}
                isDisabled={isLoading}
              />
              <Forminput
                title="Confirm Password"
                placeholder="password"
                inputtype={confirmPassword}
                // rightIcon={confirmPassword === "password" ? EyeIcon : CloseEye}
                register={{ ...register("confirmpassword") }}
                error={errors?.confirmpassword?.message}
                onClick={handleConfirmPasswordType}
                isDisabled={isLoading}
              />
              <ButtonComp
                label="Sign up"
                width="100%"
                onClick={handleSubmit(formSubmit)}
                isLoading={isLoading}
                className="btn btn-primary mt-3 "
              />
              <p className="mt-2">
                Already have an account ?{" "}
                <a href="/login" className="text-primary">
                  Sign in here
                </a>
              </p>
            </form>
          </div>
        </div>
        </div>       
      </div>
    </>
  )
}

export default Signup