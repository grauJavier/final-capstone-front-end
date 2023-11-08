import Slideshow from '../subcomponents/Slider';

const Places = () => (
  <section className="max-w-full">
    <div className="flex flex-col justify-center text-center h-screen lg:ml-[15%] max-w-full">
      <h1 className="uppercase font-black text-5xl tracking-wider font-poppins">Places</h1>
      <h2 className="text-argent font-bold text-md tracking-wide">
        Select a place to see more details
      </h2>
      <div className="w-full">
        <hr className="w-40 my-4 lg:my-12 mx-auto border border-dashed" />
      </div>
      <div>
        <Slideshow />
      </div>
    </div>
  </section>
);

export default Places;
