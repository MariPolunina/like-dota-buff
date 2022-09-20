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
    const { height, width } = useWindowDimensions();
    // console.log('width - ', width, 'height - ', height);
    return (
        <div className={Style.allHeroesCard}>
            {
                itemsArr.map(item => {
                    const {created} =item;
                    let newComponents=[];
                    if(created){
                        const {components} =item;
                        newComponents=components.map(component=>{
                            const newElem=itemsArr.find(findItem=>findItem.name==component);
                            return newElem
                        })
                    }                  
                    if (item.hasOwnProperty('hint') && (item.cost>0)) {
                        return <ItemSkeleton item={item} windowInnerHeight={height} windowInnerWidth={width} newComponents={newComponents} />
                    }
                })
            }
        </div>
    )
}

export default AllItems;

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}