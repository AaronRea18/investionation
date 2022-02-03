import './SignUp.css';
  import { Link  } from "react-router-dom";
function SignIn() {
  return (
    <div>
      <p>Sign Up</p>
      <div className='username'>
        <p>Are you a company repersentative?</p>
        <input className='buy-button' type="checkbox" />
      </div>
      <div className='username'>
        <p>Email</p>
        <input className='buy-button' type="text" placeholder="User Name" />

      </div>
      <div className='password'>
        <p>Password</p>
        <input className='buy-button' type="text" placeholder="Password" />

      </div>
      <div className='password'>
        <p>Password confirmation </p>
        <input className='buy-button' type="text" placeholder="Password" />

      </div>
      {/* <div className='condtional-info'>
        <p>there will be mutiple other questions for burecratic purposes that will be needed for both that will be condtionaly rendered but IDL now so meh</p>
      </div> */}

      <div className='submit'>
        <button>Clear</button>
        <button> <Link to="/companyHome"> Sign Up</Link></button>
        <button><Link to="/"> Sign In</Link></button>
      </div>

    </div>
  );
}

export default SignIn;
