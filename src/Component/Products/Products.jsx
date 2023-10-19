import React from "react";
import './Products.module.css'
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, increaseByAmount } from "../../Redux/CounterSlice";

export default function Products() {

  let {count} = useSelector((state)=>state.counter);
  console.log(count);
  let dispatch = useDispatch()

  return <>
  {/* <h2>counter:{count}</h2>
  <button onClick={()=>dispatch(increase())} className="btn btn-success mx-2">increase</button>
  <button onClick={()=>dispatch(decrease())} className="btn btn-success mx-2">decrease</button>
  <button onClick={()=>dispatch(increaseByAmount(10))} className="btn btn-success mx-2">increaseByAmount</button>
   */}
  
  </>
}
