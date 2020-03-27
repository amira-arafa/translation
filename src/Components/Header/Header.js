import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../App/Auth";
import {
  fetchData,
  fetchSingleData,
  PostData
} from "../../Redux/Actions/index";
import { connect } from "react-redux";
import "./Header.scss";

class Header extends React.Component {
  fetchData = () => {
    this.props.fetchData();
  };
  fetchSingleData = () => {
    this.props.fetchSingleData(1);
  };
  postData = () => {
    this.props.PostData();
  };
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login() {
    // BT5LY EL IS AUTH B TRUE
    Auth.authenticate();
  }
  logout() {
    // BT5LY EL IS AUTH B FALSE
    Auth.signout();
  }
  render() {
    return (
      <div className="Header ">
        <div>
          <Link className="Header__HomeLink col" to="/">
            Home
          </Link>
          <br />
          <Link className="Header__PublicLink col " to="Public">
            Public
          </Link>
          <br />
          <Link className="Header__protectedLink col" to="protected">
            Protected
          </Link>
          <br />
        </div>
        <div className="row">
          <button className="btn btn-primary col-sm-2" onClick={this.login}>
            Login
          </button>
          <br />
          <button className="btn btn-danger col-sm-2" onClick={this.logout}>
            Logout
          </button>
          <button className="btn btn-warning col-sm-2" onClick={this.fetchData}>
            Get Data From Api
          </button>
          <button
            className="btn btn-warning col-sm-2"
            onClick={this.fetchSingleData}
          >
            Get Single Data From Api
          </button>
          <button className="btn btn-warning col-sm-2" onClick={this.postData}>
            post data
          </button>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { fetchData, fetchSingleData, PostData }
)(Header);
