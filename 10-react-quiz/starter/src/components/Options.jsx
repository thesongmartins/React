const Options = ({ questions, index, dispatch, answer }) => {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {questions[index].options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswer
              ? i === questions[index].correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default Options;
