import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allHeroesAdd, allHeroesLoad } from '../redux/actions';

const AllHeroes = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allHeroesLoad());
    }, []);
    const heroInfo = useSelector(state => {
        return state.allHeroesReducer.heroes;
    });
    return (
        <div>
            {
                heroInfo.map(item => {
                    return <p key={item.id}>{item.id}</p>
                })
            }
        </div>
    )
}

export default AllHeroes;