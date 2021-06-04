import * as SC from './Login.styles';
import { auth, googleProvider, facebookProvider } from 'src/firebase';
import { useStateValue } from 'src/StateProvider';
import GoogleIcon from 'src/assets/images/google.svg';
import FacebookIcon from 'src/assets/images/facebook.svg';
import Logo from 'src/logo.png';
import { siteTitle } from 'src/constants/siteInfo';

const Login = () => {
    const [{ user }, dispatch] = useStateValue();

    const signIn = (option = 'google') => {
        const provider = option === 'fb' ? facebookProvider : googleProvider;
        auth.signInWithPopup(provider)
            .then((result) => {
                const id = result.user.uid;
                const profile = result.additionalUserInfo.profile;
                const avt = profile.picture?.data?.url || profile.picture;
                const name = profile.name;

                dispatch({
                    type: 'SET_USER',
                    user: { id: id, name: name, avt: avt },
                });
            })
            .catch((error) => alert(error));
    };
    return (
        <SC.Warper>
            <SC.Inner>
                <img src={Logo}></img>
                <h1>Sign in to {siteTitle}</h1>

                <div>
                    <button onClick={signIn}>
                        <img src={GoogleIcon} alt="google" />
                        Google
                    </button>
                    <button onClick={() => signIn('fb')}>
                        <img src={FacebookIcon} alt="Facebook" />
                        Facebook
                    </button>
                </div>
            </SC.Inner>
        </SC.Warper>
    );
};

export default Login;
