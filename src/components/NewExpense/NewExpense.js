import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);  //onAddExpense라는 속성으로 받은 함수를 호출 ,expenseData함수의 데이터를 전달 onAddExpense 속성에 지정된 함수에
  }

  return (
  <div className="new-expense">
    <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
  </div> 
  );
}
export default NewExpense;