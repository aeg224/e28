# Project 1

### By Alex Giannini

For project one, I created a Rock, Paper Scissors Game. The app uses bootstrap for styling and includes two components.


### Base Styling
The app uses Bootstrap for styling. I decided to do this because it provides clean and easy to use styling without having to implement a lot of CSS. Also, I decided to add a font style that I found on Google Fonts (a link to the font page is included in the sources list).

### Dynamic Styling
To fulfill the Dynamic Styling req's I bound the classes to boolean variables. Three were necessary becasue Rock Paper Scissors has three possible outcomes and I wanted to make sure each result had non-default styling.

### Component: navigation-header
This compenent encapsulates the bootstrap navbar and does not receive any arguments. It calls on a text variable.

### Component: game-feedback
This component is used to display the results of the game. It uses dynamic styling and receives three props, the user selection, the computer selection and the round number (gameHistory.length). It also uses a computed variable to determine the winner and display the data.

### Notes
One of the issues that arose, was the location of the component's templates prevented my app from rendering properly. A similar issue was raised by [another student]("https://github.com/susanBuck/e28-fall20/issues/28")'s whose issue thread was helpful. In my situation, the 

## Sources 
Vue Radio Buttons: https://vuejs.org/v2/guide/forms.html#Radio

Bootstrap NavBar: https://getbootstrap.com/docs/4.0/components/navbar/

Array Splice (for resetting game): https://www.w3schools.com/jsref/jsref_splice.asp


Font
https://fonts.google.com/specimen/Share+Tech+Mono?preview.text=Rock&preview.text_type=custom&category=Monospace&sidebar.open=true&selection.family=Share+Tech+Mono