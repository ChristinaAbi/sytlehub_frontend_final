import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stylists from './Stylists';

export default function StylistRequest(props) {
  const [stylists, setStylists] = useState([])
  const [formInputs, updateFormInputs] = useState({
    name: "",
    location: "",
    style_type: "",
    descriptionOfEvent: "",
    IsEventInAWeek: ""
  })
  const getStylists = async () => {
    try {
      const response = await fetch('https://stylehub-api.herokuapp.com');
      const data = await response.json();
      console.log(data)
      setStylists(data);
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    (
      async function () {
        await getStylists()
      }
    )()
  }, []);

  const handleChange = (event) => {
    const updateInput = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
    updateFormInputs(updateInput)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('https://stylehub-api.herokuapp.com', formInputs);
      const createdStylist = response.data;
      updateFormInputs({
        name: "",
        location: "",
        style_type: "",
        descriptionOfEvent: "",
        IsEventInAWeek: ""
      });
      setStylists([createdStylist, ...stylists])
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="header">
          See Available Stylists:
        </h1>
        <Stylists stylists={stylists} />
        <br />
        <h3>
          Don't Know Who to Choose? Fill the form below and get connected with one ASAP!
        </h3>
        <main>
          <form onSubmit={handleSubmit}>
            <div className="input-field"> 
            <label htmlFor="name">Your Name: </label>
            <input
              type="text"
              class="validate"
              id="name"
              value={formInputs.name}
              onChange={handleChange} /> 
            <br />
            <label htmlFor="location">City/State: </label>
            <input
              type="text"
              id="location"
              value={formInputs.location}
              onChange={handleChange} />
            <br />  
            <label htmlFor="style_type">Style Type: </label>
            <input
              type="text"
              id="style_type"
              value={formInputs.style_type}
              onChange={handleChange} />
            <br />  
            <label htmlFor="descriptionOfEvent">Event Type: </label>
            <input
              type="text-area"
              id="descriptionOfEvent"
              value={formInputs.descriptionOfEvent}
              onChange={handleChange} />
            <br /> 
            <label htmlFor="isEventInAWeek">Is the Event in a Week: </label>
            <input
              type="checkbox"
              class="filled-in"
              id="isEventInAWeek"
              value={formInputs.IsEventInAWeek}
              onChange={handleChange} />
            <br />  
            </div>
            <input type="submit" className="submit"
            onChange={handleSubmit} />
          </form>
          <br />
        </main>
      </div>
    </div>
  )
}

