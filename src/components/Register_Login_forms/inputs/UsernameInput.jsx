import PropTypes from 'prop-types';

const UsernameInput = ({ register, errors }) => {
  return (
    <>
      <input 
          {...register("user.username", {
            required: { value: true, message: 'Username is required' }
          })}
          placeholder='Username'
          />
          <p>{errors.user?.username?.message}</p>
    </>
  );
};

UsernameInput.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default UsernameInput;
