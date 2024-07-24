import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import crossImg from "../../assets/cross.svg";
import styles from "../styles/editfile.module.css";
import testImg from "./testImg.jpeg";
import cameraIcon from "./camera.svg";
import { updateUserById } from "../../apis/user";
import { useUserInfo } from "../../share/context/user-info-context";
import { getImageSrc } from "../../utils/util";

export default function EditProfile({ id, name, avatar }) {
  const [show, setShow] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(avatar);
  const [avatarFile, setAvatarFile] = useState(null);
  const [newName, setNewName] = useState(name);
  const inputFile = useRef(null);
  const { userInfo, setUserInfo } = useUserInfo();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileSelect = () => {
    inputFile.current.click();
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleChange = (e) => {
    setAvatarFile(e.target.files[0]);
    setAvatarUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", newName);
    formData.append("avatar", avatarFile);

    try {
      const response = await updateUserById(id, formData);
      setUserInfo((previous) => ({
        ...previous,
        name: response.user.name,
        image: response.user.image,
      }));
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

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
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Modal.Header>
        <Modal.Body className={styles.dialog__body}>
          <div className={styles.background__image} style={sourceStyle}></div>

          <div className={styles.editfile__avatar}>
            <Image src={getImageSrc(avatarUrl)} fluid roundedCircle></Image>
            <div className={styles.overlay}>
              <Image
                src={cameraIcon}
                fluid
                roundedCircle
                onClick={handleFileSelect}
              ></Image>
              <input
                type="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={styles.name__field}>
            <Form.Label htmlFor="inputName">Name</Form.Label>
            <Form.Control
              type="textarea"
              id="inputName"
              value={newName}
              onChange={handleNameChange}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
