import React, { Component } from "react";
import { render } from "react-dom";
import {
  initGlobalState,
  connectToState,
  getState
} from "./global-state/global-state";
import { increment10, set999, setclear } from "./global-state/controller";
import ComponentOne from "./component-1";
import ComponentTwo from "./component-2";

initGlobalState();

class ComponentIndex extends Component {
  state = {
    money: getState("_globalStateMoney"),
    qty: getState("_globalStateQTY")
  };
  componentDidMount() {
    connectToState(["_globalStateMoney", "_globalStateQTY"], stream =>
      this.setState({
        money: stream._globalStateMoney,
        qty: stream._globalStateQTY
      })
    );
  }
  render() {
    const { money, qty } = this.state;
    return (
      <div>
        {"on index money : $" + money}{" "}
        <button onClick={increment10}>+10</button>
        <button onClick={set999}>set 999</button>
        <button onClick={setclear}>set clear</button>
        <ComponentOne />
        <ComponentTwo />
        {"QTY : " + qty}
      </div>
    );
  }
}
render(<ComponentIndex />, document.getElementById("root"));
