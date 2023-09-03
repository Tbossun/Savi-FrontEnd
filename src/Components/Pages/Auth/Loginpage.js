import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonComp } from '../../Common/Button';
import { useMutation } from '@tanstack/react-query';
import Savilogo from "../../../Assests/svg/Savi..svg";
import CloseEye from "../../../Assests/svg/eye-close.svg";
import WhiteSaviLogo from "../../../Assests/svg/White_Logo.svg"; 
import Forminput from '../../Common/FormInput';
import { useToast } from "@chakra-ui/react";
import { loginSchema } from '../../../Utils/Auth';
import { login } from '../../../Api/auth';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { togglePasswordType } from '../../../Utils/common';
import EyeIcon from "../../../Assests/svg/eye.svg";
import backgroundImage from '../../../Assests/images/EasyGroupImg.webp';

export const LoginPage = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [passwordType, setPasswordType] = useState("password");
  const handlePasswordType = () => {
    togglePasswordType(passwordType, setPasswordType);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { mutate, isLoading } = useMutation((data) => login(data), {
    onSuccess: (data) => {
      toast({
        title: "Success",
        description: "Login Successful",
        position: "top-right",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
      reset();
      navigate("/dashboard");
    },
    onError: (error) => {
      toast({
        title: "Login Failed.",
        description: error?.response?.data?.message,
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });

  const formSubmit = (data) => {
    mutate(data);
    reset();
    navigate("/dashboard");
  };
  
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-6 left-section" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundRepeat: 'no-repeat',     backgroundSize: 'cover', position: 'relative' }}>
      <div className="overlay">
        <img src={WhiteSaviLogo} alt="Whitelogo" className="img-fluid p-4" />
        <div className="text-wrapper" style={{ color: 'white', position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', maxWidth: '80%', width: '80%' }}>
          <h2 className="display-4 heading">Easy Group Savings</h2>
          <h5 className="lead subheading font-weight-bold">
            Save collectively with rotating lump sum payouts, eliminating risks of the traditional method.
          </h5>
        </div>
      </div>
    </div>
    <div className="col-md-6 d-flex justify-content-center mt-4 align-items-center">
      <form className="loginform">
        <div className="text-2 text-center mb-3">
          <div className="d-flex flex-column align-items-center">
            <img src={Savilogo} alt="logo" className="img-fluid mb-3" />
            <p className="welcome text-center">Welcome back to Savi.</p>
          </div>
        </div>
        <div id="spacetag" className="text-center mb-3">
          <div className="d-flex flex-column align-items-center">
            <img src="/Divider.png" alt="Divider" className="img-fluid" />
            <p>Sign In</p>
            <img src="/Divider.png" alt="Divider" className="img-fluid" />
          </div>
        </div>
        <div onSubmit={handleSubmit(formSubmit)}>
          <Forminput
            title="Email Address"
            placeholder="Enter your email"
            inputtype="text"
            register={register("userName")} 
            error={errors?.userName?.message}
            isDisabled={isLoading}
            className="form-control email-input border"
          />
          <Forminput
            title="Password"
            placeholder="Enter Password"
            inputtype={passwordType}
            //rightIcon={passwordType === "password" ? EyeIcon : CloseEye}
            register={register("password")} 
            error={errors?.password?.message}
            onClick={handlePasswordType}
            isDisabled={isLoading}
            className="form-control password-input border" 
          />              
          <div className="forgot mt-2 mb-2">
            <a className="text-primary" href="/passwordreset">Forgot Password?</a>
          </div>
          <ButtonComp
            label="Sign in"
            width="100%"
            onClick={handleSubmit(formSubmit)}
            isLoading={isLoading}
            className="btn btn-primary mt-2 mb-2"
          />
          <p className="account">
            Don't have an account?{" "}
            <a className="text-primary link" href="/signup">
              Sign Up here
            </a>
          </p>
        </div>
      </form>
    </div>
    <div className="resetfooter d-flex justify-content-between">
        <p>Privacy Policy</p>
        <p>&copy; 2022</p>
      </div>
  </div>     
</div>


  );
};

export default LoginPage;
