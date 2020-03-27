import React from "react";

class List extends React.Component {
  fetchData = () => {
    console.log("object");
  };
  render() {
    return <button onClick={this.fetchData}>fetch List</button>;
  }
}
export default List;
