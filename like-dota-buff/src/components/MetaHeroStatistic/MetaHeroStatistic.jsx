import { useEffect } from "react";
import { useState } from "react";
import withHeroInfo from "../../hoc/withHeroInfo";
import { HeroItem, PickColumn, PickItem } from "../HeroStatistic/HeroStatistic";
import Style from './MetaHeroStatistic.module.scss'

const MetaHeroStatistic = ({ extraListOfHeroes, handleMatchesPlayed, columnSort, pickItemList, titleColumnsList }) => {
    const [sortMost, setSortMost] = useState(true);
    const valueButton = sortMost ? '↓' : '↑'

    const handleNewOrder = () => {
        let sortExtraList = [...extraListOfHeroes];
        sortExtraList.sort((a, b) => {
            const firstElement = Number(a[columnSort]);
            const secondElement = Number(b[columnSort]);
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
                <div className={Style.heroRow}>
                    {
                        titleColumnsList.map(item => {
                            const { classTitle, needButtonSort, valueTitle } = item;
                            return needButtonSort ?
                                <TitleColumn classTitle={classTitle} needButtonSort={needButtonSort} valueTitle={valueTitle} valueButton={valueButton} handleButtonSort={handleNewOrder} /> :
                                <TitleColumn classTitle={classTitle} needButtonSort={needButtonSort} valueTitle={valueTitle} />
                        })
                    }
                </div>
                {extraListOfHeroes.map(heroItem => {
                    const { id, img, localized_name } = heroItem;
                    return (
                        <div className={Style.heroRow}>
                            <HeroItem key={id} img={img} localized_name={localized_name} />
                            {
                                pickItemList.map(item => {
                                    const { mapList, maxList } = item;
                                    return <PickItem mapList={heroItem[mapList]} maxList={heroItem[maxList]} />
                                })
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default withHeroInfo(MetaHeroStatistic);

export const TitleColumn = ({ valueTitle, needButtonSort, classTitle, ...props }) => {
    return (
        <>
            {
                needButtonSort ?
                    <div className={Style[classTitle]}>
                        <h3>{valueTitle}</h3>
                        <button onClick={props.handleButtonSort} >{props.valueButton}</button>
                    </div> :
                    <h3 className={Style[classTitle]}>
                        {valueTitle}
                    </h3>
            }
        </>
    )
}