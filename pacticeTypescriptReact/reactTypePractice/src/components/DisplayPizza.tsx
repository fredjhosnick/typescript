import {FC} from 'react'
import Pizza from '../models/Pizza'
import SinglePizza from './SinglePizza';


interface  DisplayPizzaProps{
    pizzasList:Pizza[];
    updatePizza:(newPizza:Pizza)=>void
    deletedPizza:(id:number)=>void
}

const DisplayPizza:FC<DisplayPizzaProps> = ({pizzasList,updatePizza,deletedPizza}) => {
  return (
    <div className='container'>
     {pizzasList.map((pizza)=>{
        return <SinglePizza key={pizza.id} pizza={pizza} updatePizza={updatePizza} deletedPizza={deletedPizza}/>
     })}
      
    </div>
  )
}

export default DisplayPizza
