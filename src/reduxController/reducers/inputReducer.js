
export const inputReducer = (state, newState) => {
    return {...state, ...newState}
};

export const testAnalyticsReducer = (state, newState) => {
    return {...state, ...newState}
};

export const testNavigationReducer = (state, newState) => {
    return {...state, ...newState}
};

export const testSubjectReducer = (state, newState) => {
    return {...state, ...newState}
};

export const userAnswerReducer = (state, newState) => {
    return {...state, content: [...state.content, ...newState]}
};

export const userProfileReducer = (state, newState) => {
    return {...state, content: [...state.content, ...newState]}
};