import React, { Suspense } from "react";
import { connect } from "react-redux";
import { test } from "../../Redux/Actions/index";
const Header = React.lazy(() => import("../../Components/Header/Header"));

class Home extends React.Component {
  componentDidMount = () => {
    this.props.test();
  };
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading ....</div>}>
          <div>
            <Header />
          </div>
        </Suspense>
      </div>
    );
  }
}

export default connect(
  null,
  { test }
)(Home);
