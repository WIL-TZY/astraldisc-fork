var prompt = document.getElementById("prompt");
var answer = document.getElementById("answer");

var greetings = new Array("Hello", "hello", "Hi", "hi", "greetings", "salutations");
var keeper = new Array("Keeper", "keeper", "Gargoyle", "gargoyle", "wretched gargoyle");
var laughter = new Array("haha", "hahaha", "teehee");
var lightners = new Array("lightners", "Lightners", "lightner", "Lightners");

function whisper() {
    if (prompt && prompt.value) {
        if (greetings.includes(prompt.value)) {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline note after'>I SEE I'M STILL WORTHY OF A GREETING</span><br><span class='firstline note after'>I SUPPOSE I SHOULD THANK YOU</span></div>";
        } else if (prompt.value == "Why are you here" || prompt.value == "why are you here") {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline red notebroken after'>COWARDS!! ALL OF THEM!!</span><br><span class='firstline note after'>MY WARNINGS, IGNORED!</span><br><span class='firstline note after'>THAT WRETCHED GARGOYLE, SUMMONED</span><br><span class='firstline red notebroken after'>TRAPPED ME DOWN HERE, SPELLBOUND</span></div>";
        } else if (keeper.includes(prompt.value)) {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline red notebroken'>TO THE DEPTHS OF HELL WHERE HE</span><br><span class='normaline red notebroken after'>BELONGS!!</span><br><span class='firstline note after'>CLAIMED I LED THE BELIEVERS ASTRAY</span><br><span class='firstline note after'>THEY NEEDED THE TRUTH</span><br><span class='firstline note after'>THEY ARE BLINDED BY THE LIGHT</span></div>";
        } else if (laughter.includes(prompt.value)) {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline note'>... SO, YOU CAME ALL THIS WAY ONLY TO</span><br><span class='normaline note after'>RIDICULE ME?</span><br><span class='firstline red notebroken after'>CLIMB IN HERE, COWARD</span><br><span class='firstline red notebroken'>I'LL MAKE SURE YOU CHOKE ON YOUR OWN</span><br><span class='normaline red notebroken after'>LAUGHTER</span>";
        } else {
            answer.innerHTML = "<div class='dialogueDW'><span class='firstline red notebroken after'>SPEAK UP!!!</span><br><span class='firstline note'>HOW AM I SUPPOSED TO HEAR YOU FROM</span><br><span class='normaline note after'>DOWN HERE IF YOU ARE MUMBLING?!</span></div>";
        }
    } else {
        answer.innerHTML = "<div class='dialogueDW'><span class='firstline note after'>... NOTHING TO SAY?</span><br><span class='firstline red notebroken after'>THEN WHY COME?</span><br><span class='firstline red notebroken after'>TO FURTHER HUMLIATE ME?!</span></div>";
    }
};