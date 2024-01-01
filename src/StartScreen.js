function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcoem to the react Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button className="btn">Let's Start</button>
    </div>
  );
}

export default StartScreen;
