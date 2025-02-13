import { useDispatch } from "react-redux";
import image1 from "../assets/image1.jpg";
import { IoTrashBin } from "react-icons/io5";
import { Remove } from "../redux/cardslice";
import { increment } from "../redux/cardslice";
import { decrement } from "../redux/cardslice";
const Card2=({name,id,price,image,qty})=>{
   const dispatch = useDispatch();     
          return(
<div className="cardy">
          <div className="photo-naam">
          <div className="photo">
  <img src={image} alt="" className="pic"/>
                    </div>
          <div className="naam">
          <div>{name}</div>
          <div className="btn-container">
<button className="btan" onClick={()=>
        qty>1?dispatch(decrement(id)):qty}>-</button>
                    <span className="spam">{qty}</span>
<button className="btan" onClick={()=>dispatch(increment(id))}>+</button>
          </div>
          </div>
          </div>
          <div className="cost">
                    <span className="spam2">{price}</span>
<IoTrashBin className="bin" onClick={()=>dispatch(Remove(id))}/>

          </div>
</div>
          )
}
export default Card2;