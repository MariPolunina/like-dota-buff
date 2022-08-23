import AllHeroes from "../components/AllHeroes/AllHeroes";
import Meta from "../components/Meta/Meta";

const initialState = {
    nemuItems: [
        {
            mainMenuItem: 'Heroes',
            pathTo: '/allHeroes',
            forElement: <AllHeroes />,
            subMenuItems: [{ subMenuItem: 'All Heroes', pathTo: '/allHeroes' },
            { subMenuItem: 'Meta', pathTo: '/meta', forElement:<Meta /> },
            { subMenuItem: 'Trends', pathTo: '/' },
            { subMenuItem: 'Lanes', pathTo: '/' },
            { subMenuItem: 'Most Played', pathTo: '/' },
            { subMenuItem: 'Win Rate', pathTo: '/' },
            { subMenuItem: 'Game Impact', pathTo: '/' },
            { subMenuItem: 'Economy', pathTo: '/' },
            { subMenuItem: 'Farm', pathTo: '/' },
            { subMenuItem: 'Damage and Healing', pathTo: '/' }]
        },
        {
            mainMenuItem: 'Items',
            pathTo: '/',
            forElement: <AllHeroes />,
            subMenuItems: [{ subMenuItem: 'Most Used', pathTo: '/' },
            { subMenuItem: 'Win Rate', pathTo: '/' },
            { subMenuItem: 'Game Impact', pathTo: '/' },
            { subMenuItem: 'Economy', pathTo: '/' },
            { subMenuItem: 'Cosmetics', pathTo: '/' }]
        },
        {
            mainMenuItem: 'Players',
            pathTo: '/',
            forElement: <AllHeroes />,
            subMenuItems: [{ subMenuItem: 'Verified', pathTo: '/' },
            { subMenuItem: 'Ranked Leaderboard', pathTo: '/' },
            { subMenuItem: 'Achievments', pathTo: '/' },
            { subMenuItem: 'Highest Win Rate', pathTo: '/' },
            { subMenuItem: 'Most Matches Played', pathTo: '/' },
            { subMenuItem: 'Time Spent Playing', pathTo: '/' }]
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