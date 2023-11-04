import PropTypes from 'prop-types';

const UsernameInput = ({ register, errors }) => {
  return (
    <>
      <input 
          {...register("user.username", {
            required: { value: true, message: 'Username is required' }
          })}
          placeholder='Username'
          className='forms-inputs'
          />
          {errors.user?.username?.message && <p className='text-white italic'>*{errors.user.username.message}</p>}
    </>
  );
};

UsernameInput.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default UsernameInput;
