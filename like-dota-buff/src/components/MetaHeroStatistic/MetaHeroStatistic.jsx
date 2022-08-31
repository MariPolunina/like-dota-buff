import { useEffect } from "react";
import { useState } from "react";
import withHeroInfo from "../../hoc/withHeroInfo";
import { HeroItem, PickItem } from "../HeroStatistic/HeroStatistic";
import Style from './MetaHeroStatistic.module.scss'

const MetaHeroStatistic = ({ listOfHeroes, pickPercent, winPercent, maxWinPercent, maximumPick, sumHeroPick, heroPick }) => {
    const [maxHeroPick, setMaxHeroPick] = useState([]);
    useEffect(() => {
        setMaxHeroPick(heroPick.map(item => Math.max(...item))
        );
    }, [])
    return (
        <div className={Style.metaContainer}>
            <h2>Most</h2>
            <div className={Style.heroContainer}>
                <div className={Style.heroList}>
                    <h2>Hero</h2>
                    {listOfHeroes.map(item => <HeroItem key={item.id} img={item.img} localized_name={item.localized_name} />)}
                </div>
                <div className={Style.columnList} >
                    {
                        heroPick.map((item, index)=><PickItem pickPercent={item} maxPick={maxHeroPick[0]} titleColumn={'Matches Played'} order={index} />)
                    }
                    {
                        pickPercent.map((item, index) => <PickItem pickPercent={item} maxPick={maximumPick[index]} titleColumn={'Pick %'} order={index} />)
                    }
                    {
                        winPercent.map((item, index) => <PickItem pickPercent={item} maxPick={maxWinPercent[index]} titleColumn={'Win %'} order={index} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default withHeroInfo(MetaHeroStatistic);