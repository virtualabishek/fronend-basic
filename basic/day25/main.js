function readFile(callback) {
    setTimeout(() => {
        console.log("Reading file.");
        const fileName = "Hello, This is a file content!";
        callback(fileName)
    },1000);
}

function processFileContent(content) {
    console.log("Processing file content to uppercase:")
    console.log(content.toUpperCase());
}
readFile(function(content){
    processFileContent(content);
});
