// {
//     "editor.quickSuggestions": {
//         "other": false,
//         "comments": false,
//         "strings": false
//     },
//     "editor.suggestOnTriggerCharacters": false,
//     "editor.acceptSuggestionOnEnter": "on",
//     "editor.inlineSuggest.enabled": false,
//     "editor.suggest.showWords": false,
//     "editor.suggest.showKeywords": false,
//     "editor.suggest.showSnippets": false,
//     "editor.suggest.showFunctions": false,
//     "editor.suggest.showClasses": false,
//     "editor.suggest.showMethods": false,
//     "editor.suggest.showVariables": false,
//     "editor.parameterHints.enabled": false,
    
//     "explorer.confirmDelete": false,
//     "liveServer.settings.donotShowInfoMsg": true,
//     "editor.wordWrap": "on",
//     "gitlens.home.preview.enabled": false,
//     "workbench.iconTheme": "material-icon-theme",
//     "[html]": {
//         "editor.defaultFormatter": "esbenp.prettier-vscode"
//     },
//     "[javascript]": {
//         "editor.defaultFormatter": "esbenp.prettier-vscode"
//     },
//     "[css]": {
//         "editor.defaultFormatter": "esbenp.prettier-vscode"
//     },
//     "workbench.activityBar.location": "top",
//     "terminal.integrated.sendKeybindingsToShell": true,
//     "workbench.sideBar.location": "right",
//     "workbench.colorTheme": "Night Owl",
//     "github.copilot.enable": {
//         "*": false
//     }
// }
// let value = "abcd";
// let str ="";
// for(i=0;i<value.length;i++){
//     let x = value[i].toUpperCase();
// let repeated = value[i].repeat(i+0);
// str = `${str}${x}${repeated}-`;
// }
// console.log(str);
// function accum(s) {
//     let str = '';
//     for(i=0;i<s.length;i++){
//       let value = s[i].toUpperCase();
//       let valueStr = s[i].repeat(i+0);
//       str = `${str}${value}${valueStr}-`;
//     }
//     let lastidx = str.slice(0,str.length-1);
   
//     return lastidx;
//   }
//   console.log(accum("abcd"));
// function countPositivesSumNegatives(input) {
//     let newArr = [];
//     let positiveArr = input.filter((curr)=>{
//       return curr>=1;
//     }).reduce((accum,curr)=>{
//               return accum+curr
//               },0);
//     let negativeArr = input.filter((curr)=>{
//       return curr<=-1;
//     }).reduce((accum,curr)=>{
//               return accum+curr
//               },0);
//               console.log(positiveArr)
//               console.log(negativeArr
//               )
//      return [positiveArr,negativeArr];
//     }
//     console.log(countPositivesSumNegatives([1,3,6,8,9,5,-6,-23,-54]));
function strCount(str, letter){  
  if(str.length == 0)return 0;
   let idxOfLetter = str.searchccccc(letter);

   return Number(str.length - idxOfLetter)
 };
console.log(strCount("hello","o"))
