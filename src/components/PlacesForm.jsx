import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ImageUploader from './UploadFile';


const PlacesForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='bg-login-img bg-cover min-h-screen flex flex-col items-center'>
      <img src="src/assets/logo.jpg" className="w-[150px] rounded-full border-2 border-white m-auto" />
      <h1 className="font-titilium text-2xl text-zinc-50">REGISTER</h1>
      <form className="forms-layout" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("place.name")} placeholder='Name' />
        <ImageUploader setValue={setValue} />
        <input {...register("place.description")} placeholder='description' />
        <input type="submit" className='forms-submit' value="Sign up" />
      </form>
    </div>
  );
};

export default PlacesForm;
