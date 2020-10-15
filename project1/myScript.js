let app = new Vue({
	el: '#gameP1',
	data: {
		selection: "",
		gameHistory: [],
		options: ['rock', 'paper', 'scissors'],
		computerSelection: '',
		gameStarted: false,

	},
        methods: {

			runGame(){
				console.log(this.selection); 
				this.computerSelection=this.options[this.getRandomInt()];
				console.log(this.computerSelection);
				this.gameStarted=true;
				
			},
			getRandomInt(){
				return Math.floor(Math.random() * this.options.length);
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
