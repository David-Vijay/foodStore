
function ShowItems(props){
    
        return(
            <div className="imageContainer">
                <img src={props.items['recipe']['image']} alt=""  className="image" onClick={()=>{
                    window.open(props.items['recipe']['url'])
                }}/>
                <p className="label">{props.items['recipe']['label']}</p>
            </div>
        )
}
             

  

export default ShowItems