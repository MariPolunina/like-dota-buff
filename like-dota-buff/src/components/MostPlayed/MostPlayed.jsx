import HeroStatistic from "../HeroStatistic/HeroStatistic";

const MostPlayed=(props)=>{

    return(
        <div>
            <h2>Most played</h2>
            <HeroStatistic  columns={[[1, 2, 3, 4, 5, 6, 7, 8],]} />
        </div>
    )
}

export default MostPlayed;