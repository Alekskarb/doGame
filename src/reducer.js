const SET_RANDOM_INDEX = 'App/SET_RANDOM_INDEX';
const SET_COUNT = 'App/SET_COUNT';

let iniState = {
    // showPict: true,
    count: 0,
    // dogSound: false,
    randomIndex: 3
};

const reducer = (state = iniState, action) => {
    switch (action.type) {
        case SET_RANDOM_INDEX:
            return {
                ...state, randomIndex: action.index
            };
        default:
            return state
    }
};

export const setRandomIndexAC = (index) => ({type: SET_RANDOM_INDEX, index});
export const incCounterAC = (number) => ({type: SET_COUNT, number});

export default reducer;
