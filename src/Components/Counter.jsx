import React, { useState } from 'react'

const Counter = ({start,increase,decrease}) => {

  return (
        <div className='border border-dark p-4 m-4 rounded-3 d-flex justify-content-between align-items-center'>
            <h3>Counter : {start}</h3>
            <div>
                <button onClick={decrease} className='btn btn-primary me-2'><i className='bi bi-dash'></i></button>
                <button onClick={increase} className='btn btn-primary'><i className='bi bi-plus'></i></button>
            </div>
        </div>
  )
}

export default Counter