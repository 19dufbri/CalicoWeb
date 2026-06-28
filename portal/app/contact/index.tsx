import { useState } from "react";
import './index.css'

export function ContactPage() {
  const [errors, setErrors] = useState<string[]>([]);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <>
      <span className="eyebrow">Get in Touch</span>
      <h2 className="subhero-text">Contact Us</h2>

      <div className="mw-500">
        <span>Questions about a listing, a repair you need done, or anything else — we read every message.</span>

        {!!errors.length && (
          <div className="errors">
            {errors.map(err => (
              <div className="error">{err}</div>
            ))}
          </div>
        )}

        <label htmlFor='name-input'>Name</label>
        <input
          id='name-input'
          type='text'
          placeholder="Your name"
          value={formState.name}
          onChange={x => setFormState({ ...formState, name: x.target.value })}
        />

        <label htmlFor='email-input'>Email</label>
        <input
          id='email-input'
          type='email'
          placeholder="you@example.com"
          value={formState.email}
          onChange={x => setFormState({ ...formState, email: x.target.value })}
        />

        <label htmlFor='message-input'>Message</label>
        <textarea
          id='message-input'
          placeholder="What can we help with?"
          rows={5}
          value={formState.message}
          onChange={x => setFormState({ ...formState, message: x.target.value })}
        />

        <button className="mt-2" onClick={onClick}>Send Message</button>
      </div>
    </>
  );

  function onClick() {
    let validation_errors = [];
    if (formState.name == '')
      validation_errors.push("Name is Required!");
    if (formState.email == '')
      validation_errors.push("Email is Required!");
    if (formState.message == '')
      validation_errors.push("Message is Required!");

    setErrors(validation_errors);

    if (validation_errors.length > 0) {
      return;
    }

    alert("Submitted Comment!")
    setFormState({
      name: '',
      email: '',
      message: '',
    })
  }
}