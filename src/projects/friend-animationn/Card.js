import { useState } from "react"
function Card({itemm,setGo,indx}){
    const deleteItems=(keyy)=>{
        setGo(initialList=>{
            return initialList.filter((listItem,idx)=>keyy!=idx)
        })
    }
    const [show,setShow]= useState(false)
    const animate= () => {
       setShow(prevState => {
        return !prevState
       })
    }
    return(
        <>
        <div onAnimationEnd={()=>deleteItems(indx)}
        className={show && 'showedClass' }>

            <div className='boxes'>
            <p>{itemm}</p>
           <div className="delete" onClick={animate}>-</div>
           </div>
           </div>
        </>
    )
}
export default Card;