import { FaGithub } from 'react-icons/fa';
import CommonBanner from '../CommonBanner/CommonBanner';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../AuthContext/AuthContext';
import { Helmet } from 'react-helmet';
const Signin = () => {
    const pageName = 'Please Sign in';
    const location = useLocation();
    const { user, loading } = useContext(UserContext);
    const navigate = useNavigate();

    const handleGoogleSignin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                if (location.state) { navigate(`${location.state}`) }
            }).catch((error) => console.log(error.message));
    }
    if (loading) return null;

    if (user && !location.state) {
        return <Navigate to='/' />
    }
    return (
        <div>
            <Helmet>
                <title>art & craft | Signin</title>
            </Helmet>
            <CommonBanner pageName={pageName} />

            <div className="flex flex-col items-center justify-center space-y-5 my-20">
                <button onClick={handleGoogleSignin} className="btn rounded-none">
                    <FcGoogle className='text-xl' /> Sign in with google
                </button>
                <button className="btn bg-purple-950 text-white hover:text-black rounded-none">
                    <FaGithub className='text-xl' /> Sign in with github
                </button>
            </div>
        </div>
    );
};

export default Signin;