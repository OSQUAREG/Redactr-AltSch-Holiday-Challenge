function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  // console.log('make magic in here!');

  // const header = document.querySelector('h2');
  // if (header) {
  //   header.textContent = 'Scramble some words from a body of text content';
  // }
  // console.log(header)
};

let textContent = document.getElementById("text-content").innerHTML

let wordToScramble = document.getElementById("words").value

let textList = textContent.split(" ")

function redactrWord() {
  let newTextContent = textList.map((w) => {
    let scrambledText = w.replace(wordToScramble, "***")
    return scrambledText
  })
  if(wordToScramble != undefined && textContent != undefined) {
    let newContent = newTextContent.join(" ")
  return newContent
  }  
}

console.log(textContent)
console.log(wordToScramble)
console.log(textList)
// console.log(redactrWord())

document.getElementById("redactr").addEventListener("click", redactrWord())


// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //