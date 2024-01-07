import { Component } from "react";
import withCounter from "./WithCounter";

class HoverCounter extends Component {
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");

    return (
      <div className="bottom-3 mb-4 mt-8 flex flex-col items-center border  bg-slate-100 px-4 py-4 text-3xl">
        <h1 className="mb-2">{this.props.name}</h1>

        <h1
          className=" flex w-96 justify-center rounded-md bg-red-300"
          onMouseEnter={this.props.increaseCount}
        >
          {this.props.count}
        </h1>
      </div>
    );
  }
}
export default withCounter(HoverCounter);
