import React, { useState } from "react";
import styles from "./Title.module.css";
import Modal from "./Modal";

const Lists = () => {
  const [isShowContent, setIsShowContent] = useState(false);
  const [royxat, setRoyxat] = useState([
    {
      id: 1,
      event: "Football UZ",
      date: "11/21/2023",
      location: "Tashkent",
    },
  ]);

  const handleOpenModal = () => {
    setIsShowContent((prev) => !prev);
  };
  return (
    <div>
      {royxat.map((el) => (
        <div key={el.id} className={styles.list}>
          <p>
            <b>EventName:</b> {el.event}
          </p>
          <p>
            <b>Date:</b> {el.date}
          </p>
          <p>
            <b>Location:</b> {el.location}
          </p>
        </div>
      ))}
      <button onClick={handleOpenModal}>Add Events</button>
      {isShowContent && (
        <Modal
          isShowContent={isShowContent}
          setIsShowContent={setIsShowContent}
          royxat={royxat}
          setRoyxat={setRoyxat}
        />
      )}
    </div>
  );
};

export default Lists;
