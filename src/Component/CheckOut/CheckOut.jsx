import React, { useContext, useState } from "react";
import { Formik, useFormik, validateYupSchema } from "formik";
import * as yup from "yup"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

export default function CheckOut() {

let{onlinePayment} = useContext(cartContext);
let {id} = useParams()

  async function chekout(values) {
    let {data} = await onlinePayment(id,values);
    if(data.status=="success"){
      window.location.href = data.session.url;
    }
    
  }








let formik = useFormik({
  initialValues:{

    details:"",
    phone:"",
    city:"",
  
  },onSubmit:chekout
})

  return <>
  
  <div  className="container w-75 m-auto py-4">

    <form onSubmit={formik.handleSubmit}>

      <label  className="mt-4" htmlFor="details">Details:</label>
      <input value={formik.values.details} onChange={formik.handleChange}  className="form-control" id="details" type="text" name="details" />

      <label className="mt-4" htmlFor="Phone">Phone</label>
      <input value={formik.values.Phone} onChange={formik.handleChange}  className="form-control" id="Phone" type="Phone" name="Phone" />

      <label  className="mt-4" htmlFor="city">city:</label>
      <input value={formik.values.city} onChange={formik.handleChange}  className="form-control" id="city" type="text" name="city" />

      <button disabled={!(formik.dirty&&formik.isValid)} className="btn btn-outline-info text-info w-100 mt-4">Pay Now</button>
      
    </form>

  </div>
  
  </>
}
