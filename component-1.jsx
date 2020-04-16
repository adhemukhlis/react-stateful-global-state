import React, { Component } from "react";
import {
  initGlobalState,
  connectToState,
  getState
} from "./global-state/global-state";
import { increment, decrement } from "./global-state/controller";

class ComponentOne extends Component {
  state = {
    money: getState("_globalStateMoney")
  };
  componentDidMount() {
    connectToState(["_globalStateMoney"], state =>
      this.setState({ money: state._globalStateMoney })
    );
  }
  render() {
    const { money } = this.state;
    return (
      <div>
        {"on component-1 money : $" + money}{" "}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}
export default ComponentOne;
