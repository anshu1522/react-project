import {  useDispatch } from "react-redux";
import { increase } from "./redux/action";
function Card({ itemm }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="boxes">
        <div className="things">{itemm}</div>
        <div className="add" onClick={() => dispatch(increase())}>
          +
        </div>
      </div>
    </>
  );
}
export default Card;
