let app = new Vue({
	el: '#gameP1',
	data: {
		selection: "",
		tempSelection: "",
		runningScore: {computerWin: 0, playerWin: 0, draw: 0},
		gameHistory: [],
		options: ['rock', 'paper', 'scissors'],
		computerSelection: '',
		gameStarted: false,
		isWin: false,
		isLose: false,
		isDraw: false,

	},
        methods: {

			runGame(){

				console.log(this.selection); 
				this.computerSelection=this.options[this.getRandomInt()];
				console.log(this.computerSelection);
				this.selection=this.tempSelection;
				this.gameStarted=true;
				this.recordResults();
				
			},
			getRandomInt(){
				return Math.floor(Math.random() * this.options.length);
			},
			recordResults(){
				if (this.selection == this.computerSelection){
					this.runningScore.draw += 1;
					this.gameHistory.push('Draw');
					this.isWin=false;
					this.isLose=false;
					this.isDraw=true;
				}
				else if (this.selection == 'rock' && this.computerSelection == 'paper' || this.selection == 'paper' && this.computerSelection == 'scissors' || this.selection == 'scissors' && this.computerSelection == 'rock'){
					this.runningScore.computerWin += 1;
					this.gameHistory.push('Computer');
					this.isWin=false;
					this.isLose=true;
					this.isDraw=false;
				}
				else {
					this.runningScore.playerWin +=1;
					this.gameHistory.push('Player');
					this.isWin=true;
					this.isLose=false;
					this.isDraw=false;
				}
			},
			resetHistory(){
				console.log('reset history');
				this.runningScore.computerWin = 0;
				this.runningScore.playerWin = 0;
				this.runningScore.draw = 0;
				this.gameHistory.splice(0, this.gameHistory.length);
				}
        },

		computed: {
			feedback(){
				if (this.selection == this.computerSelection){
					return 'Draw!';
				}
				else if (this.selection == 'rock' && this.computerSelection == 'paper' || this.selection == 'paper' && this.computerSelection == 'scissors' || this.selection == 'scissors' && this.computerSelection == 'rock'){
					return 'You Lose';
				}
				else {
					return 'You Win';
				}
			}
		}
})
