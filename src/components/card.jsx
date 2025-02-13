 import { LuLeafyGreen } from "react-icons/lu";
 import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { Add } from "../redux/cardslice";
 const Card=({name,image,id,price,type})=>{
  const dispatch = useDispatch()
return(
          <div className="card-container">
<div className="image-container ">
<img src={image} alt="" className="image"/>
          </div>
          <div className="name">
            {name}
          </div>
          <div className="pri-veg">
          <div className="price">
                    <p>{price}</p>
          </div>
          <div className="veg-non">{type==="veg"?<LuLeafyGreen />:<GiChickenOven />}
          <span>{type}</span>
          </div>
          </div>
<button className="btn" onClick={()=>dispatch(Add({id:id,name:name,price:price,image:image,qty:1}))}>Add to Dish</button>
          </div>
)
}
export default Card;