import Categories from "../category";
import Navbar from "../components/navbar";
import Card from "../components/card";
import Card2 from "../components/card2";
import { food_items } from "../food";
import { useContext, useState } from "react";
import { dataContext } from "../context/usercontext";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
const Home=()=>{
        const{cat,setcat,input,show,setshow} = useContext(dataContext)
          function filter(category){
          if(category==="All"){
          setcat(food_items);
          }
   else{
        let newlist = food_items.filter((item)=>{
           return item.food_category === category;
                    }); 
                    setcat(newlist);     
          }}
const products = useSelector(state=>state.card);
const alltotal = products.reduce((total,counter)=>{
       return total+counter.qty*counter.price;
},0);
const deleveryfee = 20;
const taxes = alltotal*0.5/100;
const total = Math.floor(alltotal+deleveryfee+taxes);

          return(
                    <>
          <Navbar/>
          {!input?<div className="categories" >
          <br />
         {Categories.map((item)=>{
          return(
          <div className="categories-item"onClick={()=>filter(item.name)}>
          {item.name}
          <br />
          {item.image}
                    </div>
)
         })} 
</div>:null}
<div className="array-container">
        {cat.length>0?(cat.map((items)=>{
                    return(
                    <Card name={items.food_name} image={items.food_image} price={items.price} id={items.id} type={items.food_type}/>
                );
          })
        ):(
          <div><h1>No Data Found</h1></div>
          )}
          
</div>
<div className={`slide-container ${show ? "slide-in" : "slide-out"}`}>
        <header className="header">
                <span>Order Items</span>
                <ImCross onClick={()=>setshow(false)}/>
        </header>
        {products.length>0?(
        <>
        <div className="products">
               { products.map((item)=>(
                
<Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} className="card2"/>
                
               ))}
               <div className="cost-container">
                <h1>PRICE details</h1>
<div className="subtotal">
        <span>Subtotal</span>
        <span>{alltotal}</span>
        </div>
                <div className="delevery">
                        <span>Delivery Fee</span>
                        <span>{deleveryfee}</span>
                </div>
                <div className="taxes">
                        <span>taxes</span>
                        <span>{taxes}</span>
                </div>
                <div className="total">
                        <span>Total</span>
                        <span>{total}</span>
                </div>
<button className="btn">Place Order</button>
                </div> 
        </div>
        </>
):(
<div className="empty">
                <h1>Empty Card</h1>
                </div>
        )} 
</div>
                    </>
          );
};
export default Home;
