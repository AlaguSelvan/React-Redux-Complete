export default ({ dispatch })  => next => action => {
    
    // check to see if the action has a promis on payload property if it does then wait for it to resolve if it doesnt then send action to next middleware
    
    if( !action.payload || !action.payload.then){
        return next(action);
    }

    // We want to wait for promise to resolve (get its data!) and then create a new action with that data and dispatch it
    action.payload.then(function(response){
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
};    
