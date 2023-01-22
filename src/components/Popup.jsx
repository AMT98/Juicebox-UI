import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Popup = ({
  btnTxt,
  modalTitle,
  submitBtnTxt,
  handleSubmit,
  children: Children,
}) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {btnTxt}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{modalTitle}</ModalHeader>
        <ModalBody>{Children}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={(e) => {
              handleSubmit(e);
              toggle();
            }}
          >
            {submitBtnTxt}
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Popup;