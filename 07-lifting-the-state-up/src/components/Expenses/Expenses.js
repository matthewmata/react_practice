import React, { useState } from "react";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  const [expenses, setExpenses] = useState(props.items)
  const filterHandler = (newYear) => {
    const filteredExpenses = props.items.filter((item) => {
      // console.log('filter', item.date.getFullYear());
      if (`${item.date.getFullYear()}` === newYear) {
        return item;
      }
    });
    setExpenses(filteredExpenses);
  }
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        year={year}
        setYear={setYear}
        filterHandler={filterHandler}
      />
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
