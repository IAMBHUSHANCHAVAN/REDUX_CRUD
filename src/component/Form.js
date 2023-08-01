import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createuser } from "../feature/UserSlice";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [users, setUsers] = useState({});
  const navigate = useNavigate()
  const dispatched = useDispatch();
  const getdata = (e) => {
    //watch from 22:00
    setUsers({ ...users, 
      [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatched(createuser(users));
    // console.log("users", users);
    navigate("/read")
  };
  return (
    <div className="container">
      <h2>fill data here</h2>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label for="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getdata}
            id="inputName"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={getdata}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="inputAge" className="form-label">
            Age
          </label>
          <input
            type="text"
            name="age"
            className="form-control"
            id="inputAge"
            onChange={getdata}
          />
        </div>
        <div className="mb-3 form-check">
          <label htmlFor="data">Gender</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              onClick={getdata}
              value="FEMALE"
              id="flexRadioDefault2"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              FEMALE
            </label>
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              onClick={getdata}
              value="MALE"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              MALE
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <button className="btn btn-primary" onClick={()=>console.log(users)}>data</button>
          </div>
  );
};

export default Form;
