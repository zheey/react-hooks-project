import React, {useReducer} from 'react';

const useGlobalReducer = (reducer) => {
    const [data, reducerFunction] = useReducer(reducer, {
        fetching: false,
        updating: false,
        isAuthenticated: false,
        data:{}
    })
return {data, reducerFunction}
}

export default useGlobalReducer


