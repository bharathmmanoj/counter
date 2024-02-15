import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {
    //useSelector hook to take value from store
    //useDispatch hook is used to access functions inside action
    const [range,setRange] = useState('');
    console.log("range",range);
    const dispatch = useDispatch();
    const count = useSelector(state=>state.counter.value)
  return (
    <>
    <div className='d-flex align-items-center justify-content-center w-100 flex-column'>Counter
        <h1 style={{fontSize:"80px", color:"red"}}>{count}</h1>
        <div className='mt-5'>
            <button className='btn btn-danger' onClick={()=>dispatch(decrement(Number(range)))}>DECREMENT</button>
            <button className='btn btn-success ms-2' onClick={()=>dispatch(increment(Number(range)))}>INCREMENT</button>
            <button className='btn btn-primary ms-2' style={{width:"110px"}} onClick={()=>dispatch(reset())}>RESET</button>
        </div>
    </div>
    <div className='mt-3 w-100'>
        <input type="text" placeholder="Enter the range" className='form-control border border-primary' onChange={(e)=>setRange(e.target.value)}/>
    </div>
    </>
    
    
  )
}

export default Counter