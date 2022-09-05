import { useEffect } from "react";
import { useState } from "react";
import withHeroInfo from "../../hoc/withHeroInfo";
import { HeroItem, MetaPage, PickItem } from "../HeroStatistic/HeroStatistic";
import Style from './MetaHeroStatistic.module.scss'

const MetaHeroStatistic = ({ listOfHeroes, pickPercent, winPercent, maxWinPercent, maximumPick, sumHeroPick, heroPick, handleMatchesPlayed }) => {
    const [maxHeroPick, setMaxHeroPick] = useState([]);
    useEffect(() => {
        setMaxHeroPick(heroPick.map(item => Math.max(...item))
        );
    }, [heroPick]);

    const [sortMost, setSortMost]=useState(true);
    const valueButton=!sortMost?'↓':'↑'
    
    const handleNewOrder = () => {
        let extraListOfHeroes=[...listOfHeroes];
         extraListOfHeroes = extraListOfHeroes.map((item, index) => {
            let newItem={'heroPick': heroPick[0][index]};
            Object.assign(newItem, item)
            return newItem;
        })
        console.log(listOfHeroes);
        const sortExtraList = extraListOfHeroes.sort((a, b) => {
            if (a.heroPick < b.heroPick) {
                return sortMost? 1:-1;
            }
            if (a.heroPick > b.heroPick) {
                return sortMost? -1: 1;
            }
            return 0;
        });
        const newListOfHeroes=sortExtraList.map(item=>{
            const {heroPick, ...sortItem}=item;
            return sortItem;
        })
        setSortMost(!sortMost);
       handleMatchesPlayed(newListOfHeroes);
    }

    return (
        <div>
            <MetaPage listOfHeroes={listOfHeroes} pickPercent={pickPercent} winPercent={winPercent} maxWinPercent={maxWinPercent} maximumPick={maximumPick}>
                {
                    heroPick.map((item, index) => <PickItem pickPercent={item} maxPick={maxHeroPick[0]} titleColumn={<h2>Matches Played<button onClick={handleNewOrder}>{valueButton}</button></h2>} order={index} />)
                }
            </MetaPage>
        </div>
        // <div className={Style.metaContainer}>
        //     <h2>Most</h2>
        //     <div className={Style.heroContainer}>
        //         <div className={Style.heroList}>
        //             <h2>Hero</h2>
        //             {listOfHeroes.map(item => <HeroItem key={item.id} img={item.img} localized_name={item.localized_name} />)}
        //         </div>
        //         <div className={Style.columnList} >
        //             {
        //                 heroPick.map((item, index) => <PickItem pickPercent={item} maxPick={maxHeroPick[0]} titleColumn={<h2>Matches Played<button onClick={handleMatchesPlayed}>	&#8595;</button></h2>} order={index} />)
        //             }
        //             {
        //                 pickPercent.map((item, index) => <PickItem pickPercent={item} maxPick={maximumPick[index]} titleColumn={<h2>Pick %</h2>} order={index} />)
        //             }
        //             {
        //                 winPercent.map((item, index) => <PickItem pickPercent={item} maxPick={maxWinPercent[index]} titleColumn={<h2>Win %</h2>} order={index} />)
        //             }
        //         </div>
        //     </div>
        // </div>
    )
}

export default withHeroInfo(MetaHeroStatistic);