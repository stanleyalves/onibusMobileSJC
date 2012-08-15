function ListBus() {
	var thisObject = this;

	//create object instance, a parasitic subclass of Observable
	this.view = Ti.UI.createView();

	this.getListBusView = function() {
		thisObject.openConnectionToDatabase();
		
		var label = Ti.UI.createLabel({
			color : '#000000',
			text : "Welcome to ListBusView",
			height : 'auto',
			width : 'auto'
		});

		thisObject.view.add(label);
		return thisObject.view;
	}

	this.openConnectionToDatabase = function() {
		var db = Ti.Database.install('database/onibusdatabase.sqlite', 'onibus');
		var rows = db.execute('SELECT DISTINCT lin_descricao FROM linhas');

		var dataArray = [];

		Ti.API.info('###########################################');
		Ti.API.info('Resultados: \n');

		while (rows.isValidRow()) {
			Ti.API.info('' + rows.fieldByName('lin_descricao') + '');

			/*dataArray.push({
			 title : '' + rows.fieldByName('category') + '',
			 hasChild : true,
			 path : '../products/products.js'
			 });*/

			rows.next();
		};

		//thisObject.createListView(dataArray);
	}

	this.createListView = function(data) {

	}

	return thisObject;
}

module.exports = ListBus;