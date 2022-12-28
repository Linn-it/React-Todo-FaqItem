import React from 'react'

const ListItem = ({list,delList,updateCheck}) => {
    const textDeco = list.isDone ? 'text-decoration-line-through fw-bold' : '';
  return (
    <li className='list-group-item d-flex animate__animated animate__fadeInDown'>
        <input onChange={_=>updateCheck(list.id)} type="checkbox" className='form-check-input me-2' checked={list.isDone} />
        <span className={`${textDeco}`}>{list.text}</span>
        <button onClick={delList.bind(null,list.id)} className='btn btn-sm btn-danger ms-auto'>Delete</button>
    </li>
  )
}

export default ListItem