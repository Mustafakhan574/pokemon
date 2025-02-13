import { IoApps } from "react-icons/io5";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiNoodles } from "react-icons/gi";
import { MdOutlineDinnerDining } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburger } from "react-icons/pi";
 const Categories = [{
          id:1,
          name:"All",
          image:<IoApps />,
},
{
          id:2,
          name:"breakfast",
          image:<MdOutlineFreeBreakfast />,
},
{
          id:3,
          name:"soups",
          image:<TbSoup />,
},
{
          id:4,
          name:"pasta",
          image:<GiNoodles />,
},
{
          id:5,
          name:"main_course",
          image:<MdOutlineDinnerDining />,
},
{
          id:6,
          name:"pizza",
          image:<GiFullPizza />,
},
{
          id:7,
          name:"burger",
          image:<PiHamburger />,
}
]
export default Categories;