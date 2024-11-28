// Constructor function to create an object with fname, lname, and methods
function Person(fname, lname) {
    this.fname = fname;  // First name
    this.lname = lname;  // Last name

    // Method to display the full name
    this.display = function() {
        console.log(`Full Name: ${this.fname} ${this.lname}`);
    };

    // Method to change the last name
    this.changeLastName = function(newLname) {
        this.lname = newLname;  // Update last name
        console.log(`Last name updated to: ${this.lname}`);
    };
}

// Creating a new object using the Person constructor
const person1 = new Person("John", "Doe");

// Display the full name
person1.display();  // Output: Full Name: John Doe

// Change the last name
person1.changeLastName("Smith");  // Output: Last name updated to: Smith

// Display the updated full name
person1.display();  // Output: Full Name: John Smith

