import React from 'react'
import Forminput from '../../Common/FormInput';
import { useNavigate } from 'react-router-dom';
import { ButtonComp } from '../../Common/Button';
import { useMutation } from '@tanstack/react-query';
import { forgotPassword } from '../../../Api/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordSchema } from '../../../Utils/schemas/forgotpassword';
import Savilogo from "../../../Assests/svg/Savi..svg";
import { useForm } from "react-hook-form";

function ResetPassword() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });
  
  const { mutate, isLoading } = useMutation((data) => forgotPassword(data), {
    onSuccess: (data) => {
      console.log(data);
      reset();
    },
  });

  const formSubmit = (data) => {
    mutate(data);
    // navigate("/password-reset2");
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/login");
  };
  return (
    <div className="container-fluid">
    <div className="">
      <img src={Savilogo} alt="logo" className="logo1 m-3" />
    </div>
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="align-items-center text-center" style={{ maxWidth: '450px' }}>
        <h2 className="display-4">Reset your password</h2>
        <p className="lead">
          Enter your email below and we'll send you instructions on how to reset your password.
        </p>
 
        <form className="d-flex flex-column align-items-center">
          <Forminput
            placeholder="Enter your email"
            inputtype="text"
            title="Email"
            register={{ ...register('email') }}
            error={errors.email?.message}
            IsDisabled={isLoading}
            className="form-control email-input border"
          />
        <ButtonComp
          label="Send request instructions"
          width="320px" 
          onClick={handleSubmit(formSubmit)}
          isLoading={isLoading}
          className="btn btn-primary mt-2 mb-2"
        />
          <p className="mt-3">
            Go Back to{' '}
            <span className="text-primary" onClick={handleGoBack}>
              Sign In here
            </span>
          </p>
        </form>
      </div>    
    </div>
    <div className="resetfooter d-flex justify-content-between">
        <p>Privacy Policy</p>
        <p>&copy; 2022</p>
      </div>
  </div>
  )
}

export default ResetPassword