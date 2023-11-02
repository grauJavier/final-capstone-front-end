import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import sendRegistration from '../../redux/user/actions/sendRegistration';
import UsernameInput from './inputs/UsernameInput';
import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.user.data);

  useEffect(() => {
    if (data){
      navigate("/login");
    }
  }, [data, navigate]);

  const handleClick = () => {
    navigate("/login");
  };

  const onSubmit = (data) => {
    dispatch(sendRegistration(data));
  };

  return (
    <div className='bg-login-img bg-cover min-h-screen'>
      <form className="forms-layout" onSubmit={handleSubmit(onSubmit)}>
        <UsernameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <input type="submit" className='forms-submit' value="Sign up" />
      </form>
      <p className="text-center font-titilium">Already have an account? <a className="underline text-blue-800 cursor-pointer" onClick={handleClick}>Sign in</a></p>
    </div>
  );
};

export default Register;
