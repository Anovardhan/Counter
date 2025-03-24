import "./styles.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [count, setcount] = useState(0);
  const Add = () => {
    setcount((pre) => pre + 1);
  };
  const sub = () => {
    if (count > 0) setcount((pre) => pre - 1);
  };
  const reset = () => {
    setcount(0);
  };

  return (
    <div className="container text-center mt-5">
      <div className="card shadow-lg" style={{ fontFamily: "Lora" }}>
        <h1 mb-4>Counter</h1>
        <h1 className="display-4"> Count : {count}</h1>
        <div className="m-t d-flex gap-3 justify-content-center">
          <button className="btn btn-success rounded-10" onClick={Add}>
            Add
          </button>
          <button className="btn btn-success rounded-10" onClick={Add}>
            Sub
          </button>
          <button className="btn btn-danger rounded-10" onClick={Add}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
