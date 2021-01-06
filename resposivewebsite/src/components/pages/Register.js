import React from 'react';
import '../../App.css';
import { Button } from '../Button';

function Register() {
  return (
    <div className='register'>
      <div className="container">
        <h1 className="title">OnePage</h1>
        <h3 className="description">Thank you for subscript on One Page. Would you like to tell us a little more about yourself?</h3>
          <form action="result.html" className="survey-form" method="GET" name="form" target="_blank">
              <div className="box">
                <label for="name" className="name-label" >Name</label>
                <input type="text" name="name" className="name" placeholder="enter your name" required />
              </div>
              <div className="box">
                <label for="number" className="number-label">Age</label>
                <input type="number" name="age" className="number" placeholder="age" min="5" max="99" required />
            </div>
            <div className="box">
                <label for="email" className="email-label">Email</label>
                <input type="email" name="email" className="email" placeholder="enter your Email" required />
            </div>
            <div className="box">
                <label for="dropdown" className="dropdown-label">Language level</label>
                <select name="content" className="dropdown">
                    <option value="A1 & A2" selected>A1 & A2</option>
                    <option value="A2 & B1" >A2 & B1</option>
                    <option value="B2 & C1" >B2 & C1</option>
                </select>
            </div>
            {/* <div class="box">
                <label className="checkbox" >How many days you wish to receive an e-mail</label>
                <label for="first-check"><input type="checkbox" name="Two" className="first-check" value="Comedy" />Two</label>
                <label for="second-check"><input type="checkbox" name="Three" className="second-check" value="Action" />Three</label>
                <label for="third-check"><input type="checkbox" name="Four" className="third-check" value="Romance" checked />Four</label>
            </div> */}
            <div className="box">
              <label className="radiobtn">Gender</label>
              <label><input type="radio" name="gender" value="male" className="first-radio" />Male</label>
              <label><input type="radio" name="gender" value="female" className="second-radio" checked />Female</label>
              <label><input type="radio" name="gender" value="other" className="third-radio" />Other</label>
            </div>
            {/* <div className="box box-textarea">
                <label for="feedback" className="feed-label">Feedback</label>
                <textarea name="message" class="text-area" cols="30" rows="10" className="feedback" placeholder="any comment"></textarea>
            </div> */}
          </form>
          <input type="submit" value="Send" className="submit" />
      </div>
    </div>
  )
}

export default Register
