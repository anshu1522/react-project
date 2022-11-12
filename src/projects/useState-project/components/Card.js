export default function Card({content,colour,counterHandler}){
    return(
        <div className="card" style={{ backgroundColor:colour }} onClick={counterHandler}>
{content}
        </div>
    )
}