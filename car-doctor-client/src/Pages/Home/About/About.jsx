import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-[#fff] mb-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className=" h-[473px] rounded-lg shadow-2xl w-[460px]" />
          <img src={parts} className="w-[327px] h-[332px] absolute right-5 top-1/2  border-[6px] rounded-lg shadow-2xl" />
        </div>
        <div className="lg:w-1/2 px-8">
          <h1 className="text-2xl font-bold text-[#FF3811]">About Us</h1>
          <h1 className="text-[45px] font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6 text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className= " mt-4 hover:text-black text-white btn bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
