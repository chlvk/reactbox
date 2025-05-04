import { useEffect, useReducer } from "react";
import Error from "./components/Error";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Main from "./components/Main";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import SingleQuestion from "./components/SingleQuestion";
import StartScreen from "./components/StartScreen";
import Timer from "./components/Timer";

// run in console [npm run server] for the app (fetching questions) to work
const URL = "http://localhost:9000/questions";
const SECONDS_PER_QUESTION = 30;
const initialState = {
  questions: [],
  status: "loading", // values: [loading, error, ready, active, finish]
  index: 0, // index of the active question in the questions array
  answer: null, // index of the selected button in the list of buttons
  points: 0, // quiz total points
  highscore: 0, // user's max quiz points result
  remainingSeconds: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        remainingSeconds: state.questions.length * SECONDS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      const { points, correctOption } = question;
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === correctOption
            ? state.points + points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finish",
        highscore: Math.max(state.points, state.highscore),
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highscore: state.highscore,
      };
    case "tick":
      return {
        ...state,
        remainingSeconds: state.remainingSeconds - 1,
        status: state.remainingSeconds === 0 ? "finish" : state.status,
      };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [
    { questions, status, index, answer, points, highscore, remainingSeconds },
    dispatch,
  ] = useReducer(reducer, initialState);
  const questionsNumber = questions.length;
  const maxPossiblePoints =
    questions.length > 0 ? questions.reduce((a, b) => a + b.points, 0) : 0;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "dataReceived",
          payload: data,
        })
      )
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen questionsNumber={questionsNumber} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              questionsNumber={questionsNumber}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <SingleQuestion
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer remainingSeconds={remainingSeconds} dispatch={dispatch} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                questionsNumber={questionsNumber}
              />
            </Footer>
          </>
        )}
        {status === "finish" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            dispatch={dispatch}
            highscore={highscore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
