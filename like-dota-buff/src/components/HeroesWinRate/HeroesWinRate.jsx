import { useSelector } from "react-redux";
import { HeroPage } from "../MostPlayed/MostPlayed";

const HeroesWinRate = (props) => {
    const aboutWinRate = useSelector(state => {
        return state.heroesWinRateReducer;
    });
    const { pickItemList, titleColumnsList } = aboutWinRate;
    return (
        <HeroPage {...props} titlePage={'Most played'} columns={[[1, 2, 3, 4, 5, 6, 7, 8]]} pickItemList={pickItemList} titleColumnsList={titleColumnsList} columnSort={'winPercent'} />
    )
}

export default HeroesWinRate;