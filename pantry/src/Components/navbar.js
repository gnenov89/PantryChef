import React, { Component } from "react";
import { Button, Navbar, NavItem, Icon, Modal, Input } from "react-materialize";
import { Link } from "react-router-dom";
import Form from "./Home/form";
import withAuth from "./HOC/withAuth";

class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar right>
          {this.props.currentUser ? (
            <span onClick={this.props.signOut} style={{ marginRight: 15, cursor: "pointer"}} >Sign Out</span>
          ) : (
            <Modal
              header="Sign In"
              trigger={
                <li>
                  <Link to="/">
                    <Icon>account_box</Icon>
                  </Link>
                </li>
              }
            >
              <Form />
            </Modal>
          )}

          <li>
            <Link to="/">
              <Icon>refresh</Icon>
            </Link>
          </li>
        </Navbar>
      </div>
    );
  }
}

export default withAuth(navbar);
