
const initialState = {
    pickItemList: [
        {
            mapList: 'winPercent',
            maxList: 'maxWinPercent'
        },
        {
            mapList: 'pickPercent',
            maxList: 'maximumPick'
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
            valueTitle: 'Win rate',
        },
        {
            classTitle: 'pickColumn',
            needButtonSort: false,
            valueTitle: 'Pick rate',
        },
    ]
}

export const heroesWinRateReducer = (state = initialState, action) => {
    return state;
}