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
        <button className="mt-2" onClick={() => window.open('mailto:hello@calicogoods.com')}>Send Message</button>
      </div>
    </>
  );
}