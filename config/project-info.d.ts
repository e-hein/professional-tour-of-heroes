export interface ProjectInfo {
  /**
   * unique (folder/url) name of the project
   *
   * e.g. for target folder of deployment and coverage
   */
  name: string,

  /**
   * root directory containing the tsconfig
   */
  root: string,
}
