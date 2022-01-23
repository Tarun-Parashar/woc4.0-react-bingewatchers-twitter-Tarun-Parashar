import React, { useState } from "react";

// import SignIn from './SignIn';
// import SignUp from './SignUp';
import styles from "./Styles.module.css";

function Auth() {
    const [showSignIn, setShowSignIn] = useState(true);

    const SignIn = () => {

        const [User, setUser] = useState({
            Email: "",
            Password: ""
        });
        const handleSubmit = (event) => {
            event.preventDefault();
        }
        const handleChange = (event) => {
            setUser({ ...User, [event.target.name]: event.target.value });
        };

        return (
            <div className={styles.container} >
                <div className={styles.app_wrapper}>
                    <form>
                        <div className={styles.title}>
                            Sign In
                        </div>
                        <div className={styles.email}>
                            <label>Email</label>
                            <input type="text" className={styles.input} value={User.Email} name="Email" onChange={handleChange} />
                        </div>
                        <div className={styles.password}>
                            <label>Password</label>
                            <input type="password" className={styles.input} value={User.Password} name="Password" onChange={handleChange} />
                        </div>
                        <button type="submit" onClick={handleSubmit}>Sign In</button><br/><br/>
                        <button onClick={() => { setShowSignIn(false) }}>Create new account</button>
                    </form>
                </div>
            </div>
        );
    };

    const SignUp = () => {
        const [newUser, setnewUser] = useState({
            Email: "",
            Username: "",
            Password: "",
            confPassword: ""
        });

        const handleSubmit = (event) => {
            event.preventDefault();
        }

        const handleChange = (event) => {
            setnewUser({ ...newUser, [event.target.name]: event.target.value });
        };

        return (
            <div className={styles.container} >
                <div className={styles.app_wrapper}>
                    <form>
                        <div className={styles.title}>
                            Sign Up
                        </div>
                        <div className={styles.email}>
                            <label >Email</label>
                            <input type="text" className={styles.input} value={newUser.Email} name="Email" onChange={handleChange} />
                        </div>
                        <div className={styles.username}>
                            <label>Username</label>
                            <input type="text" className={styles.input} value={newUser.Username} name="Username" onChange={handleChange} />
                        </div>
                        <div className={styles.password}>
                            <label>Password</label>
                            <input type="password" className={styles.input} value={newUser.Password} name="Password" onChange={handleChange} />
                        </div>
                        <div className={styles.password}>
                            <label>Confirm Password</label>
                            <input type="password" className={styles.input} value={newUser.confPassword} name="confPassword" onChange={handleChange} />
                        </div>
                        <button type="button" style={{ justifyContent: "center" }} onClick={handleSubmit}>Sign Up</button><br/><br/>
                        <button onClick={() => { setShowSignIn(true) }}>Login instead</button>
                    </form>
                </div>
            </div >
        );
    };


    return (
        <div>
            {showSignIn ? <SignIn /> : <SignUp />}
        </div>
    );
}
export default Auth;