import React, { useRef } from 'react'

const Input = ({addItem}) => {
    const inputText = useRef();
    const addBtn =_=> {
        addItem(inputText.current.value);
        inputText.current.value = '';
    }
  return (
    <>
        <div className="col-8">
                <input ref={inputText} type="text" className='form-control' />
            </div>
            <div className="col-4">
                <button onClick={addBtn} className='btn btn-primary w-100'>Add</button>
            </div>
    </>
  )
}

export default Input