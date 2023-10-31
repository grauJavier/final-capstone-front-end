import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form className="bg-zinc-700 flex flex-col items-center justify-center gap-5 min-h-screen" onSubmit={handleSubmit(onSubmit)}>
        <input 
          {...register("user.username", {
            required: { value: true, message: 'Username is required' }
          })}
          placeholder='Username'
          />
          <p>{errors.user?.username?.message}</p>
          <input
            {...register("user.email", { 
              required: { value: true, message: 'Email is required'}, 
              pattern: { 
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Introduce a valid Email'
              }
            })}
            placeholder='Email'
            type='email'
          />
          <p>{errors.user?.email?.message}</p>
        <input
          {...register("user.password", {
            required: { value: true, message: 'Password is required' }
          })}
          placeholder='Password'
          type='password'
          />
          <p>{errors.user?.password?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
