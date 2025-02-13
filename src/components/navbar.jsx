import { IoFastFoodSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useContext, useEffect } from "react";
import { dataContext } from "../context/usercontext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
const Navbar=()=>{
  const {input,setinput,cat,setcat,show,setshow} = useContext(dataContext);
  useEffect(()=>{
    let newlist = food_items.filter((item)=>{
      return(item.food_name.includes(input)||item.food_name.toLowerCase().includes(input));
    })
    setcat(newlist);
  },[input])
  const items = useSelector(state=>state.card);
          return(
                    <>
<div className="nav-container">
  <div className="logo">
    <p>Food</p>
    <IoFastFoodSharp />
  </div>
  <form action="" className="form" onSubmit={(e)=>e.preventDefault()}>
  <FaSearch className="search"/>
  <input type="text" placeholder="search items..." onChange={(e)=>setinput(e.target.value)} value={input}></input>
  </form>
  <div className="shoping-bag"onClick={()=>{
    setshow(true)
  }}>
    <span className="span">{items.length}</span>
  <RiShoppingBag4Line />
  </div>
  </div>
                    </>
          )
}
export default Navbar;