import React from 'react';
import './Login.css';

const Signup = () => {
    return (
        <div className="bg-img">
        <div className="content">
            <header>Sign up Form</header>
            <form action="#">
                <div className="field">
                    <span className="fa fa-user"></span>
                    <input type="text" required placeholder="Email or Phone" />
                </div>
                <div className="field space">
                    <span className="fa fa-lock"></span>
                    <input type="password" className="pass-key" required placeholder="Password" />
                    <span className="show">SHOW</span>
                </div>

                <div className="field space">
                    <span className="fa fa-lock"></span>
                    <input type="password" className="pass-key" required placeholder="Password" />
                    <span className="show">SHOW</span>
                </div>

                <div className="field">
                    <input type="submit" value="SIGN UP" />
                </div>
            </form>
            <div className="login">
                Or sign up with
            </div>
            <div className="links">
                <div className="facebook">
                    <i className="fab fa-facebook-f"><span>Facebook</span></i>
                </div>
                <div className="instagram">
                    <i className="fab fa-instagram"><span>Instagram</span></i>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;