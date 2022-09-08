import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import withHeroInfo from "../../hoc/withHeroInfo";
import { allHeroesLoad } from "../../redux/actions";
import Style from './HeroStatistic.module.scss';

export const MetaPage = ({ extraListOfHeroes, ...props }) => {
    return (
        <div className={Style.metaContainer}>
            <h2>Meta</h2>
            <div>
                {extraListOfHeroes.map(heroItem => {
                    const { pickPercent, id, img, localized_name, winPercent, maxWinPercent, maximumPick, ...props } = heroItem;
                    return (
                        <div className={Style.heroRow}>
                            <HeroItem key={id} img={img} localized_name={localized_name} />
                            {
                                pickPercent.map((item, index) => <PickColumn pickPercent={item} lenghtLine={(item * 100) / maximumPick[index]} order={index} />)
                            }
                            { 
                                winPercent.map((item, index) => <PickColumn pickPercent={item} lenghtLine={(item * 100) / maxWinPercent[index]} order={index} />)
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export const HeroItem = ({ img, localized_name }) => {
    return (
        <div className={Style.heroItem}>
            <div className={Style.imgContainer}>
                <img className={Style.avatar} src={`https://api.opendota.com${img}`} />
            </div>
            <p className={Style.nameColumn}>{localized_name}</p>
        </div>
    )
}


export const PickColumn = ({ pickPercent, lenghtLine, order }) => {
    return (
        <div className={Style.pickColumn}  style={{ order: `${order}` }}>
            <p className={Style.pickPercent}>{pickPercent}</p>
            <div style={{ width: `${lenghtLine}%` }} className={Style.pickSegment}></div>
        </div>
    );
}

export default withHeroInfo(MetaPage);