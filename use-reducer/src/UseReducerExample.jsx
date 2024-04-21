import React, { useReducer } from "react";
import PersonCard from "./PersonCard";
import { initialState, reducer } from "./reducer";

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const getPerson = async () => {
    const url = "https://randomuser.me/api/";
    dispatch({ type: "START" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "SUCCESS", payload: data.results[0] });
    } catch (e) {
      dispatch({ type: "FAIL", payload: "error occoured while fetching" });
    }
  };

  return (
    <div>
      <button type="button" onClick={getPerson} disabled={state.loading}>
        Fetch Person
      </button>
      {state.error && <div>{state.error}</div>}
      {state.person && <PersonCard {...state.person}></PersonCard>}
    </div>
  );
};

export default UseReducerExample;
