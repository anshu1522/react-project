import "./style.css";
import Card from "./Card";
import { useState } from "react";
function Friends() {
  const [list, setList] = useState([]);
  const [cap, setCap] = useState('');
  const addHandler = () => {
    setList((start) => {
      return [...start, cap];
    });
    setCap(" ");
  };
  const textCapture = (props) => {
    setCap(props.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        Friends
        <div>
          <input value={cap} onChange={textCapture}></input>
          <button style={{ margin: 10 }} onClick={addHandler}>
            submit{" "}
          </button>
        </div>
      </div>
      <div className="body">
        {list.map((item,index) => (
          <Card itemm={item} key={index} indx={index} setList={setList} />
        ))}

        <div className="addButton">+</div>
      </div>
    </div>
  );
}
export default Friends;
