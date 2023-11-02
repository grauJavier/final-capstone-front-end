import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sendLogin from '../../redux/user/actions/sendLogin';
import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };

  const onSubmit = (data) => {
    dispatch(sendLogin(data));
  };

  return (
    <div className='bg-login-img bg-cover min-h-screen'>
      <form className="forms-layout" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <input type="submit" className='forms-submit' value="Sign in" />
      </form>
      <p className="text-center font-titilium">Don&apos;t have an account? <a className="underline text-blue-800 cursor-pointer" onClick={handleClick}>Sign up</a></p>
    </div>
  );
};

export default Login;
