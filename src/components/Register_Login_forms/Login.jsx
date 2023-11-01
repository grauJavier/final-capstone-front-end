import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sendLogin from '../../redux/actions/sendLogin';
import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(sendLogin(data));
  };

  return (
    <div>
      <form className="bg-zinc-700 flex flex-col items-center justify-center gap-5 min-h-screen" onSubmit={handleSubmit(onSubmit)}>
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
