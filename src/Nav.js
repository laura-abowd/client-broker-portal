import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Container>
        <div className="pt-4 nav-container" style={styles.navContainer}>
          <ul style={styles.ulList}>
            <Link to="/client" className="flex-fill" style={styles.links}>
              <li style={styles.inactive}>Client referrals</li>
            </Link>
            <Link to="/" className="flex-fill" style={styles.links}>
              <li style={styles.active}>Broker/Agent referrals</li>
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
}

const styles = {
  active: {
    borderBottom: "4px solid #6CCFBE",
  },
  inactive: {
    borderBottom: "1px solid #C3C3C3",
  },
  ulList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    fontSize: 32,
  },
  links: {
    textDecoration: "none",
    color: "#394453",
  },
};
export default Nav;
