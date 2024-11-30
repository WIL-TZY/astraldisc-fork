var prompt = document.getElementById("prompt");
var answer = document.getElementById("answer");

const greetings = new Array("hello", "hi", "greetings", "salutations");
const laughter = new Array("haha", "hahaha", "teehee");
const beltrowel = new Array("what is your name", "what is your name?", "name", "name?")
const HowAreYou = new Array("how are you", "how are you?", "how you doing", "how you doing?");
const whyHere = new Array("why are you here", "why are you here?");

const defaultArray = [
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
    "<div class='dialogueDW'><span class='firstline note after'>... NOTHING TO SAY?</span><br><span class='firstline red notebroken after'>THEN WHY COME?</span><br><span class='firstline red notebroken after'>TO FURTHER HUMILIATE ME?!</span></div>",
    "<div class='dialogueDW'><span class='firstline red notebroken after'>ARE YOU LISTENING TO ME?!</span><br><span class='firstline note after'>... IS ANYONE EVEN THERE?</span></div>",
    "<div class='dialogueDW'><span class='firstline note after'>...</span></div>"
];

// Normalize input to a consistent format
function normalize(input) {
    /* 
    The regular expression removes all characters from the string that are not:
    \w: Word characters (letters, digits, and underscores)
    \s: Whitespace characters (spaces, tabs, etc)

    The ^ inside the brackets negates the match, so it removes everything except word characters and spaces
    The g flag ensures the replacement is applied globally across the entire string
    */
    return input.trim().toLowerCase().replace(/[^\w\s]/g, '');
}

function nothingToSay() {
    var randomNumber = Math.floor(Math.random() * nothingArray.length);
    var randomAnswer = nothingArray[randomNumber];
    return randomAnswer;
}

