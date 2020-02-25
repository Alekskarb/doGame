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
                ...state, randomIndex: Math.floor(Math.random() * 9)
            };
            case SET_COUNT:
            return {
                ...state, count: action.number
            };
        default:
            return state
    }
};

export const setRandomIndexAC = () => ({type: SET_RANDOM_INDEX});
export const incCounterAC = (number) => ({type: SET_COUNT, number});

export default reducer;
