import './SignIn.css';
import { Link } from "react-router-dom";
function SignIn({strings}) {
  return (
    <div>
      <p>{strings.signIn}</p>
      <div className='username'>
        <p>{strings.email}</p>
        <input className='buy-button' type="text" placeholder={strings.email} />

      </div>
      <div className='password'>
        <p>{strings.password}</p>
        <input className='buy-button' type="text" placeholder={strings.password} />

      </div>

      <div className='submit'>
        <button>{strings.clear}</button>
        <button><Link to="/userHome"> {strings.signIn}</Link></button>
        <button > <Link to="/signUp"> {strings.signUp}</Link></button>
      </div>

    </div>
  );
}

export default SignIn;
