import React from 'react';
import { useForm } from "react-hook-form";

function HomeContact() {
    const { register, formState: { errors, isValid, isSubmitted, isSubmitSuccessful }, handleSubmit } = useForm();
    const onSubmit = (data) => {
       
        alert(JSON.stringify(data));
    };

  return (
    <div>
        <section className="page-section" id="contact">
        <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">  Contact Me </h2>

       <div className="divider-custom">
        <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
                <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
        </div>
        {isValid && isSubmitSuccessful && (<div id="submitSuccessMessage">
            <div className="text-center mb-3">
                <div className="fw-bolder"> Form submission successful! </div>
            </div>
        </div>)}

        {!isValid && isSubmitSuccessful && (<div id="submitErrorMessage">
            <div className="text-center text-danger mb-3">
            Error sending message!
            </div>
        </div>)}
        
        
        <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
                <form id="contactForm" autoComplete='Off' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                    <input className="form-control" name="name" type="text" placeholder="Enter your name..." {...register("name", { required: true })} />
                    <label htmlFor="name">Full name</label>
                    { errors?.name && (<div className="invalid-feedback d-block">A name is required.</div>)}
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" name="email" type="email" placeholder="name@example.com" {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  })}/>
                    <label htmlFor="email">Email address</label>
                    {errors?.email?.type === "required" && (<div className="invalid-feedback d-block">Email is required.</div>)}
                    {errors?.email?.type === "pattern" && (<div className="invalid-feedback d-block">Email pattern is wrong.</div>)}
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" name="phone" type="tel" placeholder="(123) 456-7890" {...register("phone", { required: true, pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i})} />
                    <label htmlFor="phone">Phone number</label>
                    {errors?.phone?.type === "required" && (<div className="invalid-feedback d-block">Phone is required.</div>)}
                    {errors?.phone?.type === "pattern" && (<div className="invalid-feedback d-block">Phone pattern is wrong.</div>)}
                </div>
                <div className="form-floating mb-3">
                    { <textarea className="form-control" id="message" type="text" {...register("message", { required: true })}></textarea>}
                    <label htmlFor="message">Message</label>
                    { errors?.message && (<div className="invalid-feedback d-block">Message is required.</div>)}
                </div>
                
                <button className="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
                </form>
            </div>
        </div>
        </div>
        </section>
    </div>
  )
}

export default HomeContact