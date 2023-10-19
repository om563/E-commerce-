import React, { useContext, useState } from "react";
import './FeaturedProduct.module.css'
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader, { BallTriangle } from 'react-loader-spinner'
import { cartContext } from "../../Context/CartContext";

import toast from "react-hot-toast";
import { wishContext } from "../../Context/WishContext";

export default function FeaturedProduct() {

  let {addToWishList,allWishItems,setAllWishItems,getAllWish} = useContext(wishContext);
;
  
  async function addWish(id) {
    let {data} = await addToWishList(id);
    if(data.status==="success"){
      toast.success("it has been Successfully added");
    }
    getAllWish();

  }



  let {addToCart,setNumberOfCartItems} = useContext(cartContext);
  

  async function addProduct(id){
    let {data} = await addToCart(id);
    if(data.status=="success"){
      toast.success(data.message,{
        duration: 1000,
        position: 'top-center',
      });
      setNumberOfCartItems(data.numOfCartItems);
    
      
    }
  }

  function getFeaturedProduct(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then((res)=>res)
    .catch((err)=>err)
  }
  let {data,isLoading}  =  useQuery("featuredProduct",getFeaturedProduct);

  return <>
  

   

  {isLoading?<div className='w-100 py-5 d-flex justify-content-center '>
  <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
  </div>:
  <div className="row">
  {data?.data.data.map((product)=>
    <div key={product.id} className="col-md-2 product py-2">
      <Link to={`/productDetails/${product.id}`}>
        <img src={product.imageCover} className='w-100' alt="" />
        <span className='text-main font-sm fw-bolder '> {product.category.name}</span>
        <h2 className='h5'>{product.title.split(" ").slice(0,2).join(" ")}</h2>
        <div className='d-flex justify-content-between mt-3'>
          <span >{product.price} EGP</span>
          <span><i className='fas fa-star rating-color '></i>{product.ratingsAverage}</span>
        </div>
      </Link>
      <div className="d-flex justify-content-between align-items-center">
        <button onClick={()=>addProduct(product.id)}  className='btn bg-main text-white w-100 btn-sm mt-2  '> add to cart</button>
      <i onClick={() => addWish(product.id)} className={`fa-solid fa-heart fs-3 p-1 cursor-pointer iconLove ${allWishItems && allWishItems.find((item) => item._id === product._id)? "text-danger": ""}`}></i>
      </div>
    </div>
   )}
  </div>
  }
  
  
  </>
}



  

  
    
  