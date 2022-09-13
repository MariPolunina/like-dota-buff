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
        if(props.needFirstSort){
            const  columnSort  = props.columnSort;
            extraListOfHeroes.sort((a, b) => {
                const firstElement=props.itsNumber?Number(a[columnSort]):a[columnSort];
                const secondElement=props.itsNubmer?Number(b[columnSort]):b[columnSort];
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
            <Component  {...props} extraListOfHeroes={extraListOfHeroes}  />
        )
    }
}
export default withHeroInfo;