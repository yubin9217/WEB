var censoredWords=["sad","bad","mad"];
var customCensoredWords=[];
function censor(inStr){
	for (var index in censoredWords) {
		inStr=inStr.replace(censoredWords[index],"string0");
	}
	for (var index in customCensoredWords){
		inStr=inStr.replace(customCensoredWords[index],"string1");
	}
	return inStr;
}
function addCensoredWord(word){
	customCensoredWords.push(word);//从数组的结尾来添加一个元素
}
function removeCensoredWord(word){
	customCensoredWords.pop(word);//从数组的结尾来删除一个元素
}
function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);//将数组连接起来
}
exports.censor=censor;
exports.addCensoredWord=addCensoredWord;
exports.removeCensoredWord=removeCensoredWord;
exports.getCensoredWords=getCensoredWords;