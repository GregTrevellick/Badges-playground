import { RepoCategory } from "./RepoCategory";

export interface IRepoMetaData {
    appVeyorId: string;
    azureDefinitionId: string;
    codacyId: string;
    codeBeatId?: string;
    codeSceneId?: string;
    //inspecodeId: string;
    localRepoName: string;
    repoCategory: RepoCategory;
    sonarCloudProjectPrefix: string;
}
