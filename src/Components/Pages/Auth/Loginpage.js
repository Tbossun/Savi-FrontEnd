import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonComp } from '../../Common/Button';
import { useMutation } from '@tanstack/react-query';
import Savilogo from "../../../Assests/svg/Savi..svg";
import CloseEye from "../../../Assests/svg/eye-close.svg";
import WhiteSaviLogo from "../../../Assests/svg/SaviImage.png";
import Forminput from '../../Common/FormInput';
import { useToast } from "@chakra-ui/react";
import { loginSchema } from '../../../Utils/Auth';
import { login } from '../../../Api/auth';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { togglePasswordType } from '../../../Utils/common';
import EyeIcon from "../../../Assests/svg/eye.svg";

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
    // //route to dashboard
    navigate("/dashboard");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 left-section">
          <div className="overlay">
            <img src={WhiteSaviLogo} alt="Whitelogo" />
            <div className="text">
              <h2 className="display-4 heading">Easy Group Savings</h2>
              <p className="lead subheading">
                Save collectively with rotating lump sum payouts, eliminating
                risks of the traditional method.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 right-section">
          <form className="loginform">
            <div className="text-2">
              <img src={Savilogo} alt="logo" />
              <p className="welcome">Welcome back to Savi.</p>
            </div>
            <div id="spacetag">
              <img src="/Divider.png" alt="Divider" />
              <p>OR</p>
              <img src="/Divider.png" alt="Divider" />
            </div>
            <div onSubmit={handleSubmit(formSubmit)}>
              <Forminput
                title="Email Address"
                placeholder="Enter your email"
                inputtype="text"
                register={{ ...register("userName") }}
                error={errors?.userName?.message}
                isDisabled={isLoading}
                className="form-control email-input"
              />
              <Forminput
                title="Password"
                placeholder="****************"
                inputtype={passwordType}
                rightIcon={passwordType === "password" ? EyeIcon : CloseEye}
                register={{ ...register("password") }}
                error={errors?.password?.message}
                onClick={handlePasswordType}
                isDisabled={isLoading}
                className="form-control password-input"
              />

              <div className="forgot">
                {" "}
                <a href="/password-reset1">Forgot Password</a>
              </div>

              <ButtonComp
                label="Sign in"
                width="100%"
                onClick={handleSubmit(formSubmit)}
                isLoading={isLoading}
                className="btn btn-primary"
              />
              <p className="account">
                Don't have an account?{" "}
                <a className="link" href="/sign-up">
                  Sign Up here
                </a>
              </p>
            </div>
          </form>
          <div className="privacy">
            <p>Privacy Policy</p>
            <p>Copyright 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
