import './SignUp.css';
  import { Link  } from "react-router-dom";
function SignIn({strings}) {
  return (
    <div>
      <p>{strings.signUp}</p>
      <div className='username'>
        <p>Are you a company repersentative?</p>
        <input className='buy-button' type="checkbox" />
      </div>
      <div className='username'>
        <p>{strings.email}</p>
        <input className='buy-button' type="text" placeholder={strings.email} />

      </div>
      <div className='password'>
        <p>{strings.password}</p>
        <input className='buy-button' type="text" placeholder={strings.password} />

      </div>
      <div className='password'>
        <p>{strings.passwordConfirmation} </p>
        <input className='buy-button' type="text" placeholder={strings.password} />

      </div>
      {/* <div className='condtional-info'>
        <p>there will be mutiple other questions for burecratic purposes that will be needed for both that will be condtionaly rendered but IDL now so meh</p>
      </div> */}

      <div className='submit'>
        <button>{strings.clear}</button>
        <button> <Link to="/companyHome"> {strings.signUp}</Link></button>
        <button><Link to="/"> {strings.signIn}</Link></button>
      </div>

    </div>
  );
}

export default SignIn;
