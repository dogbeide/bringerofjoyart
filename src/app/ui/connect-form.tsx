"use client";

import { FormEvent, useState } from "react"
import { encode } from '../lib/utils'
import { useRef } from "react";
import LoadingSpinner from "./loading-spinner";


export default function ConnectForm() {

  interface ConnectFormData {
    fname: string,
    lname: string,
    _subject: string,
    email: string,
    message: string
  }

  const initialFormData = {
    fname: '',
    lname: '',
    _subject: '',
    email: '',
    message: ''
  }

  

  const ref = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<ConnectFormData>(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);

  const formSubmitUrl = "https://formsubmit.co/a64a9eb18d086f36155be016a17e0bf6";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const flname = `${formData.fname} ${formData.lname}`
    const { _subject, email, message } = formData;

    // console.log('asdf', formData)

    setIsSending(true);

    fetch(formSubmitUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "name": flname, ...formData })
    })
      .then(() => {
        console.log("success");
        setFormData(initialFormData);
        setIsSending(false); // sent
        setIsError(false); // no error
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false); // stopped sending
        setIsError(true); // soemthing's wrong
      })
  }

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleTextInput = (event: FormEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <form
      target="_blank"
      ref={ref}
      id="connect-form"
      action="https://formsubmit.co/a64a9eb18d086f36155be016a17e0bf6"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="first-last-name">
        <input
          id="first-name"
          name="fname"
          className="first form-input"
          type="text"
          placeholder="First Name"
          value={formData.fname}
          onChange={handleInput}
          required
        />
        <input
          id="last-name"
          name="lname"
          className="last form-input"
          type="text"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleInput}
          required
        />
        <input
          type="hidden"
          id="name-to-send"
          className="last form-input"
          name="flname"
          value={`${formData.fname} ${formData.lname}`}
          placeholder="First and Last Name"
          required
        />
      </div>
      <input
        id="form-subject"
        className="form-input"
        type="text"
        name="_subject"
        placeholder="Subject"
        value={formData._subject}
        onChange={handleInput}
        required
      />
      <input
        className="form-input"
        type="email"
        name="email"
        id=""
        placeholder="Email"
        value={formData.email}
        onChange={handleInput}
        required
      />
      <textarea
        name="message"
        id=""
        className="form-input"
        cols={30}
        rows={10}
        placeholder="What's up?"
        required
        value={formData.message}
        defaultValue={""}
        onChange={handleTextInput}
      />
      <input
        type="hidden"
        name="_next"
        defaultValue="https://www.iamboyowa.art/thanks"
      />
      <button className="form-input" type="submit" form="connect-form">
        {isSending ? <LoadingSpinner/> : 'Send'}
      </button>
    </form>
  );
}