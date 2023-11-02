import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import sendRegistration from '../../redux/actions/sendRegistration';
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
    <div className='bg-login-img bg-cover'>
      <form className="forms-layout" onSubmit={handleSubmit(onSubmit)}>
        <UsernameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <input type="submit" className='forms-submit' />
      </form>
    </div>
  );
};

export default Register;
