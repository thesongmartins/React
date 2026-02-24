import Options from "./components/Options";
import NextButton from "./components/NextButton";

const Question = ({ questions, index, dispatch, answer }) => {
  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options
        questions={questions}
        index={index}
        dispatch={dispatch}
        answer={answer}
      />
      <NextButton
        dispatch={dispatch}
        answer={answer}
        index={index}
        // numQuestions={numQuestions}
      />
    </div>
  );
};

export default Question;
