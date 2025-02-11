export default function UserInput({ userInput, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input
            type="number"
            id="initial"
            value={userInput.initial}
            required
            onChange={(e) => onInputChange("initial", Number(e.target.value))}
          />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input
            type="number"
            id="annual"
            value={userInput.annual}
            required
            onChange={(e) => onInputChange("annual", Number(e.target.value))}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected">Expected Return</label>
          <input
            type="number"
            id="expected"
            value={userInput.expectedReturn}
            required
            onChange={(e) =>
              onInputChange("expectedReturn", Number(e.target.value))
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            required
            onChange={(e) => onInputChange("duration", Number(e.target.value))}
          />
        </p>
      </div>
    </section>
  );
}
