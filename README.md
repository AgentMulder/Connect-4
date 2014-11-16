Connect-4
=========

Classic Connect-4 game written entirely in HTML5, CSS and JavaScript, using TypeScript.  

See http://www.sympad.nl/connect4/ for a working example

See file "files" for a listing of the TypeScript-files that constitute this project

The resulting JavaScript code can be found in file "connect4.js"

See file "index.html" (or "Background" below) for the rationale behind this program


How to compile Connect-4
========================

Linux
=====
Copy the contents of this directory to a directory on your computer. Start up a terminal and cd to the local directory. Issue the following command:

$ tsc @files --target ES5 --out connect4.js

or run the script 'compile' from this directory.

You probably have to install TypeScript, and nodejs as well.


Windows
=======
No idea, probably the same as for Linux


Mac
===
No idea, probably the same as for Linux


Background
==========

       Place 4 disks in a row, either horizontal, vertical or diagonal, to win the game.

       Play the game with the mouse or with the keyboard. The Arrow keys let you 
       control the disk at the top. Other keys include Del, Insert, Home, End, PageUp 
       and PageDown. They change the look of the game. You start a new game with Escape. 
       Space and Enter swaps disks. ArrowUp udoes your last move.

       Using the mouse, you undo your last move by clicking on the curly arrow on 
       the left side of the screen.

       The colored stars give access to different levels of the game (keyboard keys 1 
       to 6).  Unfortunately, the first two levels play very dumb and place their disks 
       in an outer column. The other four levels (Advanced, Expert, Master and Ninja) 
       all play the same, very weak strategy: "Find a random column with at least one 
       place open". The computer is a weak player and easy to defeat. In fact, it takes 
       some effort to lose! You can make the computer win though, to feel the humiliation 
       and to see what it looks like. Hold ArrowDown key down for maximum effect.

       The fun of the game is, at least partially, in the code. JavaScript is not a
       easy language to work with, but it can be made to behave. A brand new computer 
       language from Microsoft called TypeScript has been of tremendous help to write 
       and concatenate the 30-something tiny little files with tiny little classes 
       together into one big JavaScript file called 'connect4.js', It looks very much 
       like the code I wrote myself, only better. On a Linux computer from a terminal, 
       so even though Microsoft developed the language, you are not bound to Windows to 
       use it. TypeScript is a neat little language that takes away much of the pain 
       of JavaScript.

       This computer program for Connect-4 illustrates a very basic programming 
       strategy, namely strict separation of Model and View, that has been around since 
       the early days of computer programming. Model-View-Controller (MVC). Google if 
       in doubt. In this program the separation of Model and View is taken to the extreme, 
       for educational purposes. Both Model and View are named and constucted using two 
       completely unrelated metaphors. 
       
       The 'Model'-stuff of this program is described in terms of an automobile. Motor, 
       Cylinder, Fuel and Gear, amongst other things, represent the state of the game. 
       This part of the program is short, concise and pretty nerdy. 
       
       All the 'View'-stuff in the program is represented by characters and items found 
       in the story 'Peter Rabbit' by Beatrix Potter. An absolute must-read. Look at a 
       copy at www.gutenberg.org.
       
       So there is a Metal part and a Furry part. All names that you encounter in the code 
       will refer to either the Furry side or to the Metal side. When a Veggie pops up, 
       that must be in Peters world. Soot, on the other hand, comes from the Machine. It 
       gives lexical structure to the program, turns it into a story, thereby making it 
       much easier to understand, to reason about and to maintain.
       
       The two meet when a Battery from the Model is shoved into the Bunny, making it run. 
       
       The Model is defined in car part names, but does not really reflect the way a motor 
       works. Allthough there is a Cylinder where Fuel is set on Fire, causing Smoke. Just 
       as with the Peter Rabbit methaphore, parts are named after clearly recognizable 
       entities and preferably used as container to hold other parts, like the Motor-object 
       hat  contains a Cylinder, Fuel and Gear, but does nothing with it. Its sole task is 
       to hold on to its items and become part of the narration.
       
       Scarecrow contains Jacket and Shoes, but does not act on them. As aspected.
  
       At risk of overstretching the metaphores, I tried my best to use only simple nouns. 
       I kept refering to Peter Rabbit and the good little bunnies over and over again, for 
       the wonderfull pictures, but also to look for usable analogies (Blackberries, 
       the Gate that Peter squeezes under, McGregor and the Scarecrow). McGregor appears 
       when you mouse over the garden.
       
       Finding proper names for items and finding the right 'granularity' (I love that 
       word) has been a mayor effort in this endeavour.
       
       I hope that you enjoy this piece of work. Maybe you can help make it even better! 
       There are many things still missing. First off, there must be a playing algorithm, 
       some sort of artificial intelligence to select the appropiate move for the given 
       level. Minimax, pruning, if that is your thing then please help. I can't do it.
       
       Tiny 'plick'- or 'plock'-sounds would be wonderfull.
       
       It would be great to see this turn into a 'real' game, that people subscribe to, 
       perhaps even pay for, allowing multi player games, high scores and achievements. 
       For fun and profit, because I did write this program for fun, to better my skills 
       and to give aspiring programmers something to chew on. But also because I need a 
       job. Please help turn lovely little games, like this one, into something that someday 
       generates cash, somehow. So that I can do fun stuff with the money :-) 
       
       All code will be on GitHub soon
       
       2 0 1 4 - m b m u l d e r @ o n l i n e . n l

