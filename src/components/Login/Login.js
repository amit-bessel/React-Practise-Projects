import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate,useLocation } from "react-router-dom";

import  AuthContext from "../../store/auth-context";
import styles from "./Login.module.css";


function Login() {

    const { register, formState: { errors, isValid, isSubmitSuccessful},  handleSubmit } = useForm();   

    const [removeMsg, setRemoveMsg] = useState(false);

    const AuthCtx = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = (data) => {
        if(data.email.trim() === "test@gmail.com" && data.password.trim() === "Test@123") {
            setRemoveMsg(false);
            AuthCtx.login('token');
            const redirectUrl = location.state !== null ? location.state.path : "/profile";
            navigate(redirectUrl);
        } else {
            setRemoveMsg(true); 
        }
    };
    
    return ( 
        <div className={styles.login_container}>
            {isValid && removeMsg && isSubmitSuccessful && (<div>
                <div className="text-center mb-3">
                    <div className="fw-bolder"> Email & Password are not correct! </div>
                </div>
            </div>)}
            <form className={styles.loginForm} autoComplete='Off' noValidate onSubmit={handleSubmit(onSubmit)}>
            
            <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" {...register("email", {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                <label className="form-label" htmlFor="form2Example1">Email address</label>
                {errors?.email?.type === "required" && (<div className="invalid-feedback d-block">Email is required.</div>)}
                {errors?.email?.type === "pattern" && (<div className="invalid-feedback d-block">Email pattern is wrong.</div>)}
            </div>
                    
            <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" {...register("password", {required: true})} />
                <label className="form-label" htmlFor="form2Example2">Password</label>
                {errors?.password?.type === "required" && (<div className="invalid-feedback d-block">Password is required.</div>)}
            </div>
        
        
            <div className="row mb-4">
            <div className="col d-flex justify-content-center">
            
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                </div>
            </div>
        
            <div className="col">
                <a href="#!">Forgot password?</a>
            </div>
            </div>          
        
            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>            
            </form>
        </div>
    );
   
}

export default Login;