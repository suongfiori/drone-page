import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <section className="contact">
        <h3>Register for the Event!</h3>
        <div className="cols-2">
            <div className="form-container">
                <div className="form-el">
                    <label for="name">Name</label>
                    <input type="text" id="name"/>
                </div>
                <div className="form-el">
                    <label for="email">Email</label>
                    <input type="email" id="email"/>
                </div>
                <button>Register Now!</button>
            </div>
            <div className="other-info">
                <ul>
                    <li>1-555-555-3298</li>
                    <li><a href="#">some@email.com</a></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Contact