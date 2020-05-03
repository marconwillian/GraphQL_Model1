const fs = require('fs'),
    path = require('path'),
    dirName = path.join(__dirname);
    
const UserTypes = fs.readFileSync(`${dirName}/User/types.graphql`, 'utf8');
const PageInfoTypes = fs.readFileSync(`${dirName}/PageInfo/types.graphql`, 'utf8');
const QueryTypes = fs.readFileSync(`${dirName}/Query/types.graphql`, 'utf8');

module.exports = () => `
    ${UserTypes}
    ${PageInfoTypes}
    ${QueryTypes}
`;