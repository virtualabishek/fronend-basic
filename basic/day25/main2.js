function readFile(callback) {
    setInterval(() => {
        console.log("This is file reading");
        const fileData = "This is a content of a file.";
        callback(fileData);
    }, 1000);
}

function processFile(content) {
    console.log("Processing the content");
    console.log(content.toUpperCase());
}

readFile(function(content) {
    processFile(content);
});

