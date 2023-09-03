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

function PasswordReset() {
  return (
    <div>Password reset page</div>
  )
}

export default PasswordReset