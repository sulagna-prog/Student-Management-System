import React from 'react';
import { useState } from "react";
import Select from 'react-select';
import "./App.css";
import FormInput from "./components/FormInput";


const App = () => 
{
  const [gender, setGender] = useState('Male');
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
  });

  const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' }
  ];

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Enter the name of the Student",
      label: "Student's Name",
      required: true,
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter the student's Email Id",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Enter the student's Date Of Birth",
      label: "Date of Birth",
    }
  ];

  const handleSubmit = (e) => 
  {
    alert(values.length);
    for (var i = 0; i< values.length; i++) {
      alert(values[i]);
    }
        alert('Gender '+gender); 
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Student Details</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div>
          <label>Gender</label><br></br>
          <select onChange={e=>setGender(e.target.value)}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;