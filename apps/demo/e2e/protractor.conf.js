//@ts-check
const config = require('../../../config/e2e')(require('../project-info')).useDefaultConfig;
config.baseUrl = 'http://localhost:4500';
exports.config = config;
