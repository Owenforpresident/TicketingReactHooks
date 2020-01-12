import React, { useState } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';


const AddTechModal = () => {
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  


  const onSubmit = () => {
    if (FirstName === "" || SecondName === "") {
      M.toast({ html: "Please enter the technicians full name" });
    } else {
      console.log(FirstName, SecondName);
    }
  };

  return (
    <div id="add-tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Add a Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="FirstName"
              value={FirstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="message" className="active">
             First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
          <input
              type="text"
              name="SecondName"
              value={SecondName}
              onChange={e => setSecondName(e.target.value)}
            />
            <label htmlFor="message" className="active">
             Second  Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default AddTechModal;
