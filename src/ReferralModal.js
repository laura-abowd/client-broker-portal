import React from "react";
import Modal from "react-modal";
import { Container, Col, Row } from "react-bootstrap";

function ReferralModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#2F3849";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button style={customStyles.modalButton} onClick={openModal}>
        Add Referral
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="float-right" onClick={closeModal}>
          close
        </button>
        <p>KINDHEALTH BROKER PORTAL</p>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add client referral</h2>
        <div className="mt-4">
          <h4>Referral's information</h4>
        </div>
        <form className="d-flex flex-column">
          <input
            style={customStyles.input}
            type="text"
            placeholder="First name"
          />
          <input
            style={customStyles.input}
            type="text"
            placeholder="Last name"
          />
          <input
            style={customStyles.input}
            type="text"
            placeholder="Phone number"
          />
          <input
            style={customStyles.input}
            type="text"
            placeholder="Email address"
          />
          <input style={customStyles.input} type="text" placeholder="Zip" />
          <div className="mt-4">
            <h4>Referral's interest</h4>
          </div>
          <Container>
            <Row>
              <Col className="col-6">
                <div>
                  <label>
                    <input type="checkbox" />
                    Health Insurance
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    Medicare
                  </label>
                </div>
              </Col>

              <Col className="col-6">
                <div>
                  <label>
                    <input type="checkbox" />
                    Health Insurance
                  </label>
                </div>
                <div>
                  <label>
                    <input type="checkbox" />
                    Medicare
                  </label>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="mt-4 ">
            <h4>Notes</h4>
            <textarea className="col-12"></textarea>
          </div>
          <button className="mt-4" style={customStyles.modalButton}>
            Add referral
          </button>
        </form>
      </Modal>
    </div>
  );
}

const customStyles = {
  modalButton: {
    backgroundColor: "#6CCFBE",
    border: "4px solid #6CCFBE",
    borderRadius: 4,
    color: "white",
    fontWeight: "bold",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "100vh",
  },
  input: {
    border: "none",
    borderBottom: "2px solid #C3C3C3",
    padding: "16px 0px",
  },
};

export default ReferralModal;
