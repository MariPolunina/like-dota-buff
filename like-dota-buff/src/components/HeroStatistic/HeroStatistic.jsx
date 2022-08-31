import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import withHeroInfo from "../../hoc/withHeroInfo";
import { allHeroesLoad } from "../../redux/actions";
import Style from './HeroStatistic.module.scss';

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

const HeroStatistic = ({ columns }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allHeroesLoad());
    }, []);
    const listOfHeroes = useSelector(state => {
        return state.allHeroesReducer.heroes;
    });
    // const [columns, setColumns] = useState([[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3], [4], [5], [6], [7, 8]]);
    const [heroPick, setHeroPick] = useState([]);
    const [winPick, setWinPick] = useState([]);
    const [sumHeroPick, setSumHeroPick] = useState([]);

    const [pickPercent, setPickPercent] = useState([]);
    const [maximumPick, setMaximumPick] = useState([]);
    const [winPercent, setWinPercent] = useState([]);
    const [maxWinPercent, setMaxWinPercent] = useState([]);
    useEffect(() => {
        if (listOfHeroes.length > 0) {
            setHeroPick(sumValues('_pick', columns, listOfHeroes));
            setWinPick(sumValues('_win', columns, listOfHeroes));
        }
    }, [listOfHeroes]);

    useEffect(() => {
        if (heroPick.length > 0) {
            setSumHeroPick(heroPick.map(item => {
                return item.reduce((a, b) => a + b, 0)
            }));
        }
    }, [heroPick]);

    useEffect(() => {
        if ((winPick.length > 0) && (heroPick.length > 0)) {
            setWinPercent(winPick.map((item, index) => {
                return item.map((win, winIndex) => {
                    return ((win / heroPick[index][winIndex]) * 100).toFixed(2);
                })
            }));
        }
    }, [winPick, heroPick])

    useEffect(() => {
        if (winPercent.length > 0) {
            setMaxWinPercent(winPercent.map(item => Math.max(...item)));
        }
    }, [winPercent]);

    useEffect(() => {
        if ((heroPick.length > 0) && (sumHeroPick.length > 0)) {
            setPickPercent(heroPick.map((item, index) => {
                return item.map(pick => ((pick / sumHeroPick[index]) * 100 * 10).toFixed(2))
            }));
        }
    }, [heroPick, sumHeroPick]);

    useEffect(() => {
        if (pickPercent.length > 0) {
            setMaximumPick(pickPercent.map(item => Math.max(...item)));
        }
    }, [pickPercent])

    return (
        <MetaPage listOfHeroes={listOfHeroes} pickPercent={pickPercent} winPercent={winPercent} maxWinPercent={maxWinPercent} maximumPick={maximumPick} />
        // <div className={Style.metaContainer}>
        //     <h2>Meta</h2>
        //     <div className={Style.heroContainer}>
        //         <div className={Style.heroList}>
        //             <h2>Hero</h2>
        //             {listOfHeroes.map(item => <HeroItem key={item.id} img={item.img} localized_name={item.localized_name} />)}
        //         </div>
        //         <div className={Style.columnList} >
        //             {
        //                 pickPercent.map((item, index) => <PickItem pickPercent={item} maxPick={maximumPick[index]} titleColumn={'Pick %'} order={index} />)
        //             }
        //             {
        //                 winPercent.map((item, index) => <PickItem pickPercent={item} maxPick={maxWinPercent[index]} titleColumn={'Win %'} order={index} />)
        //             }
        //         </div>
        //     </div>
        // </div>
    )
}


const MetaPage = ({ listOfHeroes, pickPercent, winPercent, maxWinPercent, maximumPick }) => {
    return (
        <div className={Style.metaContainer}>
            <h2>Meta</h2>
            <div className={Style.heroContainer}>
                <div className={Style.heroList}>
                    <h2>Hero</h2>
                    {listOfHeroes.map(item => <HeroItem key={item.id} img={item.img} localized_name={item.localized_name} />)}
                </div>
                <div className={Style.columnList} >
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


export const PickItem = ({ pickPercent, maxPick, titleColumn, order }) => {
    return (
        <div className={Style.bigPickColumn} style={{ order: `${order}` }}>
            <h2>{titleColumn}</h2>
            {
                pickPercent.map(item => <PickColumn pickPercent={item} lenghtLine={(item * 100) / maxPick} />)
            }
        </div>
    )
}

export const PickColumn = ({ pickPercent, lenghtLine }) => {
    return (
        <div className={Style.pickColumn}>
            <p className={Style.pickPercent}>{pickPercent}</p>
            <div style={{ width: `${lenghtLine}%` }} className={Style.pickSegment}></div>
        </div>
    );
}

export default withHeroInfo(MetaPage);