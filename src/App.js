import {React, useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const intialExpenses = [
  {
    id:"e1",title:"White paper",amount:89,date: new Date(2022,8,21)
  },
  {
    id:"e2",title:"Tissue paper",amount:100,date: new Date(2022,2,1)
  },
  {
    id:"e4",title:"Sand paper",amount:20,date: new Date(2022,7,30)
  }
]
function App() {

  const [expenses, setExpenses] = useState(intialExpenses);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses => {
      return [expense, ...prevExpenses, ]
    }));
  }

  return (
    <div >
      <div  style={{textAlign: "center"}}>
        <h2>Expense Tracker</h2>
      </div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
