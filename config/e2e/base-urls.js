module.exports = {
  localUrl: 'http://localhost:4200',

  /**
   * @param {string} projectName
   * @returns {string}
   */
  createDistUrl: function(projectName) {
    return 'http://localhost:8080/' + projectName;
  }
}
