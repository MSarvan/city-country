export const CITY_LOADING = "CITY_LOADING";
export const CITY_SUCCESS = "CITY_SUCCESS";
export const CITY_FAILURE = "CITY_FAILURE";

export const CityLoading = (payload) => ({
    type: CITY_LOADING
});

export const CitySuccess = (payload) => ({
    type: CITY_SUCCESS, 
    payload: payload
});

export const CityFailure = (payload) => ({
    type: CITY_FAILURE
});

export const UpdatedData = (citydetails) => (dispatch) => {
    dispatch(CityLoading);
    fetch(`http://localhost:6789/city`, {
        method: "POST",
        body: JSON.stringify(citydetails),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => res.json())
    .then((res) => dispatch(CitySuccess(res)))
    .catch((err) => dispatch(CityFailure(err)));
}