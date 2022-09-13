import withHeroInfo from "../../hoc/withHeroInfo";
import Style from './HeroStatistic.module.scss';

export const MetaPage = ({ extraListOfHeroes, ...props }) => {
    return (
        <div className={Style.metaContainer}>
            <h2>Meta</h2>
            <div>
                {extraListOfHeroes.map(heroItem => {
                    const { pickPercent, id, img, localized_name, winPercent, maxWinPercent, maximumPick, ...props } = heroItem;
                    return (
                        <div className={Style.heroRow}>
                            <HeroItem key={id} img={img} localized_name={localized_name} />
                            <PickItem mapList={pickPercent} maxList={maximumPick} />
                            <PickItem mapList={winPercent} maxList={maxWinPercent} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

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
                mapList.map((item, index) => <PickColumn pickPercent={item} lenghtLine={(item * 100) / maxList[index]} order={index} />)
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

export default withHeroInfo(MetaPage);