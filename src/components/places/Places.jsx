import Slideshow from "../subcomponents/Slider"

const Places = () => (
  <div className="flex flex-col justify-center text-center h-screen lg:ml-[15%]">
    <h1 className="uppercase font-bold text-5xl font-poppins">Places</h1>
    <h2 className="text-argent font-bold text-lg">Please select a place</h2>
    <div className="w-full">
      <hr className="w-40 my-4 lg:my-12 mx-auto border border-dashed" />
    </div>
    <div>
      <Slideshow />
    </div>
  </div>
)

export default Places
