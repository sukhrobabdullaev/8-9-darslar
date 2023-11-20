import { useRef } from "react";
import modal from "./Modal.module.css";
import uuid4 from "uuid4";

const Modal = ({ isShowContent, setIsShowContent, royxat, setRoyxat }) => {
  // const [event, setEvent] = useState("");
  // const [date, setDate] = useState("");
  // const [location, setLocation] = useState("karshi");
  const event = useRef("");
  const date = useRef("");
  const location = useRef("Tashkent");
  // console.log(event.current.value);
  // console.log("rendering.....");
  const handleCloseModal = () => {
    setIsShowContent((prev) => !prev);
  };
  // console.log(location);
  const newEvent = {
    id: uuid4(),
    event: event.current.value,
    date: date.current.value,
    location: location.current.value,
  };

  const resetInputs = () => {
    // setEvent("");
    // setDate("");
    event.current.value = "";
    date.current.value = "";
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (newEvent.event && newEvent.date) {
      setRoyxat([...royxat, newEvent]);
      setIsShowContent((prev) => !prev);
      resetInputs();
      // console.log(newEvent);
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
                // value={event}
                // onChange={() => event.current.value}
                ref={event}
                required
              />
              <input
                type="date"
                name="date"
                placeholder="Type Date"
                // value={date}
                // onChange={() => date.current.value}
                ref={date}
                required
              />
              <select
                // onChange={() => location.current.value}
                ref={location}
              >
                <option value="Tashkent">Tashkent</option>
                <option value="Karshi">Karshi</option>
                <option value="Bukhara">Bukhara</option>
              </select>
              <button onClick={onSubmit}>Add</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
