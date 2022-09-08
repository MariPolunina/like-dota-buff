import { useEffect } from "react";
import { useState } from "react";
import withHeroInfo from "../../hoc/withHeroInfo";
import { HeroItem, PickColumn } from "../HeroStatistic/HeroStatistic";
import Style from './MetaHeroStatistic.module.scss'

const MetaHeroStatistic = ({ extraListOfHeroes, handleMatchesPlayed }) => {
    const [sortMost, setSortMost] = useState(true);
    const valueButton = sortMost ? '↓' : '↑'

    const handleNewOrder = () => {
        let sortExtraList=[...extraListOfHeroes];
        sortExtraList.sort((a, b) => {
            const firstElement=Number(a['heroPick']);
            const secondElement=Number(b['heroPick']);
            if (firstElement > secondElement) {
                return sortMost ? 1 : -1;
            }
            if (firstElement < secondElement) {
                return sortMost ? -1 : 1;
            }
            return 0;
        });
        setSortMost(!sortMost);
        handleMatchesPlayed(sortExtraList);
    }

    return (
        <div>
            <div className={Style.metaContainer}>
                <div>
                    <div className={Style.heroRow}>
                        <h3 className={Style.heroItem}>Hero</h3>
                        <div className={Style.pickColumn}>
                            <h3>Matches played</h3>
                            <button onClick={handleNewOrder} >{valueButton}</button>
                        </div>
                        <h3 className={Style.pickColumn}>Pick rate</h3>
                        <h3 className={Style.pickColumn}>Win rate</h3>
                    </div>
                    {extraListOfHeroes.map(heroItem => {
                        const { pickPercent, id, img, localized_name, winPercent, maxWinPercent, maximumPick, sumHeroPick, heroPick, maxHeroPick } = heroItem;
                        return (
                            <div className={Style.heroRow}>
                                <HeroItem key={id} img={img} localized_name={localized_name} />
                                {
                                    heroPick.map((item, index) => <PickColumn pickPercent={item} lenghtLine={(item * 100) / maxHeroPick[index]} order={index} />)
                                }
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
        </div>
    )
}

export default withHeroInfo(MetaHeroStatistic);