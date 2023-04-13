import { Tabs } from "../../../../components/UserRepositories";
import { EActionsTypeRepositoriesState, IPropsActionRepositoriesState, IRepositoriesState } from "../../Interfaces/reducerRepositories";
import { IRepository } from "../../Interfaces/repository";

/**
 * Estado inicial dos repositórios.
 */
export const REPOSITORIES_INITIAL_STATE : IRepositoriesState = {
    repositories            : [],
    repositoriesStarreds    : [],
    totalRepositories       : 0,
    totalRepositoriesStarred: 0
}

/**
 * Função Reducer dos Repositórios, centraliza os processamentos referente ao estado dos mesmos.
 */
export default function ReducerRepositories(state : IRepositoriesState, action : IPropsActionRepositoriesState) {
    switch (action.type) {
        case EActionsTypeRepositoriesState.ACTION_LOAD_REPOSITORIES:
            const allRepositories      = action.payload as IRepository[]
            const repositories         = allRepositories.filter(repository => !repository.starred)
            const repositoriesStarreds = allRepositories.filter(repository => repository.starred)
            return {
                repositories,
                repositoriesStarreds,
                totalRepositories: repositories.length,
                totalRepositoriesStarred: repositoriesStarreds.length 
            } as IRepositoriesState
        case EActionsTypeRepositoriesState.ACTION_SEARCH_REPOSITORIES:
            const {search, activeTab} = action.payload as { search:string, activeTab: Tabs }
            return {
                ...state,
                repositories        : activeTab == Tabs.TAB_REPOSITORIES ? state.repositories        .filter(rep => rep.name.toLowerCase().match(search.toLowerCase())) : state.repositories,
                repositoriesStarreds: activeTab == Tabs.TAB_STARRED      ? state.repositoriesStarreds.filter(rep => rep.name.toLowerCase().match(search.toLowerCase())) : state.repositoriesStarreds 
            } as IRepositoriesState
        default: throw Error('Ação não esperada!')
    }
}