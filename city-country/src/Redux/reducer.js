import { CITY_FAILURE, CITY_LOADING, CITY_SUCCESS } from "./action";

const initState = {
    city: "",
    country: "",
    population: "",
    loading: false,
    error: false
}

export const cityReducer = ( store = initState, action) => {
    switch(action.type) {
        case CITY_LOADING:
            return { ...store, loading: true }
        case CITY_SUCCESS:
            return { ...store,
                city: action.payload.city,
                country: action.payload.country,
                population: action.payload.population,
                loading: false,
                error: false  
            };
        case CITY_FAILURE:
            return { ...store,
                city: "",
                country: "",
                population: "",
                loading: false,
                error: true
            };
        default:
            return store;
    }
}