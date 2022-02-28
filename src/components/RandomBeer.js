import axios from "axios"
import {useEffect, useState} from "react"
// import SpecificBeer from "./SpecificBeer"
// import {Link } from "react-router-dom"
import SpecificBeer from "./SpecificBeer"

const RandomBeer = () => {
    const [foundBeer, setBeer] = useState(null)
    
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(results => {
            setBeer(results.data)
        })
    }, [])    

    return foundBeer ? (
       <SpecificBeer foundBeer={foundBeer}/>
    ) : 
    (
        <div>
            <p>loading the random beer...</p>
        </div>
    )
}

export default RandomBeer
