import PropTypes from 'prop-types';

const PasswordInput = ({ register, errors }) => {
  return (
    <>
      <input
          {...register("user.password", {
            required: { value: true, message: 'Password is required' }
          })}
          placeholder='Password'
          type='password'
          />
          <p>{errors.user?.password?.message}</p>
    </>
  );
};

PasswordInput.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default PasswordInput;
