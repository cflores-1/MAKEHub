import { combineReducers } from 'redux';
import projectsSubReducer from './projects';
import robotsSubReducer from './robots';
import singleprojectSubReducer from './singleProject'
import singlerobotSubReducer from './singleRobot';

//Note: this file is similar to a table of contents for my reducers

//What are we doing? We are combining reducers below! 
//projects and robots are my sub-reducers
const appReducer = combineReducers({
  projects: projectsSubReducer, //FORMAT: keynameinstate : subReducer
  robots: robotsSubReducer, //FORMAT: keynameinstate : subReducer
  singleproject: singleprojectSubReducer, //FORMAT: keynameinstate : subReducer
  singlerobot: singlerobotSubReducer//FORMAT: keynameinstate : subReducer
});

export default appReducer;
