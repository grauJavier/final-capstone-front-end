import PropTypes from 'prop-types';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const PasswordInput = ({ register, errors }) => {
  const [visibleEye, setVisibleEye] = useState(false);
  const [NotVisibleEye, setNotVisibleEye] = useState(true);

  const showPasword = () => {
    const passwordInput = document.getElementById('password-input');
    passwordInput.type = "text";
    setVisibleEye(true);
    setNotVisibleEye(false);
  };

  const hidePassword = () => {
    const passwordInput = document.getElementById('password-input');
    passwordInput.type = "password";
    setVisibleEye(false);
    setNotVisibleEye(true);
  };

  return (
    <>
      <div className="forms-inputs flex justify-between items-center">
        <input
            {...register("user.password", {
              required: { value: true, message: 'Password is required' }
            })}
            placeholder='Password'
            type='password'
            className="placeholder-form-border-white outline-0 bg-transparent w-4/5"
            id="password-input"
            />
            {NotVisibleEye && <AiFillEyeInvisible className="text-2xl" onClick={showPasword} />}
            {visibleEye && <AiFillEye className="text-2xl" onClick={hidePassword} />}
      </div>
          {errors.user?.password?.message && <p className='text-red-600 font-bold'>*{errors.user.password.message}</p>}
    </>
  );
};

PasswordInput.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default PasswordInput;
