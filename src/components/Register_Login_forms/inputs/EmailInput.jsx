import PropTypes from 'prop-types';

const EmailInput = ({ register, errors }) => {
  return (
    <>
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
          className="forms-inputs"
      />
      {errors.user?.email?.message && <p className=' text-white italic'>*{errors.user.email.message}</p>}
    </>
  );
};

EmailInput.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default EmailInput;
