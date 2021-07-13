import {ActionType} from '../action-types'

interface SearchRepositoriesActions {
    type: ActionType.SEARCH_REPOSITORIES;
  }
  
  interface SearchRepositoriesSuccessActions {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
  }
  
  interface SearchRepositoriesErrorActions {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
  }
  
  export type Action = | SearchRepositoriesActions
    | SearchRepositoriesSuccessActions
    | SearchRepositoriesErrorActions
  