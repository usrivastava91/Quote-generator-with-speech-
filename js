function quotes(){

var aquote = new Array;
aquote[0]="\"My friends just bet me that I can't talk to the prettiest girl here. want to get some drinks with their money?\"";
aquote[1]="\"Charmanders are red, squirtles are blue, if you were a pokemon i would choose you\"";
aquote[2]="\"call me ash kechum cos i want to pikachu \""
aquote[3]="\"are you religious? cos you're the answer to all my prayers \""
aquote[4]="\"do you have a map? cos I'm getting lost in your eyes \""
aquote[5]="\"hey,feel my shirt.its boyfriend material \""

aquote[6]="\"Was that an earthquake? Because you just rocked my world \""
aquote[7]="\"Do you have a bandaid? I just scraped my knee falling for you.  \""
aquote[8]="\"Is there an airport nearby? or was that just my heart taking off \""
aquote[9]="\"Can I take your picture to show santa what I want for christmas? \""
aquote[10]="\"I'm not a photographer,but I can really picture us together \""
aquote[11]="\"Can I take your picture to show santa what I want for christmas? \""
aquote[12]="\"i'll have to ask you to leave.cos you're making all the other girls look bad \""
aquote[13]="\"if your heart was a prison,i'd like to be sentenced for life \""
aquote[14]="\"life without you would be like a broken pencil...pointless \""
aquote[15]="\"of all your beautiful curves,your smile is my favorite \""

rdmQuote = Math.floor(Math.random()*aquote.length);
document.getElementById("quote") .innerHTML=aquote[rdmQuote];
  var utterance = new SpeechSynthesisUtterance(aquote[rdmQuote]);
window.speechSynthesis.speak(utterance);
 

}



window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));
