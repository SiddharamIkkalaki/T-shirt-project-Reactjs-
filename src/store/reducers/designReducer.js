const initiaState = {

    designs:[
        {id:1, name:"Project One", tshirtcolor:"black"},
        {id:2, name:"Project Two", tshirtcolor:"red"},
        {id:3, name:"Project Three", tshirtcolor:"grey"},
        {id:4, name:"Project Four", tshirtcolor:"blue"},
    ]
}

const DesignReducer = (state = initiaState, action) => {
    switch(action.type){
        case 'SAVE_DESIGN':console.log("data Saved", action.design)
    }
       return state;
}

export default DesignReducer;