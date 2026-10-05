import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   age: "",
  //   gender: "",
  //   course: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(formData);
  //   alert("Form submitted successfully!");
  // };

  return (
    <>
      <h1>Welcome to React</h1>
      <p>This is my first React Application</p>
      <ul>
        <li>ggggggggggggg</li>
      </ul>
      <h1>Student Details</h1>
      <p>name: shristi duhoon</p>
      <p></p>

    {/* <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <br />

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        <br />

        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>

        <br />

        <div>
          <label>Gender: </label>

          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </div>

        <br />

        <div>
          <label>Course: </label>

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="CSE">CSE</option>
            <option value="CSE-AIML">CSE-AIML</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
          </select>
        </div>

        <br />

        <div>
          <label>Message:</label>
          <br />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows="5"
            cols="30"
          />
        </div>

        <br />

        <button type="submit">Submit</button>

      </form>
    </div> */}

    </>
  )
}

export default App
