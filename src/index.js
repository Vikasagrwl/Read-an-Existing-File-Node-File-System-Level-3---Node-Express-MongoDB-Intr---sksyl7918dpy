const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {
	const buf_data = fs.readFile(fileName);
	const content = buf_data.toString();
	return content
};

module.exports =  reader ;
