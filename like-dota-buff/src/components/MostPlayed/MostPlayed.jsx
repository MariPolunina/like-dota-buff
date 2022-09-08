import HeroStatistic from "../HeroStatistic/HeroStatistic";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allHeroesLoad } from '../../redux/actions';
import MetaHeroStatistic from "../MetaHeroStatistic/MetaHeroStatistic";
import { useState } from "react";

const MostPlayed = (props) => {
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
    const [needFirstSort, setNeedFirstSort]=useState(true);
    const handleMatchesPlayed=(newListOfHeroes)=>{
        setLocalOfHeroes(newListOfHeroes);
        setNeedFirstSort(false);
    }
    return (
        <div> 
            <h2>Most played</h2>
            <MetaHeroStatistic columns={[[1, 2, 3, 4, 5, 6, 7, 8]]} listOfHeroes={localListOfHeroes} handleMatchesPlayed={handleMatchesPlayed} columnSort={'heroPick'} itsNumber={true} needFirstSort={needFirstSort} />
        </div>
    )
}

export default MostPlayed;

