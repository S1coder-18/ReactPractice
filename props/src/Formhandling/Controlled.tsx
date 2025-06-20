import React, { useEffect, useRef, useState } from "react";
import "./Controlled.css";

interface FormData {
  id: string;
  name: string;
  email: string;
  age: string;
}

export const Controlled = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    name: "",
    email: "",
    age: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleClick = () =>{
    nameRef.current?.focus();
    const ageValue = ageRef.current?.value;
    console.log("Current Age value using useRef",ageValue); // Accesing the real dom 

  }
  
  // We can see the current age name or email using formData useEffect
  //Controlled way of seeing data and getting data using virtual
  useEffect(()=>{
    console.log(`Current FormData ${formData.name} and ${formData.email} and ${formData.age}`);
  },[formData.name, formData.email, formData.age]);
  
  

  const [submittedData, setSubmittedData] = useState<FormData[]>([]);

  
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev)=> {
        console.log(prev);
        return{
            ...prev,
            [name]: value,
        }
    })
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Previous Submitted data 
    if(submittedData.length > 0){
        let prevData = submittedData[submittedData.length-1];
        console.log("Previous Submitted Data :", prevData )
    }else{
        console.log("No Data submitted yet!.");
    }


    const randomId = {
      ...formData,
      id: (Date.now() + Math.floor(Math.random() * 1000)).toString(),
    };
    setSubmittedData((prev) => [...prev, randomId]);
    setFormData({ name: "", email: "", age: "", id: "" }); // reseting input 
  };

  return (
    <div className="container">
      <h2>📝 User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="Enter your name..."
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          ref={ageRef}
          name="age"
          placeholder="Enter your age..."
          value={formData.age}
          onChange={handleChange}
          required
        />
        <button type="submit" onClick={handleClick}>Submit</button>
      </form>

      <h2 className="entries-title">📋 Submitted Entries</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.length === 0 ? (
            <tr>
              <td colSpan={4} className="no-entry">
                No entries yet
              </td>
            </tr>
          ) : (
            submittedData.map((data) => (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.age}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
