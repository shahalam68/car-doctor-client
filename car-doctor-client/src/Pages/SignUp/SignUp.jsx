import { useContext } from 'react';
import img from '../../assets/images/login/login.svg' 
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-14">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
          <h1 className="text-[40px] font-semibold text-center mt-2  text-[#444]">
            Sign Up
          </h1>
          <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
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
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-[#FF3811] text-white"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center font-normal text-[#737373]">
            {" "}
            Already have an account?
            <Link className="text-[#FF3811] font-semibold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
