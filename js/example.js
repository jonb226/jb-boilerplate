/*eslint-env node*/

var JBData = require('./jb-data.js');

var Person = JBData.createModel({name: (new Array(60).join(' ')), age: 0});

module.exports = {
	Person: Person
};
