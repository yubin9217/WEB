var censor=require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("some very sad,bad,and mad text."));
censor.addCensoredWord("boom");
console.log(censor.getCensoredWords());
console.log(censor.censor("replace boom with string1"));