import  {FC, useState}from 'react';
import './App.css';
import AddPizzaForm from './components/AddPizzaForm';
import Pizza from './models/Pizza';
import DisplayPizza from './components/DisplayPizza';



const  App:FC =()=>  {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza:Pizza)=>{
    setPizzasList([...pizzasList,newPizza])
  }
  const updatePizza = (newPizza:Pizza)=>{
    setPizzasList(pizzasList.map((pizza)=>
    (pizza.id === newPizza.id ? newPizza:pizza)))
  }
  const deletedPizza = (id:number)=>{
      const newPizzaList =  pizzasList.filter(pizza => pizza.id !== id)
      setPizzasList(newPizzaList)
  }

  console.log('Pizzalist >>>>>', pizzasList)
  return (
    <div className="App">
    <div className="wrap">
      <span className = "heading"> Unsere Pizza</span>
      <AddPizzaForm addPizza= {addPizza}/>
      <DisplayPizza pizzasList={pizzasList} updatePizza={updatePizza} deletedPizza={deletedPizza}/>
    </div>
    </div>
  );
}

export default App;
