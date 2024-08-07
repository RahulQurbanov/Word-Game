let input=document.querySelector(".inp");
let number=document.querySelector(".number");
let startBtn=document.querySelector(".start");
let settime=document.querySelector(".settime");
let btn=document.querySelectorAll(".btn");
let wordBox=document.querySelector(".word-box");
let nextBtn=document.querySelector("#next");
let hintBtn=document.querySelector(".hint")
let hint=document.querySelector("#hint");
let scor=document.querySelector(".scor");
let score=document.querySelector("#score")
let words=[
  {
    word:"hello",
    hint:"Hello"
  },
  {
    word:"book",
    hint:"Book"
  },
  {
    word:"phone",
    hint:"Phone"
  },
  {
    word:"car",
    hint:"Car"
  },
  {
    word:"notebook",
    hint:"Notebook"
  },
  {
    word:"camera",
    hint:"Camera"
  },
  {
    word:"cloud",
    hint:"Cloud"
  },
  {
    word:"strong",
    hint:"Strong"
  },
  {
    word:"tv",
    hint:"Tv"
  },
  {
    word:"bus",
    hint:"Bus"
  },
  {
    word:"nature",
    hint:"Nature"
  },
  {
    word:"sun",
    hint:"Sun"
  },
  {
    word:"moon",
    hint:"Moon"
  },
  {
    word:"juice",
    hint:"Juice"
  },
  {
    word:"word",
    hint:"word"
  },
  {
    word:"vacant",
    hint:"Vacant"
  },
  {
    word:"tact",
    hint:"Tact"
  },
  {
    word:"conceal",
    hint:"Conceal"
  },
  {
    word:"tempt",
    hint:"Tempt"
  },
  {
    word:"wager",
    hint:"Wager"
  },
  {
    word:"sinister",
    hint:"Sinister"
  },
  {
    word:"corpse",
    hint:"Corpse"
  },
  {
    word:"frigid",
    hint:"Frigid"
  },
  {
    word:"inhabit",
    hint:"Inhabit"
  },
  {
    word:"apple",
    hint:"Apple"
  },
];
      let randomHint
      let randomLength
      let randomWord
function selectRandomword(){
      let randomIndex=Math.floor(Math.random()*words.length);
      randomWord=words[randomIndex].word;
      randomHint=words[randomIndex].hint;
      randomLength=randomWord.length;
      // console.log(randomWord[0]);
}


function showRandomword(){
  wordBox.textContent='';  
   for (let i = 0; i < randomLength; i++) {
   let box=document.createElement("div");
   box.classList.add("box");
   box.innerHTML=`
   <div class="herf"></div>
   `
  //  console.log(randomWord);
   wordBox.appendChild(box)
   }
}

function appendToshow(value,event){
  let herfElemnt=wordBox.querySelectorAll(".herf")
  let match=false;
  for (let i = 0; i < randomLength; i++) {
     if (randomWord[i]==value) {
     match=true;
     scor.textContent=Number(scor.textContent)+10;
     herfElemnt[i].textContent=value;

       if(match){
        event.target.border="1px solid green";
        event.target.style.backgroundColor="green";
       }
      }
    }
    if(!match){
     event.target.border="1px solid red";
     event.target.style.backgroundColor="red"
     scor.textContent=Number(scor.textContent)-10;
    }
 
}
startBtn.addEventListener("click",function(){
  btn.forEach(btn=>{
    btn.style.backgroundColor="aqua";
    btn.style.border="1px solid aqua";
  })
  scor.textContent=""
  settime.style.backgroundColor="rgb(21, 243, 21)";
  settime.style.width="75px"
  i=30;
  number.textContent=i
  let down=setInterval (function(){
    i--
    number.textContent=i
  if(i<=0){
    alert("Sizin Skor:"+""+scor.textContent)
      clearInterval(down);
  }
},1000);
  input.style.display="none";
  selectRandomword();
  showRandomword()
})
nextBtn.addEventListener("click",function(){  
  btn.forEach(btn=>{
    btn.style.backgroundColor="aqua";
    btn.style.border="1px solid aqua";
  })
       selectRandomword();
       showRandomword();
    })
hintBtn.addEventListener("click",function(){
      hint.textContent=""
      hint.style.display="block"
       let hintWord=document.createElement("div");
       hintWord.classList.add("hintword");
       hintWord.innerHTML=`
       <p>Hint:${randomHint}</p>
       `
       hint.appendChild(hintWord);
    });