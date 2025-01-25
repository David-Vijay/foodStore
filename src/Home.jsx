import axios from "axios"
import { useState } from "react"
import ShowItems from "./ShowItems"
function Home(){
    const [query,setQuery] =useState('')
    const [recipes, setRecipes]= useState([])
    const [healthLabels,setHealthLabels] = useState('')
    function handleInputChange(e){
        setQuery(e.target.value)
    }
    function submit(event){
        event.preventDefault()
    }
    
    const  url = `https://api.edamam.com/search?q=${query}&app_id=a5de3521&app_key=28f8a20bd893e2740e68d4bbb349b977&from=0&to=50`

    async function getData(){
        var result = await axios.get(url)
        setRecipes(result.data.hits)
        
        
    }    
    return(
        <div className="app">
            <h1 className="title">Food Store🍔</h1>
            <form action="" className="form" onSubmit={submit}>
                <input type="text" placeholder="Enter your food" value={query} className="input" onChange={handleInputChange}/>
                
                <button className="search" onClick={getData}type='submit'>Search</button>
                {/* <select name="" id="" className="select">
                    <option  onClick={()=>setHealthLabels("Egg-Free")}>vegan</option>
                    <option  onClick={()=>setHealthLabels("Peanut-Free")}>Peanut-Free
                    </option>
                    <option  onClick={()=>setHealthLabels("Tree-Nut-Free")}>Tree-Nut-Free
                    </option>
                    <option  onClick={()=>setHealthLabels('Soy-Free')}>Soy-Free</option>
                    <option  onClick={()=>setHealthLabels('Fish-Free')}>Fish-Free</option>
                    <option  onClick={()=>setHealthLabels('Shellfish-Free')}>Shellfish-Free</option>
                    <option  onClick={()=>setHealthLabels('Pork-Free')}>Pork-Free</option>
                    <option  onClick={()=>setHealthLabels('Red-Meat-Free')}>Red-Meat-Free</option>
                    <option  onClick={()=>setHealthLabels('Crustacean-Free')}>Crustacean-Free</option>
                    <option  onClick={()=>setHealthLabels('Alcohol-Free')}>Alcohol-Free</option>
                    
                   
                </select> */}
            </form>
            {recipes.length>0? 
            <div className="container" id='tiles' >
            {recipes.map(recipe =>{
                return <ShowItems items={recipe}/>
             })
            } 
            </div> : 
            <div>
            <h2 style={{alignItems:'center'}}>Search for Food Items</h2>
           
                <div className="🤚">
                    <div className="👉"></div>
                    <div className="👉"></div>
                    <div className="👉"></div>
                    <div className="👉"></div>
                    <div className="🌴"></div>		
                    <div className="👍"></div>
                </div>
            </div>
        }
            
        </div>
    )
}

export default Home