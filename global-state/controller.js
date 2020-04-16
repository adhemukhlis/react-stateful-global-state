import { state, setState } from "react-rest-state";

export const increment = () => {
  setState(
    prevState => {
      return { _globalStateMoney: prevState._globalStateMoney + 1 };
    },
    () => {
      console.log(state._globalStateMoney);
    }
  );
};
export const decrement = () => {
  setState(
    prevState => {
      return { _globalStateMoney: prevState._globalStateMoney - 1 };
    },
    () => {
      console.log(state._globalStateMoney);
    }
  );
};
export const increment10 = () => {
  setState(
    prevState => {
      return { _globalStateMoney: prevState._globalStateMoney + 10 };
    },
    () => {
      console.log(state._globalStateMoney);
    }
  );
};
export const set999 = () => {
  setState({ _globalStateMoney: 999, _globalStateQTY: 999 }, () => {
    console.log("set 999");
  });
};
export const setclear = () => {
  setState({ _globalStateMoney: 0, _globalStateQTY: 0 }, () => {
    console.log("clear");
  });
};
