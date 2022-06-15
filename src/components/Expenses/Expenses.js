import React,{useState} from 'react'

import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [enteredYear, setEnteredYear] = useState('2020');

  const saveFilteredYear =(selectedYear) =>{
    setEnteredYear(selectedYear);
  } 

  const filteredExpenses = props.expenses.filter(expense =>{
    return expense.date.getFullYear().toString()===enteredYear;
  })

  
    
  return (
    <div>
    <Card className='expenses'>
      <ExpenseFilter selected = {enteredYear} onFilterYear = {saveFilteredYear}/>
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpenseList expenses = {filteredExpenses}/>
      
    </Card>
    </div>
  )
}
export default Expenses;
