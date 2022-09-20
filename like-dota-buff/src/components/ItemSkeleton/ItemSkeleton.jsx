import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Style from './ItemSkeleton.module.scss'

const ItemSkeleton = ({ item, windowInnerHeight, windowInnerWidth, newComponents }) => {
    const { dname, id, img } = item;
    if(dname=='Fallen Sky'){
        
    }
    // console.log(item);
    const srcImg = `https://api.opendota.com${img}`;
    const [extraInfo, setExtraInfo] = useState(false);
    const [pageX, setPageX] = useState(140);
    const [pageY, setPageY] = useState(10);

    const handleVisible = () => {
        setExtraInfo(true);
    }
    const handleInvisible = () => {
        setExtraInfo(false);
    }
    const handleMovementInside = (e) => {

        setPageX(e.nativeEvent.offsetX + 15);
        setPageY(e.nativeEvent.offsetY + 15);
    }

    return (
        <div key={id} className={Style.heroesCard}>
            <div className={Style.imgContainer}>
                <img src={srcImg} className={Style.avatar} onMouseEnter={handleVisible} onMouseLeave={handleInvisible} onMouseMove={handleMovementInside} >
                </img>
            </div>
            <p className={Style.nameHero}>{dname}</p>
            {extraInfo && <ExtraInfoItem pageX={pageX} pageY={pageY} srcImg={srcImg} item={item} windowInnerHeight={windowInnerHeight} windowInnerWidth={windowInnerWidth} newComponents={newComponents} />}
        </div>
    )
}

function countHidden(element, innerHeight, innerWidth) {
    const elementRect = element.getBoundingClientRect();
    const elementHides = {
        up: Math.max(0, 0 - elementRect.top),
        left: Math.max(0, 0 - elementRect.left),
        down: Math.max(0, elementRect.bottom - innerHeight),
        right: Math.max(0, elementRect.right - innerWidth)
    };
    return elementHides;
}

const ExtraInfoItem = ({ item, pageX, pageY, srcImg, windowInnerHeight, windowInnerWidth, newComponents }) => {
    const { dname, hint, cost, notes, attrib, cd, created, lore, mc } = item;
    const areaAbout = useRef(null);
    const [topCorner, setTopCorner] = useState(0);
    const [leftCorner, setLeftCorner] = useState(0);
    const [notChangeDown, setNotChangeDown] = useState(false);
    const [notChangeRight, setNotChangeRight] = useState(false);

    useEffect(() => {
        let newtopCorner = pageY;
        let newleftCorner = pageX;
        const newElementhides = countHidden(areaAbout.current, windowInnerHeight, windowInnerWidth);
        const { down, right } = newElementhides;
        if (down > 0) {
            newtopCorner = -down;
            setNotChangeDown(true);
        }
        else if (right > 0) {
            newleftCorner = -right;
            setNotChangeRight(true);
        };
        if (!notChangeDown && !notChangeRight) {
            setTopCorner(newtopCorner);
            setLeftCorner(newleftCorner);
        }
        else if (!notChangeDown) {
            setTopCorner(newtopCorner);
        }
        else if (!notChangeRight) {
            setLeftCorner(newleftCorner);
        }
        // console.log('pageY', pageY, 'pageX', pageX);
        // console.log('down', down, 'right', right);

    }, [pageX, pageY])
    return (
        <div ref={areaAbout} className={Style.aboutItemContainer} style={{ top: `${topCorner}px`, left: `${leftCorner}px` }}>
            <div className={Style.headerItem}>
                <img src={srcImg} className={Style.imgHeader} />
                <div className={Style.aboutItemInfo}>
                    <h3 className={Style.dnameField}>{dname}</h3>
                    <p className={Style.costField}>{cost}</p>
                </div>
            </div>
            <div className={Style.mcDc}>
                <div>{mc}</div>
                <div>{cd}</div>
            </div>
            <div>
                {attrib.map(item => {
                    const { header, value, footer } = item;
                    return (
                        <p>
                            {`${header} ${value} ${footer}`}
                        </p>
                    )
                })}
            </div>
            <div>
                {hint.map(item => <div>{item}</div>)}
            </div>
            <div className={Style.notesContainer}>
                {notes}
            </div>
            <div className={Style.loreContainer}>
                {lore}
            </div>
            <div className={Style.buildsFrom}>
                {
                    created &&
                    <div>
                        <div>Builds from</div>
                        <div className={Style.subItemsContainer}>
                            {
                                newComponents.map(component => {
                                    if(component!=undefined){
                                        const { cost, img, id } = component;
                                        return <SubItem id={id} cost={cost} img={img} />
                                    }
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

const SubItem = ({ cost, img }) => {
    return (
        <div className={Style.subItemConteiner}>
            <img src={`https://api.opendota.com${img}`} />
            <p>{cost}</p>
        </div>
    )
}

export default ItemSkeleton;

