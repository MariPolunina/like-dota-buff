import AllHeroes from "../components/AllHeroes/AllHeroes";
import AllItems from "../components/AllItems/AllItems";
import AllProPlayers from "../components/AllProPlayers/AllProPlayers";
import HeroesWinRate from "../components/HeroesWinRate/HeroesWinRate";
import Meta from "../components/Meta/Meta";
import MostPlayed from "../components/MostPlayed/MostPlayed";

const initialState = {
    nemuItems: [
        {
            mainMenuItem: 'Heroes',
            pathTo: 'allHeroes',
            forElement: <AllHeroes />,
            subMenuItems: [
                { subMenuItem: 'All Heroes', pathTo: 'allHeroes', forElement: <AllHeroes />, },
                { subMenuItem: 'Meta', pathTo: 'meta', forElement: <Meta /> },
                { subMenuItem: 'Most Played', pathTo: 'mostPlayed', forElement: <MostPlayed /> },
                { subMenuItem: 'Win Rate', pathTo: 'heroesWinRate', forElement: <HeroesWinRate /> },]
        },
        {
            mainMenuItem: 'Items',
            pathTo: '/allItems',
            forElement: <AllItems />,
            subMenuItems: []
        },
        {
            mainMenuItem: 'Players',
            pathTo: '/proPlayers',
            forElement: <AllProPlayers />,
            subMenuItems: [
                // { subMenuItem: 'Verified', pathTo: '/' },
                // { subMenuItem: 'Ranked Leaderboard', pathTo: '/' },
                // { subMenuItem: 'Highest Win Rate', pathTo: '/' },
                // { subMenuItem: 'Most Matches Played', pathTo: '/' },
                // { subMenuItem: 'Time Spent Playing', pathTo: '/' }
            ]
        },
        {
            mainMenuItem: 'Matches',
            pathTo: '/',
            forElement: <AllHeroes />,
            subMenuItems: [{ subMenuItem: 'Live Matches', pathTo: '/' },
            { subMenuItem: 'Recent Esports Mathes', pathTo: '/' },
            { subMenuItem: 'Recent Matches', pathTo: '/' },
            { subMenuItem: 'Siltbreaker', pathTo: '/' },
            { subMenuItem: 'Dark Moon', pathTo: '/' }]
        },

    ]
}

export const headerReducer = (state = initialState, action) => {
    return state;
}