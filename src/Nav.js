import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Container>
        <div className="pt-4 nav-container" style={styles.navContainer}>
          <ul style={styles.ulList}>
            <NavLink
              to="/client"
              className="flex-fill"
              exact
              activeStyle={styles.active}
              inactiveStyle={styles.inactive}
              style={styles.links}
            >
              <li style={styles.inactive}>Client referrals</li>
            </NavLink>
            <NavLink
              to="/"
              className="flex-fill"
              exact
              activeStyle={styles.active}
              inactiveStyle={styles.inactive}
              style={styles.links}
            >
              <li>Broker/Agent referrals</li>
            </NavLink>
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
    fontSize: 24,
  },
  links: {
    textDecoration: "none",
    color: "#394453",
    textAlign: "center",
    fontWeight: "bold",
  },
};

export default Nav;
