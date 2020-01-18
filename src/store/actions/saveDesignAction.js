export const SaveDesign = (design) =>{
    return(dispatch, getState) =>{
        dispatch({type: "SAVE_DESIGN", design});
    }
}