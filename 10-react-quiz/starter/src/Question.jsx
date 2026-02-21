import Options from "./components/Options";

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
    </div>
  );
};

export default Question;
