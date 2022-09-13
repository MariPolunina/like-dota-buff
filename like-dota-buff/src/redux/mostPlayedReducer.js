
const initialState = {
    pickItemList: [
        {
            mapList: 'heroPick',
            maxList: 'maxHeroPick'
        },
        {
            mapList: 'pickPercent',
            maxList: 'maximumPick'
        },
        {
            mapList: 'winPercent',
            maxList: 'maxWinPercent'
        },
    ],
    titleColumnsList: [
        {
            classTitle: 'heroItem',
            needButtonSort: false,
            valueTitle: 'Hero',
        },
        {
            classTitle: 'pickColumn',
            needButtonSort: true,
            valueTitle: 'Matches played',
        },
        {
            classTitle: 'pickColumn',
            needButtonSort: false,
            valueTitle: 'Pick rate',
        },
        {
            classTitle: 'pickColumn',
            needButtonSort: false,
            valueTitle: 'Win rate',
        },
    ]
}

export const mostPlayedReducer = (state = initialState, action) => {
    return state;
}