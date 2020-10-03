let app = new Vue({
	el: '#gameP1',
	data: {
		selection: "",
		gameHistory: []	
	},
        methods: {

        runGame(){
		console.log(this.selection);        
		}
        },

	getComputerSelection(){},
	getResults(){}
})
