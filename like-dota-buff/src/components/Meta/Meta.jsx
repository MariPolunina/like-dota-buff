import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allHeroesLoad } from "../../redux/actions";
import Style from './Meta.module.scss';


const Meta = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allHeroesLoad());
    }, []);
    const listOfHeroes = useSelector(state => {
        return state.allHeroesReducer.heroes;
    });
    // const pickForEveryHero = listOfHeroes.map(item => item['1_pick'] + item['2_pick'] + item['3_pick'] + item['4_pick'] + item['5_pick'] + item['6_pick'] + item['7_pick'] + item['8_pick']);
    // const allPicks = pickForEveryHero.reduce((a, b) => a + b, 0);
    // const winRates = listOfHeroes.map(item => item['1_win'] + item['2_win'] + item['3_win'] + item['4_win'] + item['5_win'] + item['6_win'] + item['7_win'] + item['8_win']);
    // const everyPickPercent = pickForEveryHero.map(pick => ((pick / allPicks) * 100 * 10).toFixed(2));
    // const maxPick = Math.max(...everyPickPercent);

    return (
        <div>
            <h2>Meta</h2>
            <div className={Style.heroList}>
                {listOfHeroes.map(item => <HeroItem key={item.id} img={item.img} localized_name={item.localized_name} />)}
            </div>
        </div>
    )
}


const HeroItem = ({ img, localized_name, pickPercent, maxPick, winRate, pick }) => {
    // const lenghtLine = (pickPercent * 100) / maxPick;
    // const lengthWinRate = ((winRate / pick) * 100).toFixed(2);
    return (
        <div className={Style.heroItem}>
            <div className={Style.imgContainer}>
                <img className={Style.avatar} src={`https://api.opendota.com${img}`} />
            </div>
            <p className={Style.nameColumn}>{localized_name}</p>
            {/* <PickColumn pickPercent={pickPercent} lenghtLine={lenghtLine} />
            <PickColumn pickPercent={lengthWinRate} lenghtLine={lengthWinRate} /> */}
        </div>
    )
}

const PickColumn = ({ pickPercent, lenghtLine }) => {
    return (
        <div className={Style.pickColumn}>
            <p className={Style.pickPercent}>{pickPercent}</p>
            <div style={{ width: `${lenghtLine}%` }} className={Style.pickSegment}></div>
        </div>
    );
}

export default Meta;