function Card({itemm}){
    const deleteItems=()=>{
        console.log('sss')
    }
    return(
       
<div className="card">{itemm}
<div className="delete " onClick={deleteItems}>-</div></div>
       
    )
}
export default Card;