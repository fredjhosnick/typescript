import {FC,useState} from 'react'
import Pizza from '../models/Pizza'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import EditPizzaForm from './EditPizzaForm';


interface  SinglePizzaProps{
    pizza:Pizza;
    updatePizza:(newPizza:Pizza)=>void
    deletedPizza:(id:number)=>void
}

const SinglePizza:FC<SinglePizzaProps> = ({pizza, updatePizza ,deletedPizza}) => {
   
    const [edit,setEdit]= useState<boolean>(false)

    const handleToggleEdit = ()=>{
        setEdit(!edit)
    }

    const handleDelete =()=>{
        deletedPizza(pizza.id)
    }
  return (
    <div className='pizza'>
    
      <img src={`/images/${pizza.img}`} alt={pizza.title}/>
      <h2>{pizza.title}</h2>
      <span>{pizza.price}€</span>
      <div className="pizza-controls">
      <CiEdit onClick={handleToggleEdit} />
      <MdDelete onClick={handleDelete} />
      </div>
      {
        edit
        ?<EditPizzaForm data={pizza} updatePizza={updatePizza}  handleToggleEdit={handleToggleEdit }/>
        :null
      }
    </div>
  )
}

export default SinglePizza
