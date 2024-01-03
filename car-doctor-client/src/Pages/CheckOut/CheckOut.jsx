import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id,price,img } = service;
  const {user} = useContext(AuthContext);

  const handleCheckOut = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const date = form.date.value;
      const email = user?.email || form.email.value;
      const order = {
        customerName: name,
        email,
        date,
        service_id:_id,
        service: title,
        _img:img,
        price:price
      }
      console.log(order);
      fetch('http://localhost:5000/checkout',{
        method: 'POST',
        headers: {
          'content-type': 'application/json' 
        },
        body: JSON.stringify(order)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }


  return (
    <div>
      <h2>Book service:{title} </h2>
      <form onSubmit={handleCheckOut} className="card-body">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={'$' +  price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Check Out" />
      </form>
    </div>
  );
};

export default CheckOut;
