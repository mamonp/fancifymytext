function makeBigger()
{
    document.getElementById('textInput').style.fontSize = '24pt';
}
function updateStyle() {
    var textArea = document.getElementById("textInput");
    var fancy = document.getElementById("fancy");
    var boring = document.getElementById("boring");

    if (fancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boring.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
function mooText() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;

    text = text.toUpperCase();

    var sentences = text.split(".");

    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.length > 0) {
            var words = sentence.split(" ");
            words[words.length - 1] = words[words.length - 1] + "-MOO";
            sentences[i] = words.join(" ");
        }
    }

    text = sentences.join(". ");
    
    text = text.trim();

    textArea.value = text;
}



