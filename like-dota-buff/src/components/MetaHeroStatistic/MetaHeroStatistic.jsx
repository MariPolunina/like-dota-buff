import { useState } from "react";
import { HeroItem, PickItem } from "../HeroStatistic/HeroStatistic";
import Style from './MetaHeroStatistic.module.scss'

const sumValues = (reason, columns, listOfHeroes) => {
    return columns.map(item => {
        return listOfHeroes.map(pick => {
            if (item.length == 1) {
                return pick[`${item[0]}${reason}`]
            } else {
                return item.reduce((accumulator, currentValue) => accumulator + pick[`${currentValue}${reason}`])
            }
        })
    })
}
export const MetaHeroStatisticContainer = (props) => {
    const heroPick = sumValues('_pick', props.columns, props.listOfHeroes);
    const winPick = sumValues('_win', props.columns, props.listOfHeroes);
    const maxHeroPick = heroPick.map(item => Math.max(...item));
    const maxWinPick = winPick.map(item => Math.max(...item));
    const sumHeroPick = heroPick.map(item => {
        return item.reduce((a, b) => a + b, 0)
    });
    const winPercent = winPick.map((item, index) => {
        return item.map((win, winIndex) => {
            return ((win / heroPick[index][winIndex]) * 100).toFixed(2);
        })
    });
    const maxWinPercent = winPercent.map(item => Math.max(...item));
    const pickPercent = heroPick.map((item, index) => {
        return item.map(pick => ((pick / sumHeroPick[index]) * 100 * 10).toFixed(2))
    });
    const maximumPick = pickPercent.map(item => Math.max(...item));

    let extraListOfHeroes = props.listOfHeroes;
    extraListOfHeroes = extraListOfHeroes.map((item, index) => {
        let newItem = {};
        newItem.heroPick = heroPick.map(pick => pick[index]);
        newItem.maxHeroPick = maxHeroPick;
        newItem.winPick = winPick.map(pick => pick[index]);
        newItem.sumHeroPick = sumHeroPick;
        newItem.pickPercent = pickPercent.map(pick => pick[index]);
        newItem.maximumPick = maximumPick;
        newItem.winPercent = winPercent.map(pick => pick[index]);
        newItem.maxWinPercent = maxWinPercent;
        newItem.maxWinPick = maxWinPick;
        Object.assign(newItem, item);
        return newItem;
    })
    if (props.needFirstSort) {
        const columnSort = props.columnSort;
        extraListOfHeroes.sort((a, b) => {
            const firstElement = props.itsNumber ? Number(a[columnSort]) : a[columnSort].toLowerCase();
            const secondElement = props.itsNubmer ? Number(b[columnSort]) : b[columnSort].toLowerCase();
            if (firstElement < secondElement) {
                return 1;
            }
            if (firstElement > secondElement) {
                return -1;
            }
            return 0;
        });
    }

    return (
        <MetaHeroStatistic  {...props} extraListOfHeroes={extraListOfHeroes} />
    )
}

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
                                <TitleColumn classTitle={classTitle} needButtonSort={needButtonSort} valueTitle={valueTitle} valueButton={valueButton} handleButtonSort={handleNewOrder} key={valueTitle} /> :
                                <TitleColumn classTitle={classTitle} needButtonSort={needButtonSort} valueTitle={valueTitle} key={valueTitle} />
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

export default MetaHeroStatistic;

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