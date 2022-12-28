import React, { useState } from 'react'
import './App.css';
import Counter from './Components/Counter';
import Faqitem from './Components/Faqitem';
import Todo from './Components/Todo';

const App = () => {

  // --------------- Counters ---------------
  // const [count,setCount] = useState(0);

  // const increase =_=> setCount(count+1);
  // const decrease =_=> {
  //   if(count > 0){
  //     setCount(count-1);
  //   }
  // }

  // -------------- Faqitems ---------------
  const [faqitems,setfaqitem] = useState([
    {
      id : 1,
      question : 'What are you doing now?',
      answer : "I'm learning for react js",
      isShow : false,
    },
    {
      id : 2,
      question : 'Are you graduated?',
      answer : "I am fourth years CS Student",
      isShow : false,
    },
    {
      id : 3,
      question : 'Have you finished vue class?',
      answer : "No, I am studying",
      isShow : false,
    }
  ])

  const showAns = id => {
    setfaqitem(faqitems.map(faqitem => {
      if(faqitem.id === id){
        faqitem.isShow = !faqitem.isShow;
      }else{
        faqitem.isShow = false;
      }
      return faqitem;
    }))
  }

  return (
    <>
      {/* <Counter start={count} increase={increase} decrease={decrease}/> */}
      <Todo/>
      <h3 className="ms-4 mt-5">FaqItem</h3>
      {faqitems.map(faqitem => <Faqitem key={faqitem.id} faqitem={faqitem} showAns={showAns}/>)}

    </>
  )
}

export default App