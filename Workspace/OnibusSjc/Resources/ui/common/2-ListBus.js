function ListBus() {
	var thisObject = this;

	//create object instance, a parasitic subclass of Observable
	this.view = Ti.UI.createView();

	this.getListBusView = function() {
		thisObject.openConnectionToDatabase();
		return thisObject.view;
	}

	this.openConnectionToDatabase = function() {
		var db = Ti.Database.open('busDatabase');

		var rows = db.execute('SELECT lin_id, lin_descricao FROM linhas');
		var dataArray = [];

		Ti.API.info('###########################################');
		Ti.API.info('Resultados: \n');

		while (rows.isValidRow()) {
			lineId = rows.fieldByName('lin_id');
			lineDescripition = rows.fieldByName('lin_descricao');
			Ti.API.info('\nID: ' + lineId + '\nDescrição: ' + lineDescripition);
			dataArray.push({
				title : lineDescripition,
				id : lineId,
				hasChild : true,
			});
			rows.next();
		};

		thisObject.createListView(dataArray);
	}

	this.createListView = function(data) {
		var search = Ti.UI.createSearchBar({
			hintText : 'Digite o nome de seu Ônibus'
		});
		var tableView = Ti.UI.createTableView({
			search : search,
			data : data
		});
		thisObject.view.add(tableView);
	}

	return thisObject;
}

module.exports = ListBus;
