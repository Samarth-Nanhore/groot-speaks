//query selector stored in variable
var btn = document.querySelector("#translatebtn");
var user = document.querySelector("#input");
var result = document.querySelector("#output");

//API 
var serverAPI = "https://api.funtranslations.com/translate/groot.json"

// provide input to API server
function getTranslationURL(engtext) {
    return serverAPI + "?" + "text=" + engtext
}

// if the error occur
function errorHandler(error) {
    console.log("error occured", error);
    alert(" Sorry server error! try again after some time")
}

// processing: fetching translated data from server to the client browser
function clickHandler() {
    var inputText = user.value;

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            result.innerText = translatedText; // output
        })
        .catch(errorHandler)
};

// initiate server call button
btn.addEventListener("click", clickHandler)