import { useState } from 'react';
import './style.css';
import Card from './components/Card';
 function IncreaseDecrease() {
    const [num, setNum] = useState(10);
    const increase = () => {
        num < 10 ? setNum(num + 1) : alert("ghoda");
    }
    const decrease = () => {
        num > 0 && setNum(num - 1);
    }
    return (
        <div className="container">

            <div className='cardContainer' style={{
                backgroundColor: `rgb(255,255,${255 - 25.5 * num})`
            }}>
                <Card content={'+'} colour={'red'} counterHandler={increase} />
                <div>{num}</div>
                <Card content={'-'} colour={"green"} counterHandler={decrease} />
            </div>
        </div>
    )
}
export default IncreaseDecrease;