import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function childAddedHandler(dispatch) {
    fbConfigs.database.ref('/crimes').on('child_added', (snap) => {
        const todo = snap.val();
        todo.key = snap.key;
        if(snap.hasChild('comments')){
            var customComments = Object.keys(snap.val().comments).map(key=>{return {key:snap.val().comments[key]}})
            console.log(customComments);
            todo.comments = customComments;
        }
        dispatch(addedReportRequestSuccess(todo));
    });
}

function addedReportRequestSuccess(todos) {
    console.log("todos ", todos)
    return {
        type: ActionTypes.addedReportRequestSuccess,
        todos
    };
}