# JavaScript

##This keyword
The this Keyword
In a function definition, this refers to the "owner" of the function.

In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.

Learn more about this in The JavaScript this Tutorial.

##comparing two objects always returns false
x = new String("john")
y = new String("john")

x == y -> false
x === y -> false
