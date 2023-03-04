import {Box,Divider,Select,Stack,VStack,Text, Image} from "@chakra-ui/react";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {RiDeleteBin6Line} from "react-icons/ri";
import {useNavigate} from "react-router-dom";
import Navbar from "../../../Components/Navbar";
import { baseUrl } from "../../../Utils/BaseUrl";
import styles from "./cartpage.module.css"



const Cartpage = () => {
    const [cartproducts,setCartProducts]=useState([])
    const navigate = useNavigate();
    const {jwtToken}=JSON.parse(localStorage.getItem('velvetToken')) || []
    let cookie=jwtToken.split(";")
    let cookies=cookie[0].split("=")
    const [data,setData]=useState([])
    const [amount,setAmount]=useState([])
// console.log(cartproducts)


useEffect(() => {
  const GetCartVal = () => {
    axios.get(`${baseUrl}/cart`,{
      headers:{
      Authorization:`Bearer ${cookies[1]}`
    }
  })
  .then((res)=>{
    // console.log(res.data)
    setAmount(res.data)
    setData(res.data.cartProducts)
  })}
  GetCartVal()
}, []);

useEffect(() => {
  const fetchItemData = async () => {
    const itemData = await Promise.all(data.map(async el => {
      const result = await axios.get(`http://localhost:8765/searchById?productId=${el.productDtoId}`);
      return result.data;
    }));
    setCartProducts(itemData);
  };
  if (data.length > 0) {
    fetchItemData();
  }
}, [data]);

const RemoveProduct = (product_Id) =>{
  axios.delete(`${baseUrl}/delete-cart?productId=${product_Id}`,{
    headers:{
      Authorization:`Bearer ${cookies[1]}`
    }
  })
  .then((res)=>{
    // console.log(res.data)
    window.location.reload(true)
  })
};
  

  
const proceedtopayment = () => {
    alert('Order Placed')
};
  
return (
      <>
      <Navbar/>
        <Box className={styles.mainbox}>
          <Box className={styles.leftbox}>
            <VStack className={styles.cartcount}>
              {cartproducts && cartproducts.length < 1 ? (
                <h1>
                  Your Cart is Empty <span></span>
                </h1>
              ) : (
                <h1>
                  {cartproducts && cartproducts.length}Items in your cart{" "}
                  <span></span>
                </h1>
              )}
            </VStack>
            {cartproducts && cartproducts.map((el)=>(
                <VStack key={el.productId}>
                  <Box className={styles.prodbox}>
                    <Box>
                      <Image src={el.imageUrl[0]} alt={el.productImage} />
                    </Box>
                    <Box className={styles.contentdiv}>
                      <Text>{el.productName}</Text>
                      <h3>{el.specification}</h3>
                      <h2>
                        <span>MRP ₹{el.market_price}</span>{" "}
                        <span>₹{el.sale_price}*</span>{" "}
                        <span>
                          {'10'}% OFF
                        </span>
                      </h2>
                      <p>Category :{el.ratings}</p>
                    </Box>
                    <Box className={styles.buttonbox}>
                      <RiDeleteBin6Line
                        onClick={() => RemoveProduct(el.productId)}
                      />
                      <p>{50-el.quantity} Qty</p>
                    </Box>
                  </Box>
                </VStack>
             ))}
          </Box>

          <Box className={styles.rightbox}>
            <Box className={styles.buybtnbox}>
              <VStack className={styles.cartcount}>
                <h1>
                  Cart Total <span> ₹{amount.payAmount}</span>
                </h1>
              </VStack>
              <VStack>
                <button className={styles.proceedbuy} onClick={proceedtopayment}>
                  Place Order
                </button>
              </VStack>
            </Box>
  
            <Box className={styles.billingbox}>
              <h1>Bill Summary</h1>
              <Box className={styles.cartprice}>
                <p>
                  <span className={styles.subtitle}>Cart Value</span>{" "}
                  <span>₹{amount.payAmount}</span>
                </p>
                <p>
                  <span className={styles.subtitle}>Delivery charges</span>{" "}
                  {amount.payAmount > 400 ? <span>FREE</span> : <span>₹40</span>}
                </p>
  
                {amount.payAmount > 400 ? (
                  ""
                ) : (
                  <p>To get free Delivery Add ₹{400 - amount.payAmount} </p>
                )}
              </Box>
              <Divider />
  
              <h1 className={styles.amountpaid}>
                <span className={styles.subtitle}>Amount to be paid</span>
                <span> ₹{amount.payAmount+40}</span>
              </h1>
            </Box>
          </Box>
        </Box>
      </>
    );
  };
  
  export default Cartpage;