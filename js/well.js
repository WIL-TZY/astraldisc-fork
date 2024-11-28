var prompt = document.getElementById("prompt");
var answer = document.getElementById("answer");

var greetings = new Array("hello", "hi", "greetings", "salutations");
var keeper = new Array("keeper", "gargoyle");
var laughter = new Array("haha", "hahaha", "teehee");

var defaultArray = [
    "<div class='dialogueDW'><span class='firstline red notebroken after'>SPEAK UP!!!</span><br><span class='firstline note'>HOW AM I SUPPOSED TO HEAR YOU FROM</span><br><span class='normaline note after'>DOWN HERE IF YOU ARE MUMBLING?!</span></div>",
    "<div class='dialogueDW'><span class='firstline note after'>... I DID NOT CATCH THAT</span><br><span class='firstline note'>CAN'T YOU SAY ANYTHING THAT MAKES</span><br><span class='normaline note after'>SENSE?</div>",
    "<div class='dialogueDW'><span class='firstline note after'>ASK ME ABOUT PEOPLE... THINGS</span><br><span class='firstline note after'>OR COMMON QUESTIONS</span><br><span class='firstline note after'>YOU CAN DO THAT, I PRESUME</span></div>"
];

function didntUnderstand() {
    var randomNumber = Math.floor(Math.random() * defaultArray.length);
    var randomAnswer = defaultArray[randomNumber];
    return randomAnswer;
}

var nothingArray = [
    "<div class='dialogueDW'><span class='firstline note after'>... NOTHING TO SAY?</span><br><span class='firstline red notebroken after'>THEN WHY COME?</span><br><span class='firstline red notebroken after'>TO FURTHER HUMLIATE ME?!</span></div>",
    "<div class='dialogueDW'><span class='firstline red notebroken after'>ARE YOU LISTENING TO ME?!</span><br><span class='firstline note after'>... IS ANYONE EVEN THERE?</span></div>",
    "<div class='dialogueDW'><span class='firstline note after'>...</span></div>"
];

function nothingToSay() {
    var randomNumber = Math.floor(Math.random() * nothingArray.length);
    var randomAnswer = nothingArray[randomNumber];
    return randomAnswer;
}

/* putting "prompt.value.toLowerCase()" inside a variable DOES NOT WORK */

function speak() {
    if (prompt && prompt.value) {
        if (prompt.value.toLowerCase() == "what is your name") {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline note after'>BELTROWEL</span><br><span class='firstline note after'>NO NEED TO TELL ME YOURS</span><br><span class='firstline note after'>I DO NOT CARE FOR PASSERSBY...</span></div>";
        } else if (prompt.value.toLowerCase() == "how are you") {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline red notebroken'>HOW DO YOU THINK THE ONE FOREVER</span><br><span class='normaline red notebroken after'>STUCK DOWN A WELL MIGHT BE DOING?</span><br><span class='firstline red notebroken after'>...MISERABLE!!! THAT'S HOW!!!</span></div><div class='dialogueDW'><span class='firstline note after'>...</span><br><span class='firstline note'>YOU ARE A GOOD SAMARITAN, AREN'T YOU?<br><span class='normaline note'>WON'T YOU HELP GUIDE A KIND-HEARTED</span><br><span class='normaline note after'>PRIEST TO HIS FREEDOM...?</span></div>";
        } else if (prompt.value.toLowerCase() == "freedom") {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline note after'>FREEDOM...</span><br><span class='firstline note after'>FREEDOM FROM PUNISHMENT</span><br><span class='firstline note after'>FROM PAIN</span><br><span class='firstline note after'>FROM JUDGEMENT</span><br><span class='firstline red notebroken after'>FROM CATACLYSM, BROUGHT BY LIGHT</span></div><div class='dialogueDW'><span class='firstline note after'>WON'T YOU JOIN ME IN THIS FREEDOM?</span><br><span class='firstline note after'>ALL YOU HAVE TO DO</span><br><span class='firstline note after'>IS DO AS I SAY</span></div>";
        } else if (prompt.value.toLowerCase() == "why are you here") {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline red notebroken after'>COWARDS!! ALL OF THEM!!</span><br><span class='firstline note after'>MY WARNINGS, IGNORED!</span><br><span class='firstline note after'>THAT WRETCHED GARGOYLE, SUMMONED</span><br><span class='firstline red notebroken after'>TRAPPED ME DOWN HERE, SPELLBOUND</span></div>";
        } else if (prompt.value.toLowerCase() == "jevil") {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline note'>WE'VE LONG OUTGROWN THE ERA OF KINGS</span><br><span class='normaline note after'>AND QUEENS</span><br><span class='firstline note'>THAT IMPISH JESTER IS NOTHING BUT A</span><br><span class='normaline note after'>DANGEROUS LUNATIC</span><br><span class='firstline note after'>HE CARRIES GREAT POWER...</span><br><span class='firstline note'>YET THAT POWER IS ENTIRELY WASTED ON<br><span class='normaline note after'>A BACKWARDS VISION OF THE WORLD</span></div>";
        } else if (greetings.includes(prompt.value.toLowerCase())) {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline note after'>I SEE I'M STILL WORTHY OF A GREETING</span><br><span class='firstline note after'>I SUPPOSE I SHOULD THANK YOU</span></div>";
        } else if (keeper.includes(prompt.value.toLowerCase())) {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline red notebroken'>TO THE DEPTHS OF HELL WHERE HE</span><br><span class='normaline red notebroken after'>BELONGS!!</span><br><span class='firstline note after'>CLAIMED I LED THE BELIEVERS ASTRAY</span><br><span class='firstline note after'>THEY NEEDED THE TRUTH</span><br><span class='firstline note after'>THEY ARE BLINDED BY THE LIGHT</span></div>";
        } else if (laughter.includes(prompt.value.toLowerCase())) {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline note'>... SO, YOU CAME ALL THIS WAY ONLY TO</span><br><span class='normaline note after'>RIDICULE ME?</span><br><span class='firstline red notebroken after'>CLIMB IN HERE, COWARD</span><br><span class='firstline red notebroken'>I'LL MAKE SURE YOU CHOKE ON YOUR OWN</span><br><span class='normaline red notebroken after'>LAUGHTER</span>";
        } else {
            answer.innerHTML = didntUnderstand();
        }
    } else {
        answer.innerHTML = nothingToSay();
    }
};