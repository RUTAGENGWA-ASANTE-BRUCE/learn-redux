import { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login, logout } from "./state/actions/actions";
function App() {
  const numberRef = useRef(null);
  const nameRef = useRef(null);
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input
        type="number"
        style={{
          borderRadius: "6px",
          padding: "8px",
          marginTop: "20px",
          width: "30%",
        }}
        ref={numberRef}
      />
      <h1>Counter {counter}</h1>
      <button
        style={{ height: 50, width: 50 }}
        onClick={() => dispatch(increment(parseInt(numberRef.current.value)))}
      >
        +
      </button>
      <button
        style={{ height: 50, width: 50, marginLeft: 10 }}
        onClick={() => dispatch(decrement(parseInt(numberRef.current.value)))}
      >
        -
      </button>
      <br />
      {isLogged.loggedIn ? (
        <div>
          <h1>Welcome, {isLogged.userName}</h1>
          <button style={{ marginTop: 20 }} onClick={() => dispatch(logout())}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1 style={{ marginTop: "80px" }}>Enter Your Name</h1>
          <input
            type="text"
            ref={nameRef}
            style={{
              borderRadius: "6px",
              display: "",
              padding: "8px",
              marginTop: "20px",
              width: "30%",
            }}
          />
          <br />
          <button
            style={{ marginTop: 20 }}
            onClick={() => dispatch(login(nameRef.current.value))}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
