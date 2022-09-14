import { useSelector } from 'react-redux';
import { HeroPage } from '../MostPlayed/MostPlayed';

const Meta = (props) => {
    const aboutWinRate = useSelector(state => {
        return state.metaReducer;
    });
    const { pickItemList, titleColumnsList } = aboutWinRate;
    return (
        <HeroPage {...props} titlePage={'Most played'} columns={[[1, 2, 3], [4], [5], [6], [7, 8]]} pickItemList={pickItemList} titleColumnsList={titleColumnsList} columnSort={'localized_name'} itsNumber={false} />
    )
}


export default Meta;