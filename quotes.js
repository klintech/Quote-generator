const quotes = [
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Good code is its own best documentation.", author: "Steve McConnell" },
    { text: "The best way to predict the future is to implement it.", author: "David Heinemeier Hansson" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "It’s not a bug – it’s an undocumented feature.", author: "Anonymous" },
    { text: "In programming, the hard part isn’t solving problems, but deciding what problems to solve.", author: "Paul Graham" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "You can’t have great software without a great team.", author: "Jim Highsmith" },
    { text: "The only way to go fast, is to go well.", author: "Robert C. Martin" },
    { text: "I don’t care if it works on your machine! We are not shipping your machine!", author: "Vidiu Platon" },
    { text: "If you think your users are idiots, only idiots will use it.", author: "Linus Torvalds" },
    { text: "The best thing about a boolean is even if you are wrong, you are only off by a bit.", author: "Anonymous" },
    { text: "There are only two hard things in computer science: cache invalidation and naming things.", author: "Phil Karlton" },
    { text: "When debugging, novices insert proverbs into their code. Experts remove them.", author: "Richard Pattis" },
    { text: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
    { text: "Software is like entropy: it is difficult to grasp, weighs nothing, and obeys the second law of thermodynamics; i.e. it always increases.", author: "Norman Augustine" },
    { text: "There are only two hard things in computer science: cache invalidation and naming things.", author: "Phil Karlton" },
    { text: "The problem with quick and dirty is that dirty remains long after quick has been forgotten.", author: "Steve C. McConnell" },
    { text: "To iterate is human, to recurse is divine.", author: "L. Peter Deutsch" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "If you can’t explain it simply, you don’t understand it well enough.", author: "Albert Einstein" },
    { text: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
    { text: "Optimism is an occupational hazard of programming: feedback is the treatment.", author: "Kent Beck" },
    { text: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
    { text: "Adding manpower to a late software project makes it later.", author: "Fred Brooks" },
    { text: "A computer lets you make more mistakes faster than any invention in human history – with the possible exceptions of handguns and tequila.", author: "Mitch Ratcliffe" },
    { text: "To understand recursion, you must first understand recursion.", author: "Unknown" },
    { text: "Without requirements or design, programming is the art of adding bugs to an empty text file.", author: "Louis Srygley" },
    { text: "There are only two hard things in computer science: cache invalidation and naming things.", author: "Phil Karlton" },
    { text: "If you’re not embarrassed by the first version of your product, you’ve launched too late.", author: "Reid Hoffman" },
    { text: "Testing is the process of trying to show that a program has errors.", author: "Edsger W. Dijkstra" },
    { text: "Software engineering is the part of computer science which is too difficult for the computer scientist.", author: "Edsger Dijkstra" },
    { text: "Code that is written for the compiler is a different type of code than code written for the reader.", author: "Peter Seibel" },
    { text: "The most damaging phrase in the language is: ‘It’s always been done that way.’", author: "Grace Hopper" },
    { text: "A good programmer is someone who always looks both ways before crossing a one-way street.", author: "Doug Linder" },
    { text: "Programmers are lazy, and that's a good thing.", author: "Ralph Johnson" },
    { text: "The act of coding is not just about writing code – it’s about solving problems.", author: "Anonymous" },
    { text: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
    { text: "The problem is that debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", author: "Brian W. Kernighan" },
    { text: "The most important property of a program is whether it accomplishes the intention of its user.", author: "C.A.R. Hoare" },
    { text: "The only way to deal with this life meaningfully is to find one's passion and pursue it with all of one's being.", author: "Elon Musk" },
    { text: "Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { text: "Never let the computer know you’re in a hurry.", author: "Jef Raskin" },
    { text: "Software is like sex: it’s better when it’s free.", author: "Linus Torvalds" },
    { text: "I am not a great programmer; I am just a good programmer with great habits.", author: "Kent Beck" },
    { text: "Java is to JavaScript what car is to Carpet.", author: "Chris Heilmann" },
    { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { text: "The best performance improvement is the transition from the nonworking state to the working state.", author: "John Ousterhout" },
    { text: "Don’t write better error messages, write code that never throws errors.", author: "Joel Spolsky" },
    { text: "You should be able to generate a random number generator that works by picking the right paper from the right stack of paper.", author: "Anonymous" },
    { text: "The only real mistake is the one from which we learn nothing.", author: "Henry Ford" },
    { text: "A good programmer is someone who looks both ways before crossing a one-way street.", author: "Doug Linder" }
];