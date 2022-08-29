import HeroStatistic from '../HeroStatistic/HeroStatistic';
import Style from './Meta.module.scss';


const Meta = (props) => {
    return (
        <div>
            <HeroStatistic columns={[[1, 2, 3], [4], [5], [6], [7, 8]]} />
        </div>
    )
}


export default Meta;