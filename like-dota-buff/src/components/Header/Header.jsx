
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header=(props)=>{
    const menuItems=useSelector(state=>{
        return state.headerReducer.nemuItems;
    })
    return(
        <nav>
            {
                menuItems.map(item=><Link to={item.pathTo} key={item.mainMenuItem} >{item.mainMenuItem}</Link>)
            }
        </nav>
    )
}

export default Header;