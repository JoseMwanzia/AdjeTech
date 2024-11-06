import React, { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone_no, setPhone_no] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    const contactObj = {name, email, phone_no, message}

    event.preventDefault();
    fetch("http://localhost:3000/posts", {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(contactObj)
    })
    .then((res) => !res.ok ? "Failed response from server" : res.json())
    .then((data) => 
      console.log(data)
    )
  }

  return (
    <section className="module" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Get in touch</h2>
                <div className="module-subtitle font-serif"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">

                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input autoComplete='true' className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder="Your Name*" required data-validation-required-message="Please enter your name."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input autoComplete='true' className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Your Email*" required data-validation-required-message="Please enter your email address."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <label className="sr-only" htmlFor="phone">Phone Number</label>
                    <input autoComplete='true' className="form-control" type="integer" value={phone_no} onChange={(e) => setPhone_no(e.target.value)} id="phone" name="phone" placeholder="Your Phone*" required data-validation-required-message="Please enter your Phone number."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="form-group">
                    <textarea autoComplete='true' className="form-control" type='text' value={message} onChange={(e) => setMessage(e.target.value)} required rows="7" id="message" name="message" placeholder="Your Message*" data-validation-required-message="Please enter your message."/>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-block btn-round btn-d" id="cfsubmit" type="submit">Submit</button>
                  </div>
                </form>

                <div className="ajax-response font-alt" id="contactFormResponse"></div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Contact