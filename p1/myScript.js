/*	component navigation-header
//  purpose: 	to encapsulate all of the games header
//  props: 		none
//	template:	uses navigation-detail templated located in index.html
//	notes:		uses Bootstrap's navbar to display the contents of text
*/
Vue.component('navigation-header', {
	data: function () {
		return {

			text: 'E28 Project 1'
		}
	},
	template: '#navigation-detail',
})


/*	component <game-feedback>
//  purpose: 	to encapsulate all of the feedback data
//  props: 		user, computer and result. These correspond with selection, computerSelection and feedback (from the parent component)
//	template:	uses compnent-detail templated located in index.html
//  computed:	feedback variable computes results and returns message
//	notes:		component implements dynamic styling - locaed in index.html
*/
Vue.component('game-feedback', {
	data: function () {
		return {

			text: 'hello world'
		}
	},
	props: ['user', 'computer', 'round'],
	template: '#component-detail',

	// A computed variable that displays the correct feedback according to the selection.
	computed: {
		feedback() {
			if (this.user.length == 0) {
				return "";
			}
			else if (this.user == this.computer) {
				return 'Draw!';
			}
			else if (this.user == 'rock' && this.computer == 'paper' || this.user == 'paper' && this.computer == 'scissors' || this.user == 'scissors' && this.computer == 'rock') {
				return 'You Lose';
			}
			else {
				return 'You Win';
			}
		}
	}
})






/*	Parent Component
//  purpose: 	to drive the Vue Application
*/
let app = new Vue({
	el: '#gameP1',
	// Contains ten variables used to run the game
	data: {
		tempSelection: "",
		selection: "",
		computerSelection: '',
		runningScore: { computerWin: 0, playerWin: 0, draw: 0 },
		gameHistory: [],
		options: ['rock', 'paper', 'scissors'],
		gameStarted: false,
		isWin: false,
		isLose: false,
		isDraw: false,

	},
	methods: {

		// Completes a round of the game. Gets the user and computer's selection and records the results
		runGame() {
			if (this.tempSelection.length != 0){
			this.computerSelection = this.options[this.getRandomInt()];
			this.selection = this.tempSelection;
			this.gameStarted = true;			// reveals div in index.html
			this.recordResults();
			}
		},

		// Random Number Generator
		getRandomInt() {
			return Math.floor(Math.random() * this.options.length);
		},

		// Records the results in gameHistory and runningScore
		// Modifys the isWin variables for use in dynamic styling
		recordResults() {
			if (this.selection == this.computerSelection) {
				this.runningScore.draw += 1;
				this.gameHistory.push('Draw');
				this.isWin = false;
				this.isLose = false;
				this.isDraw = true;
			}
			else if (this.selection == 'rock' && this.computerSelection == 'paper' || this.selection == 'paper' && this.computerSelection == 'scissors' || this.selection == 'scissors' && this.computerSelection == 'rock') {
				this.runningScore.computerWin += 1;
				this.gameHistory.push('Computer');
				this.isWin = false;
				this.isLose = true;
				this.isDraw = false;
			}
			else {
				this.runningScore.playerWin += 1;
				this.gameHistory.push('Player');
				this.isWin = true;
				this.isLose = false;
				this.isDraw = false;
			}
		},

		// Resets the game history and running schore
		// Called on by reset button in index.html
		resetHistory() {
			this.runningScore.computerWin = 0;
			this.runningScore.playerWin = 0;
			this.runningScore.draw = 0;
			this.gameHistory.splice(0, this.gameHistory.length);
			this.selection = "";
			this.computerSelection == "";
			this.gameStarted = false;
		}
	},


})