function speak() {
    if (prompt && prompt.value) {
        const userInput = normalize(prompt.value); 

        if (beltrowel.includes(userInput)) {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note after'>BELTROWEL</span>
                    <br>
                    <span class='firstline note after'>NO NEED TO TELL ME YOURS</span>
                    <br>
                    <span class='firstline note after'>I DO NOT CARE FOR PASSERSBY...</span>
                </div>
            `;
        } else if (HowAreYou.includes(userInput)) {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline red notebroken'>HOW DO YOU THINK THE ONE FOREVER</span>
                    <br>
                    <span class='normaline red notebroken after'>STUCK DOWN A WELL MIGHT BE DOING?</span>
                    <br>
                    <span class='firstline red notebroken after'>...MISERABLE!!! THAT'S HOW!!!</span>
                </div>
                
                <div class='dialogueDW'>
                    <span class='firstline note after'>...</span>
                    <br>
                    <span class='firstline note'>YOU ARE A GOOD SAMARITAN, AREN'T YOU?</span>
                    <br>
                    <span class='normaline note'>WON'T YOU HELP GUIDE A KIND-HEARTED</span>
                    <br>
                    <span class='normaline note after'>PRIEST IN NEED...?</span>
                </div>
            `;
        } else if (userInput === "freedom") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note after'>FREEDOM...</span>
                    <br>
                    <span class='firstline note after'>FREEDOM FROM PUNISHMENT</span>
                    <br>
                    <span class='firstline note after'>FROM PAIN</span>
                    <br>
                    <span class='firstline note after'>FROM JUDGEMENT</span>
                    <br>
                    <span class='firstline red notebroken after'>FROM CATACLYSM, BROUGHT BY LIGHT</span>
                </div>
                
                <div class='dialogueDW'>
                    <span class='firstline note after'>WON'T YOU JOIN ME IN THIS FREEDOM?</span>
                    <br>
                    <span class='firstline note after'>ALL YOU REALLY NEED</span>
                    <br>
                    <span class='firstline note after'>IS TO DO AS I SAY</span>
                </div>
            `;
        } else if (whyHere.includes(userInput)) {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline red notebroken after'>COWARDS!! ALL OF THEM!!</span>
                    <br>
                    <span class='firstline note after'>MY WARNINGS, IGNORED!</span>
                    <br>
                    <span class='firstline note after'>THAT WRETCHED GARGOYLE, SUMMONED</span>
                    <br>
                    <span class='firstline red notebroken after'>TRAPPED ME DOWN HERE, SPELLBOUND</span>
                </div>
            `;
        } else if (userInput === "jevil") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note'>WE'VE LONG OUTGROWN THE ERA OF KINGS</span>
                    <br>
                    <span class='normaline note after'>AND QUEENS</span>
                    <br>
                    <span class='firstline note'>THAT IMPISH JESTER IS NOTHING BUT A</span>
                    <br>
                    <span class='normaline note after'>DANGEROUS LUNATIC</span>
                    <br>
                    <span class='firstline note after'>HE CARRIES GREAT POWER...</span>
                    <br>
                    <span class='firstline note'>YET THAT POWER IS ENTIRELY WASTED ON</span>
                    <br>
                    <span class='normaline note after'>A BACKWARDS VISION OF THE WORLD</span>
                </div>
            `;
        } else if (userInput === "spamton") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note'>NOW THERE IS A CREATURE WHO</span>
                    <br>
                    <span class='normaline note after'>UNDERSTANDS THE ART OF PERSUASION</span>
                    <br>
                    <span class='firstline note'>CUNNING AS A SERPENT, WITH FAITH THAT</span>
                    <br>
                    <span class='normaline note after'>MIRRORS MINE-- TWISTED, BUT POTENT</span>
                    <br>
                </div>
                
                <div class='dialogueDW'>
                    <span class='firstline note after'>I CAN'T HELP BUT ADMIRE HIS...</span>
                    <br>
                    <span class='firstline note after'>SHALL WE SAY</span>
                    <br>
                    <span class='firstline note after'>ENTREPRENEURIAL SPIRIT</span>
                    <br>
                    <span class='firstline note'>HE MIGHT JUST BE THE MOST DEVOUT OF</span>
                    <br>
                    <span class='normaline note after'>ALL... IN HIS OWN WAY</span>
                </div>
            `;
        } else if (userInput === "halojack") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline red notebroken after'>DO NOT REMIND ME OF THAT FREAK</span>
                    <br>
                    <span class='firstline note after'>PARADING HER UNHOLY HALO AROUND...</span>
                    <br>
                    <span class='firstline note'>CONFUSING THE BELIEVERS WITH HER...</span>
                    <br>
                    <span class='normaline note after'>DERANGED TRANSMISSIONS</span>
                    <br>
                    <span class='firstline red notebroken after'>I CANNOT STAND HER!!!</span>
                </div>
                
                <div class='dialogueDW'>
                    <span class='firstline note'>I WILL NOT TOLERATE THAT YOU RUB HER</span>
                    <br>
                    <span class='normaline note after'>ACHIEVEMENTS IN MY FACE!</span>
                    <br>
                    <span class='firstline red notebroken after'>IS THAT YOUR INTENT?!</span>
                    <br>
                    <span class='firstline red notebroken after'>BEGONE WITH YOU!!</span>
                </div>
            `;
        } else if (userInput === "spree blitz") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note after'>AH... YES</span>
                    <br>
                    <span class='firstline note after'>I REMEMBER HIM</span>
                    <br>
                    <span class='firstline note after'>MY FALLEN ANGEL</span>
                </div>
            `;
        } else if (userInput === "gauze") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note after'>... I PRESUME YOU TALK OF A PERSON?</span>
                    <br>
                    <span class='firstline note'>I HAVEN'T THE FAINTEST IDEA OF WHO</span>
                    <br>
                    <span class='normaline note after'>THAT IS MEANT TO BE</span>
                    <br>
                    <span class='firstline note after'>QUITE THE ODD NAME...</span>
                </div>
            `;
        } else if (userInput === "minerva") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note after'>A CURIOUS SOUL, THAT ONE</span>
                    <br>
                    <span class='firstline note'>OBSESSED WITH HER INK, AS IF HER VERY</span>
                    <br>
                    <span class='normaline note after'>EXISTENCE FLOWS FROM IT</span>
                </div>
                
                <div class='dialogueDW'>
                    <span class='firstline note'>SO WRAPPED UP IN THE GRAND</span>
                    <br>
                    <span class='normaline note'>MACHINATIONS OF LIGHTNER HISTORY...</span>
                    <br>
                    <span class='firstline note'>TRUTH BE TOLD, I'VE NO CARE FOR HER</span>
                    <br>
                    <span class='normaline note'>PLIGHT-- HER \"SPIRITUAL\" INK IS AS</span>
                    <br>
                    <span class='normaline note'>TRIVIAL AS THE DUST AND IRON THAT</span>
                    <br>
                    <span class='normaline note after'>GATHERS IN THIS FORSAKEN WELL</span>
                </div>
            `;
        } else if (userInput === "acolyte" || userInput === "the acolyte") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note after'>OH... HER</span>
                    <br>
                    <span class='firstline note after'>TRULY UNPLEASANT AS THEY GET</span>
                    <br>
                    <span class='firstline red notebroken'>VERY MUCH UNWORTHY OF THE POSITION</span>
                    <br>
                    <span class='normaline red notebroken after'>SHE'S FOUND FOR HERSELF</span>
                    <br>
                    <span class='firstline note after'>BUT... SOMEONE BEGS TO DIFFER</span>
                    <br>
                    <span class='firstline note'>SHE'S ALWAYS FOLLOWING THE NUN</span>
                    <br>
                    <span class='normaline note after'>AROUND LIKE A LAPDOG...</span>
                </div>
            `;
        } else if (userInput === "mesmer") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note after'>MESMER? MESMER??</span>
                    <br>
                    <span class='firstline note after'>I HAVE NOT HEARD OF SUCH A NAME</span>
                    <br>
                    <span class='firstline red notebroken'>I SWEAR THEY KEEP WELCOMING NEW</span>
                    <br>
                    <span class='normaline red notebroken after'>BELIEVERS WHEN I AM NOT LISTENING</span>
                </div>
            `;
        } else if (userInput === "gargoyle" || userInput === "keeper") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline red notebroken'>TO THE DEPTHS OF HELL WHERE HE</span>
                    <br>
                    <span class='normaline red notebroken after'>BELONGS!!</span>
                    <br>
                    <span class='firstline note after'>CLAIMED I LED THE BELIEVERS ASTRAY</span>
                    <br>
                    <span class='firstline note after'>THEY NEEDED THE TRUTH</span>
                    <br>
                    <span class='firstline note after'>THEY ARE BLINDED BY THE LIGHT</span>
                </div>
            `;
        } else if (userInput === "priestess") {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note after'>WHAT? WHAT PRIESTESS?!</span>
                    <br>
                    <span class='firstline red notebroken'>WERE THOSE BUFFOONS AT THE MANOR SO</span>
                    <br>
                    <span class='normaline red notebroken after'>QUICK TO REPLACE ME???</span>
                    <br>
                    <span class='firstline red notebroken after'>THOSE LIGHTNER-WORSHIPPING--</span>
                    <br>
                    <span class='firstline note after'>...</span>
                    <br>
                    <span class='firstline note after'>I NEED A FEW MINUTES.</span>
                </div>
            `;
        } else if (greetings.includes(userInput)) {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note after'>I SEE I'M STILL WORTHY OF A GREETING</span>
                    <br>
                    <span class='firstline note after'>I SUPPOSE I SHOULD THANK YOU</span>
                </div>
            `;
        } else if (laughter.includes(userInput)) {
            answer.innerHTML = `
                <div class='dialogueDW'>
                    <span class='firstline note'>... SO, YOU CAME ALL THIS WAY ONLY TO</span>
                    <br>
                    <span class='normaline note after'>RIDICULE ME?</span>
                    <br>
                    <span class='firstline red notebroken after'>CLIMB IN HERE, COWARD</span>
                    <br>
                    <span class='firstline red notebroken'>I'LL MAKE SURE YOU CHOKE ON YOUR OWN</span>
                    <br>
                    <span class='normaline red notebroken after'>LAUGHTER</span>
                </div>
            `;
        } else {
            answer.innerHTML = didntUnderstand();
        }
    } else {
        answer.innerHTML = nothingToSay();
    }
};
