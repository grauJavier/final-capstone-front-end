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
    <div className='bg-lime-img bg-cover bg-center min-h-screen flex flex-col items-center'>
      <img src="src/assets/logo-full.png" className="logo-image" />
      <h2 className="secondary-font text-3xl font-bold text-zinc-50">LOGIN</h2>
      <form className="forms-layout mt-12" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <input type="submit" className='forms-submit' value="Sign in" />
      </form>
      <p className="text-center text-white primary-font mt-auto mb-4">Don&apos;t have an account? <a className="underline text-white cursor-pointer text-yellow-300" onClick={handleClick}>Sign up</a></p>
    </div>
  );
};

export default Login;
