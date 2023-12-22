import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
        

    }

    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-14">
        <img src={img} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
        
      <h1 className="text-[40px] font-semibold text-center mt-2  text-[#444]">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-[#FF3811] text-white" type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center font-normal text-[#737373]'> Have an account?<Link className='text-[#FF3811] font-semibold' to='/signup'>Sign Up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;