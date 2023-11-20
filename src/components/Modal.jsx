import React, { useState } from "react";
import modal from "./Modal.module.css";
import uuid4 from "uuid4";


const Modal = ({ isShowContent, setIsShowContent, royxat, setRoyxat }) => {
  const [event, setEvent] = useState("");
  const [date, setDate] = useState("");

  const handleCloseModal = () => {
    setIsShowContent((prev) => !prev);
  };

  const newEvent = {
    id: uuid4(),
    event: event,
    date: date,
  };

  const handleEvent = (e) => {
    setEvent(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (event && date) {
      setRoyxat([...royxat, newEvent]);
      setIsShowContent((prev) => !prev);
      setEvent("");
      setDate("");
      console.log(newEvent);
    } else {
      console.log("iltimos tolfiring");
    }
  };
  return (
    <>
      {isShowContent && (
        <div className={modal.modal}>
          <div className={modal.modal_content}>
            <span className={modal.close} onClick={handleCloseModal}>
              ❌
            </span>
            <form className={modal.form}>
              <input
                type="text"
                name="event"
                placeholder="Type Event"
                value={event}
                onChange={handleEvent}
                required
              />
              <input
                type="date"
                name="date"
                placeholder="Type Date"
                value={date}
                onChange={handleDate}
                required
              />
              <button onClick={onSubmit}>Add</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
