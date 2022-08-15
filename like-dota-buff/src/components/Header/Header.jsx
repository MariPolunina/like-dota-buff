
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Style from './Header.module.scss'

const Header = (props) => {
    const menuItems = useSelector(state => {
        return state.headerReducer.nemuItems;
    });
    const [visibleSubMenu, setVisibleSubMenu] = useState('null');
    const handleOver = ( item ) => {
        console.log(item);
        setVisibleSubMenu(<SubMenu item={item} />)
    }
    return (
        <div className={Style.fullContainer}>
            <nav className={Style.mainMenu}>
                {
                    menuItems.map(item => <Link to={item.pathTo} key={item.mainMenuItem} onMouseOver={() => handleOver(item)} className={Style.menuItem} >{item.mainMenuItem}</Link>)
                }
            </nav>
            <nav className={Style.subMenu}>
                {visibleSubMenu}
            </nav>
        </div>
    )
}

const SubMenu = ({ item }) => {
    console.log(item);
    return (
        <div className={Style.subMenuContainer}>
            {
                item.subMenuItems.map(itemSub => <Link to={itemSub.pathTo} key={itemSub.subMenuItem} className={Style.menuItem}>{itemSub.subMenuItem}</Link>)
            }
        </div>
    )
}

export default Header;