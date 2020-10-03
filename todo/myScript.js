let app = new Vue({
	el: '#shoppingList',
	data: {
		totalItems: 0,
		listItem: '',
		listNum: '',
		listItems: []
	
	},
        methods: {

        addItem(){
		this.totalItems+=this.listNum;
		console.log(this.totalItems);
		console.log(this.listNum, this.listItem);
		itemObject={};
		itemObject.listNum= this.listNum;
                itemObject.listItem = this.listItem;
		this.listItems.push(itemObject );
		console.log(this.listItems);        
		}
        }
})
