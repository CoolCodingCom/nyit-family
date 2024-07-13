import { useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import crossImg from "../../assets/cross.svg";
import styles from "../styles/editfile.module.css";
import testImg from "./testImg.jpeg";
import testAvatar from "./testAvatar.jpg";

export default function EditProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const sourceStyle = {
    backgroundImage: `url(${testImg})`,
  };

  return (
    <>
      <Button
        variant="outline-light"
        className="profile__edit__button"
        onClick={handleShow}
      >
        Edit Profile
      </Button>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        dialogClassName={styles.dialog}
      >
        <Modal.Header>
          <div className={styles.header__left}>
            <img
              src={crossImg}
              alt="Back arrow"
              onClick={handleClose}
              className={styles.cross__button}
            />
            <Modal.Title className={styles.title}>Edit Profile</Modal.Title>
          </div>
          <Button
            variant="dark"
            className="profile__follow__button"
            onClick={handleClose}
          >
            Save
          </Button>
        </Modal.Header>
        <Modal.Body className={styles.dialog__body}>
          <div className={styles.background__image} style={sourceStyle}></div>

          <div className={styles.editfile__avatar}>
            <Image src={testAvatar} fluid roundedCircle></Image>
          </div>

          <div className={styles.name__field}>
            <Form.Label htmlFor="inputName">Name</Form.Label>
            <Form.Control type="textarea" id="inputName" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
