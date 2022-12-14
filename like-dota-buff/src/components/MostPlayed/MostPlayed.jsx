import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allHeroesLoad } from '../../redux/actions';
import { MetaHeroStatisticContainer } from "../MetaHeroStatistic/MetaHeroStatistic";
import { useState } from "react";

const MostPlayed = (props) => {
    const aboutWinRate = useSelector(state => {
        return state.mostPlayedReducer;
    });
    const { pickItemList, titleColumnsList } = aboutWinRate;
    return (
        <HeroPage {...props} titlePage={'Most played'} columns={[[1, 2, 3, 4, 5, 6, 7, 8]]} pickItemList={pickItemList} titleColumnsList={titleColumnsList} columnSort={'heroPick'} itsNumber={true} />
    )
}

export default MostPlayed;

export const HeroPage = ({ titlePage, columns, pickItemList, titleColumnsList, columnSort, itsNumber, ...props }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allHeroesLoad());
    }, []);
    const listOfHeroes = useSelector(state => {
        return state.allHeroesReducer.heroes;
    });
    const [localListOfHeroes, setLocalOfHeroes] = useState([]);
    useEffect(() => {
        setLocalOfHeroes(listOfHeroes);
    }, [listOfHeroes]);
    const [needFirstSort, setNeedFirstSort] = useState(true);
    const handleMatchesPlayed = (newListOfHeroes) => {
        setLocalOfHeroes(newListOfHeroes);
        setNeedFirstSort(false);
    }

    return (
        <div>
            <h2>{titlePage}</h2>
            <MetaHeroStatisticContainer columns={columns} listOfHeroes={localListOfHeroes} handleMatchesPlayed={handleMatchesPlayed} columnSort={columnSort} itsNumber={itsNumber} needFirstSort={needFirstSort} pickItemList={pickItemList} titleColumnsList={titleColumnsList} />
        </div>
    )
}