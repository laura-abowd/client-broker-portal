import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

function Client() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://random-data-api.com/api/users/random_user?size=10"
    );

    const items = await data.json();
    console.log(items);
    setItems(items);
  };
  return (
    <div>
      <div
        className="mt-4 d-flex align-items-center"
        style={styles.blueContainer}
      >
        <Container>
          <Row>
            <Col sm={4} className="">
              Emails sent
            </Col>
            <Col sm={4}>Conversions</Col>
            <Col sm={4}>Your earnings</Col>
          </Row>
        </Container>
      </div>
      <div className="mt-4" style={styles.searchInputDiv}>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Looking for something specific? Search here..."
        />
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <h3>First Name</h3>
              {items.map((item) => (
                <p>{item.first_name}</p>
              ))}
            </Col>
            <Col>
              <h3>Last Name</h3>
              {items.map((item) => (
                <p>{item.last_name}</p>
              ))}
            </Col>
            <Col>
              <h3>Phone</h3>
              {items.map((item) => (
                <p>{item.phone_number}</p>
              ))}
            </Col>
            <Col>
              <h3>Email</h3>
              {items.map((item) => (
                <p>{item.email}</p>
              ))}
            </Col>
            <Col>
              <h3>Status</h3>
              {items.map((item) => (
                <p>{item.subscription.status}</p>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

const styles = {
  grayContainer: {
    backgroundColor: "#F2F2F2",
    height: "100vh",
  },

  blueContainer: {
    backgroundColor: "#2F3849",
    color: "white",
    height: "25%",
    textAlign: "center",
  },
  searchInputDiv: {
    width: "50%",
    margin: "0 auto",
  },
  searchInput: {
    display: "block",
    margin: "0 auto",
    width: "auto",
  },
};

export default Client;
