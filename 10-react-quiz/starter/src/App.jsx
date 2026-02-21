import { useEffect } from "react";
import Header from "./Header";
import Maincom from "./maincom";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
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
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch("http://localhost:3000/questions");
      const data = await res.json();

      if (!data.ok) throw new Error("Failed to fetch questions");
      console.log(data);
    }
    fetchQuestions();
  }, []);
  return (
    <>
      <div className="app">
        <Header />

        <Maincom>
          <p>1/15</p>
          <p>Question?</p>
        </Maincom>
      </div>
    </>
  );
}

export default App;
