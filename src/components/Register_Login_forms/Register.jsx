import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sendRegistration from '../../redux/user/actions/sendRegistration';
import UsernameInput from './inputs/UsernameInput';
import EmailInput from './inputs/EmailInput';
import PasswordInput from './inputs/PasswordInput';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(sendRegistration(data));
  };

  return (
    <div>
      <form className="bg-zinc-700 flex flex-col items-center justify-center gap-5 min-h-screen" onSubmit={handleSubmit(onSubmit)}>
        <UsernameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
