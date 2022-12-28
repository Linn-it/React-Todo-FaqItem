import React from 'react'

const Status = ({lists}) => {
    const done = lists.filter(list => list.isDone)
  return (
    <div className='d-flex justify-content-between align-items-center m-4'>
        <p className='text-info fw-bold'>List Total : {lists.length}</p>
        <p className='badge bg-info p-2'>Done : {done.length}</p>
    </div>
  )
}

export default Status