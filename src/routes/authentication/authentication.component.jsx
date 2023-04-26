import SignUpForm from '../../components/sign-up-form/sign-up-form.components';
import SignInForm from '../../components/sign-in-form/sign-in-form.components';
import './authentication.styles.scss'

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm className='sign-in-box'/>
      <SignUpForm className='sign-up-box'/>
    </div>
  );
};

export default Authentication;

