# Project 1
+ By: Alexander Giannini
+ Production URL: http://e28p1.alex-giannini.me/

## Outside resources
Vue Radio Buttons: https://vuejs.org/v2/guide/forms.html#Radio

Bootstrap: https://getbootstrap.com/

Bootstrap NavBar: https://getbootstrap.com/docs/4.0/components/navbar/

Bootstrap Card: https://getbootstrap.com/docs/4.5/components/card/

Array Splice (for resetting game): https://www.w3schools.com/jsref/jsref_splice.asp

Font: https://fonts.google.com/specimen/Share+Tech+Mono?preview.text=Rock&preview.text_type=custom&category=Monospace&sidebar.open=true&selection.family=Share+Tech+Mono

## Notes for instructor

For project one, I created a Rock, Paper Scissors Game. The app uses bootstrap for styling and includes two components.

### Base Styling
The app uses Bootstrap for styling. I decided to do this because it provides clean and easy-to-use styling without having to implement a lot of custom CSS. The app uses two nested cards and a navbar (links to the bootstrap page are listed in sources).

### Font
I decided to add a font style that I found on Google Fonts (a link to the font page is included in the sources list).

### Dynamic Styling
To fulfill the Dynamic Styling req's I bound the classes to boolean variables. Three were necessary becasue Rock Paper Scissors has three possible outcomes and I wanted to make sure each result had non-default styling.

### Component: navigation-header
This compenent encapsulates the bootstrap navbar and does not receive any arguments. It calls on a text variable.

### Component: game-feedback
This component is used to display the results of the game. It uses dynamic styling and receives three props, the user selection, the computer selection and the round number (gameHistory.length). It also uses a computed variable to determine the winner and display the data.

### Game History
The game keeps track of the history using an object keeping track of the scores and an array of strings indicating the winner.

### Reset Button
The resetHistory() method resets the history without refreshing the page. It does this by resetting the variables, including the user selection, the computer selection and the gameStarted boolean (which determines if the game-results component is displayed).

### Notes
One of the issues that arose, was the location of the component's templates prevented my app from rendering properly. A similar issue was raised by [another student](https://github.com/susanBuck/e28-fall20/issues/28) whose issue-thread was helpful.

## Sources 

Vue Radio Buttons: https://vuejs.org/v2/guide/forms.html#Radio

Bootstrap: https://getbootstrap.com/

Bootstrap NavBar: https://getbootstrap.com/docs/4.0/components/navbar/

Bootstrap Card: https://getbootstrap.com/docs/4.5/components/card/

Array Splice (for resetting game): https://www.w3schools.com/jsref/jsref_splice.asp

Font: https://fonts.google.com/specimen/Share+Tech+Mono?preview.text=Rock&preview.text_type=custom&category=Monospace&sidebar.open=true&selection.family=Share+Tech+Mono