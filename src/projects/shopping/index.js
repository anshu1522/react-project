import "./style.css";
import Card from "./Card";
import { useState } from "react";
import { menThings, womenThings, childThings } from "../data";
import { useSelector } from "react-redux";

function Chart() {
  const [tab, setTab] = useState();
  const renderMen = () => {
    setTab(1);
  };
  const renderWomen = () => {
    setTab(2);
  };
  const renderChild = () => {
    setTab(3);
  };
  const myState = useSelector((state) => state.ChangeTheValue);
  return (
    <>
      <div className="main">
        <div className="heading">
          <div className="top">shopping</div>
          <div className="total">{myState}</div>
        </div>
        <div className="middle">
          <div className="male" onClick={renderMen}>
            men
          </div>
          <div className=" female" onClick={renderWomen}>
            women{" "}
          </div>
          <div className="child" onClick={renderChild}>
            kids
          </div>
        </div>
        <div className="bodyy">
          {tab == 1 && (
            <div className="bodymen">
              {menThings.map(item => (
                <Card itemm={item} />
              ))}
            </div>
          )}
          {tab == 2 && (
            <div className="bodywomen">
              {womenThings.map(item => (
                <Card itemm={item} />
              ))}
            </div>
          )}
          {tab == 3 && (
            <div className="bodychild">
              {childThings.map(item => (
                <Card itemm={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Chart;
