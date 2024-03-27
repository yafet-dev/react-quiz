function Progress({ index, numQuestion, points, answer, maxPossiblePoints }) {
  return (
    <div>
      <header className="progress">
        <progress max={numQuestion} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestion}
        </p>
        <p>
          {" "}
          <strong>{points}</strong> / {maxPossiblePoints}
        </p>
      </header>
    </div>
  );
}

export default Progress;
