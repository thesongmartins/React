import { useEffect, useReducer } from "react";
import Header from "./Header";
import Maincom from "./maincom";
import Loader from "./Loader";
import Error from "./Error";
import Startscreen from "./startScreen";
import Question from "./Question";

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
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    default:
      return state;
  }
}

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const numQuestions = questions.length;

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:3000/questions");
        const data = await res.json();

        // if (!data.ok) throw new Error("Failed to fetch questions");
        dispatch({ type: "dataReceived", payload: data });
      } catch (errorr) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);
  return (
    <>
      <div className="app">
        <Header />

        <Maincom>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && (
            <Startscreen numQuestions={numQuestions} dispatch={dispatch} />
          )}

          {status === "active" && (
            <Question
              questions={questions}
              index={index}
              dispatch={dispatch}
              answer={answer}
            />
          )}
        </Maincom>
      </div>
    </>
  );
}

export default App;
