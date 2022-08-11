import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allHeroesLoad } from '../../redux/actions';
import Style from './AllHeroes.module.scss'

const AllHeroes = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(allHeroesLoad());
    }, []);
    const heroInfo = useSelector(state => {
        return state.allHeroesReducer.heroes;
    });
    return (
        <div className={Style.allHeroesCard}>
            {
                heroInfo.map(item => <HeroesItem id={item.id} localized_name={item.localized_name} src={item.img} primary_attr={item.primary_attr} />)
            }
        </div>
    )
}

export default AllHeroes;

const HeroesItem = ({ id, localized_name, src, primary_attr }) => {
    return (
        <div key={id} className={Style.heroesCard}>
            <div className={Style.imgContainer}>
                <img src={`https://api.opendota.com${src}`}className={Style.avatar} />
                <AttrIcon primary_attr={primary_attr} />
            </div>
            <p className={Style.nameHero}>{localized_name}</p>
        </div>
    )
}

const AttrIcon = ({ primary_attr, src }) => {
    const attrImages = useSelector(state => {
        return state.allHeroesReducer.primaryAttrImages;
    })
    const currentIcon = attrImages.filter(item => item.primary_attr == primary_attr);
    return (
        <div className={Style.attrIcon}>
            {
                currentIcon.map(item => <img src={item.src} />)
            }
        </div>
    )
}