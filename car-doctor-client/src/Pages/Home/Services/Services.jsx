import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#FF3811]">Service</h2>
        <h1 className="text-5xl text-[#151515] font-medium">
          Our Service Area
        </h1>
        <p className="text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-flow-col-2 gap-6">
        {
            services.map(service => <ServiceCard key={service._id}
            service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
