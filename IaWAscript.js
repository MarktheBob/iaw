$(document).ready(function(){
	
	//Preparation
	$('#showPlayer').hide();
	
	//Player addition button
	
	var playerNum= 1;
	$('#addPlayer').click(function(){
		$('#playerTable').show();
		playerNum++;
		$('#playerTable').append('<br><div id = ' + playerNum + '><p class = "playerTitle" id = "player' + playerNum + '">Player ' + playerNum + ':</p><p class = "input">Name of Character:<input type = "text" id = "name' + playerNum + '"> Owner Name:<input type = "text" class = "playerOwn" id = "own' + playerNum + '"></p><p class = "input">Character Race:<input type = "text" id = "race' + playerNum + '"> Character Gender: <input type = "text" class = "playerSex" id = "sex' + playerNum + '" placeholder = "M/F"></p><p class = "input">Character Class:<input type = "text" id = "class' + playerNum + '"> Character Alignment:<input type = "text" class = "playerAlign" id = "align' + playerNum + '" placeholder = "L/N/C + G/N/E"></p><p class = "input">Character Deity:<input type = "text" id = "god' + playerNum + '"> Character Homeland:<input type = "text" class = "playerLand" id = "land' + playerNum + '"></p><p class = "input">Character Size:<input type = "text" id = "size' + playerNum + '" placeholder = "T/S/M/L/H/G/C"> Character Age:<input type = "text" class = "playerAge id = "age' + playerNum + '"></p><p class = "input">Character Height:<input type = "text" id = "height' + playerNum + '"> Character Weight:<input type = "text" class = "playerMass" id = "mass' + playerNum + '"></p></div>');
	});
	
	//Player Finish button
	var playerDict = [];
	$('#showPlayer').show();
	$('#playerFin').click(function(){
		$('#playerTable').hide();
		var playerDict = [];
		var newPlayer = [];
		for (var pl = 1; pl < playerNum + 1; pl++){
			//adding to players array
			newPlayer = [];
			var name = $('#name' + pl).val();
			var own = $('#own' + pl).val();
			var race = $('#race' + pl).val();
			var sex = $('#sex' + pl).val();
			var pclass = $('#class' + pl).val();
			var align = $('#align' + pl).val();
			var god = $('#god' + pl).val();
			var land = $('#land' + pl).val();
			var size = $('#size' + pl).val();
			var age = $('#age' + pl).val();
			var height = $('#height' + pl).val();
			var mass = $('#mass' + pl).val();
			newPlayer.push(name, own, race, sex, pclass, align, god, land, size, age, height, mass);
			playerDict.push(newPlayer);
			
			//appending to showPlayer div
			$('#showPlayer').append('<div class = "hover" id = "hovering' + pl + '">Player ' + pl + '<p class = "hidden">Name: ' + name + ', Owner name: ' + own + '</p><p class = "hidden">Race: ' + race + ', Sex: ' + sex + '</p><p class = "hidden">Class: ' + pclass + ', Alignment: ' + align + '</p><p class = "hidden">God: ' + god + ', Land of origin: ' + land + '</p><p class = "hidden">Size: ' + size + ', Age: ' + age + '</p><p class = "hidden">Height: ' + height + ', Weight: ' + mass + '</p></div>')
		}
	});
	
	$('#hover').hover(function(){
		$(this).css('visibility','visible');
	});
	
});









