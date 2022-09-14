import Style from './HeroStatistic.module.scss';


export const HeroItem = ({ img, localized_name }) => {
    return (
        <div className={Style.heroItem}>
            <div className={Style.imgContainer}>
                <img className={Style.avatar} src={`https://api.opendota.com${img}`} />
            </div>
            <p className={Style.nameColumn}>{localized_name}</p>
        </div>
    )
}


export const PickItem = ({ mapList, maxList }) => {
    return (
        <>
            {
                mapList.map((item, index) => <PickColumn key={index} pickPercent={item} lenghtLine={(item * 100) / maxList[index]} order={index} />)
            }
        </>

    )
}

export const PickColumn = ({ pickPercent, lenghtLine, order }) => {
    return (
        <div className={Style.pickColumn} style={{ order: `${order}` }}>
            <p className={Style.pickPercent}>{pickPercent}</p>
            <div style={{ width: `${lenghtLine}%` }} className={Style.pickSegment}></div>
        </div>
    );
}

