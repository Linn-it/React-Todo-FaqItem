import React from 'react'

const Faqitem = ({faqitem,showAns}) => {

    const rotate = faqitem.isShow ? 'down' : '';
    const questionBg = faqitem.isShow ? 'bg-secondary text-white' : '';
    
  return (
    <>
    <div onClick={showAns.bind(null,faqitem.id)} className='m-4'>
        <h3 className={`${questionBg} border border-dark rounded-3 p-3 d-flex`}>{faqitem.question}
        <span className={`${rotate} ms-auto`}>&gt;</span>
        </h3>
        { faqitem.isShow && <p className='mb-0 mt-3 ms-5 animate__animated animate__backInLeft'>{faqitem.answer}</p>}
    </div>
    </>
  )
}

export default Faqitem