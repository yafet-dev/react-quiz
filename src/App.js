import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";

const initialState = {
  questions: [],
  //'loading', 'error' , 'ready' 'active' finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    default:
      throw new Error("action unknown");
  }
}

JSON.stringify(initialState);

export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => console.error("Error", err));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>{status === "loading" && <Loader />}</Main>
    </div>
  );
}
