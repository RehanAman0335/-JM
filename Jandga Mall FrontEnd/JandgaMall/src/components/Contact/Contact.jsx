import React, { useState } from "react";
import "./Contact.css";
import "../Navbar/Navbar";
import "../Navbar/Navbar.css";
import "../Footer/Footer";
import "../Footer/Footer.css";

export function Contact() {
  let [form, setform] = useState({
    name: "",
    fathername: "",
    email: "",
    mobilenumber: "",
    address: "",
  });
  function handlesubmit(e) {
    e.preventdefault();
    console.log(form);

    setform({
      name: "",
      fathername: "",
      email: "",
      mobilenumber: "",
      address: "",
    });
  }
  function handlechange(e) {
    let { name, value } = e.target;
    setform((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  }

  return (
    <div className="d">
      <h1 className="h">Form</h1>
      <br />
      <form action="">
        <label htmlFor="">Name:</label>
        <input
          name="name"
          value={form.name}
          onChange={handlechange}
          className="in"
          id="n"
          type="text"
        />
        <br />
        <label htmlFor="">Father Name:</label>
        <input
          name="fathername"
          value={form.fathername}
          onChange={handlechange}
          className="in"
          id="fn"
          type="text"
        />
        <br />
        <label htmlFor="">Email:</label>
        <input
          name="email"
          value={form.email}
          onChange={handlechange}
          className="in"
          id="em"
          type="text"
        />
        <br />
        <label htmlFor="">Mobile Number:</label>
        <input
          name="mobilenumber"
          value={form.mobilenumber}
          onChange={handlechange}
          className="in"
          id="mn"
          type="text"
        />
        <br />
        <label htmlFor="">Address:</label>
        <input
          name="address"
          value={form.address}
          onChange={handlechange}
          className="in"
          id="add"
          type="text"
        />
        <br />
        <button className="b" type="submit">
          Submit
        </button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
