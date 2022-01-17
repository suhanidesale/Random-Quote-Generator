const quoteText = document.querySelector(".quote"), 
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
TwitterBtn = document.querySelector(".twitter");

//func to generate quote
function randomQuote(){
    quoteBtn.classList.add("Loading")
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote!";
        quoteBtn.classList.remove("loading");

    });

    
}

soundBtn.addEventListener("click" , ()=>{
    //speechsynthesisutterance is  api that reperesnts a speeh request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);

    //speechsynthesis is s speak method to speak utterance

}
);



copyBtn.addEventListener("click" , ()=>{
   navigator.clipboard.writeText(quoteText.innerText);
}
);

TwitterBtn.addEventListener("click" , ()=>{
    let tweeturl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweeturl , "_blank");
}
);

quoteBtn.addEventListener("click",randomQuote);
