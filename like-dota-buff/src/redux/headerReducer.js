
const initialState = {
    nemuItems: [
        {
            mainMenuItem: 'Heroes',
            pathTo:'/allHeroes',
            subMenuItems: ['All Heroes', 'Meta', 'Trends', 'Lanes', 'Most Played', 'Win Rate', 'Game Impact', 'Economy', 'Farm', 'Damage and Healing']
        },
        {
            mainMenuItem: 'Items',
            pathTo:'/',
            subMenuItems: ['Most Used', 'Win Rate', 'Game Impact', 'Economy', 'Cosmetics']
        },
        {
            mainMenuItem: 'Players',
            pathTo:'/',
            subMenuItems: ['Verified', 'Ranked Leaderboard', 'Achievments', 'Highest Win Rate', 'Most Matches Played', 'Time Spent Playing']
        },
        {
            mainMenuItem: 'Matches',
            pathTo:'/',
            subMenuItems: ['Live Matches', 'Recent Esports Mathes', 'Recent Matches', 'Siltbreaker', 'Dark Moon']
        },

    ]
}

export const headerReducer=(state=initialState, action)=>{
    return state;
}