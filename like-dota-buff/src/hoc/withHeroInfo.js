import { useState } from "react";
import { useEffect } from "react";

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
const withHeroInfo = (Component) => {
    return function AddInfo(props) {
        const [heroPick, setHeroPick] = useState( []);
        const [winPick, setWinPick] = useState([]);
        const [sumHeroPick, setSumHeroPick] = useState([]);

        const [pickPercent, setPickPercent] = useState([]);
        const [maximumPick, setMaximumPick] = useState([]);
        const [winPercent, setWinPercent] = useState([]);
        const [maxWinPercent, setMaxWinPercent] = useState([]);
        useEffect(() => {
            if (props.listOfHeroes.length > 0) {
                setHeroPick(sumValues('_pick', props.columns, props.listOfHeroes));
                setWinPick(sumValues('_win', props.columns, props.listOfHeroes));
            }
        }, [props.listOfHeroes]);

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
            <Component {...props} listOfHeroes={props.listOfHeroes} pickPercent={pickPercent} winPercent={winPercent} maxWinPercent={maxWinPercent} maximumPick={maximumPick} sumHeroPick={sumHeroPick} heroPick={heroPick} />
        )
    }
}
export default withHeroInfo;