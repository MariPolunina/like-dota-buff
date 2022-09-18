import { useState } from 'react';
import Style from './ItemSkeleton.module.scss'

const ItemSkeleton = ({ item }) => {
    const { dname, id, img, hint, cost, notes, attrib, cd, created, lore } = item;
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
        setPageX(e.nativeEvent.offsetX + 10);
        setPageY(e.nativeEvent.offsetY + 10);
    }
    return (
        <div key={id} className={Style.heroesCard}>
            <div className={Style.imgContainer}>
                <img src={srcImg} className={Style.avatar} onMouseEnter={handleVisible} onMouseLeave={handleInvisible} onMouseMove={handleMovementInside} >
                </img>
            </div>
            <p className={Style.nameHero}>{dname}</p>
            {extraInfo && <ExtraInfoItem pageX={pageX} pageY={pageY} srcImg={srcImg} dname={dname} cost={cost} hint={hint} notes={notes} lore={lore} />}
        </div>
    )
}

const ExtraInfoItem = ({ pageX, pageY, srcImg, dname, cost, hint, notes, lore }) => {
    return (
        <div className={Style.aboutItemContainer} style={{ top: `${pageY}px`, left: `${pageX}px` }}>
            <div className={Style.headerItem}>
                <img src={srcImg} className={Style.imgHeader} />
                <div className={Style.aboutItemInfo}>
                    <h3 className={Style.dnameField}>{dname}</h3>
                    <p className={Style.costField}>{cost}</p>
                </div>
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
        </div>
    )
}

export default ItemSkeleton;