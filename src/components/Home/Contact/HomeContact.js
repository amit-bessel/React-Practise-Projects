import React from 'react';
import { useForm } from "react-hook-form";

function HomeContact() {
    const { register, handleSubmit } = useForm();
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

        <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
                <form id="contactForm" autoComplete='Off' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                    <input className="form-control" name="name" type="text" placeholder="Enter your name..." {...register("name")} />
                    <label htmlFor="name">Full name</label>
                    {/* <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div> */}
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" name="email" type="email" placeholder="name@example.com" {...register("email")}/>
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" name="phone" type="tel" placeholder="(123) 456-7890" {...register("phone")} />
                    <label htmlFor="phone">Phone number</label>
                </div>
                <div className="form-floating mb-3">
                    { <textarea className="form-control" id="message" type="text" {...register("message")}></textarea>}
                    <label htmlFor="message">Message</label>
                </div>
                <div className="" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                        <div className="fw-bolder"> Form submission successful! </div>
                    </div>
                </div>
                <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                    Error sending message!
                    </div>
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