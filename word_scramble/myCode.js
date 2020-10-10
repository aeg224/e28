let app = new Vue({
	el: '#wordScramble',
	data: {
		username: '',
		validName: null,
		words: [
			{word: 'football', hint: 'Sport with two meanings'},
			{word: 'espresso', hint: 'A delicious afternoon beverage'},
                        {word: 'onomotopia', hint: 'A literary device'},
                        {word: 'marvelous', hint: 'An enthusiastic exlamation'},
                        {word: 'accenture', hint: 'New Applied Now'},
                        {word: 'computer', hint: 'A device used for calculations'},
                        {word: 'guitar', hint: 'A six stringed instrument'},
			],
		secretWord: '',
		secretHint: '',
		guess: '',
		wordIndex: 0,
		results: '',
		isWin: null,
		guessSubmitted: false,	
	},
        methods: {

        startGame(){
		console.log(this.username.length);
		if (this.username.length>0){
			this.validName=true;
		}
		else{
			this.validName=false;
		}
		this.wordIndex=this.getRandomInt();
		this.secretWord=this.words[this.wordIndex].word;
		this.secretHint=this.words[this.wordIndex].hint;
	},
	submitGuess(){
		console.log("word is "+this.secretWord);
		console.log("guess is"+this.guess);
		if (this.guess == this.secretWord){
			this.results="You Win";
			this.isWin=true;
		}
		else{
			this.results="You Lose";
			this.isWin=false;
		}
		this.guessSubmitted=true;
	},
	restartGame(){
	this.guess = '';
	this.isWin = null;
	while ( this.secretWord == this.words[this.wordIndex].word ){
	        this.wordIndex=this.getRandomInt();
	}
	this.guessSubmitted=false;
	this.secretWord=this.words[this.wordIndex].word;
	this.secretHint=this.words[this.wordIndex].hint;	
	},
	getRandomInt(){
		return Math.floor(Math.random() * this.words.length);
	}
        },
	computed: {
// method for scrambling word found at Stack Overflow https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript

	scramble(){
		return this.secretWord.split('').sort(function(){return 0.5-Math.random()}).join('');
	}
}
})
