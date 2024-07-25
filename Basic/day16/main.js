let a = 10;
console.log(a);

array = ['Dog', 'Cat', 'Rabbit', 'Donkey'];
console.log(array   )

// array

const formatArg = (arg) => {
    if(Array.isArray(arg)){
        return arg.map((part) => `- ${part}`).join("\n");
    }
    if(arg.toString === Object.prototype.toString) {
        return JSON.stringify(arg);
    }
    return arg;
};

const print = (segments, ...args) => {
    // For any well-formed template literal, there will always be N args and
    // (N+1) string segments.
    let message = segments[0];
    segments.slice(1).forEach((segment, index) => {
      message += formatArg(args[index]) + segment;
    });
    console.log(message);
  };
  

const todos = [
    "Learn JavaScript",
    "Learn Web APIS",
    "Set up my Website",
    "Profit",
];

const progress = { javascript: 20, html: 80, css: 10};
print`I need to do:
${todos}
My current progress is: ${progress}`;

print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress);
console.log("I need to do:\n%o\nMy current progress is: %o\n", todos, progress);



