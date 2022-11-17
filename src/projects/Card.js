import { useState } from "react"
function Card({itemm}){
    const [visible,setVisible]= useState(false)
    const animate= () => {
       setVisible(prevState => {
        return !prevState
       })
    }
    return(
        <>
            <div className='boxes'>
            <p style={{ animation:' move 0.8s' }} >{itemm}</p>
           <div className="delete"style={{  }} onClick={animate}>-</div>
           </div>
        </>
    )
}
export default Card;