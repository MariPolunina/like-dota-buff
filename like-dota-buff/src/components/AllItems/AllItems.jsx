import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allItemsLoad } from "../../redux/actions";
import ItemSkeleton from "../ItemSkeleton/ItemSkeleton";
import Style from './AllItems.module.scss'

const AllItems = (props) => {
    const dispatch = useDispatch();
    const [itemsArr, setItemsArr] = useState([]);
    useEffect(() => {
        dispatch(allItemsLoad());
    }, []);
    const items = useSelector(state => {
        return state.allItemsReducer.items
    })
    // const itemsName = Object.keys(items);
    useEffect(() => {
        if (items.length != 0) {
            let newitemsArr = [];
            for (const key in items) {
                let item = items[key];
                item['name'] = key;
                newitemsArr = [...newitemsArr, item]
            }
            setItemsArr(newitemsArr);
        }

    }, [items])
    // console.log(itemsArr)
    return (
        <div className={Style.allHeroesCard}>
            {
                itemsArr.map(item => {                    
                    if (item.hasOwnProperty('hint')) {
                        return <ItemSkeleton item={item} />
                    }
                })
            }
        </div>
    )
}

export default AllItems;