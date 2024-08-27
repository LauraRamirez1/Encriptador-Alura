function toggleImage() {
    var inputText = document.getElementById("inputText").value;
    var outputText = document.getElementById("outputText").textContent;
    var imageContainer = document.getElementById("imageContainer");

    if (inputText.trim() === "" && outputText.trim() === "") {
        imageContainer.style.display = "block"; 
    } else {
        imageContainer.style.display = "none"; 
    }
}

// Se encripta usando Base64 
function encryptText() {
    var inputText = document.getElementById("inputText").value;
    if (inputText.trim() !== "") {
        var encryptedText = btoa(inputText); 
        showOutput(encryptedText);
        document.getElementById("inputText").value = ""; 
        toggleImage(); n
    }
}

function decryptText() {
    var inputText = document.getElementById("inputText").value;
    if (inputText.trim() !== "") {
        try {
            var decryptedText = atob(inputText); 
            showOutput(decryptedText);
        } catch (e) {
            showOutput("Texto inválido para desencriptar.");
        }
        document.getElementById("inputText").value = ""; 
        toggleImage(); 
    }
}

function showOutput(text) {
    var outputContainer = document.getElementById("outputContainer");
    var outputText = document.getElementById("outputText");

    outputText.textContent = text;
    outputContainer.style.display = "block";
    toggleImage(); 
}

function copyText() {
    var outputText = document.getElementById("outputText");
    var textToCopy = outputText.textContent;

   
    var tempElement = document.createElement("textarea");
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);

    resetSystem();
}

function resetSystem() {
    document.getElementById("inputText").value = ""; 
    document.getElementById("outputText").textContent = ""; 
    document.getElementById("outputContainer").style.display = "none"; 
    toggleImage(); 
}


window.onload = function() {
    toggleImage();
};