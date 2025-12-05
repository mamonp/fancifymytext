function makeBigger()
{
    document.getElementById('textInput').style.fontSize = '24pt';
}
function updateStyle() {
    var textArea = document.getElementById("textInput");
    var fancy = document.getElementById("fancy");
    var boring = document.getElementById("boring");

    if (fancy.checked) {
        // FancyShmancy: bold, blue, underlined
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (boring.checked) {
        // BoringBetty: revert styles
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}
function mooText() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;

    // 1. Uppercase everything
    text = text.toUpperCase();

    // 2. Split into sentences by "."
    var sentences = text.split(".");

    // 3. Modify each non-empty sentence
    for (var i = 0; i < sentences.length; i++) {
        var sentence = sentences[i].trim();
        if (sentence.length > 0) {
            // Split sentence into words
            var words = sentence.split(" ");
            // Add "-MOO" to the last word
            words[words.length - 1] = words[words.length - 1] + "-MOO";
            // Rejoin the words
            sentences[i] = words.join(" ");
        }
    }

    // 4. Join sentences back together with ". " (and trim extra space)
    text = sentences.join(". ");
    
    // Optional: remove trailing space if we added one at the end
    text = text.trim();

    textArea.value = text;
}


