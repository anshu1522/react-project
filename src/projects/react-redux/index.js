import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";
import { incNumber, decNumber } from "./redux/action";
function Counter() {
  const myState = useSelector((state) => state.ChangeTheNumberReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <div className="main">
          <div>Increament/Decreament Counter</div>
          <div>Using react redux</div>
        </div>
        <div className="body">
          <div className="add" onClick={() => dispatch(incNumber())}>
            +
          </div>
          <div>{myState}</div>
          <div className="reduce" onClick={() => dispatch(decNumber())}>
            _
          </div>
        </div>
      </div>
    </>
  );
}
export default Counter;
