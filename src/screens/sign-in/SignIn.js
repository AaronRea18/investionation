import './SignIn.css';
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div>
      <p>Sign In</p>
      <div className='username'>
        <p>Email</p>
        <input className='buy-button' type="text" placeholder="User Name" />

      </div>
      <div className='password'>
        <p>Password</p>
        <input className='buy-button' type="text" placeholder="Password" />

      </div>

      <div className='submit'>
        <button>Clear</button>
        <button><Link to="/userHome"> Sign In</Link></button>
        <button > <Link to="/signUp"> Sign Up</Link></button>
      </div>

    </div>
  );
}

export default SignIn;
