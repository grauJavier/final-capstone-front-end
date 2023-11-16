import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import sendRegistration from '../../redux/user/actions/sendRegistration';
import UsernameInput from './inputs/UsernameInput';
import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';
import logoFull from '../../assets/logo-full.png';

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
    <div className='bg-lime-img bg-cover min-h-screen flex flex-col items-center'>
      <img src={logoFull} className="logo-image" />
      <h2 className="secondary-font text-3xl font-bold text-zinc-50">REGISTER</h2>
      <form className="forms-layout" onSubmit={handleSubmit(onSubmit)}>
        <UsernameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <input type="submit" className='forms-submit' value="Sign up" />
      </form>
      <p className="text-center text-white primary-font mt-auto mb-4">Already have an account? <a className="underline cursor-pointer text-yellow-300" onClick={handleClick}>Sign in</a></p>
    </div>
  );
};

export default Register;
