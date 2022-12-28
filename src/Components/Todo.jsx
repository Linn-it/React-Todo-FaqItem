import React, { useState } from 'react'
import Input from './Input'
import ListItem from './ListItem'
import Status from './Status';

const Todo = () => {

    const [lists,setList] = useState([
        {
            id : 1,
            text : 'to read js book',
            isDone : false,
        },
        {
            id : 2,
            text : 'react revision',
            isDone : true,
        },
        {
            id : 3,
            text : 'Have you finished vue class?',
            isDone : false,
        }
    ]);

    const delList = id => {
        setList(lists.filter(list => list.id !== id))
    }

    const updateCheck = id => {
        setList(lists.map(list =>{
            if(list.id === id){
                list.isDone = !list.isDone;
            }
            return list;
        }))
    }

    const addItem = text => {
        const newItem = {
            id : Date.now(),
            text,
            isDone : false,
        }
        setList([...lists,newItem]);
    }

  return (
    <div>
        <h3 className='m-4'>Todo List</h3>
        <div className='row m-4 g-2'>
            <Input addItem={addItem}/>
        </div>
        <hr />
        <Status lists={lists}/>
        <ul className='list-group m-4'>
            {lists.map(list => <ListItem list={list} updateCheck={updateCheck} delList={delList} key={list.id}/>)}
        </ul>
    </div>
  )
}

export default Todo