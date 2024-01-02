import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="pt-5">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl w-[314px] h-[208.008px]"
        />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title text-[#444] font-bold">{title}</h2>
        <div className="flex ">
          <p className="text-[#FF3811] text-xl font-semibold">${price}</p>
          <Link to={`checkout/${_id}`}>
            <FaArrowRight className="text-[#FF3811] text-xl font-semibold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
