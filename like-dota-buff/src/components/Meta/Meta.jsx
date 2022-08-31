import HeroStatistic from '../HeroStatistic/HeroStatistic';
import Style from './Meta.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allHeroesLoad } from '../../redux/actions';

const Meta = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allHeroesLoad());
    }, []);
    const listOfHeroes = useSelector(state => {
        return state.allHeroesReducer.heroes;
    });
    return (
        <div>
            <HeroStatistic columns={[[1, 2, 3], [4], [5], [6], [7, 8]]} listOfHeroes={listOfHeroes} />
        </div>
    )
}


export default Meta;