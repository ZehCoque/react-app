import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listItems: JSX.Element[] = Object.values(this.props).map((row) => (
      <li>{row}</li>
    ));
    return (
      <>
        <div>
          <h1>React</h1>
          <h2>Props List</h2>
        </div>
        <div>
          <ul>{listItems}</ul>
        </div>
      </>
    );
  }
}
