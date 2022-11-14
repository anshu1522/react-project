function Card({itemm,setList,indx}){
    const deleteItems=(keyy)=>{
     setList(initialList=>{
        return initialList.filter((listItem,idx)=>keyy!=idx);
     })
    }
// console.log('ankit', indx);
    return(
       
<div className="card">{itemm}
<div className="delete " onClick={()=>deleteItems(indx)}>-</div></div>
       
    )
}
export default Card;