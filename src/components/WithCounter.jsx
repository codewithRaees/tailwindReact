import { Component } from "react";

const withCounter = (WrappedComponent) => {
  return class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    increaseCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    // First of Constructor method runs, after that Render, componentDidMount, ComponentDidUpdat , and on landing to another
    // page ComponentWillUnmount method executes.
    //   console.log("constructor");

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increaseCount={this.increaseCount}
          {...this.props}
        />
      );
    }
  };
};

export default withCounter;
