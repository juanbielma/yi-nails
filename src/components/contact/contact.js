import React from "react";

import { Input } from "../styled/";
import comntactNails from "../../assets/img/contact-nails.png";

import commentApi from "../../services/fb.comments";

import "./contact.css";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  comment: ""
};

const Contact = props => {
  const [contactInfo, setContactInfo] = React.useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();

    commentApi.add(contactInfo).then(response => console.log(response));

    setContactInfo(initialState);
  };

  const handleReset = e => {
    e.preventDefault();
    setContactInfo(initialState);
  };

  return (
    <section id="contact" className="contact">
      <h1 className="title">Contact</h1>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <Input
          type="text"
          name="name"
          id="txName"
          value={contactInfo.name}
          onChange={e =>
            setContactInfo({ ...contactInfo, name: e.target.value })
          }
          label="Name"
        ></Input>

        <Input
          type="email"
          name="email"
          id="txEmail"
          value={contactInfo.email}
          onChange={e =>
            setContactInfo({ ...contactInfo, email: e.target.value })
          }
          label="Email"
        ></Input>

        <Input
          type="text"
          name="phone"
          id="txtPhone"
          value={contactInfo.phoneNumber}
          onChange={e =>
            setContactInfo({ ...contactInfo, phoneNumber: e.target.value })
          }
          label="Phone (optional)"
        ></Input>

        <div
          className={
            "form__text-area" +
            (contactInfo.comment === "" ? "" : " form__text-area--active")
          }
        >
          <textarea
            name="comment"
            id="txtComment"
            cols="30"
            rows="10"
            className="text-area"
            value={contactInfo.comment}
            onChange={e =>
              setContactInfo({ ...contactInfo, comment: e.target.value })
            }
          ></textarea>
          <label htmlFor="comment" className="form__label">
            <span className="label__content">Comments</span>{" "}
          </label>
        </div>

        <div className="form__actions">
          <button className="button contact__button" type="reset">
            Cancel
          </button>
          <button
            className="button contact__button button--primary"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      <img className="contact__img" src={comntactNails} alt="contactImg" />
    </section>
  );
};

export default Contact;
