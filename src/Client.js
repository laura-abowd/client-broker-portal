import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ReferralModal from "./ReferralModal";

function Client() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [phoneNumbers, setPhoneNumber] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://random-data-api.com/api/users/random_user?size=10"
    );
    const phoneNumber = await fetch(
      "https://random-data-api.com/api/phone_number/random_phone_number?size=10"
    );

    const items = await data.json();
    setItems(items);

    const phoneNumbers = await phoneNumber.json();
    setPhoneNumber(phoneNumbers);
  };

  return (
    <div>
      <div
        className="mt-4 d-flex align-items-center"
        style={styles.blueContainer}
      >
        <Container>
          <Row>
            <Col sm={4}>
              <p className="m-0">Emails sent</p>
              <p className="display-4 font-weight-bold ">9,999</p>
            </Col>
            <Col sm={4}>
              <p className="m-0">Conversions</p>
              <p className="display-4 font-weight-bold ">0</p>
            </Col>
            <Col sm={4}>
              <p className="m-0">Your earnings</p>
              <p className="display-4 font-weight-bold ">250K+</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="my-5 d-flex justify-content-around">
        <input
          className="col-4"
          type="text"
          placeholder="Looking for something specific? Search here..."
        />
        <ReferralModal />
      </div>

      <div style={styles.whiteContainer}>
        <Container>
          <Row>
            <Col className="p-0">
              <h3 style={styles.tableHeader}>First Name</h3>
              {items.map((item) => (
                <p style={styles.rowLine}>{item.first_name}</p>
              ))}
            </Col>
            <Col className="p-0">
              <h3 style={styles.tableHeader}>Last Name</h3>
              {items.map((item) => (
                <p style={styles.rowLine}>{item.last_name}</p>
              ))}
            </Col>
            <Col className="p-0">
              <h3 style={styles.tableHeader}>Phone</h3>
              {phoneNumbers.map((number) => (
                <p style={styles.rowLine}>{number.cell_phone}</p>
              ))}
            </Col>
            <Col className="p-0">
              <h3 style={styles.tableHeader}>Email</h3>
              {items.map((item) => (
                <p style={styles.rowLine}>{item.email}</p>
              ))}
            </Col>
            <Col className="p-0">
              <h3 style={styles.tableHeader}>Status</h3>
              {items.map((item) => (
                <p style={styles.rowLine}>{item.subscription.status}</p>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

const styles = {
  blueContainer: {
    backgroundColor: "#2F3849",
    color: "white",
    textAlign: "center",
  },
  whiteContainer: {
    backgroundColor: "white",
    border: "1px solid #B3B3B3",
  },
  rowLine: {
    borderTop: "1px solid #C3C3C3",
    padding: "12px 12px 0",
  },
  tableHeader: {
    fontSize: "16px",
    fontWeight: "bold",
    padding: "12px 12px 0",
  },
};

export default Client;
