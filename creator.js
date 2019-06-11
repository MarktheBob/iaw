$(document).ready(function(){
	//$('#0').hide();
	$('#1').hide();
	$('#2').hide();
	$('#4').hide();
	$('#3').hide();
	$('.out').hide();
	$('.increase').hide();
	$('.psykerPath').hide();$('.fire').hide();$('.frost').hide();$('.shock').hide();$('.teke').hide();$('.tele').hide();$('.divi').hide();$('.divineItem').hide();
	$('.pariahGene').hide();
	$('#weaponUpg').hide();$('#weaponUpgLeft').hide();
	$('#cro').hide();$('#uro').hide();$('#rro').hide();$('#lro').hide();$('#mk1o').hide();$('#mk2o').hide();$('#mk3o').hide();$('.jetpacko').hide();
	$('#closeno').hide();$('#closered').hide();$('#rangedno').hide();$('#rangedred').hide();$('#spellboost').hide();$('#fogyay').hide();$('#smokeyay').hide();$('#fognay').hide();$('#smokenay').hide();$('#fogvar').hide();$('#corr').hide();$('#calm').hide();$('#mancorr').hide();$('#mancalm').hide();$('#bonspell').hide();$('#jtpk').hide();$('#noff').hide();$('#fullvis').hide();$('#nightvis').hide();$('#suppeff').hide();$('#lightsource').hide();$('#aimassist').hide();$('#shielded').hide();$('#elementalperk').hide();$('#mentalperk').hide();$('#rangedperk').hide();
	$('#fireNormal').hide();$('#fireBurst').hide();$('#fireleft').hide();$('#venom').hide();$('.regran').hide();$('#fireleftBurst').hide();
	$('.har').hide();$('.back').hide();
	$('#armUnequip').hide();$('#upgUnequip').hide();$('#rightUnequip').hide();$('#leftUnequip').hide();$('#wuUnequip').hide();$('#commmUnequip').hide();$('#headUnequip').hide();

	//Variable Declaration
	var name = "Name";
	var sex = 0; //0 male, 1 female
	var sexName = "Sex";
	var sexnames = ["Male", "Female"];
	var race = 0; //0 SM, 1 AS, 2 IG, 3 T, 4 E
	var raceName = "Race";
	var racenames = ["Space Marine", "Sister of Battle", "Imperial Guard", "Tau", "Eldar"];
	var chapter = 5; //0 Ultra, 1 Wolf, 2 Scar, 3 Salam, 4 Angel, 5 None
	var chapterName = "Chap";
	var chapternames = ["Ultramarines", "Space Wolves", "White Scars", "Salamanders", "Dark Angels"];
	var stats = [[4, 4, 2, 0, 0, 0, 1, 30], [3, 3, 2, 0, 1, 1, 1, 25], [1, 1, 1, 2, 0, 4, 1, 20], [-1, 0, 4, 2, 1, 2, 3, 20], [1, 1, 3, 3, 2, 1, 0, 30]];
	var rbset = ["+RANK resist to routing", "Heal RANK*2 HP per turn", "Respec at cost of 1 stat point", "+20m usable range", "Cast additional RANK spells per day"];
	var initR = ["Scout Marine", "Battle Sister", "Conscript", "Fire Warrior", "Aspect Initiate"];
	var profs = ["Daggers", "Swords", "Spears", "Hammers", "Staves", "Pistols", "Assault Rifles", "Heavy Weapons", "Sniper Rifles", "Jet Packs"];
	//				0			1		2			3			4		5			6					7				8				9
	var smr = [["Space Marine"], ["Space Marine Sargeant", "Lexicanum"], ["Terminator", "Chaplain", "Codicer"], ["Captain", "Reclusiarch", "Epistolary", "Grey Knight"]];
	var asr = [["Sister Superior"], ["Palatine Sister", "Dominion Sister"], ["Canoness", "Seraphim Sister", "Dominion Sister Superior"], ["Prioress", "Seraphim Sister Superior", "Celestian Sister"]];
	var igr = [["Sargeant", "Assasin Initiate", "Sanctionite"], ["Leutenant", "Acolyte", "Assasin", "Aspirant"], ["Captain", "Comissar", "Inquisitor", "Master Assasin", "Savant Warrant"], ["Colonel", "Senior Commisar", "Lord Inquisitor", "Grandmaster Assasin", "Perceptor Savant"]];
	var tr = [["Veteran Fire Warrior", "Scout"], ["Fire Warrior Hero", "Hunter"], ["Fire Warrior Knight", "XV15 Stealthsuit Pilot"], ["Fire Warrior Commander", "XV8 Crisis Pilot","XV25 Stealthsuit Pilot"]];
	var er = [["Aspect Warrior", "Harlequin Initiate", "Seer Initiate"], ["Exarch", "Harlequin", "Seer"], ["Shrine Master", "Troupe Master", "Farseer"], [ "Aspect Lord", "Masque Leader", "Solitaire", "Council Member"]];
	var assasin = 3; //0 Callidus, 1 Vindicare, 2 Culexus, 3 None
	var assasinNames = ["Callidus", "Vindicare", "Culexus"];
	var aspect = 5; // 0 Avenger, 1 Reaper, 2 Spider, 3 Banshee, 4 Ranger, 5 None
	var aspectNames = ["Dire Avengers", "Dark Reapers", "Warp Spiders", "Howling Banshees", "Rangers"];
	var schoolNames = ["Pyromancy", "Cryomancy", "Fulmination", "Telekinesis", "Telepathy", "Divination"];
	var taunames = ["La", "Ui", "Vre", "El", "O"];
	//stats
	var maxHP = 0;
	var stat = 0;
	var str = 0;
	var con = 0;
	var mark = 0;
	var agi = 0;
	var intel = 0;
	var chari = 0;
	var wres = 0;
	var movement = 0;
	var rb = "";
	//skills
	var corr = 0;
	var xeno = 0;
	var warp = 0;
	var hist = 0;
	var geo = 0;
	var perc = 0;
	var macc = 0;
	var racc = 0;
	var dodge = 0;
	var fire = 0;
	var frost = 0;
	var shock = 0;
	var stealth = 0;
	var dip = 0;
	var lead = 0;
	//rankings
	var rank = 1;
	var level = 1;
	var transit = 5;
	var currentRank = "";
	//Personal Items
	var gold = 50;
	var rightHand = 200;//0-45 Close, 46-110 Ranged, 160-175 close specials, 176-199 ranged specials, 200 None
	var leftHand = 200;//46-110 Ranged, 200 None, 150-152 Shield
	var wearing = 50;//0-33 Armour, 50 None, 51-100 specials
	var armourMods = [0, 0, 0, [0], 0, 0, [0], 0];//ID of mods: CR, UR, RR, LR, MK1, MK2, MK3, Jetpack ------- 0 None, 10-22 Runes, 23-28 Upgrades
	var aMA = [0, 0, 0, 0, 0, 0, 0, 0];//Number of mods: CR, UR, RR, LR, MK1, MK2, MK3, Jetpack
	var divineHeld = 0;
	var commpiece = 0;
	var helmet = 10;//10 empty
	var backpack = 0;//backpack id, 0 none
	var harness = 0;//harness id, 0 none
	var inback = [[], [], []];//ammo 99 = double up, one handed, two handed
	var canback = [0, 0, 0];
	var inhar = [[], [], []];//ammo 99 = double up, one handed, two handed
	var canhar = [0, 0, 0];
	var activeProfs = [];//Storing proficiencies
	var activeRed = [];//Storing reduced pen
	var isTwohanded = 0;//0 one handed, 1 two handed
	var dualheavy = 0;//1 can dualwield heavy weapons
	var dualpistol1 = 0;//1 can put pistol/shield in left hand if sword/dagger
	var dualpistol2 = 0;//1 can put pistol/shield in left hand if hammer/spear/staff
	var canjet = 0;//1 can use jetpack
	var toburst = 0;//used to tell how many fire in burst
	var tofire = 1;//number of bullets to be fired
	var fires = 1;//number of bullets fired by right hand
	var burst = 0;//number of bullets fired in burst right hand
	var firesLeft = 1;//num of bullets fired by left hand
	var burstLeft = 0;//num of bullets fired by right hand
	var burstPenalty = 0;//accuracy penalty for burst mode
	var venom = 0;//1 can have venom
	var throwrange = 0;//throwing range
	var effrangeleft = 0;//left hand effective range
	var maxammo = 0;
	var currentammo = 0;
	var maxleft = 0;
	var currentleft = 0;
	var weaponMods = [0, 0, 0, 0];//Sight, Suppressor, Acc, Venom
	var hasperks = [];
	var hasspells = [];
	var freepass = 1;
	//Personal stats
	var armourRate = 0;
	var bonusDam = 0;
	var effectiveRange = 0;
	var spellNum = 0;
	var schoolE = 10;//Elemental School id, 10 none
	var schoolM = 10;//Mental school id, 10 none
	//Shop Items
	var clothes = {
		0: {//Commons
			"name": "Simple Robe",
			"ab": 0,
			"rar": "Common",
			"speed": 0,
			"cost": 5,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		1: {
			"name": "Suit",
			"ab": 0,
			"rar": "Common",
			"speed":0,
			"cost": 5,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		2: {
			"name": "Flak Jacket",
			"ab": 3,
			"rar": "Common",
			"speed":0,
			"cost": 10,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		3: {
			"name": "Dancer Clothes",
			"ab": 0,
			"rar": "Common",
			"speed":5,
			"cost": 15,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		4: {
			"name": "Wraithbone Armour",
			"ab": 2,
			"rar": "Common",
			"speed":0,
			"cost": 30,
			"cr": 1,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		5: {
			"name": "Combat Uniform",
			"ab": 2,
			"rar": "Common",
			"speed":0,
			"cost": 20,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 1,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		6: {//Uncommons
			"name": "Woven Robe",
			"ab": 1,
			"rar": "Uncommon",
			"speed":0,
			"cost": 50,
			"cr": 1,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){wres++;fire++;frost++;shock++;},
			nay: function(){wres--;fire--;frost--;shock--;}
		},
		7: {
			"name": "Tailored Suit",
			"ab": 2,
			"rar": "Uncommon",
			"speed":0,
			"cost": 40,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){chari++;lead++;dip++;},
			nay: function(){chari--;lead--;dip--;}
		},
		8: {
			"name": "Combat Vest",
			"ab": 6,
			"rar": "Uncommon",
			"speed":0,
			"cost": 70,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		9: {
			"name": "Acrobat Clothes",
			"ab": 1,
			"rar": "Uncommon",
			"speed":5,
			"cost": 60,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		10: {
			"name": "Aspect Armour",
			"ab": 4,
			"rar": "Uncommon",
			"speed":0,
			"cost": 80,
			"cr": 0,
			"ur": 1,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		11: {
			"name": "Combat Suit",
			"ab": 4,
			"rar": "Uncommon",
			"speed":0,
			"cost": 70,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 1,
			"mk2": 0,
			"mk3": 0,
			yay: function(){mark++;racc++;},
			nay: function(){mark--;racc--;}
		},
		12: {//Rares
			"name": "Runic Robe",
			"ab": 2,
			"rar": "Rare",
			"speed":0,
			"cost": 100,
			"cr": 0,
			"ur": 1,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){wres+=2;fire+=2;frost+=2;shock+=2;},
			nay: function(){wres-=2;fire-=2;frost-=2;shock-=2;}
		},
		13: {
			"name": "Armoured Suit",
			"ab": 4,
			"rar": "Rare",
			"speed":0,
			"cost": 130,
			"cr": 1,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){chari+=2;lead+=2;dip+=2;},
			nay: function(){chari-=2;lead-=2;dip-=2;}
		},
		14: {
			"name": "Caparace Armour",
			"ab": 9,
			"rar": "Rare",
			"speed":-5,
			"cost": 150,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 1,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		15: {
			"name": "Harlequin Outfit",
			"ab": 2,
			"rar": "Rare",
			"speed":10,
			"cost": 130,
			"cr": 1,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){agi+=2;dodge+=2;macc+=2;stealth+=2;},
			nay: function(){agi-=2;dodge-=2;macc-=2;stealth-=2;}
		},
		16: {
			"name": "Exarch Armour",
			"ab": 6,
			"rar": "Rare",
			"speed": 0,
			"cost": 170,
			"cr": 0,
			"ur": 0,
			"rr": 1,
			"lr": 0,
			"mk1": 1,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		17: {
			"name": "XV15 Suit",
			"ab": 6,
			"rar": "Rare",
			"speed": 0,
			"cost": 170,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 1,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		18: {
			"name": "XV15 Stealthsuit",
			"ab": 5,
			"rar": "Rare",
			"speed": 5,
			"cost": 170,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 1,
			"mk3": 0,
			yay: function(){stealth+=2;},
			nay: function(){stealth-=2;}
		},
		19: {//Legendaries
			"name": "Master Robe",
			"ab": 4,
			"rar": "Legendary",
			"speed": 5,
			"cost": 200,
			"cr": 0,
			"ur": 0,
			"rr": 1,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){wres+=3;fire+=3;frost+=3;shock+=3;intel++;spellNum++;perc++;dip+=0.5;},
			nay: function(){wres-=3;fire-=3;frost-=3;shock-=3;intel--;spellNum--;perc--;dip-=0.5;}
		},
		20: {
			"name": "Shielded Suit",
			"ab": 6,
			"rar": "Legendary",
			"speed": -5,
			"cost": 250,
			"cr": 0,
			"ur": 1,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){},
			nay: function(){}
		},
		21: {
			"name": "Power Armour",
			"ab": 12,
			"rar": "Legendary",
			"speed": -5,
			"cost": 300,
			"cr": 1,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 1,
			"mk3": 0,
			yay: function(){$('.jetpacko').show();str++;macc+=0.5;},
			nay: function(){$('.jetpacko').hide();str--;macc-=0.5;}
		},
		22: {
			"name": "Holo Suit",
			"ab": 3,
			"rar": "Legendary",
			"speed": 10,
			"cost": 300,
			"cr": 0,
			"ur": 1,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){agi+=2;dodge+=2;macc+=2;stealth+=2;},
			nay: function(){agi-=2;dodge-=2;macc-=2;stealth-=2;}
		},
		23: {
			"name": "Shrine Master Armour",
			"ab": 8,
			"rar": "Legendary",
			"speed": -5,
			"cost": 350,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 1,
			"mk1": 1,
			"mk2": 0,
			"mk3": 0,
			yay: function(){$('.jetpacko').show();},
			nay: function(){$('.jetpacko').hide();}
		},
		24: {
			"name": "XV22 Suit",
			"ab": 8,
			"rar": "Legendary",
			"speed": 5,
			"cost": 300,
			"cr": 1,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 1,
			yay: function(){$('.jetpacko').show();},
			nay: function(){$('.jetpacko').hide();}
		},
		25: {
			"name": "XV22 Stealthsuit",
			"ab": 6,
			"rar": "Legendary",
			"speed": 5,
			"cost": 300,
			"cr": 1,
			"ur": 0,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 1,
			yay: function(){$('.jetpacko').show();stealth+=4;},
			nay: function(){$('.jetpacko').hide();stealth-=4;}
		},
		26: {//Uniques
			"name": "Psyker Armour",
			"ab": 6,
			"rar": "Uniques",
			"speed": -5,
			"cost": 400,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 1,
			"mk1": 1,
			"mk2": 0,
			"mk3": 0,
			yay: function(){wres+=3;fire+=3;frost+=3;shock+=3;intel+=2;spellNum+=2;perc+=2;dip++;},
			nay: function(){wres-=3;fire-=3;frost-=3;shock-=3;intel-=2;spellNum-=2;perc-=2;dip--;}
		},
		27: {
			"name": "Terminator Armour",
			"ab": 15,
			"rar": "Uniques",
			"speed": -10,
			"cost": 700,
			"cr": 0,
			"ur": 1,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 1,
			yay: function(){$('.jetpacko').show();str+=2;macc++;},
			nay: function(){$('.jetpacko').hide();str-=2;macc--;}
		},
		28: {
			"name": "Centurion Armour",
			"ab": 20,
			"rar": "Uniques",
			"speed": -15,
			"cost": 1500,
			"cr": 0,
			"ur": 1,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 2,
			yay: function(){dualheavy = 1;},
			nay: function(){dualheavy = 0;}
		},
		29: {
			"name": "Relic Harlequin Suit",
			"ab": 5,
			"rar": "Uniques",
			"speed": 15,
			"cost": 600,
			"cr": 0,
			"ur": 0,
			"rr": 1,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 0,
			yay: function(){agi+=3;dodge+=3;macc+=3;stealth+=3;},
			nay: function(){agi-=3;dodge-=3;macc-=3;stealth-=3;}
		},
		30: {
			"name": "Aspect Lord Armour",
			"ab": 10,
			"rar": "Uniques",
			"speed": -5,
			"cost": 700,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 2,
			"mk1": 0,
			"mk2": 1,
			"mk3": 0,
			yay: function(){$('.jetpacko').show();agi+=3;dodge+=3;macc+=3;stealth+=3;},
			nay: function(){$('.jetpacko').hide();agi-=3;dodge-=3;macc-=3;stealth-=3;}
		},
		31: {
			"name": "XV25 Suit",
			"ab": 10,
			"rar": "Uniques",
			"speed": 5,
			"cost": 700,
			"cr": 0,
			"ur": 1,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 2,
			yay: function(){$('.jetpacko').show();},
			nay: function(){$('.jetpacko').hide();}
		},
		32: {
			"name": "XV25 Stealthsuit",
			"ab": 7,
			"rar": "Uniques",
			"speed": 10,
			"cost": 700,
			"cr": 0,
			"ur": 1,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 2,
			yay: function(){$('.jetpacko').show();stealth+=6;},
			nay: function(){$('.jetpacko').hide();stealth-=6;}
		},
		33: {
			"name": "XV8 Crisis Suit",
			"ab": 12,
			"rar": "Uniques",
			"speed": -5,
			"cost": 1200,
			"cr": 0,
			"ur": 1,
			"rr": 0,
			"lr": 0,
			"mk1": 0,
			"mk2": 0,
			"mk3": 2,
			yay: function(){$('.jetpacko').show();dualheavy = 1;},
			nay: function(){$('.jetpacko').hide();dualheavy = 0;}
		},
		51: {//Specials
			"name": "Phoenix Lord Armour",
			"ab": 13,
			"rar": "Special",
			"speed": 5,
			"cost": 2000,
			"cr": 0,
			"ur": 0,
			"rr": 0,
			"lr": 2,
			"mk1": 0,
			"mk2": 0,
			"mk3": 1,
			yay: function(){$('.jetpacko').show();str+=2;macc++;intel+=2;spellNum+=2;perc+=2;dip++;},
			nay: function(){$('.jetpacko').hide();str-=2;macc--;intel-=2;spellNum-=2;perc-=2;dip--;}
		},
	};
	var clothesMods = {
		10:{//runes
			"name": "Fire Abatement",
			0:{
				"cost": 25,
				"rar": "Common",
				yay: function(){fire++;},
				nay: function(){fire--;}
			},
			1:{
				"cost": 50,
				"rar": "Uncommon",
				yay: function(){fire+=2},
				nay: function(){fire-=2}
			},
			2:{
				"cost": 100,
				"rar": "Rare",
				yay: function(){fire+=3},
				nay: function(){fire-=3}
			},
			3:{
				"cost": 200,
				"rar": "Legendary",
				yay: function(){fire+=4},
				nay: function(){fire-=4}
			}
		},
		11:{
			"name": "Frost Abatement",
			0:{
				"cost": 25,
				"rar": "Common",
				yay: function(){frost++;},
				nay: function(){frost--;}
			},
			1:{
				"cost": 50,
				"rar": "Uncommon",
				yay: function(){frost+=2},
				nay: function(){frost-=2}
			},
			2:{
				"cost": 100,
				"rar": "Rare",
				yay: function(){frost+=3},
				nay: function(){frost-=3}
			},
			3:{
				"cost": 200,
				"rar": "Legendary",
				yay: function(){frost+=4},
				nay: function(){frost-=4}
			}
		},
		12:{
			"name": "Lightning Abatement",
			0:{
				"cost": 25,
				"rar": "Common",
				yay: function(){shock++;},
				nay: function(){shock--;}
			},
			1:{
				"cost": 50,
				"rar": "Uncommon",
				yay: function(){shock+=2},
				nay: function(){shock-=2}
			},
			2:{
				"cost": 100,
				"rar": "Rare",
				yay: function(){shock+=3},
				nay: function(){shock-=3}
			},
			3:{
				"cost": 200,
				"rar": "Legendary",
				yay: function(){shock+=4},
				nay: function(){shock-=4}
			}
		},
		13:{
			"name": "Telekine Enhancer",
			0:{
				"cost": 25,
				"rar": "Common",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">1</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[3] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			},
			1:{
				"cost": 50,
				"rar": "Uncommon",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">2</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[3] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			},
			2:{
				"cost": 100,
				"rar": "Rare",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">3</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[3] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			},
			3:{
				"cost": 200,
				"rar": "Legendary",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">4</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[3] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			}
		},
		14:{
			"name": "Telepath Enhancer",
			0:{
				"cost": 25,
				"rar": "Common",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">1</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[4] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			},
			1:{
				"cost": 50,
				"rar": "Uncommon",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">2</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[4] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			},
			2:{
				"cost": 100,
				"rar": "Rare",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">3</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[4] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			},
			3:{
				"cost": 200,
				"rar": "Legendary",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">4</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[4] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			}
		},
		15:{
			"name": "Divinator",
			0:{
				"cost": 30,
				"rar": "Common",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">1</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[5] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			},
			1:{
				"cost": 60,
				"rar": "Uncommon",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">2</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[5] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			},
			2:{
				"cost": 120,
				"rar": "Rare",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">3</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[5] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			},
			3:{
				"cost": 250,
				"rar": "Legendary",
				yay: function(){$('#spellboost').show();$('#intelbon').replaceWith('<b id = "intelbon">4</b>');$('#inteltype').replaceWith('<b id = "inteltype">' + schoolNames[5] + '</b>');},
				nay: function(){$('#spellboost').hide();$('#intelbon').replaceWith('<b id = "intelbon">0</b>');$('#inteltype').replaceWith('<b id = "inteltype">None</b>');}
			}
		},
		16:{
			"name": "Vision Distruptor",
			0:{
				"cost": 40,
				"rar": "Common",
				yay: function(){$('#fogvar').show();$('#fogbon').replaceWith('<b id = "fogbon">1</b>');},
				nay: function(){$('#fogvar').hide();$('#fogbon').replaceWith('<b id = "fogbon">0</b>');}
			},
			1:{
				"cost": 80,
				"rar": "Uncommon",
				yay: function(){$('#fogvar').show();$('#fogbon').replaceWith('<b id = "fogbon">2</b>');},
				nay: function(){$('#fogvar').hide();$('#fogbon').replaceWith('<b id = "fogbon">0</b>');}
			},
			2:{
				"cost": 150,
				"rar": "Rare",
				yay: function(){$('#fogvar').show();$('#fogbon').replaceWith('<b id = "fogbon">3</b>');},
				nay: function(){$('#fogvar').hide();$('#fogbon').replaceWith('<b id = "fogbon">0</b>');}
			},
			3:{
				"cost": 300,
				"rar": "Legendary",
				yay: function(){$('#fogvar').show();$('#fogbon').replaceWith('<b id = "fogbon">4</b>');},
				nay: function(){$('#fogvar').hide();$('#fogbon').replaceWith('<b id = "fogbon">0</b>');}
			}
		},
		17:{
			"name": "Charmer",
			0:{
				"cost": 40,
				"rar": "Common",
				yay: function(){chari++;lead++;dip++;},
				nay: function(){chari--;lead--;dip--;}
			},
			1:{
				"cost": 80,
				"rar": "Uncommon",
				yay: function(){chari+=2;lead+=2;dip+=2;},
				nay: function(){chari-=2;lead-=2;dip-=2;}
			},
			2:{
				"cost": 150,
				"rar": "Rare",
				yay: function(){chari+=3;lead+=3;dip+=3;},
				nay: function(){chari-=3;lead-=3;dip-=3;}
			},
			3:{
				"cost": 300,
				"rar": "Legendary",
				yay: function(){chari+=4;lead+=4;dip+=4;},
				nay: function(){chari-=4;lead-=4;dip-=4;}
			}
		},
		18:{
			"name": "Empowerer",
			0:{
				"cost": 50,
				"rar": "Common",
				yay: function(){str++;macc+=0.5;},
				nay: function(){str--;macc-=0.5;}
			},
			1:{
				"cost": 100,
				"rar": "Uncommon",
				yay: function(){str+=2;macc+=1;},
				nay: function(){str-=2;macc-=1;}
			},
			2:{
				"cost": 200,
				"rar": "Rare",
				yay: function(){str+=3;macc+=1.5;},
				nay: function(){str-=3;macc-=1.5;}
			},
			3:{
				"cost": 400,
				"rar": "Legendary",
				yay: function(){str+=4;macc+=2;},
				nay: function(){str-=4;macc-=2;}
			}
		},
		19:{
			"name": "Gravity Dampener",
			0:{
				"cost": 50,
				"rar": "Common",
				yay: function(){movement+=5;},
				nay: function(){movement-=5;}
			},
			1:{
				"cost": 100,
				"rar": "Uncommon",
				yay: function(){movement+=10;},
				nay: function(){movement-=10;}
			},
			2:{
				"cost": 200,
				"rar": "Rare",
				yay: function(){movement+=15;},
				nay: function(){movement-=15;}
			},
			3:{
				"cost": 400,
				"rar": "Legendary",
				yay: function(){movement+=20;},
				nay: function(){movement-=20;}
			}
		},
		20:{
			"name": "Cleanser",
			0:{
				"cost": 40,
				"rar": "Common",
				yay: function(){$('#mancalm').show();$('#calmbon').replaceWith('<b id = "calmbon">1</b>');},
				nay: function(){$('#mancalm').hide();$('#calmbon').replaceWith('<b id = "calmbon">0</b>');}
			},
			1:{
				"cost": 80,
				"rar": "Uncommon",
				yay: function(){$('#mancalm').show();$('#calmbon').replaceWith('<b id = "calmbon">2</b>');},
				nay: function(){$('#mancalm').hide();$('#calmbon').replaceWith('<b id = "calmbon">0</b>');}
			},
			2:{
				"cost": 150,
				"rar": "Rare",
				yay: function(){$('#mancalm').show();$('#calmbon').replaceWith('<b id = "calmbon">3</b>');},
				nay: function(){$('#mancalm').hide();$('#calmbon').replaceWith('<b id = "calmbon">0</b>');}
			},
			3:{
				"cost": 300,
				"rar": "Legendary",
				yay: function(){$('#mancalm').show();$('#calmbon').replaceWith('<b id = "calmbon">4</b>');},
				nay: function(){$('#mancalm').hide();$('#calmbon').replaceWith('<b id = "calmbon">0</b>');}
			}
		},
		21:{
			"name": "Corruptor",
			0:{
				"cost": 40,
				"rar": "Common",
				yay: function(){$('#mancorr').show();$('#corrbon').replaceWith('<b id = "corrbon">1</b>');},
				nay: function(){$('#mancorr').hide();$('#corrbon').replaceWith('<b id = "corrbon">0</b>');}
			},
			1:{
				"cost": 80,
				"rar": "Uncommon",
				yay: function(){$('#mancorr').show();$('#corrbon').replaceWith('<b id = "corrbon">2</b>');},
				nay: function(){$('#mancorr').hide();$('#corrbon').replaceWith('<b id = "corrbon">0</b>');}
			},
			2:{
				"cost": 150,
				"rar": "Rare",
				yay: function(){$('#mancorr').show();$('#corrbon').replaceWith('<b id = "corrbon">3</b>');},
				nay: function(){$('#mancorr').hide();$('#corrbon').replaceWith('<b id = "corrbon">0</b>');}
			},
			3:{
				"cost": 300,
				"rar": "Legendary",
				yay: function(){$('#mancorr').show();$('#corrbon').replaceWith('<b id = "corrbon">4</b>');},
				nay: function(){$('#mancorr').hide();$('#corrbon').replaceWith('<b id = "corrbon">0</b>');}
			}
		},
		22:{
			"name": "Focus",
			0:{
				"cost": 100,
				"rar": "Common",
				yay: function(){$('#bonspell').show();$('#spellbon').replaceWith('<b id = "spellbon">1</b>');},
				nay: function(){$('#bonspell').hide();$('#spellbon').replaceWith('<b id = "spellbon">0</b>');}
			},
			1:{
				"cost": 200,
				"rar": "Uncommon",
				yay: function(){$('#bonspell').show();$('#spellbon').replaceWith('<b id = "spellbon">2</b>');},
				nay: function(){$('#bonspell').hide();$('#spellbon').replaceWith('<b id = "spellbon">0</b>');}
			},
			2:{
				"cost": 400,
				"rar": "Rare",
				yay: function(){$('#bonspell').show();$('#spellbon').replaceWith('<b id = "spellbon">3</b>');},
				nay: function(){$('#bonspell').hide();$('#spellbon').replaceWith('<b id = "spellbon">0</b>');}
			},
			3:{
				"cost": 800,
				"rar": "Legendary",
				yay: function(){$('#bonspell').show();$('#spellbon').replaceWith('<b id = "spellbon">4</b>');},
				nay: function(){$('#bonspell').hide();$('#spellbon').replaceWith('<b id = "spellbon">0</b>');}
			}
		},
		23:{//Upgrades
			"name": "Target Identifier",
			0:{
				"cost": 30,
				"rar": "MK1",
				yay: function(){racc++;},
				nay: function(){racc--;}
			},
			1:{
				"cost": 60,
				"rar": "MK2",
				yay: function(){racc+=2;},
				nay: function(){racc-=2;}
			},
			2:{
				"cost": 100,
				"rar": "MK3",
				yay: function(){racc+=3},
				nay: function(){racc-=3;}
			}
		},
		24:{
			"name": "Range Sensor",
			0:{
				"cost": 30,
				"rar": "MK1",
				yay: function(){effrangeleft+=10;effectiveRange+=10;},
				nay: function(){effrangeleft-=10;effectiveRange-=10;}
			},
			1:{
				"cost": 60,
				"rar": "MK2",
				yay: function(){effrangeleft+=20;effectiveRange+=20;},
				nay: function(){effrangeleft-=20;effectiveRange-=20;}
			},
			2:{
				"cost": 100,
				"rar": "MK3",
				yay: function(){effrangeleft+=30;effectiveRange+=30;},
				nay: function(){effrangeleft-=30;effectiveRange-=30;}
			},
		},
		25:{
			"name": "Servos",
			0:{
				"cost": 50,
				"rar": "MK1",
				yay: function(){movement+=5;},
				nay: function(){movement-=5;}
			},
			1:{
				"cost": 100,
				"rar": "MK2",
				yay: function(){movement+=10;},
				nay: function(){movement-=10;}
			},
			2:{
				"cost": 200,
				"rar": "MK3",
				yay: function(){movement+=15;},
				nay: function(){movement-=15;}
			},
		},
		26:{//jetpack
			"name": "Jetpack",
			0:{
				"cost": 150,
				"rar": "MK1",
				yay: function(){$('#jtpk').show();$('#jetbon').replaceWith('<b id = "jetbon">30</b>');$('#jetcool').replaceWith('<b id = "jetcool">1</b>');},
				nay: function(){$('#jtpk').hide();$('#jetbon').replaceWith('<b id = "jetbon">0</b>');$('#jetcool').replaceWith('<b id = "jetcool">0</b>');}
			},
			1:{
				"cost": 300,
				"rar": "MK2",
				yay: function(){$('#jtpk').show();$('#jetbon').replaceWith('<b id = "jetbon">40</b>');$('#jetcool').replaceWith('<b id = "jetcool">1</b>');},
				nay: function(){$('#jtpk').hide();$('#jetbon').replaceWith('<b id = "jetbon">0</b>');$('#jetcool').replaceWith('<b id = "jetcool">0</b>');}
			},
			2:{
				"cost": 500,
				"rar": "MK3",
				yay: function(){$('#jtpk').show();$('#jetbon').replaceWith('<b id = "jetbon">50</b>');$('#jetcool').replaceWith('<b id = "jetcool">1</b>');},
				nay: function(){$('#jtpk').hide();$('#jetbon').replaceWith('<b id = "jetbon">0</b>');$('#jetcool').replaceWith('<b id = "jetcool">0</b>');}
			},
		},
		27:{//jetpack
			"name": "Teleporter",
			0:{
				"cost": 700,
				"rar": "MK1",
				yay: function(){$('#jtpk').show();$('#jetbon').replaceWith('<b id = "jetbon">100</b>');$('#jetcool').replaceWith('<b id = "jetcool">3</b>');},
				nay: function(){$('#jtpk').hide();$('#jetbon').replaceWith('<b id = "jetbon">0</b>');$('#jetcool').replaceWith('<b id = "jetcool">0</b>');}
			},
			1:{
				"cost": 1400,
				"rar": "MK2",
				yay: function(){$('#jtpk').show();$('#jetbon').replaceWith('<b id = "jetbon">150</b>');$('#jetcool').replaceWith('<b id = "jetcool">3</b>');},
				nay: function(){$('#jtpk').hide();$('#jetbon').replaceWith('<b id = "jetbon">0</b>');$('#jetcool').replaceWith('<b id = "jetcool">0</b>');}
			},
			2:{
				"cost": 2000,
				"rar": "MK3",
				yay: function(){$('#jtpk').show();$('#jetbon').replaceWith('<b id = "jetbon">200</b>');$('#jetcool').replaceWith('<b id = "jetcool">3</b>');},
				nay: function(){$('#jtpk').hide();$('#jetbon').replaceWith('<b id = "jetbon">0</b>');$('#jetcool').replaceWith('<b id = "jetcool">0</b>');}
			},
		},
		28:{
			"name": "Climate Control",
			0:{
				"cost": 50,
				"rar": "MK1",
				yay: function(){fire++;frost++;shock++;},
				nay: function(){fire--;frost--;shock--;}
			},
			1:{
				"cost": 100,
				"rar": "MK2",
				yay: function(){fire+=2;frost+=2;shock+=2;},
				nay: function(){fire-=2;frost-=2;shock-=2;}
			},
			2:{
				"cost": 200,
				"rar": "MK3",
				yay: function(){fire+=3;frost+=3;shock+=3;},
				nay: function(){fire-=3;frost-=3;shock-=3;}
			},
		},
	};
	var closeCombat = {
		0: {//Commons
			"name": "Steel Dagger",
			"cost": 3,
			"damage": 3,
			"crit": 0,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 0,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		1: {
			"name": "Wraithbone Dagger",
			"cost": 4,
			"damage": 2,
			"crit": 1,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 0,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		2: {
			"name": "Steel Blade",
			"cost": 7,
			"damage": 4,
			"crit": 0,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 1,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		3: {
			"name": "Wraithbone Sword",
			"cost": 8,
			"damage": 3,
			"crit": 1,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 1,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		4: {
			"name": "Steel Spear",
			"cost": 10,
			"damage": 6,
			"crit": 1,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 2,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		5: {
			"name": "Wraithspear",
			"cost": 12,
			"damage": 5,
			"crit": 2,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 2,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		6: {
			"name": "Sanctionite Staff",
			"cost": 15,
			"damage": 2,
			"crit": 0,
			"rar": "Common",
			"note": "+1 Spell Damage",
			"type": 4,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		7: {
			"name": "Wraith Staff",
			"cost": 25,
			"damage": 2,
			"crit": 0,
			"rar": "Common",
			"note": "Effect already implemented",
			"type": 4,
			"two": 1,
			yay: function(){intel++;spellNum++;perc++;dip += 0.5;},
			nay: function(){intel--;spellNum--;perc--;dip -= 0.5;}
		},
		8: {//Uncommons
			"name": "Catachan Dagger",
			"cost": 10,
			"damage": 4,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 0,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		9: {
			"name": "Dire Dagger",
			"cost": 10,
			"damage": 3,
			"crit": 1,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 0,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		10: {
			"name": "Catachan Blade",
			"cost": 15,
			"damage": 6,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 1,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		11: {
			"name": "Diresword",
			"cost": 15,
			"damage": 5,
			"crit": 1,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 1,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		12: {//Hammer
			"name": "Steel Hammer",
			"cost": 25,
			"damage": 7,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 3,
			"two": 10,
			"min": 5,
			yay: function(){},
			nay: function(){}
		},
		13: {
			"name": "Catachan Spear",
			"cost": 20,
			"damage": 7,
			"crit": 1,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 2,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		14: {
			"name": "Glaive",
			"cost": 20,
			"damage": 6,
			"crit": 2,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 2,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		15: {
			"name": "Aspirant Staff",
			"cost": 25,
			"damage": 3,
			"crit": 0,
			"rar": "Uncommon",
			"note": "+2 spell damage",
			"type": 4,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		16: {
			"name": "Seer Staff",
			"cost": 35,
			"damage": 3,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Effect already implemented",
			"type": 4,
			"two": 1,
			yay: function(){intel+=2;spellNum+=2;perc+=2;dip++;},
			nay: function(){intel-=2;spellNum-=2;perc-=2;dip--;}
		},
		17: {//Rares
			"name": "Admantium Dagger",
			"cost": 30,
			"damage": 6,
			"crit": 0,
			"rar": "Rare",
			"note": "Nothing Special",
			"type": 0,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		18: {
			"name": "Mirror Dagger",
			"cost": 35,
			"damage": 5,
			"crit": 1,
			"rar": "Rare",
			"note": "Nothing Special",
			"type": 0,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		19: {
			"name": "Admantium Blade",
			"cost": 40,
			"damage": 7,
			"crit": 0,
			"rar": "Rare",
			"note": "Nothing Special",
			"type": 1,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		20: {
			"name": "Chainsword",
			"cost": 60,
			"damage": 7,
			"crit": 0,
			"rar": "Rare",
			"note": "+50% damage to AR <= 10",
			"type": 1,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		21: {
			"name": "Mirrorsword",
			"cost": 45,
			"damage": 6,
			"crit": 1,
			"rar": "Rare",
			"note": "Nothing Special",
			"type": 1,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		22: {//Hammer
			"name": "Admantium Hammer",
			"cost": 70,
			"damage": 12,
			"crit": 0,
			"rar": "Rare",
			"note": "Nothing interesting",
			"type": 3,
			"two": 16,
			"min": 10,
			yay: function(){},
			nay: function(){}
		},
		23: {
			"name": "Power Spear",
			"cost": 60,
			"damage": 9,
			"crit": 1,
			"rar": "Rare",
			"note": "Ignores 25% AB",
			"type": 2,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		24: {
			"name": "Power Glaive",
			"cost": 65,
			"damage": 7,
			"crit": 2,
			"rar": "Rare",
			"note": "Ignores 25% AB",
			"type": 2,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		25: {
			"name": "Savant Staff",
			"cost": 70,
			"damage": 5,
			"crit": 0,
			"rar": "Rare",
			"note": "+3 spell damage",
			"type": 4,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		26: {
			"name": "Farseer Staff",
			"cost": 80,
			"damage": 5,
			"crit": 0,
			"rar": "Rare",
			"note": "Effect already implemented",
			"type": 4,
			"two": 1,
			yay: function(){intel+=3;spellNum+=3;perc+=3;dip+=1.5;},
			nay: function(){intel-=3;spellNum-=3;perc-=3;dip-=1.5;}
		},
		27: {//Legendaries
			"name": "Power Dagger",
			"cost": 70,
			"damage": 7,
			"crit": 1,
			"rar": "Legendary",
			"note": "Ignores 25% AB",
			"type": 0,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		28: {
			"name": "Powerwraith Dagger",
			"cost": 80,
			"damage": 6,
			"crit": 2,
			"rar": "Legendary",
			"note": "Ignores 25% AB",
			"type": 0,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		29: {
			"name": "Power Sword",
			"cost": 100,
			"damage": 11,
			"crit": 1,
			"rar": "Legendary",
			"note": "Ignores 25% AB",
			"type": 1,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		30: {
			"name": "Powerwraith Sword",
			"cost": 110,
			"damage": 7,
			"crit": 2,
			"rar": "Legendary",
			"note": "Ignores 25% AB",
			"type": 1,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		31: {//Hammer
			"name": "Power Hammer",
			"cost": 150,
			"damage": 15,
			"crit": 0,
			"rar": "Legendary",
			"note": "Ignores 25% AB",
			"type": 3,
			"two": 20,
			"min": 15,
			yay: function(){},
			nay: function(){}
		},
		32: {//Hammer
			"name": "Power Glove",
			"cost": 200,
			"damage": 12,
			"crit": 1,
			"rar": "Legendary",
			"note": "Ignores 25% AB",
			"type": 3,
			"two": 5,
			"min": 5,
			yay: function(){},
			nay: function(){}
		},
		33: {//Hammer
			"name": "Crosius",
			"cost": 200,
			"damage": 16,
			"crit": 0,
			"rar": "Legendary",
			"note": "+25% damage to Chaos",
			"type": 3,
			"two": 20,
			"min": 15,
			yay: function(){},
			nay: function(){}
		},
		34: {
			"name": "Nemesis Halberd",
			"cost": 120,
			"damage": 12,
			"crit": 2,
			"rar": "Legendary",
			"note": "Ignores 25% AB",
			"type": 2,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		35: {
			"name": "Executioner",
			"cost": 130,
			"damage": 11,
			"crit": 3,
			"rar": "Legendary",
			"note": "Ignores 25% AB",
			"type": 2,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		36: {
			"name": "Perceptor Staff",
			"cost": 200,
			"damage": 6,
			"crit": 0,
			"rar": "Legendary",
			"note": "+4 spell damage",
			"type": 4,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		37: {
			"name": "Councillor's Staff",
			"cost": 220,
			"damage": 6,
			"crit": 0,
			"rar": "Legendary",
			"note": "Effect already implemented",
			"type": 4,
			"two": 1,
			yay: function(){intel+=4;spellNum+=4;perc+=4;dip+=2;},
			nay: function(){intel-=4;spellNum-=4;perc-=4;dip-=2;}
		},
		38: {//Uniques
			"name": "C'Tan Phase Knife",
			"cost": 150,
			"damage": 9,
			"crit": 0,
			"rar": "Unique",
			"note": "Ignores 50% AB, on crit ignores 100% AB, no double damage",
			"type": 0,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		39: {
			"name": "Harlequin's Kiss",
			"cost": 200,
			"damage": 19,
			"crit": 0,
			"rar": "Unique",
			"note": "Crit deals tripple damage, 1 turn reload",
			"type": 0,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		40: {
			"name": "Hyperphase Sword",
			"cost": 250,
			"damage": 13,
			"crit": 0,
			"rar": "Unique",
			"note": "Ignores 50% AB, on crit ignores 100% AB, no double damage",
			"type": 1,
			"two": 0,
			yay: function(){},
			nay: function(){}
		},
		41: {//Hammer
			"name": "Thunder Hammer",
			"cost": 400,
			"damage": 18,
			"crit": 0,
			"rar": "Unique",
			"note": "Ignores 25% AB",
			"type": 3,
			"two": 30,
			"min": 20,
			yay: function(){},
			nay: function(){}
		},
		42: {//Hammer
			"name": "Crosius Arcanum",
			"cost": 450,
			"damage": 17,
			"crit": 0,
			"rar": "Unique",
			"note": "+25% damage to Chaos",
			"type": 3,
			"two": 20,
			"min": 15,
			yay: function(){},
			nay: function(){}
		},
		43: {
			"name": "Warscythe",
			"cost": 350,
			"damage": 14,
			"crit": 3,
			"rar": "Unique",
			"note": "Ignores 25% AB",
			"type": 2,
			"two": 1,
			yay: function(){},
			nay: function(){}
		},
		44: {
			"name": "Force Rod",
			"cost": 400,
			"damage": 7,
			"crit": 1,
			"rar": "Unique",
			"note": "+3 spell damage",
			"type": 4,
			"two": 1,
			yay: function(){intel+=3;spellNum+=3;perc+=3;dip+=1.5;},
			nay: function(){intel-=3;spellNum-=3;perc-=3;dip-=1.5;}
		},
		45: {
			"name": "Staff of Light",
			"cost": 500,
			"damage": 9,
			"crit": 1,
			"rar": "Unique",
			"note": "Effect already implemented",
			"type": 4,
			"two": 1,
			yay: function(){intel+=6;spellNum+=6;perc+=6;dip+=3;},
			nay: function(){intel-=6;spellNum-=6;perc-=6;dip-=3;}
		},
		160: {//Specials
			"name": "Sword of Asur",
			"cost": 2000,
			"damage": 16,
			"crit": 2,
			"rar": "Special",
			"note": "+4 damage to chaos",
			"type": 1,
			"two": 0,
			yay: function(){agi+=2;dodge+=2;macc+=2;stealth+=2;},
			nay: function(){agi-=2;dodge-=2;macc-=2;stealth-=2;}
		},
		161: {
			"name": "Zhai Morenn",
			"cost": 2000,
			"damage": 9,
			"crit": 2,
			"rar": "Special",
			"note": "Ignores 50% AB",
			"type": 2,
			"two": 1,
			yay: function(){agi+=2;dodge+=2;macc+=2;stealth+=2;},
			nay: function(){agi-=2;dodge-=2;macc-=2;stealth-=2;}
		},
		162: {
			"name": "Fist of Dorn",
			"cost": 2000,
			"damage": 21,
			"crit": 1,
			"rar": "Special",
			"note": "+6 damage to chaos",
			"type": 3,
			"two": 15,
			"min": 10,
			yay: function(){str+=3;macc += 1.5;},
			nay: function(){str-=3;macc -= 1.5;}
		},
	};
	var rangedCombat = {
		46:{//Commons
			"name": "Throwing Spike",
			"cost": 2,
			"damage": 1,
			"crit": 1,
			"rar": "Common",
			"note": "Each mag slot holds 2 spikes",
			"type": 0,
			"two": 0,
			"ammo": 8,
			"range": 69,
			yay: function(){maxammo = 2;},
			nay: function(){maxammo = 0;}
		},
		47:{
			"name": "Las Pistol",
			"cost": 5,
			"damage": 2,
			"crit": 0,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 5,
			"two": 0,
			"ammo": 0,
			"range": 50,
			yay: function(){},
			nay: function(){}
		},
		48:{
			"name": "Pulse Pistol",
			"cost": 6,
			"damage": 1,
			"crit": 0,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 5,
			"two": 0,
			"ammo": 0,
			"range": 60,
			yay: function(){},
			nay: function(){}
		},
		49:{
			"name": "Shuriken Pistol",
			"cost": 6,
			"damage": 1,
			"crit": 1,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 5,
			"two": 0,
			"ammo": 2,
			"range": 50,
			yay: function(){},
			nay: function(){}
		},
		50:{
			"name": "Lasgun",
			"cost": 8,
			"damage": 3,
			"crit": 0,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 6,
			"two": 1,
			"ammo": 0,
			"range": 120,
			yay: function(){},
			nay: function(){}
		},
		51:{
			"name": "Pulse Carabine",
			"cost": 10,
			"damage": 2,
			"crit": 0,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 6,
			"two": 1,
			"ammo": 0,
			"range": 140,
			yay: function(){},
			nay: function(){}
		},
		52:{
			"name": "Shiriken Rifle",
			"cost": 10,
			"damage": 2,
			"crit": 1,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 6,
			"two": 1,
			"ammo": 2,
			"range": 120,
			yay: function(){},
			nay: function(){}
		},
		53:{
			"name": "Long Las",
			"cost": 15,
			"damage": 3,
			"crit": 0,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 250,
			yay: function(){},
			nay: function(){}
		},
		54:{
			"name": "Pulse Sniper",
			"cost": 18,
			"damage": 2,
			"crit": 0,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 270,
			yay: function(){},
			nay: function(){}
		},
		55:{
			"name": "Ranger Rifle",
			"cost": 17,
			"damage": 2,
			"crit": 1,
			"rar": "Common",
			"note": "Nothing Special",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 250,
			yay: function(){},
			nay: function(){}
		},
		56:{
			"name": "Flamer",
			"cost": 25,
			"damage": 4,
			"crit": 0,
			"rar": "Common",
			"note": "1d4 damage for 1 turn if fail 15 flame resist check",
			"type": 7,
			"two": 1,
			"ammo": 4,
			"range": 30,
			yay: function(){if(race == 3){effectiveRange -= 20;}},
			nay: function(){if(race == 3){effectiveRange += 20;}}
		},
		57:{
			"name": "Autogun",
			"cost": 40,
			"damage": 2,
			"crit": 0,
			"rar": "Common",
			"note": "All 4 bullets deal rolled damage",
			"type": 7,
			"two": 1,
			"ammo": 1,
			"range": 120,
			yay: function(){racc-=2;tofire = 4;},
			nay: function(){racc+=2;tofire = 1;}
		},
		58:{
			"name": "Grendade Launcher",
			"cost": 35,
			"damage": 20,
			"crit": 0,
			"rar": "Common",
			"note": "Damage depends on grenade used",
			"type": 7,
			"two": 1,
			"ammo": 6,
			"range": 70,
			yay: function(){},
			nay: function(){}
		},
		59:{//Uncommons
			"name": "Throwing Dagger",
			"cost": 5,
			"damage": 2,
			"crit": 1,
			"rar": "Uncommon",
			"note": "Each mag slot holds 2 daggers",
			"type": 0,
			"two": 0,
			"ammo": 8,
			"range": 69,
			yay: function(){maxammo = 2;},
			nay: function(){maxammo = 0;}
		},
		60:{
			"name": "Hell Pistol",
			"cost": 15,
			"damage": 3,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 5,
			"two": 0,
			"ammo": 0,
			"range": 70,
			yay: function(){},
			nay: function(){}
		},
		61:{
			"name": "Pulsar",
			"cost": 18,
			"damage": 2,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 5,
			"two": 0,
			"ammo": 0,
			"range": 80,
			yay: function(){},
			nay: function(){}
		},
		62:{
			"name": "Avenger Pistol",
			"cost": 18,
			"damage": 2,
			"crit": 1,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 5,
			"two": 0,
			"ammo": 2,
			"range": 70,
			yay: function(){},
			nay: function(){}
		},
		63:{
			"name": "Hellgun",
			"cost": 25,
			"damage": 4,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 6,
			"two": 1,
			"ammo": 0,
			"range": 140,
			yay: function(){},
			nay: function(){}
		},
		64:{
			"name": "Pulse Rifle",
			"cost": 28,
			"damage": 3,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 6,
			"two": 1,
			"ammo": 0,
			"range": 160,
			yay: function(){},
			nay: function(){}
		},
		65:{
			"name": "Avenger Rifle",
			"cost": 28,
			"damage": 3,
			"crit": 1,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 6,
			"two": 1,
			"ammo": 2,
			"range": 140,
			yay: function(){},
			nay: function(){}
		},
		66:{
			"name": "Long Hellgun",
			"cost": 35,
			"damage": 5,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 270,
			yay: function(){},
			nay: function(){}
		},
		67:{
			"name": "Longshot Rifle",
			"cost": 40,
			"damage":3,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 300,
			yay: function(){},
			nay: function(){}
		},
		68:{
			"name": "Pathfinder Rifle",
			"cost": 40,
			"damage": 3,
			"crit": 1,
			"rar": "Uncommon",
			"note": "Nothing Special",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 270,
			yay: function(){},
			nay: function(){}
		},
		69:{
			"name": "Heavy Flamer",
			"cost": 60,
			"damage": 6,
			"crit": 0,
			"rar": "Uncommon",
			"note": "1d4 damage for 2 turns if fail 17 flame resist check",
			"type": 7,
			"two": 1,
			"ammo": 4,
			"range": 40,
			yay: function(){if(race == 3){effectiveRange -= 20;}},
			nay: function(){if(race == 3){effectiveRange += 20;}}
		},
		70:{
			"name": "Aussault Cannon",
			"cost": 75,
			"damage": 2,
			"crit": 1,
			"rar": "Uncommon",
			"note": "All 6 bullets deal rolled damage",
			"type": 7,
			"two": 1,
			"ammo": 1,
			"range": 150,
			yay: function(){racc-=2;tofire = 6;},
			nay: function(){racc+=2;tofire = 1;}
		},
		71:{
			"name": "Rocket Launcher",
			"cost": 70,
			"damage": 20,
			"crit": 0,
			"rar": "Uncommon",
			"note": "Damage depends on rocket used",
			"type": 7,
			"two": 1,
			"ammo": 7,
			"range": 170,
			yay: function(){},
			nay: function(){}
		},
		72:{//Rares
			"name": "Triskele",
			"cost": 15,
			"damage": 3,
			"crit": 1,
			"rar": "Rare",
			"note": "Nothing Special",
			"type": 0,
			"two": 0,
			"ammo": 8,
			"range": 69,
			yay: function(){maxammo = 1;},
			nay: function(){maxammo = 0;}
		},
		73:{
			"name": "Bolt Pistol",
			"cost": 30,
			"damage": 5,
			"crit": 0,
			"rar": "Rare",
			"note": "Burst fire 2 bullets",
			"type": 5,
			"two": 0,
			"ammo": 1,
			"range": 100,
			yay: function(){toburst = 2;burstPenalty = 2;},
			nay: function(){toburst = 0;burstPenalty = 0;}
		},
		74:{
			"name": "Submunitions Pistol",
			"cost": 35,
			"damage": 3,
			"crit": 0,
			"rar": "Rare",
			"note": "Burst fire 2 bullets",
			"type": 5,
			"two": 0,
			"ammo": 0,
			"range": 120,
			yay: function(){toburst = 2;burstPenalty = 2;},
			nay: function(){toburst = 0;burstPenalty = 0;}
		},
		75:{
			"name": "Gatekeeper Pistol",
			"cost": 35,
			"damage": 3,
			"crit": 1,
			"rar": "Rare",
			"note": "Burst fire 2 bullets",
			"type": 5,
			"two": 0,
			"ammo": 2,
			"range": 100,
			yay: function(){toburst = 2;burstPenalty = 2;},
			nay: function(){toburst = 0;burstPenalty = 0;}
		},
		76:{
			"name": "Bolter",
			"cost": 50,
			"damage": 8,
			"crit": 0,
			"rar": "Rare",
			"note": "Burst fire 3 bullets",
			"type": 6,
			"two": 1,
			"ammo": 1,
			"range": 150,
			yay: function(){toburst = 3;burstPenalty = 4;},
			nay: function(){toburst = 0;burstPenalty = 0;}
		},
		77:{
			"name": "Submunitions Rifle",
			"cost": 60,
			"damage": 5,
			"crit": 0,
			"rar": "Rare",
			"note": "Burst fire 3 bullets",
			"type": 6,
			"two": 1,
			"ammo": 0,
			"range": 180,
			yay: function(){toburst = 3;burstPenalty = 4;},
			nay: function(){toburst = 0;burstPenalty = 0;}
		},
		78:{
			"name": "Gatekeeper Rifle",
			"cost": 60,
			"damage": 5,
			"crit": 1,
			"rar": "Rare",
			"note": "Burst fire 3 bullets",
			"type": 6,
			"two": 1,
			"ammo": 2,
			"range": 150,
			yay: function(){toburst = 3;burstPenalty = 4;},
			nay: function(){toburst = 0;burstPenalty = 0;}
		},
		79:{
			"name": "Bolt Sniper",
			"cost": 80,
			"damage": 8,
			"crit": 0,
			"rar": "Rare",
			"note": "Nothing Special",
			"type": 8,
			"two": 1,
			"ammo": 1,
			"range": 300,
			yay: function(){},
			nay: function(){}
		},
		80:{
			"name": "Submunitions Sniper",
			"cost": 90,
			"damage": 5,
			"crit": 0,
			"rar": "Rare",
			"note": "Nothing Special",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 330,
			yay: function(){},
			nay: function(){}
		},
		81:{
			"name": "Outcast Rifle",
			"cost": 90,
			"damage": 5,
			"crit": 1,
			"rar": "Rare",
			"note": "Nothing Special",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 300,
			yay: function(){},
			nay: function(){}
		},
		82:{
			"name": "Incinerator",
			"cost": 100,
			"damage": 7,
			"crit": 1,
			"rar": "Rare",
			"note": "1d6 damage for 2 turns if fail 20 flame resist check",
			"type": 7,
			"two": 1,
			"ammo": 4,
			"range": 50,
			yay: function(){if(race == 3){effectiveRange -= 20;}},
			nay: function(){if(race == 3){effectiveRange += 20;}}
		},
		83:{
			"name": "Heavy Bolter",
			"cost": 120,
			"damage": 4,
			"crit": 0,
			"rar": "Rare",
			"note": "All 4 bullets deal rolled damage",
			"type": 7,
			"two": 1,
			"ammo": 1,
			"range": 160,
			yay: function(){racc-=2;tofire = 4;},
			nay: function(){racc+=2;tofire = 1;}
		},
		84:{
			"name": "Shuriken Catapult",
			"cost": 130,
			"damage": 3,
			"crit": 1,
			"rar": "Rare",
			"note": "All 4 bullets deal rolled damage",
			"type": 7,
			"two": 1,
			"ammo": 2,
			"range": 160,
			yay: function(){racc-=2;tofire = 4;},
			nay: function(){racc+=2;tofire = 1;}
		},
		85:{
			"name": "Reaper Launcher",
			"cost": 140,
			"damage": 20,
			"crit": 1,
			"rar": "Rare",
			"note": "Damage depends on rocket used",
			"type": 7,
			"two": 1,
			"ammo": 7,
			"range": 180,
			yay: function(){},
			nay: function(){}
		},
		86:{//Legendaries
			"name": "Power Triskele",
			"cost": 40,
			"damage": 5,
			"crit": 1,
			"rar": "Legendary",
			"note": "Nothing Special",
			"type": 0,
			"two": 0,
			"ammo": 8,
			"range": 69,
			yay: function(){maxammo = 1;},
			nay: function(){maxammo = 0;}
		},
		87:{
			"name": "Plasma Pistol",
			"cost": 80,
			"damage": 6,
			"crit": 1,
			"rar": "Legendary",
			"note": "+3 damage to AB <= 9",
			"type": 5,
			"two": 0,
			"ammo": 4,
			"range": 90,
			yay: function(){},
			nay: function(){}
		},
		88:{
			"name": "Pulse Bomb Pistol",
			"cost": 100,
			"damage": 4,
			"crit": 1,
			"rar": "Legendary",
			"note": "50% damage to targets 5m away",
			"type": 5,
			"two": 0,
			"ammo": 0,
			"range": 100,
			yay: function(){},
			nay: function(){}
		},
		89:{
			"name": "Shrieker Pistol",
			"cost": 100,
			"damage": 5,
			"crit": 2,
			"rar": "Legendary",
			"note": "Nothing Special",
			"type": 5,
			"two": 0,
			"ammo": 2,
			"range": 100,
			yay: function(){venom = 1;},
			nay: function(){venom = 0;}
		},
		90:{
			"name": "Storm Bolter",
			"cost": 150,
			"damage": 8,
			"crit": 1,
			"rar": "Legendary",
			"note": "Burst fire 4 bullets",
			"type": 6,
			"two": 1,
			"ammo": 1,
			"range": 160,
			yay: function(){toburst = 4;burstPenalty = 3;},
			nay: function(){toburst = 0;burstPenalty = 0;}
		},
		91:{
			"name": "Plasma Gun",
			"cost": 170,
			"damage": 9,
			"crit": 1,
			"rar": "Legendary",
			"note": "+3 damage to AB <= 9",
			"type": 6,
			"two": 1,
			"ammo": 4,
			"range": 170,
			yay: function(){},
			nay: function(){}
		},
		92:{
			"name": "Pulse Bomb Rifle",
			"cost": 170,
			"damage": 6,
			"crit": 1,
			"rar": "Legendary",
			"note": "50% damage to targets 5m away",
			"type": 6,
			"two": 1,
			"ammo": 0,
			"range": 170,
			yay: function(){},
			nay: function(){}
		},
		93:{
			"name": "Shrieker Rifle",
			"cost": 170,
			"damage": 7,
			"crit": 2,
			"rar": "Legendary",
			"note": "Nothing Special",
			"type": 6,
			"two": 1,
			"ammo": 2,
			"range": 160,
			yay: function(){venom = 1;},
			nay: function(){venom = 0;}
		},
		94:{
			"name": "Exitus Rifle",
			"cost": 200,
			"damage": 9,
			"crit": 1,
			"rar": "Legendary",
			"note": "Reload chamber after every shot",
			"type": 8,
			"two": 1,
			"ammo": 1,
			"range": 350,
			yay: function(){},
			nay: function(){}
		},
		95:{
			"name": "Rail Rifle",
			"cost": 200,
			"damage": 7,
			"crit": 1,
			"rar": "Legendary",
			"note": "Cool for 1 turn after every shot",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 400,
			yay: function(){},
			nay: function(){}
		},
		96:{
			"name": "Wanderer Rifle",
			"cost": 200,
			"damage": 6,
			"crit": 2,
			"rar": "Legendary",
			"note": "Nothing Special",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 350,
			yay: function(){},
			nay: function(){}
		},
		97:{
			"name": "Plasma Cannon",
			"cost": 220,
			"damage": 10,
			"crit": 1,
			"rar": "Legendary",
			"note": "+4 damage to AB <= 12, attack tanks",
			"type": 7,
			"two": 1,
			"ammo": 4,
			"range": 150,
			yay: function(){},
			nay: function(){}
		},
		98:{
			"name": "Heavy Storm Bolter",
			"cost": 230,
			"damage": 5,
			"crit": 1,
			"rar": "Legendary",
			"note": "All 6 bullets deal rolled damage",
			"type": 7,
			"two": 1,
			"ammo": 1,
			"range": 170,
			yay: function(){racc--;tofire = 6;},
			nay: function(){racc++;tofire = 1;}
		},
		99:{
			"name": "Shuriken Cannon",
			"cost": 230,
			"damage": 3,
			"crit": 2,
			"rar": "Legendary",
			"note": "All 6 bullets deal rolled damage",
			"type": 7,
			"two": 1,
			"ammo": 2,
			"range": 170,
			yay: function(){racc--;tofire = 6;},
			nay: function(){racc++;tofire = 1;}
		},
		100:{
			"name": "Tempest Launcher",
			"cost": 230,
			"damage": 20,
			"crit": 1,
			"rar": "Legendary",
			"note": "Damage depends on rocket used, can burst fire 2 rockets",
			"type": 7,
			"two": 1,
			"ammo": 7,
			"range": 200,
			yay: function(){toburst = 2;},
			nay: function(){toburst = 0;}
		},
		101:{//Uniques
			"name": "Barrage Plasma Pistol",
			"cost": 150,
			"damage": 7,
			"crit": 1,
			"rar": "Unique",
			"note": "+4 damage to AB <= 12, 50% damage to tanks",
			"type": 5,
			"two": 0,
			"ammo": 4,
			"range": 100,
			yay: function(){},
			nay: function(){}
		},
		102:{
			"name": "Needle Pistol",
			"cost": 170,
			"damage": 9,
			"crit": 2,
			"rar": "Unique",
			"note": "200% damage to AB <= 6, 50% damage to AB >= 12, reload chamber after every shot",
			"type": 5,
			"two": 0,
			"ammo": 3,
			"range": 90,
			yay: function(){venom = 1;},
			nay: function(){venom = 0;}
		},
		103:{
			"name": "Barrage Plasma Gun",
			"cost": 250,
			"damage": 10,
			"crit": 1,
			"rar": "Unique",
			"note": "+4 damage to AB <= 12, 50% damage to tanks",
			"type": 6,
			"two": 1,
			"ammo": 4,
			"range": 180,
			yay: function(){},
			nay: function(){}
		},
		104:{
			"name": "Ion Rifle",
			"cost": 270,
			"damage": 6,
			"crit": 0,
			"rar": "Unique",
			"note": "Ignores 75% AB",
			"type": 6,
			"two": 1,
			"ammo": 0,
			"range": 220,
			yay: function(){},
			nay: function(){}
		},
		105:{
			"name": "Death Spinner",
			"cost": 270,
			"damage": 7,
			"crit": 2,
			"rar": "Unique",
			"note": "+5 damage to AB <= 6, ignores 25% AB",
			"type": 6,
			"two": 1,
			"ammo": 5,
			"range": 150,
			yay: function(){},
			nay: function(){}
		},
		106:{
			"name": "Needler",
			"cost": 270,
			"damage": 12,
			"crit": 2,
			"rar": "Unique",
			"note": "200% damage to AB <= 6, 50% damage to AB >= 12, reload chamber after every shot",
			"type": 8,
			"two": 1,
			"ammo": 3,
			"range": 350,
			yay: function(){venom = 1;},
			nay: function(){venom = 0;}
		},
		107:{
			"name": "Ion Sniper",
			"cost": 330,
			"damage": 7,
			"crit": 1,
			"rar": "Unique",
			"note": "Ignores 75% AB",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 350,
			yay: function(){},
			nay: function(){}
		},
		108:{
			"name": "Multimelta",
			"cost": 360,
			"damage": 14,
			"crit": 1,
			"rar": "Unique",
			"note": "+5 damage to AB <= 12, 100% damage to tanks",
			"type": 7,
			"two": 1,
			"ammo": 4,
			"range": 160,
			yay: function(){},
			nay: function(){}
		},
		109:{
			"name": "Spinarette Gun",
			"cost": 380,
			"damage": 9,
			"crit": 2,
			"rar": "Unique",
			"note": "+6 damage to AB <= 9, ignores 25% AB, 10x10 affected",
			"type": 7,
			"two": 1,
			"ammo": 5,
			"range": 150,
			yay: function(){},
			nay: function(){}
		},
		110:{
			"name": "Missile Pod",
			"cost": 400,
			"damage": 20,
			"crit": 1,
			"rar": "Unique",
			"note": "Damage depends on rocket used, can burst fire 3 rockets",
			"type": 7,
			"two": 1,
			"ammo": 7,
			"range": 220,
			yay: function(){toburst = 3;},
			nay: function(){toburst = 0;}
		},
		176:{//Specials
			"name": "Firepike",
			"cost": 2000,
			"damage": 21,
			"crit": 1,
			"rar": "Special",
			"note": "+50% damage to tanks",
			"type": 7,
			"two": 1,
			"ammo": 4,
			"range": 250,
			yay: function(){mark+=2;racc+=2;},
			nay: function(){mark-=2;racc-=2;}
		},
		177: {	
			"name": "Spear of Starlight",
			"cost": 2000,
			"damage": 12,
			"crit": 3,
			"rar": "Special",
			"note": "Ignores 25% AB",
			"type": 8,
			"two": 1,
			"ammo": 0,
			"range": 500,
			yay: function(){mark+=3;racc+=3;},
			nay: function(){mark-=3;racc-=3;}
		},
		178: {
			"name": "Maugetar",
			"cost": 2000,
			"damage": 6,
			"crit": 0,
			"rar": "Special",
			"note": "All 6 bullets deal rolled damage",
			"type": 7,
			"two": 1,
			"ammo": 2,
			"range": 250,
			yay: function(){mark+=2;racc+=2;tofire = 6;},
			nay: function(){mark-=2;racc-=2;tofire = 1;}
		},

	};
	var rangedMods = {
		19: {//Sights
			"name": "Iron Sight",
			"cost": 10,
			"type": 0,
			yay: function(){racc++;},
			nay: function(){racc--;}
		},
		1: {
			"name": "Red Dot Scope",
			"cost": 20,
			"type": 0,
			yay: function(){racc+=2;},
			nay: function(){racc-=2;}
		},
		2: {
			"name": "Holo Sight",
			"cost": 30,
			"type": 0,
			yay: function(){racc+=3;},
			nay: function(){racc-=3;}
		},
		3: {
			"name": "Target Assist",
			"cost": 50,
			"type": 0,
			yay: function(){racc+=4;$('#noff').show();},
			nay: function(){racc-=4;$('#noff').hide();}
		},
		4: {
			"name": "5x Telescopic Sight",
			"cost": 20,
			"type": 0,
			yay: function(){effectiveRange+=20;},
			nay: function(){effectiveRange-=20;}
		},
		5: {
			"name": "10x Telescopic Sight",
			"cost": 40,
			"type": 0,
			yay: function(){effectiveRange+=50;},
			nay: function(){effectiveRange-=50;}
		},
		6: {
			"name": "Ballistics Sensor Array",
			"cost": 60,
			"type": 0,
			yay: function(){effectiveRange+=70;},
			nay: function(){effectiveRange-=70;}
		},
		7: {
			"name": "Machine Spirit Sight",
			"cost": 60,
			"type": 0,
			yay: function(){effectiveRange+=100;},
			nay: function(){effectiveRange-=100;}
		},
		8: {
			"name": "Infrared Sight",
			"cost": 30,
			"type": 0,
			yay: function(){if(helmet != 1 && helmet != 3 && helmet != 5){$('#nightvis').show();}},
			nay: function(){if(helmet != 1 && helmet != 3 && helmet != 5){$('#nightvis').hide();}}
		},
		9: {
			"name": "Broad Spectrum Sight",
			"cost": 60,
			"type": 0,
			yay: function(){if(helmet != 5){$('#fullvis').show();}},
			nay: function(){if(helmet != 5){$('#fullvis').hide();}}
		},
		10: {//Suppressors
			"name": "Flash Reducer",
			"cost": 10,
			"type": 1,
			yay: function(){$('#suppeff').show();$('#supprange').replaceWith('<b id = "supprange">10</b>');effectiveRange-=10;},
			nay: function(){$('#suppeff').hide();$('#supprange').replaceWith('<b id = "supprange">0</b>');effectiveRange+=10;}
		},
		11: {
			"name": "Basic Silencer",
			"cost": 30,
			"type": 1,
			yay: function(){$('#suppeff').show();$('#supprange').replaceWith('<b id = "supprange">20</b>');effectiveRange-=10;},
			nay: function(){$('#suppeff').hide();$('#supprange').replaceWith('<b id = "supprange">0</b>');effectiveRange+=10;}
		},
		12: {
			"name": "Long Suppressor",
			"cost": 50,
			"type": 1,
			yay: function(){$('#suppeff').show();$('#supprange').replaceWith('<b id = "supprange">40</b>');effectiveRange-=20;},
			nay: function(){$('#suppeff').hide();$('#supprange').replaceWith('<b id = "supprange">0</b>');effectiveRange+=20;}
		},
		13: {
			"name": "Exitus Suppressor",
			"cost": 80,
			"type": 1,
			yay: function(){$('#suppeff').show();$('#supprange').replaceWith('<b id = "supprange">70</b>');effectiveRange-=20;},
			nay: function(){$('#suppeff').hide();$('#supprange').replaceWith('<b id = "supprange">0</b>');effectiveRange+=20;}
		},
		14: {
			"name": "Machine Spirit Silencer",
			"cost": 120,
			"type": 1,
			yay: function(){$('#suppeff').show();$('#supprange').replaceWith('<b id = "supprange">100</b>');effectiveRange-=20;},
			nay: function(){$('#suppeff').hide();$('#supprange').replaceWith('<b id = "supprange">0</b>');effectiveRange+=20;}
		},
		15: {//Accessories
			"name": "Flashlight",
			"cost": 5,
			"type": 2,
			yay: function(){$('#lightsource').show();$('#lighteff').replaceWith('<b id = "lighteff">20</b>');},
			nay: function(){$('#lightsource').hide();$('#lighteff').replaceWith('<b id = "lighteff">0</b>');}
		},
		16: {
			"name": "Laser Pointer",
			"cost": 15,
			"type": 2,
			yay: function(){racc++;},
			nay: function(){racc--;}
		},
		17: {
			"name": "Bipod",
			"cost": 20,
			"type": 2,
			yay: function(){$('#aimassist').show();$('#aimbon').replaceWith('<b id = "aimbon">2</b>');},
			nay: function(){$('#aimassist').hide();$('#aimbon').replaceWith('<b id = "aimbon">0</b>');}
		},
		18: {
			"name": "Integrated Gyroscopes",
			"cost": 40,
			"type": 2,
			yay: function(){racc+=2;},
			nay: function(){racc-=2;}
		}
	};
	var spells = {
		0: {//Pyro
			"name": "Torch",
			"school": 0,
			"intel": 3,
			"cost": 30,
			"note": "+30m to visibility at night, needs free hand"
		},
		1: {
			"name": "Burning Fist",
			"school": 0,
			"intel": 3,
			"cost": 30,
			"note": "1d4 damage close combat, lasts 4 turns"
		},
		2: {
			"name": "Flaming Weapon",
			"school": 0,
			"intel": 4,
			"cost": 40,
			"note": "+1d4 melee weapon damage, lasts 4 turns"
		},
		3: {
			"name": "Fire Bolt",
			"school": 0,
			"intel": 4,
			"cost": 40,
			"note": "1d4 ranged damage to single target"
		},
		4: {
			"name": "Douse Flames",
			"school": 0,
			"intel": 4,
			"cost": 40,
			"note": "No flames in 10x10 area, lasts 1d2 turns"
		},
		5: {
			"name": "Lesser Flame Sculpt",
			"school": 0,
			"intel": 5,
			"cost": 50,
			"note": "+2 flame weapon damage for 1d2 turns (Nat 1 destroys weapon) OR spread fire to adjacent tile and reset burnout timer"
		},
		6: {
			"name": "Wyrdlight",
			"school": 0,
			"intel": 6,
			"cost": 60,
			"note": "+60m to visibility at night, needs free hand"
		},
		7: {
			"name": "Fireball",
			"school": 0,
			"intel": 6,
			"cost": 60,
			"note": "1d4 ranged damage to 10x10 area"
		},
		8: {
			"name": "Extinguish Flames",
			"school": 0,
			"intel": 6,
			"cost": 60,
			"note": "No flames in 15x15 area area, lasts 1d4 turns"
		},
		9: {
			"name": "Greater Flame Scuplt",
			"school": 0,
			"intel": 7,
			"cost": 70,
			"note": "+4 flame weapon damage for 1d4 turns (Nat 1 destroys weapon) OR generate smoke in all adjacent tiles and reset burnout timer"
		},
		10: {
			"name": "Incinirate",
			"school": 0,
			"intel": 8,
			"cost": 80,
			"note": "1d8 ranged damage to single target"
		},
		11: {
			"name": "Exterminate Flames",
			"school": 0,
			"intel": 8,
			"cost": 80,
			"note": "No flames in 20x20 area area, lasts 1d6 turns"
		},
		12: {
			"name": "Flare",
			"school": 0,
			"intel": 9,
			"cost": 90,
			"note": "+90m to visibility at night, needs free hand"
		},
		13: {
			"name": "Fire Storm",
			"school": 0,
			"intel": 10,
			"cost": 100,
			"note": "1d8 ranged damage, targets 10x10 area"
		},
		14: {
			"name": "Supreme Flame Sculpt",
			"school": 0,
			"intel": 10,
			"cost": 100,
			"note": "+6 flame weapon damage for 1d4 (Nat 1 destroys weapon) OR expand flames to all adjacent tiles and reset burnout timer"
		},
		15: {
			"name": "Sunburst",
			"school": 0,
			"intel": 12,
			"cost": 120,
			"note": "2d6 melee damage, targets 15m radius around caster"
		},
		16: {//Cryo
			"name": "Frost Touch",
			"school": 1,
			"intel": 3,
			"cost": 30,
			"note": "1d4 melee damage, lasts 4 turns"
		},
		17: {
			"name": "Cryocharge",
			"school": 1,
			"intel": 3,
			"cost": 30,
			"note": "+1d4 melee weapon damage, lasts 4 turns"
		},
		18: {
			"name": "Frost Spike",
			"school": 1,
			"intel": 4,
			"cost": 40,
			"note": "1d4 ranged damage to single target"
		},
		19: {
			"name": "Frost Armour",
			"school": 1,
			"intel": 4,
			"cost": 40,
			"note": "+2 AB for 1d4 turns to single target"
		},
		20: {
			"name": "Snowfall",
			"school": 1,
			"intel": 5,
			"cost": 50,
			"note": "-2 Ranged Accuracy in 10x10 area for 1d4 turns"
		},
		21: {
			"name": "Frost Sphere",
			"school": 1,
			"intel": 6,
			"cost": 60,
			"note": "1d4 ranged damage, targets 10x10 area"
		},
		22: {
			"name": "Frozen Armour",
			"school": 1,
			"intel": 6,
			"cost": 60,
			"note": "+4 AB for 1d4 turns to single target"
		},
		23: {
			"name": "Ice Rink",
			"school": 1,
			"intel": 6,
			"cost": 60,
			"note": "Covers 15x15 area, any entering area stop, 50% movement while on, lasts 1d4 turns"
		},
		24: {
			"name": "Snow Storm",
			"school": 1,
			"intel": 7,
			"cost": 70,
			"note": "-4 Ranged Accuracy in 15x15 area for 1d4 turns"
		},
		25: {
			"name": "Permafrost Armour",
			"school": 1,
			"intel": 8,
			"cost": 80,
			"note": "+6 AB for 1d6 turns to single target"
		},
		26: {
			"name": "Permafrost Spike",
			"school": 1,
			"intel": 8,
			"cost": 80,
			"note": "1d8 ranged damage to single target"
		},
		27: {
			"name": "Blizzard",
			"school": 1,
			"intel": 9,
			"cost": 90,
			"note": "-4 Ranged Accuracy in 20x20 area for 1d6 turns"
		},
		28: {
			"name": "Frozen Shards",
			"school": 1,
			"intel": 10,
			"cost": 10,
			"note": "1d8 ranged damage, targets 10x10 area"
		},
		29: {
			"name": "Frozen Tempest",
			"school": 1,
			"intel": 10,
			"cost": 100,
			"note": "1 damage every turn and -6 Ranged Accuracy in 20x20 area for 1d6 turns"
		},
		30: {
			"name": "Frozen Sarcophagus",
			"school": 1,
			"intel": 11,
			"cost": 110,
			"note": "1d2 damage every turn, single target is paralyzed for 1d4 turns"
		},
		31: {
			"name": "Frozen Nova",
			"school": 1,
			"intel": 12,
			"cost": 120,
			"note": "2d6 melee damage, targets 15m radius around caster"
		},
		32: {//Fulm
			"name": "Flash",
			"school": 2,
			"intel": 3,
			"cost": 30,
			"note": "-5 Ranged/Melee Accuracy in 10x10 area, lasts 1 turn"
		},
		33: {
			"name": "Lightning Fist",
			"school": 1,
			"intel": 3,
			"cost": 30,
			"note": "1d6 melee damage, lasts 4 turns"
		},
		34: {
			"name": "Shocking Weapon",
			"school": 2,
			"intel": 4,
			"cost": 40,
			"note": "+1d6 melee weapon damage, lasts 4 turns"
		},
		35: {
			"name": "Magnetokinesis",
			"school": 2,
			"intel": 5,
			"cost": 50,
			"note": "Move single target 50m"
		},
		36: {
			"name": "Charge",
			"school": 2,
			"intel": 5,
			"cost": 50,
			"note": "+3 damage to handheld plasma weapon (Nat 1 destroys weapon)"
		},
		37: {
			"name": "Flashbang",
			"school": 2,
			"intel": 6,
			"cost": 60,
			"note": "-5 Ranged/Melee Accuracy in 15x15 area, lasts 1d2 turns"
		},
		38: {
			"name": "Lightning Bolt",
			"school": 2,
			"intel": 4,
			"cost": 40,
			"note": "1d6 ranged damage, single target"
		},
		39: {
			"name": "Electric Surge",
			"school": 2,
			"intel": 6,
			"cost": 60,
			"note": "1d6 ranged damage, targets 10x10 area"
		},
		40: {
			"name": "Overload",
			"school": 2,
			"intel": 6,
			"cost": 60,
			"note": "All electronics stop working in 10x10 area, lasts 1d4 turns"
		},
		41: {
			"name": "Surcharge",
			"school": 2,
			"intel": 7,
			"cost": 70,
			"note": "+6 damage to handheld OR +3 damage to tank plasma weapon (Nat 1 destroys weapon)"
		},
		42: {
			"name": "Lightning Arc",
			"school": 2,
			"intel": 8,
			"cost": 80,
			"note": "2d6 ranged damage, single target"
		},
		43: {
			"name": "Critical Failiure",
			"school": 2,
			"intel": 8,
			"cost": 80,
			"note": "All electronics stop working in 15x15 area, lasts 1d4 turns"
		},
		44: {
			"name": "Lightning Storm",
			"school": 2,
			"intel": 10,
			"cost": 100,
			"note": "2d6 ranged damage, targets 10x10 area"
		},
		45: {
			"name": "Overcharge",
			"school": 2,
			"intel": 10,
			"cost": 100,
			"note": "+6 damage to tank plasma weapon (Nat 1 destroys weapon)"
		},
		46: {
			"name": "Electrodisplacement",
			"school": 2,
			"intel": 11,
			"cost": 110,
			"note": "Swap places with target, both are invunerable during transfer"
		},
		47: {
			"name": "Raging Tempest",
			"school": 2,
			"intel": 12,
			"cost": 120,
			"note": "3d6 melee damage, targets 15m radius around caster"
		},
		48: {//Telekine
			"name": "Call Lesser Item",
			"school": 3,
			"intel": 3,
			"cost": 30,
			"note": "Summon pre-enspelled small item to hand"
		},
		49: {
			"name": "Lesser Heal",
			"school": 3,
			"intel": 3,
			"cost": 30,
			"note": "Heal 3 HP"
		},
		50: {
			"name": "Psychic Blades",
			"school": 3,
			"intel": 4,
			"cost": 40,
			"note": "2d4 melee damage, both hands free, ignores all armour, lasts 1d2 turns"
		},
		51: {
			"name": "Lesser Distortion",
			"school": 3,
			"intel": 4,
			"cost": 40,
			"note": "Humanoid target appears 10m away, original concealed, lasts 2 turns"
		},
		52: {
			"name": "Lesser Chameleon",
			"school": 3,
			"intel": 4,
			"cost": 40,
			"note": "+2 stealth to target, lasts 4 turns"
		},
		53: {
			"name": "Call Greater Item",
			"school": 3,
			"intel": 6,
			"cost": 60,
			"note": "Summon pre-enspelled item to hand"
		},
		54: {
			"name": "Greater Chameleon",
			"school": 3,
			"intel": 6,
			"cost": 60,
			"note": "+4 stealth to target, lasts 4 turns"
		},
		55: {
			"name": "Greater Heal",
			"school": 3,
			"intel": 6,
			"cost": 60,
			"note": "Heal 6 HP"
		},
		56: {
			"name": "Greater Distortion",
			"school": 3,
			"intel": 7,
			"cost": 70,
			"note": "Humanoid target appears 20m away OR tank appears 10m away, original concealed, lasts 2 turns"
		},
		57: {
			"name": "Supreme Chameleon",
			"school": 3,
			"intel": 8,
			"cost": 80,
			"note": "+6 stealth to target, lasts 6 turns"
		},
		58: {
			"name": "Catch Projectile",
			"school": 3,
			"intel": 8,
			"cost": 80,
			"note": "Stop any 1 projectile in 5m radius of caster"
		},
		59: {
			"name": "Supeme Heal",
			"school": 3,
			"intel": 9,
			"cost": 90,
			"note": "Heal 9 HP"
		},
		60: {
			"name": "Teleport",
			"school": 3,
			"intel": 9,
			"cost": 90,
			"note": "Teleports caster up to 60m away"
		},
		61: {
			"name": "Supreme Distortion",
			"school": 3,
			"intel": 10,
			"cost": 100,
			"note": "Target appears 30m away, original concealed, lasts 4 turns"
		},
		62: {
			"name": "Mend Metal",
			"school": 3,
			"intel": 10,
			"cost": 100,
			"note": "Heal 5 HP to tank"
		},
		63: {
			"name": "Projectile Shield",
			"school": 3,
			"intel": 10,
			"cost": 100,
			"note": "Stop all projectiles in 5m radius of caster, lasts 1 turn"
		},
		64: {
			"name": "Greater Projectile Shield",
			"school": 3,
			"intel": 10,
			"cost": 100,
			"note": "Stop all projectiles in 10m radius of caster, lasts 1 turn"
		},
		65: {
			"name": "Gaze of Infinity",
			"school": 3,
			"intel": 16,
			"cost": 160,
			"note": "Creates a portal to a different planet, every turn it is open consumes a spell slot, closes after caster is through"
		},
		66: {//Telepath
			"name": "Dull Pain",
			"school": 4,
			"intel": 3,
			"cost": 30,
			"note": "+2 HP for 1d4 turns, target dies if after it has 0 or less HP"
		},
		67: {
			"name": "Inspiring Presence",
			"school": 4,
			"intel": 3,
			"cost": 30,
			"note": "+3 Leadership to all allies within 10m of caster, lasts 1d4 turns"
		},
		68: {
			"name": "Aura of Fear",
			"school": 4,
			"intel": 4,
			"cost": 40,
			"note": "Enemies within 15m of caster pass 15+ rout check"
		},
		69: {
			"name": "Telepathy",
			"school": 4,
			"intel": 4,
			"cost": 40,
			"note": "Talk to someone within 200m, lasts 1 turn"
		},
		70: {
			"name": "Aura of Horror",
			"school": 4,
			"intel": 6,
			"cost": 60,
			"note": "Enemies within 15m of caster pass 20+ rout check"
		},
		71: {
			"name": "Inspirational Aura",
			"school": 4,
			"intel": 0,
			"cost": 0,
			"note": "+5 Leadership to all allies within 15m of caster, lasts 1d4 turns"
		},
		72: {
			"name": "Greater Telepathy",
			"school": 4,
			"intel": 6,
			"cost": 60,
			"note": "Talk to someone within 700m, lasts 1 turn"
		},
		73: {
			"name": "Aura of Terror",
			"school": 4,
			"intel": 8,
			"cost": 80,
			"note": "Enemies within 20m of caster pass 25+ rout check"
		},
		74: {
			"name": "Dominate",
			"school": 4,
			"intel": 8,
			"cost": 80,
			"note": "Control 1 target for 1d4 turns, caster cannot act during posession time"
		},
		75: {
			"name": "Supreme Telepathy",
			"school": 4,
			"intel": 8,
			"cost": 80,
			"note": "Communicate with any known target on same planet"
		},
		76: {
			"name": "Emperor's Word",
			"school": 4,
			"intel": 9,
			"cost": 90,
			"note": "+6 Leadership to all allies within 20m of caster, lasts 1d6 turns"
		},
		77: {
			"name": "Abominable Aura",
			"school": 4,
			"intel": 10,
			"cost": 100,
			"note": "Enemies within 30m of caster pass 25+ rout check"
		},
		78: {
			"name": "See Me Not",
			"school": 4,
			"intel": 10,
			"cost": 100,
			"note": "Caster is fully invisible until they cast another spell or attack someone"
		},
		79: {
			"name": "Astropathy",
			"school": 4,
			"intel": 10,
			"cost": 100,
			"note": "Communicate with any known target within the same stellar system"
		},
		80: {
			"name": "Might of the Ancients",
			"school": 4,
			"intel": 11,
			"cost": 110,
			"note": "Doubles Strength OR Marksmanship of target for 1d4 turns"
		},
		81: {
			"name": "Greater Astropathy",
			"school": 4,
			"intel": 12,
			"cost": 120,
			"note": "Communicate with any known target, regardless of their position"
		},
		82: {
			"name": "Avenger",
			"school": 4,
			"intel": 16,
			"cost": 160,
			"note": "3d4 damage to all in 100x10m path in front of caster"
		},
		83: {//Divine
			"name": "Precognition",
			"school": 5,
			"intel": 3,
			"cost": 30,
			"note": "Attempt to sense future 2 turns away for 1 target"
		},
		84: {
			"name": "Sense Object",
			"school": 5,
			"intel": 4,
			"cost": 40,
			"note": "Find described object within 100m"
		},
		85: {
			"name": "Far Sight",
			"school": 5,
			"intel": 4,
			"cost": 40,
			"note": "See up to 2000m in a given direction for 2 turns"
		},
		86: {
			"name": "Divine Aim",
			"school": 5,
			"intel": 5,
			"cost": 50,
			"note": "+3 Ranged Accuracy to single target for 2 turns"
		},
		87: {
			"name": "Divine Object",
			"school": 5,
			"intel": 6,
			"cost": 60,
			"note": "Find described object within 300m"
		},
		88: {
			"name": "Sense Near Future",
			"school": 5,
			"intel": 6,
			"cost": 60,
			"note": "Sense future for 2 turns ahead"
		},
		89: {
			"name": "Divine Shot",
			"school": 5,
			"intel": 7,
			"cost": 70,
			"note": "+6 Ranged Accuracy to single target for 2 turns"
		},
		90: {
			"name": "Sense Person",
			"school": 5,
			"intel": 8,
			"cost": 80,
			"note": "Find described person within 200m"
		},
		91: {
			"name": "Sense Far Future",
			"school": 5,
			"intel": 8,
			"cost": 80,
			"note": "Sense mission details"
		},
		92: {
			"name": "Wipe Memory",
			"school": 5,
			"intel": 8,
			"cost": 80,
			"note": "Target forgets caster"
		},
		93: {
			"name": "Possibility shield",
			"school": 5,
			"intel": 9,
			"cost": 90,
			"note": "-3 enemy Ranged Accuracy when aiming at target, lasts 3 turns"
		},
		94: {
			"name": "Divine Person",
			"school": 5,
			"intel": 10,
			"cost": 100,
			"note": "Find described person within 500m"
		},
		95: {
			"name": "Personal Augury",
			"school": 5,
			"intel": 12,
			"cost": 120,
			"note": "Ask 1 question to DM"
		},
	};
	var others = {//Types: 0 head, 1 comm, 2 bag, 3 har, 4 shield, 5 divine
		0: {//Helmets
			"name": "Glasses",
			"cost": 20,
			"type": 0,
			"rar": "Common",
			yay: function(){intel++;spellNum++;perc++;dip+=0.5;},
			nay: function(){intel--;spellNum--;perc--;dip-=0.5;}
		},
		1: {
			"name": "Night Vision Glasses",
			"cost": 50,
			"type": 0,
			"rar": "Uncommon",
			yay: function(){if(rangedMods[0] != 8){$('#nightvis').show();}},
			nay: function(){if(rangedMods[0] != 8){$('#nightvis').hide();}}
		},
		2: {
			"name": "Monocle",
			"cost": 60,
			"type": 0,
			"rar": "Uncommon",
			yay: function(){intel+=2;spellNum+=2;perc+=2;dip+=1;},
			nay: function(){intel-=2;spellNum-=2;perc-=2;dip-=1;}
		},
		3: {
			"name": "Hologlasses",
			"cost": 130,
			"type": 0,
			"rar": "Rare",
			yay: function(){if(rangedMods[0] != 8){$('#nightvis').show();} racc+=2;},
			nay: function(){if(rangedMods[0] != 8){$('#nightvis').hide();} racc-=2;}
		},
		4: {
			"name": "Runic Hood",
			"cost": 140,
			"type": 0,
			"rar": "Rare",
			yay: function(){intel+=3;spellNum+=3;perc+=3;dip+=1.5;},
			nay: function(){intel-=3;spellNum-=3;perc-=3;dip-=1.5;}
		},
		5: {
			"name": "Officer's Eyes",
			"cost": 300,
			"type": 0,
			"rar": "Legendary",
			yay: function(){if(rangedMods[0] != 8){$('#nightvis').show();} racc+=4; if(rangedMods[0] != 9){$('#fullvis').show();}},
			nay: function(){if(rangedMods[0] != 8){$('#nightvis').hide();} racc-=4; if(rangedMods[0] != 9){$('#fullvis').hide();}}
		},
		6: {
			"name": "Psychic Hood",
			"cost": 300,
			"type": 0,
			"rar": "Legendary",
			yay: function(){intel+=4;spellNum+=4;perc+=4;dip+=2;},
			nay: function(){intel-=4;spellNum-=4;perc-=4;dip-=2;}
		},
		7: {
			"name": "Boosted Psyker's Hood",
			"cost": 1000,
			"type": 0,
			"rar": "Unique",
			yay: function(){intel+=6;spellNum+=6;perc+=6;dip+=3;},
			nay: function(){intel-=6;spellNum-=6;perc-=6;dip-=3;}
		},
		8: {//Comms
			"name": "Basic Vox box",
			"cost": 5,
			"type": 1,
			"rar": "Common",
			yay: function(){$('#commRange').replaceWith('<b id = "commRange">100</b>');},
			nay: function(){$('#commRange').replaceWith('<b id = "commRange">30</b>');}
		},
		9: {
			"name": "Vox Caster",
			"cost": 20,
			"type": 1,
			"rar": "Uncommon",
			yay: function(){$('#commRange').replaceWith('<b id = "commRange">300</b>');},
			nay: function(){$('#commRange').replaceWith('<b id = "commRange">30</b>');}
		},
		10: {
			"name": "Vox Bead",
			"cost": 60,
			"type": 1,
			"rar": "Rare",
			yay: function(){$('#commRange').replaceWith('<b id = "commRange">1000</b>');},
			nay: function(){$('#commRange').replaceWith('<b id = "commRange">30</b>');}
		},
		11: {//Bags
			"name": "Small Bag",
			"cost": 3,
			"type": 2,
			"rar": "Common",
			yay: function(){canback = [3, 1, 0]; inback = [[0, 0, 0], [200], []]; $('.back').show();},
			nay: function(){canback = [0, 0, 0]; inback = [[], [], []]; $('.back').hide();}
		},
		12: {
			"name": "Medium Bag",
			"cost": 15,
			"type": 2,
			"rar": "Uncommon",
			yay: function(){canback = [6, 1, 1]; inback = [[0, 0, 0, 0, 0, 0], [200], [200]]; $('.back').show();},
			nay: function(){canback = [0, 0, 0]; inback = [[], [], []]; $('.back').hide();}
		},
		13: {
			"name": "Large Bag",
			"cost": 40,
			"type": 2,
			"rar": "Rare",
			yay: function(){canback = [10, 2, 1]; inback = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [200, 200], [200]]; $('.back').show();},
			nay: function(){canback = [0, 0, 0]; inback = [[], [], []]; $('.back').hide();}
		},
		14: {//Harness
			"name": "Basic Harness",
			"cost": 3,
			"type": 3,
			"rar": "Common",
			yay: function(){canhar = [4, 0, 0]; inhar = [[0, 0, 0, 0], [], []]; $('.har').show();},
			nay: function(){canhar = [0, 0, 0]; inhar = [[], [], []]; $('.har').hide();}
		},
		15: {
			"name": "Combat Harness",
			"cost": 15,
			"type": 3,
			"rar": "Uncommon",
			yay: function(){canhar = [8, 1, 0]; inhar = [[0, 0, 0, 0, 0, 0, 0, 0], [200], []]; $('.har').show();},
			nay: function(){canhar = [0, 0, 0]; inhar = [[], [], []]; $('.har').hide();}
		},
		16: {
			"name": "Advanced Harness",
			"cost": 40,
			"type": 3,
			"rar": "Rare",
			yay: function(){canhar = [12, 1, 1]; inhar = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [200], [200]]; $('.har').show();},
			nay: function(){canhar = [0, 0, 0]; inhar = [[], [], []]; $('.har').hide();}
		},
		150: {//Shield
			"name": "Combat Shield",
			"cost": 150,
			"type": 4,
			"rar": "Rare",
			yay: function(){$('#shielded').show();$('#shielddam').replaceWith('<b id = "shielddam">10</b>');$('#sheildwait').replaceWith('<b id = "sheildwait">2</b>');},
			nay: function(){$('#shielded').hide();$('#shielddam').replaceWith('<b id = "shielddam">0</b>');$('#sheildwait').replaceWith('<b id = "sheildwait">0</b>');}
		},
		151: {
			"name": "Power Shield",
			"cost": 300,
			"type": 4,
			"rar": "Legendary",
			yay: function(){$('#shielded').show();$('#shielddam').replaceWith('<b id = "shielddam">20</b>');$('#sheildwait').replaceWith('<b id = "sheildwait">3</b>');},
			nay: function(){$('#shielded').hide();$('#shielddam').replaceWith('<b id = "shielddam">0</b>');$('#sheildwait').replaceWith('<b id = "sheildwait">0</b>');}
		},
		152: {
			"name": "Storm Shield",
			"cost": 600,
			"type": 4,
			"rar": "Unique",
			yay: function(){$('#shielded').show();$('#shielddam').replaceWith('<b id = "shielddam">30</b>');$('#sheildwait').replaceWith('<b id = "sheildwait">2</b>');},
			nay: function(){$('#shielded').hide();$('#shielddam').replaceWith('<b id = "shielddam">0</b>');$('#sheildwait').replaceWith('<b id = "sheildwait">0</b>');}
		},
		17: {//Divine
			"name": "Warp Infused Crystal",
			"cost": 100,
			"type": 5,
			"rar": "Rare",
			yay: function(){$('#divineboost').replaceWith('<b id = "divineboost">1</b>');},
			nay: function(){$('#divineboost').replaceWith('<b id = "divineboost">0</b>');}
		},
		18: {
			"name": "Emperor's Tarot",
			"cost": 250,
			"type": 5,
			"rar": "Legendary",
			yay: function(){$('#divineboost').replaceWith('<b id = "divineboost">3</b>');},
			nay: function(){$('#divineboost').replaceWith('<b id = "divineboost">0</b>');}
		},
		19: {
			"name": "Chronometron",
			"cost": 500,
			"type": 5,
			"rar": "Unique",
			yay: function(){$('#divineboost').replaceWith('<b id = "divineboost">5</b>');},
			nay: function(){$('#divineboost').replaceWith('<b id = "divineboost">0</b>');}
		},
	};
	var ammo = {
		1: {//Battery
			"name": "Small Battery",
			"cost": 2,
			"type": 0,
			"ammo": [6, 6, 1, 2],
			"note": "None",
			"two": 0
		},
		2: {
			"name": "Meduim Battery",
			"cost": 6,
			"type": 0,
			"ammo": [12, 12, 2, 4],
			"note": "None",
			"two": 0
		},
		3: {
			"name": "Large Battery",
			"cost": 15,
			"type": 0,
			"ammo": [0, 0, 4, 8],
			"note": "None",
			"two": 0
		},
		4: {
			"name": "Supreme Battery",
			"cost": 25,
			"type": 0,
			"ammo": [0, 0, 6, 0],
			"note": "None",
			"two": 0
		},
		5: {//Bolt
			"name": "Small Bolt Mag",
			"cost": 5,
			"type": 1,
			"ammo": [0, 0, 0, 3],
			"note": "None",
			"two": 0
		},
		6: {
			"name": "Small Explosive Bolt Mag",
			"cost": 15,
			"type": 1,
			"ammo": [0, 0, 0, 3],
			"note": "+3 damage",
			"two": 0
		},
		7: {
			"name": "Medium Bolt Mag",
			"cost": 10,
			"type": 1,
			"ammo": [6, 6, 0, 6],
			"note": "None",
			"two": 0
		},
		8: {
			"name": "Medium Explosive Bolt Mag",
			"cost": 30,
			"type": 1,
			"ammo": [6, 6, 0, 6],
			"note": "+3 damage",
			"two": 0
		},
		9: {
			"name": "Large Bolt Mag",
			"cost": 30,
			"type": 1,
			"ammo": [12, 12, 12, 0],
			"note": "None",
			"two": 0
		},
		10: {
			"name": "Large Explosive Bolt Mag",
			"cost": 60,
			"type": 1,
			"ammo": [12, 12, 12, 0],
			"note": "+3 damage",
			"two": 0
		},
		11: {
			"name": "Supreme Bolt Mag",
			"cost": 60,
			"type": 1,
			"ammo": [0, 0, 30, 0],
			"note": "None",
			"two": 1
		},
		12: {
			"name": "Supreme Explosive Bolt Mag",
			"cost": 100,
			"type": 1,
			"ammo": [0, 0, 30, 0],
			"note": "+3 damage",
			"two": 1
		},
		13: {//Shuriken
			"name": "Small Shuriken Disk",
			"cost": 7,
			"type": 2,
			"ammo": [6, 6, 6, 0],
			"note": "None",
			"two": 0
		},
		14: {
			"name": "Medium Shuriken Disk",
			"cost": 14,
			"type": 2,
			"ammo": [12, 12, 12, 0],
			"note": "None",
			"two": 0
		},
		15: {
			"name": "Large Shuriken Disk",
			"cost": 30,
			"type": 2,
			"ammo": [0, 0, 30, 0],
			"note": "None",
			"two": 1
		},
		16: {//Needle
			"name": "Small Needle Stack",
			"cost": 20,
			"type": 3,
			"ammo": [3, 0, 0, 3],
			"note": "None",
			"two": 0
		},
		17: {
			"name": "Large Needle Stack",
			"cost": 40,
			"type": 3,
			"ammo": [6, 0, 0, 6],
			"note": "None",
			"two": 0
		},
		18: {//Fuel
			"name": "Small Fuel Can",
			"cost": 10,
			"type": 4,
			"ammo": [6, 3, 1, 0],
			"note": "None",
			"two": 0
		},
		19: {
			"name": "Medium Fuel Can",
			"cost": 20,
			"type": 4,
			"ammo": [12, 6, 2, 0],
			"note": "None",
			"two": 0
		},
		20: {
			"name": "Large Fuel Can",
			"cost": 40,
			"type": 4,
			"ammo": [0, 12, 4, 0],
			"note": "None",
			"two": 0
		},
		21: {
			"name": "Supreme Fuel Can",
			"cost": 80,
			"type": 4,
			"ammo": [0, 0, 10, 0],
			"note": "None",
			"two": 1
		},
		22: {//Filament
			"name": "Small Filament Holder",
			"cost": 20,
			"type": 5,
			"ammo": [0, 3, 1, 0],
			"note": "None",
			"two": 0
		},
		23: {
			"name": "Medium Filament Holder",
			"cost": 40,
			"type": 5,
			"ammo": [0, 6, 2, 0],
			"note": "None",
			"two": 0
		},
		24: {
			"name": "Large Filament Holder",
			"cost": 80,
			"type": 5,
			"ammo": [0, 0, 6, 0],
			"note": "None",
			"two": 1
		},
		25: {//Grenades
			"name": "Frag Grenade",
			"cost": 20,
			"type": 6,
			"ammo": [0, 0, 1, 0],
			"note": "2d6 damage in 10x10, targets with AB 8+ take 50% damage",
			"two": 0
		},
		26: {
			"name": "Krak Grenade",
			"cost": 30,
			"type": 6,
			"ammo": [0, 0, 1, 0],
			"note": "2d8 damage to single target, ignores 50% AB, reg damage to tanks",
			"two": 0
		},
		27: {
			"name": "Vortex Grenade",
			"cost": 100,
			"type": 6,
			"ammo": [0, 0, 1, 0],
			"note": "5 damage in 1 cell, moves 5m every turn, ignores all armour, exists for 1d20 turns",
			"two": 0
		},
		28: {
			"name": "Psyk-out Grenade",
			"cost": 70,
			"type": 6,
			"ammo": [0, 0, 1, 0],
			"note": "No spells in 10x10 area, psykers need Intelligence 20+ roll to cast again, lasts 4 turns",
			"two": 0
		},
		29: {
			"name": "Plasma Grenade",
			"cost": 60,
			"type": 6,
			"ammo": [0, 0, 1, 0],
			"note": "3d6 damage to single target, +25% damage to tanks, ignores 25% armour",
			"two": 0
		},
		30: {
			"name": "Photon Grenade",
			"cost": 40,
			"type": 6,
			"ammo": [0, 0, 1, 0],
			"note": "Stuns 10x10 area for 1d4 turns",
			"two": 0
		},
		31: {
			"name": "Smoke Grenade",
			"cost": 20,
			"type": 6,
			"ammo": [0, 0, 1, 0],
			"note": "10x10 area fills with smoke, lasts 4 turns",
			"two": 0
		},
		32: {//Rockets
			"name": "Frag Missile",
			"cost": 30,
			"type": 7,
			"ammo": [0, 0, 1, 0],
			"note": "2d8 damage in 10x10, targets with AB 10+ take 50% damage",
			"two": 0
		},
		33: {
			"name": "Incendiary Missile",
			"cost": 50,
			"type": 7,
			"ammo": [0, 0, 1, 0],
			"note": "Fire covers 10x10 area, fire resist check 17+ required, take 1d4 damage when in area OR until pass check, lasts 5 turns",
			"two": 0
		},
		34: {
			"name": "Krak Missile",
			"cost": 40,
			"type": 7,
			"ammo": [0, 0, 1, 0],
			"note": "3d6 damage to single target, ignores 50% AB, reg damage to tanks",
			"two": 0
		},
		35: {
			"name": "Plasma Missile",
			"cost": 80,
			"type": 7,
			"ammo": [0, 0, 1, 0],
			"note": "3d6 damage in 10x10 area, +50% damage to tanks, ignores 25% armour",
			"two": 0
		},
		36: {
			"name": "Vortex Missile",
			"cost": 150,
			"type": 7,
			"ammo": [0, 0, 1, 0],
			"note": "6 damage in 10x10 area, moves 5m every turn, ignores all armour, exists for 1d20 turns",
			"two": 0
		},
		37: {
			"name": "Psyk-out Missile",
			"cost": 100,
			"type": 7,
			"ammo": [0, 0, 1, 0],
			"note": "No spells in 10x10 area, psykers need Intelligence 25+ roll to cast again, lasts 6 turns",
			"two": 0
		},
		38: {
			"name": "Seeker Missile",
			"cost": 200,
			"type": 7,
			"ammo": [0, 0, 1, 0],
			"note": "2d8 damage to single target, +75% damage to tanks, range 400m, requires Marked Target",
			"two": 0
		},
	}
	var training = {
		0: {
			"name": "",
			0: {
				"cost": 3,
				"stat": "corr",
				"end": 98,
				yay: function(){corr+=2;}
			},
			1: {
				"cost": 10,
				"stat": "corr",
				"end": 96,
				yay: function(){corr+=4;}
			},
			2: {
				"cost": 20,
				"stat": "corr",
				"end": 94,
				yay: function(){corr+=6;}
			}
		},
		1: {
			"name": "Cleansing",
			0: {
				"cost": 15,
				"stat": "corr",
				"end": 3,
				yay: function(){corr-=3;}
			},
			1: {
				"cost": 30,
				"stat": "corr",
				"end": 6,
				yay: function(){corr-=6;}
			},
			2: {
				"cost": 50,
				"stat": "corr",
				"end": 9,
				yay: function(){corr-=9;}
			}
		},
		2: {
			"name": "Library Services",
			0: {
				"cost": 2,
				0: {
					"stat": "xeno",
					"end": 6,
					yay: function(){xeno+=1;}
				},
				1: {
					"stat": "warp",
					"end": 6,
					yay: function(){warp+=1;}
				},
				2: {
					"stat": "hist",
					"end": 6,
					yay: function(){hist+=1;}
				},
				3: {
					"stat": "geo",
					"end": 6,
					yay: function(){geo+=1;}
				},
			},
			1: {
				"cost": 10,
				0: {
					"stat": "xeno",
					"end": 12,
					yay: function(){xeno+=2;}
				},
				1: {
					"stat": "warp",
					"end": 12,
					yay: function(){warp+=2;}
				},
				2: {
					"stat": "hist",
					"end": 12,
					yay: function(){hist+=2;}
				},
				3: {
					"stat": "geo",
					"end": 12,
					yay: function(){geo+=2;}
				},
			},
			2: {
				"cost": 30,
				0: {
					"stat": "xeno",
					"end": 17,
					yay: function(){xeno+=3;}
				},
				1: {
					"stat": "warp",
					"end": 17,
					yay: function(){warp+=3;}
				},
				2: {
					"stat": "hist",
					"end": 17,
					yay: function(){hist+=3;}
				},
				3: {
					"stat": "geo",
					"end": 17,
					yay: function(){geo+=3;}
				},
			}
		},
		3: {
			"name": "Eye Training",
			0: {
				"cost": 10,
				"stat": "perc",
				"end": 6,
				yay: function(){perc++;}
			},
			1: {
				"cost": 30,
				"stat": "perc",
				"end": 12,
				yay: function(){perc+=2;}
			},
			2: {
				"cost": 50,
				"stat": "perc",
				"end": 17,
				yay: function(){perc+=3;}
			}
		},
		4: {
			"name": "Training Arena",
			0: {
				"cost": 20,
				"stat": "macc",
				"end": 9,
				yay: function(){macc++;}
			},
			1: {
				"cost": 40,
				"stat": "macc",
				"end": 18,
				yay: function(){macc+=2;}
			},
			2: {
				"cost": 60,
				"stat": "macc",
				"end": 27,
				yay: function(){macc+=3;}
			}
		},
		5: {
			"name": "Target Practice",
			0: {
				"cost": 20,
				"stat": "racc",
				"end": 9,
				yay: function(){racc++;}
			},
			1: {
				"cost": 40,
				"stat": "racc",
				"end": 18,
				yay: function(){racc+=2;}
			},
			2: {
				"cost": 60,
				"stat": "racc",
				"end": 27,
				yay: function(){racc+=3;}
			}
		},
		6: {
			"name": "Dance Course",
			0: {
				"cost": 20,
				"stat": "dodge",
				"end": 9,
				yay: function(){dodge++;}
			},
			1: {
				"cost": 40,
				"stat": "dodge",
				"end": 18,
				yay: function(){dodge+=2;}
			},
			2: {
				"cost": 60,
				"stat": "dodge",
				"end": 27,
				yay: function(){dodge+=3;}
			}
		},
		7: {
			"name": "Stealth Course",
			0: {
				"cost": 25,
				"stat": "stealth",
				"end": 9,
				yay: function(){stealth++;}
			},
			1: {
				"cost": 50,
				"stat": "stealth",
				"end": 18,
				yay: function(){stealth+=2;}
			},
			2: {
				"cost": 75,
				"stat": "stealth",
				"end": 27,
				yay: function(){stealth+=3;}
			}
		},
		8: {
			"name": "Debating Sosciety",
			0: {
				"cost": 20,
				"stat": "dip",
				"end": 9,
				yay: function(){dip++;}
			},
			1: {
				"cost": 40,
				"stat": "dip",
				"end": 18,
				yay: function(){dip+=2;}
			},
			2: {
				"cost": 60,
				"stat": "dip",
				"end": 27,
				yay: function(){dip+=3;}
			}
		},
		9: {
			"name": "Leadership Course",
			0: {
				"cost": 30,
				"stat": "lead",
				"end": 9,
				yay: function(){lead++;}
			},
			1: {
				"cost": 60,
				"stat": "lead",
				"end": 18,
				yay: function(){lead+=2;}
			},
			2: {
				"cost": 90,
				"stat": "lead",
				"end": 27,
				yay: function(){lead+=3;}
			}
		},
	}
	var perks = {
		0: {
			"name": "Ambidexterous",
			"cost": 10,
			"check1": "str",
			"pass1": 5,
			"check2": "agi",
			"pass2": 5,
			"req": 99,
			"note": "Can wield dagger/sword/staff in right hand and pistol in left hand",
			yay: function(){dualpistol1 = 1;}
		},
		1: {
			"name": "Dual Mastery",
			"cost": 50,
			"check1": "str",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 0,
			"note": "Can wield spear/hammer in right hand and pistol in left hand",
			yay: function(){dualpistol2 = 1;}
		},
		2: {
			"name": "Walk and Fire",
			"cost": 20,
			"check1": "freepass",
			"pass1": 0,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "",
			yay: function(){}
		},
		3: {
			"name": "Nimble Hands",
			"cost": 40,
			"check1": "agi",
			"pass1": 5,
			"check2": "freepass",
			"pass2": 1,
			"req": 2,
			"note": "Reload takes 0.5 turns",
			yay: function(){}
		},
		4: {
			"name": "Double Tap",
			"cost": 70,
			"check1": "mark",
			"pass1": 10,
			"check2": "agi",
			"pass2": 10,
			"req": 3,
			"note": "Fire twice per turn",
			yay: function(){}
		},
		5: {
			"name": "Expert Marksman",
			"cost": 150,
			"check1": "mark",
			"pass1": 15,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "Incapable of shooting friendly targets",
			yay: function(){}
		},
		6: {
			"name": "Ease of Access",
			"cost": 50,
			"check1": "agi",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 3,
			"note": "Remove an item from backack takes 0.5 turns",
			yay: function(){}
		},
		7: {
			"name": "Jetpack Training",
			"cost": 50,
			"check1": "agi",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "Can wear Jetpacks",
			yay: function(){canjet = 1;}
		},
		8: {
			"name": "Speed Burst",
			"cost": 20,
			"check1": "con",
			"pass1": 5,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "Greater movement range",
			yay: function(){movement+=5;}
		},
		9: {
			"name": "Speedster",
			"cost": 50,
			"check1": "con",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 8,
			"note": "Greater movement range",
			yay: function(){movement+=5;}
		},
		10: {
			"name": "Speed Demon",
			"cost": 80,
			"check1": "con",
			"pass1": 15,
			"check2": "freepass",
			"pass2": 1,
			"req": 9,
			"note": "Greater movement range",
			yay: function(){movement+=5;}
		},
		11: {
			"name": "Inhuman Speed",
			"cost": 130,
			"check1": "con",
			"pass1": 20,
			"check2": "freepass",
			"pass2": 1,
			"req": 10,
			"note": "Greater movement range",
			yay: function(){movement+=5;}
		},
		12: {
			"name": "Fast Reflexes",
			"cost": 30,
			"check1": "agi",
			"pass1": 5,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "Greater agility",
			yay: function(){agi+=2;dodge+=2;macc+=2;stealth+=2;}
		},
		13: {
			"name": "Inhuman Reflexes",
			"cost": 70,
			"check1": "agi",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 12,
			"note": "Greater agility",
			yay: function(){agi+=2;dodge+=2;macc+=2;stealth+=2;}
		},
		14: {
			"name": "Bullet Time",
			"cost": 70,
			"check1": "agi",
			"pass1": 15,
			"check2": "freepass",
			"pass2": 1,
			"req": 13,
			"note": "Pass 15+enemy ranged accuracy with 50% dodge bonus to dodge bullet",
			yay: function(){}
		},
		15: {
			"name": "Warp Fury",
			"cost": 30,
			"check1": "intel",
			"pass1": 5,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "Intelligence boost for fire spells",
			yay: function(){$('#elementalboost').replaceWith('<b id = "elementalboost">2</b>');$('#elementalperk').show();$('#elementalschool').replaceWith('<b id = "elementalschool">Pyromancy</b>');}
		},
		16: {
			"name": "Flames of Hell",
			"cost": 60,
			"check1": "intel",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 15,
			"note": "Intelligence boost for fire spells",
			yay: function(){$('#elementalboost').replaceWith('<b id = "elementalboost">4</b>');}
		},
		17: {
			"name": "Infernal Blaze",
			"cost": 90,
			"check1": "intel",
			"pass1": 15,
			"check2": "freepass",
			"pass2": 1,
			"req": 16,
			"note": "Intelligence boost for fire spells",
			yay: function(){$('#elementalboost').replaceWith('<b id = "elementalboost">6</b>');}
		},
		18: {
			"name": "Chilling Presence",
			"cost": 30,
			"check1": "intel",
			"pass1": 5,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "Intelligence boost for frost spells",
			yay: function(){$('#elementalboost').replaceWith('<b id = "elementalboost">2</b>');$('#elementalperk').show();$('#elementalschool').replaceWith('<b id = "elementalschool">Cryomancy</b>');}
		},
		19: {
			"name": "Icy Purgatory",
			"cost": 60,
			"check1": "intel",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 18,
			"note": "Intelligence boost for frost spells",
			yay: function(){$('#elementalboost').replaceWith('<b id = "elementalboost">4</b>');}
		},
		20: {
			"name": "Frozen End Domain",
			"cost": 90,
			"check1": "intel",
			"pass1": 15,
			"check2": "freepass",
			"pass2": 1,
			"req": 19,
			"note": "Intelligence boost for frost spells",
			yay: function(){$('#elementalboost').replaceWith('<b id = "elementalboost">6</b>');}
		},
		21: {
			"name": "Sparkling Personality",
			"cost": 30,
			"check1": "intel",
			"pass1": 5,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "Intelligence boost for lightning spells",
			yay: function(){$('#elementalboost').replaceWith('<b id = "elementalboost">2</b>');$('#elementalperk').show();$('#elementalschool').replaceWith('<b id = "elementalschool">Fulmination</b>');}
		},
		22: {
			"name": "Thunderous Gaze",
			"cost": 60,
			"check1": "intel",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 21,
			"note": "Intelligence boost for lightning spells",
			yay: function(){$('#elementalboost').replaceWith('<b id = "elementalboost">4</b>');}
		},
		23: {
			"name": "Heaven's Wrath",
			"cost": 90,
			"check1": "intel",
			"pass1": 15,
			"check2": "freepass",
			"pass2": 1,
			"req": 22,
			"note": "Intelligence boost for lightning spells",
			yay: function(){$('#elementalboost').replaceWith('<b id = "elementalboost">6</b>');}
		},
		24: {
			"name": "Mental Discipline",
			"cost": 30,
			"check1": "intel",
			"pass1": 5,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "Intelligence boost for mental spells",
			yay: function(){$('#mentalboost').replaceWith('<b id = "mentalboost">2</b>');$('#mentalperk').show();$('#mentalschool').replaceWith('<b id = "elementalschool">' + schoolNames[schoolM] + '</b>');}
		},
		25: {
			"name": "Mind Games",
			"cost": 60,
			"check1": "intel",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 24,
			"note": "Intelligence boost for mental spells",
			yay: function(){$('#mentalboost').replaceWith('<b id = "mentalboost">4</b>');}
		},
		26: {
			"name": "Iron Will",
			"cost": 90,
			"check1": "intel",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 25,
			"note": "Intelligence boost for mental spells",
			yay: function(){$('#mentalboost').replaceWith('<b id = "mentalboost">6</b>');}
		},
		27: {//Requires 26 and 17/20/23
			"name": "Master of the Warp",
			"cost": 150,
			"check1": "freepass",
			"pass1": 1,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "Intelligence boost",
			yay: function(){intel+=3;spellNum+=3;perc+=3;dip+=1.5;}
		},
		28: {//OR
			"name": "Elementary Resistance",
			"cost": 50,
			"check1": "con",
			"pass1": 5,
			"check2": "wres",
			"pass2": 5,
			"req": 99,
			"note": "Elemental resistance boost",
			yay: function(){fire+=2;frost+=2;shock+=2;}
		},
		29: {//OR
			"name": "Friend of the Elements",
			"cost": 100,
			"check1": "con",
			"pass1": 10,
			"check2": "wres",
			"pass2": 10,
			"req": 28,
			"note": "Elemental resistance boost",
			yay: function(){fire+=2;frost+=2;shock+=2;}
		},
		30: {//OR
			"name": "One with Nature",
			"cost": 150,
			"check1": "con",
			"pass1": 15,
			"check2": "wres",
			"pass2": 15,
			"req": 99,
			"note": "Elemental resistance boost",
			yay: function(){fire+=2;frost+=2;shock+=2;}
		},
		31: {
			"name": "Long Range Combatant",
			"cost": 20,
			"check1": "mark",
			"pass1": 5,
			"check2": "freepass",
			"pass2": 1,
			"req": 99,
			"note": "Better long range combat abilities",
			yay: function(){$('#rangedperk').show();$('#rangedec').replaceWith('<b id = "rangedec">10</b>');}
		},
		32: {
			"name": "Long Ranged Specialist",
			"cost": 50,
			"check1": "mark",
			"pass1": 10,
			"check2": "freepass",
			"pass2": 1,
			"req": 31,
			"note": "Better long range combat abilities",
			yay: function(){$('#rangedec').replaceWith('<b id = "rangedec">15</b>');}
		},
		33: {
			"name": "Sniper Disciplne",
			"cost": 80,
			"check1": "mark",
			"pass1": 15,
			"check2": "freepass",
			"pass2": 1,
			"req": 32,
			"note": "Better long range combat abilities",
			yay: function(){$('#rangedec').replaceWith('<b id = "rangedec">20</b>');}
		},
		34: {
			"name": "Distance Mastery",
			"cost": 200,
			"check1": "mark",
			"pass1": 20,
			"check2": "freepass",
			"pass2": 1,
			"req": 33,
			"note": "Better long range combat abilities",
			yay: function(){$('#rangedec').replaceWith('<b id = "rangedec">30</b>');}
		},
	}
	var specials = {
		0: {
			"name": "Phoenix Lord Armour",
			"type": "arm51"
		},
		1: {
			"name": "Sword of Asur",
			"type": "clo160"
		},
		2: {
			"name": "Firepike",
			"type": "ran176"
		},
		3: {
			"name": "Spear of Starlight",
			"type": "ran177"
		},
		4: {
			"name": "Maugetar",
			"type": "ran178"
		},
		5: {
			"name": "Zhai Morenn",
			"type": "clo161"
		},
		6: {
			"name": "Fist of Dorn",
			"type": "clo162"
		},
	}
	//Personal arrays
	var possDamage = ["1", "1d2", "1d4", "1d6", "1d8", "2d4", "2d6", "2d8", "3d4", "3d6", "3d8", "2d6+8", "2d6+10", "2d6+12", "2d6+14", "2d6+15", "2d6+16", "2d6+18", "2d8+20", "2d8+10", "Varies", "3d6+15"];
	//				   0    1      2       3      4      5       6     7      8      9      10      11        12       13         14        15        16        17       18
	//  19		20			21
	var possCrit = ["20", "19-20", "18-20", "17-20"];
	var ammoTypes = ["Battery", "Bolt", "Shuriken", "Needle", "Fuel", "Filament", "Grenade", "Rocket", "Dagger"];
	//					0			1		2			3		4			5			6		7			8
	//Update functions
	var updating = function(){//Stats and Skills
		//writing stats
		$('#strength').replaceWith('<td id = "strength">' + str + '</td>');
		$('#constitution').replaceWith('<td id = "constitution">' + con + '</td>');
		$('#marksman').replaceWith('<td id = "marksman">' + mark + '</td>');
		$('#agility').replaceWith('<td id = "agility">' + agi + '</td>');
		$('#intelligence').replaceWith('<td id = "intelligence">' + intel + '</td>');
		$('#charisma').replaceWith('<td id = "charisma">' + chari + '</td>');
		$('#warpres').replaceWith('<td id = "warpres">' + wres + '</td>');
		$('#movement').replaceWith('<td id = "movement">' + movement + '</td>');
		$('#maxhp').replaceWith('<b id = "maxhp">' + maxHP + '</b>');
		//writing skills
		bonusDam = Math.max(Math.ceil(str), 0);
		throwrange = Math.max(10+2*str, 10);
		$('#bonDam').replaceWith('<b id = "bonDam">' + bonusDam + ' (Melee Bonus)</b>');
		$('#effectiveRange').replaceWith('<b id = "effectiveRange">' + effectiveRange + '</b>');
		$('#effrangeleft').replaceWith('<b id = "effrangeleft">' + effrangeleft + '</b>');
		$('#throw').replaceWith('<b id = "throw">' + throwrange + '</b>');
		$('#corruption').replaceWith('<td id = "corruption">' + corr + '</td>');
		$('#xenos').replaceWith('<td id = "xenos">Xenos: ' + xeno + '</td>');
		$('#warp').replaceWith('<td id = "warp">Warp: ' + warp + '</td>');
		$('#history').replaceWith('<td id = "history">History: ' + hist + '</td>');
		$('#geography').replaceWith('<td id = "geography">Geography: ' + geo + '</td>');
		$('#perception').replaceWith('<td id = "perception">' + perc + '</td>');
		$('#macc').replaceWith('<td id = "macc">' + Math.ceil(macc) + '</td>');
		$('#racc').replaceWith('<td id = "racc">' + racc + '</td>');
		$('#dodge').replaceWith('<td id = "dodge">' + dodge + '</td>');
		$('#fire').replaceWith('<td id = "fire">Fire: ' + Math.ceil(fire) + '</td>');
		$('#frost').replaceWith('<td id = "frost">Frost: ' + Math.ceil(frost) + '</td>');
		$('#shock').replaceWith('<td id = "shock">Lightning: ' + Math.ceil(shock) + '</td>');
		$('#stealth').replaceWith('<td id = "stealth">' + stealth + '</td>');
		$('#diplomacy').replaceWith('<td id = "diplomacy">' + Math.ceil(dip) + '</td>');
		$('#leadership').replaceWith('<td id = "leadership">' + lead + '</td>');
		$('#spellAvail').replaceWith('<b id = "spellAvail">' + spellNum + '</b>');
	}

	var updateChar = function(type){//Updating the chosen character section
		if(type == "arm"){
			clothes[wearing].yay();
			movement += clothes[wearing]["speed"];
			updating();
			armourRate = clothes[wearing]["ab"];
			$('#armourRate').replaceWith('<b id = "armourRate">' + armourRate + '</b>');
			$('#clothes').replaceWith('<b id = "clothes">' + clothes[wearing]["name"] + ' (' + clothes[wearing]["rar"] + ')</b>');
			addArmourMods();
			$('#armUnequip').show();$('#upgUnequip').show();
		}
		else if(type == "clo1"){//equipping one handed close weapon
			closeCombat[rightHand].yay();
			$('#rightHand').replaceWith('<b id = "rightHand">' + closeCombat[rightHand]["name"] + ' (' + closeCombat[rightHand]["rar"] + ')</b>');
			$('#weapnote').replaceWith('<b id = "weapnote">' + closeCombat[rightHand]["note"] + '</b>');
			$('#crit').replaceWith('<b id = "crit">' + possCrit[closeCombat[rightHand]["crit"]] + '</b>');
			$('#damage').replaceWith('<b id = "damage">' + possDamage[closeCombat[rightHand]["damage"]] + '</b>');
			checkCloseType();
			updating();
			$('#rightUnequip').show();
		}
		else if(type == "clo2"){//equipping one handed close weapon
			closeCombat[rightHand].yay();
			$('#rightHand').replaceWith('<b id = "rightHand">' + closeCombat[rightHand]["name"] + ' (' + closeCombat[rightHand]["rar"] + ')</b>');
			$('#leftHand').replaceWith('<b id = "leftHand">' + closeCombat[rightHand]["name"] + ' (Two Handed Hold)</b>');
			$('#weapnote').replaceWith('<b id = "weapnote">' + closeCombat[rightHand]["note"] + '</b>');
			$('#crit').replaceWith('<b id = "crit">' + possCrit[closeCombat[rightHand]["crit"]] + '</b>');
			$('#damage').replaceWith('<b id = "damage">' + possDamage[closeCombat[rightHand]["damage"]] + '</b>');
			checkCloseType();
			isTwohanded = 1;
			updating();
			$('#rightUnequip').show();
		}
		else if(type == "ran1"){//equipping dagger/pist/hevy to right
			rangedCombat[rightHand].yay();
			burst = toburst;
			fires = tofire;
			if(rangedCombat[rightHand]["range"] != 69){
				effectiveRange += rangedCombat[rightHand]["range"];
			}
			else if(rangedCombat[rightHand]["range"] == 69){
				$('#maxBullet').replaceWith('<b id = "maxBullet">' + maxammo + '</b>');
				currentammo = maxammo;
				$('#currentBullet').replaceWith('<b id = "currentBullet">' + maxammo + '</b>');
			}
			if(rightHand == 100 || rightHand == 110){
				maxammo = toburst;
				$('#maxBullet').replaceWith('<b id = "maxBullet">' + maxammo + '</b>');
			}
			$('#rightHand').replaceWith('<b id = "rightHand">' + rangedCombat[rightHand]["name"] + ' (' + rangedCombat[rightHand]["rar"] + ')</b>');
			$('#weapnote').replaceWith('<b id = "weapnote">' + rangedCombat[rightHand]["note"] + '</b>');
			$('#crit').replaceWith('<b id = "crit">' + possCrit[rangedCombat[rightHand]["crit"]] + '</b>');
			$('#damage').replaceWith('<b id = "damage">' + possDamage[rangedCombat[rightHand]["damage"]] + '</b>');
			checkRangedRight();
			$('#weaponUpg').show();
			if(venom == 1){
				$('#venom').show();
			}
			if(burst != 0){
				$('#fireBurst').show();
			}
			$('#fireNormal').show();
			if(rangedCombat[rightHand]["type"] == 5){
				$('.regran').show();
			}
			updating();
			$('#rightUnequip').show();
			$('#wuUnequip').show();
		}
		else if(type == "left"){//equipping pist/hevy to left
			rangedCombat[leftHand].yay();
			if(leftHand == 100 || leftHand == 110){
				$('#maxBulletLeft').replaceWith('<b id = "maxBulletLeft">' + toburst + '</b>');
				maxleft = toburst;
			}
			firesLeft = tofire;
			burstLeft = toburst;
			effrangeleft += rangedCombat[leftHand]["range"];
			$('#leftHand').replaceWith('<b id = "leftHand">' + rangedCombat[leftHand]["name"] + ' (' + rangedCombat[leftHand]["rar"] + ')</b>');
			$('#leftnote').replaceWith('<b id = "leftnote">' + rangedCombat[leftHand]["note"] + '</b>');
			$('#critleft').replaceWith('<b id = "critleft">' + possCrit[rangedCombat[leftHand]["crit"]] + '</b>');
			$('#damageleft').replaceWith('<b id = "damageleft">' + possDamage[rangedCombat[leftHand]["damage"]] + '</b>');
			checkRangedLeft();
			$('#weaponUpgLeft').show();
			$('#fireleft').show();
			if(burstLeft != 0){
				$('#fireleftBurst').show();
			}
			updating();
			$('#leftUnequip').show();
		}
		else if(type == "ran2"){//equipping two handed
			rangedCombat[rightHand].yay();
			burst = toburst;
			fires = tofire;
			if(rightHand == 100 || rightHand == 110){
				maxammo = toburst;
				$('#maxBullet').replaceWith('<b id = "maxBullet">' + maxammo + '</b>');
			}
			effectiveRange += rangedCombat[rightHand]["range"];
			$('#rightHand').replaceWith('<b id = "rightHand">' + rangedCombat[rightHand]["name"] + ' (' + rangedCombat[rightHand]["rar"] + ')</b>');
			$('#leftHand').replaceWith('<b id = "leftHand">' + rangedCombat[rightHand]["name"] + ' (Two Handed Hold)</b>');
			$('#weapnote').replaceWith('<b id = "weapnote">' + rangedCombat[rightHand]["note"] + '</b>');
			$('#crit').replaceWith('<b id = "crit">' + possCrit[rangedCombat[rightHand]["crit"]] + '</b>');
			$('#damage').replaceWith('<b id = "damage">' + possDamage[rangedCombat[rightHand]["damage"]] + '</b>');
			checkRangedRight();
			$('#weaponUpg').show();
			if(rangedCombat[rightHand]["type"] != 7){
				$('.regran').show();
			}
			if(venom == 1){
				$('#venom').show();
			}
			$('#fireNormal').show();
			if(burst != 0){
				$('#fireBurst').show();
			}
			isTwohanded = 1;
			updating();
			$('#rightUnequip').show();
			$('#wuUnequip').show();
		}
	}

	var strip = function(type){//Removing item from character
		if(type == "arm"){
			//Special Armour Bonuses
			clothes[wearing].nay();
			movement -= clothes[wearing]["speed"];
			updating();
			armourRate = 0;
			$('#armourRate').replaceWith('<b id = "armourRate">0</b>');
			$('#clothes').replaceWith('<b id = "clothes">None</b>');
			wearing = 50;
			removeArmourMods();
			$('#armUnequip').hide();
			$('#upgUnequip').hide();
		}
		else if(type == "right"){
			if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){//removing close combat weapon
				closeCombat[rightHand].nay();
			}
			else{//removing ranged weapon
				rangedCombat[rightHand].nay();
				if(rangedCombat[rightHand]["range"] != 69){
					effectiveRange -= rangedCombat[rightHand]["range"];
				}
				fires = 0;
				burst = 0;
				$('#fireBurst').hide();
				$('#fireNormal').hide();
				removeweaponmods();
			}
			$('#rightUnequip').hide();
			$('#wuUnequip').hide();
			$('#rightHand').replaceWith('<b id = "rightHand">None</b>');
			$('#weapnote').replaceWith('<b id = "weapnote">None</b>');
			$('#ammoEffect').replaceWith('<b id = "ammoEffect">None</b>');
			if(isTwohanded == 1){
				$('#leftHand').replaceWith('<b id = "leftHand">None</b>');
				isTwohanded = 0;
			}
			rightHand = 200;
			if($('#closeno').is(':visible') == true){
				$('#closeno').hide();
				str+=5;macc += 2.5;
				agi+=5;dodge+=5;macc+=5;stealth+=5;
			}
			if($('#closered').is(':visible') == true){
				$('#closered').hide();
				str+=2;macc++;
				agi+=2;dodge+=2;macc+=2;stealth+=2;
			}
			if($('#rangedno').is(':visible') == true){
				$('#rangedno').hide();
				mark+=5;racc+=5;
				effectiveRange+=10;
			}
			if($('#rangedred').is(':visible') == true){
				$('#rangedred').hide();
				mark+=2;racc+=2;
			}
			updating();
		}
		else if(type == "left"){//removing pistol or heavy
			rangedCombat[leftHand].nay();
			firesLeft = 0;
			burstLeft = 0;
			maxleft = 0;
			currentleft = 0;
			effrangeleft -= rangedCombat[leftHand]["range"];
			$('#leftHand').replaceWith('<b id = "leftHand">None</b>');
			$('#currentBulletLeft').replaceWith('<b id = "currentBulletLeft">0</b>');
			$('#maxBulletLeft').replaceWith('<b id = "maxBulletLeft">0</b>');
			$('#ammoEffectLeft').replaceWith('<b id = "ammoEffectLeft">None</b>');
			$('#damageleft').replaceWith('<b id = "damageleft">0</b>');
			$('#critleft').replaceWith('<b id = "critleft">20</b>');
			$('#leftnote').replaceWith('<b id = "leftnote">None</b>');
			$('#weaponUpgLeft').hide();
			$('#fireleft').hide();
			$('#fireleftBurst').hide();
			$('#leftUnequip').hide();
			leftHand = 200;
			if($('#rangedno').is(':visible') == true){
				$('#rangedno').hide();
				mark+=5;racc+=5;
				effectiveRange+=10;
			}
			if($('#rangedred').is(':visible') == true){
				$('#rangedred').hide();
				mark+=2;racc+=2;
			}
			updating();
		}
		else if(type == "jet"){
			var a = armourMods[7];
			var b = a%10;
			a = (a-b)/10;
			clothesMods[a][b].nay();
			armourMods[7] = 0;
			$('#inventory').append('<option value = "upg' + a + b + '">' + clothesMods[a]["name"] + ' (' + clothesMods[a][b]["rar"] + ')</option>');
		}
		else if(type == "upg"){
			var i = 0;
			for (var j = 4; j < 7; j++){if(armourMods[j] != 0){i = j;}}
			var a = armourMods[i];
			var b = a%10;
			a = (a-b)/10;
			clothesMods[a][b].nay();
			armourMods[i] = 0;
			$('#inventory').append('<option value = "upg' + a + b + '">' + clothesMods[a]["name"] + ' (' + clothesMods[a][b]["rar"] + ')</option>');
			$('#mk' + (i-3)).replaceWith('<b id = "mk' + (i-3) + '">None</b>');
		}
		else if(type == "upg1"){
			var a = armourMods[6][0];
			var b = a%10;
			a = (a-b)/10;
			clothesMods[a][b].nay();
			armourMods[6][0] = 0;
			$('#inventory').append('<option value = "upg' + a + b + '">' + clothesMods[a]["name"] + ' (' + clothesMods[a][b]["rar"] + ')</option>');
			if(armourMods[6][1] != 0){
				$('#mk3').replaceWith('<b id = "mk3">None and ' + clothesMods[Math.floor(armourMods[6][1]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][1]/10)][armourMods[6][1]%10]["rar"] + ')</b>');
			}
			else{
				$('#mk3').replaceWith('<b id = "mk3">None and None</b>');
			}
		}
		else if(type == "upg2"){
			var a = armourMods[6][1];
			var b = a%10;
			a = (a-b)/10;
			clothesMods[a][b].nay();
			armourMods[6][1] = 0;
			$('#inventory').append('<option value = "upg' + a + b + '">' + clothesMods[a]["name"] + ' (' + clothesMods[a][b]["rar"] + ')</option>');
			if(armourMods[6][0] != 0){
				$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') and None</b>');
			}
			else{
				$('#mk3').replaceWith('<b id = "mk3">None and None</b>');
			}
		}
		else if(type >=0 && type <= 3){
			var tounequip = "venomUsed";
			if(type == 0){tounequip = "sight";}
			else if(type == 1){tounequip = "supp";}
			else if(type == 2){tounequip = "accessory";}
			rangedMods[weaponMods[type]].nay();
			$('#inventory').append('<option value = "rmo' + weaponMods[type] + '">' + rangedMods[weaponMods[type]]["name"] + '</option>');
			$('#' + tounequip).replaceWith('<b id = "' + tounequip + '">None</b>');
			weaponMods[type] = 0;
			updating();
		}
		else if(type == "shield"){
			others[leftHand].nay();
			$('#leftHand').replaceWith('<b id = "leftHand">None</b>');
			leftHand = 200;
			updating();
			$('#leftUnequip').hide();
		}
		else if(type == "head"){
			others[helmet].nay();
			$('#helmet').replaceWith('<b id = "helmet">None</b>');
			helmet = 10;
			updating();
			$('#headUnequip').hide();
		}
		else if(type == "comm"){
			others[commpiece].nay();
			$('#comm').replaceWith('<b id = "comm">None</b>');
			commpiece = 0;
			updating();
			$('#commmUnequip').hide();
		}
		else if(type == "bag"){
			for (var i = 0; i < canback[0]; i++){//removing ammo
				if(inback[0][i] != 0){
					gold += ammo[inback[0][i]]["cost"];
				}
			}
			for (var i = 0; i < canback[1]; i++){//removing one
				if(inback[1][i] != 200 && inback[1][i] < 46){
					gold += closeCombat[inback[1][i]]["cost"];
				}
				else if(inback[1][i] != 200){
					gold += rangedCombat[inback[1][i]]["cost"];
				}
			}
			for (var i = 0; i < canback[2]; i++){//removing two
				if(inback[2][i] != 200 && inback[2][i] < 46){
					gold += closeCombat[inback[2][i]]["cost"];
				}
				else if(inback[2][i] != 200){
					gold += rangedCombat[inback[2][i]]["cost"];
				}
			}
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
			others[backpack].nay();
			updating();
			$('#bagName').replaceWith('<b id = "bagName">None</b>');
			$('#ammoBag').replaceWith('<b id = "ammoBag">0</b>');
			$('#oneBag').replaceWith('<b id = "oneBag">0</b>');
			$('#twoBag').replaceWith('<b id = "twoBag">0</b>');
			$('#backpack').empty();
			backpack = 0;
		}
		else if(type == "har"){
			for (var i = 0; i < canhar[0]; i++){//removing ammo
				if(inhar[0][i] != 0){
					gold += ammo[inhar[0][i]]["cost"];
				}
			}
			for (var i = 0; i < canhar[1]; i++){//removing one
				if(inhar[1][i] != 200 && inhar[1][i] < 46){
					gold += closeCombat[inhar[1][i]]["cost"];
				}
				else if(inhar[1][i] != 200){
					gold += rangedCombat[inhar[1][i]]["cost"];
				}
			}
			for (var i = 0; i < canhar[2]; i++){//removing two
				if(inhar[2][i] != 200 && inhar[2][i] < 46){
					gold += closeCombat[inhar[2][i]]["cost"];
				}
				else if(inhar[2][i] != 200){
					gold += rangedCombat[inhar[2][i]]["cost"];
				}
			}
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
			others[harness].nay();
			updating();
			$('#harnessName').replaceWith('<b id = "harnessName">None</b>');
			$('#ammoHar').replaceWith('<b id = "ammoHar">0</b>');
			$('#oneHar').replaceWith('<b id = "oneHar">0</b>');
			$('#twoHar').replaceWith('<b id = "twoHar">0</b>');
			$('#harness').empty();
			harness = 0;
		}
		else if(type == "divine"){
			others[divineHeld].nay();
			$('#divineHeld').replaceWith('<b id = "divineHeld">None</b>');
			divineHeld = 0;
			updating();
		}
	}

	var removeArmourMods = function(){//Removing all armour mods
		if(aMA[0] >= 1){$('#cro').hide();}
		if(aMA[1] >= 1){$('#uro').hide();}
		if(aMA[2] >= 1){$('#rro').hide();}
		if(aMA[3] == 1){$('#lro').hide();}
		else if(aMA[3] == 2){
			$('#lro').hide();
			$('#lr').replaceWith('<b id = "lr">None</b>');
		}
		if(aMA[4] >= 1){$('#mk1o').hide();}
		if(aMA[5] >= 1){$('#mk2o').hide();}
		if(aMA[6] == 1){$('#mk3o').hide();}
		else if(aMA[6] == 2){
			$('#mk3o').hide();
			$('#mk3').replaceWith('<b id = "mk3">None</b>');
		}
		sellArmourMods();
		armourMods = [0, 0, 0, [0], 0, 0, [0], 0];
	}

	var addArmourMods = function(){//Adding slots for mods
		var hasJet = $('.jetpacko').is(':visible');
		hasJet = Number(hasJet);
		aMA = [clothes[wearing]["cr"], clothes[wearing]["ur"], clothes[wearing]["rr"], clothes[wearing]["lr"], clothes[wearing]["mk1"], clothes[wearing]["mk2"], clothes[wearing]["mk3"], hasJet];
		if(aMA[0] >= 1){$('#cro').show();}
		if(aMA[1] >= 1){$('#uro').show();}
		if(aMA[2] >= 1){$('#rro').show();}
		if(aMA[3] == 1){$('#lro').show();}
		else if(aMA[3] == 2){
			$('#lro').show();
			$('#lr').replaceWith('<b id = "lr">None and None</b>');
			armourMods[3] = [0, 0];
		}
		if(aMA[4] >= 1){$('#mk1o').show();}
		if(aMA[5] >= 1){$('#mk2o').show();}
		if(aMA[6] == 1){$('#mk3o').show();}
		else if(aMA[6] == 2){
			$('#mk3o').show();
			$('#mk3').replaceWith('<b id = "mk3">None and None</b>');
			armourMods[6] = [0, 0];
		}
	}

	var sellArmourMods = function(){//Selling all armour mods
		for(var i = 0; i < 8; i++){
			if(i == 3 && armourMods[3].length == 2){
				if(armourMods[3][0] != 0){
					gold += clothesMods[Math.floor(armourMods[i][0]/10)][armourMods[i][0]%10]["cost"];
					clothesMods[Math.floor(armourMods[i][0]/10)][armourMods[i][0]%10].nay();
				}
				if(armourMods[3][1] != 0){
					gold += clothesMods[Math.floor(armourMods[i][1]/10)][armourMods[i][1]%10]["cost"];
					clothesMods[Math.floor(armourMods[i][1]/10)][armourMods[i][1]%10].nay();
				}
			}
			else if(i == 6 && armourMods[6].length == 2){
				if(armourMods[6][0] != 0){
					gold += clothesMods[Math.floor(armourMods[i][0]/10)][armourMods[i][0]%10]["cost"];
					clothesMods[Math.floor(armourMods[i][0]/10)][armourMods[i][0]%10].nay();
				}
				if(armourMods[6][1] != 0){
					gold += clothesMods[Math.floor(armourMods[i][1]/10)][armourMods[i][1]%10]["cost"];
					clothesMods[Math.floor(armourMods[i][1]/10)][armourMods[i][1]%10].nay();
				}
			}
			else if(armourMods[i] != 0){
				gold += clothesMods[Math.floor(armourMods[i]/10)][armourMods[i]%10]["cost"];
				clothesMods[Math.floor(armourMods[i]/10)][armourMods[i]%10].nay();
			}
		}
		updating();
		armourMods = [0, 0, 0, [0], 0, 0, [0], 0];
		$('#cr').replaceWith('<b id = "cr">None</b>');
		$('#ur').replaceWith('<b id = "ur">None</b>');
		$('#rr').replaceWith('<b id = "rr">None</b>');
		$('#lr').replaceWith('<b id = "lr">None</b>');
		$('#mk1').replaceWith('<b id = "mk1">None</b>');
		$('#mk2').replaceWith('<b id = "mk2">None</b>');
		$('#mk3').replaceWith('<b id = "mk3">None</b>');
		$('#jetpack').replaceWith('<b id = "jetpack">None</b>');
		$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
	}

	var checkCloseType = function(){//Checking if player has proficiency in melee weapon
		var type = closeCombat[rightHand]["type"];
		var count = 0;
		for (var i = 0; i < activeProfs.length; i++){
			if(type == activeProfs[i]){count++;}
		}
		if(count !=1 ){
			$('#closeno').show();
			str-=5;macc -= 2.5;
			agi-=5;dodge-=5;macc-=5;stealth-=5;
		}
		count = 0;
		for (var i = 0; i < activeRed.length; i++){
			if(type == activeRed[i]){count++;}
		}
		if(count ==1 ){
			$('#closered').show();
			str-=2;macc--;
			agi-=2;dodge-=2;macc-=2;stealth-=2;
		}
	}

	var checkRangedRight = function(){//Checking if player has proficiency in right hand weapon
		var type = rangedCombat[rightHand]["type"];
		var count = 0;
		for (var i = 0; i < activeProfs.length; i++){
			if(type == activeProfs[i]){count++;}
		}
		if(count !=1 ){
			$('#rangedno').show();
			mark-=5;racc-=5;
			effectiveRange-=10;
		}
		count = 0;
		for (var i = 0; i < activeRed.length; i++){
			if(type == activeRed[i]){count++;}
		}
		if(count ==1 ){
			$('#rangedred').show();
			mark-=2;racc-=2;
		}
	}

	var checkRangedLeft = function(){//Checking if player has proficiency in left hand weapon
		var type = rangedCombat[leftHand]["type"];
		var count = 0;
		for (var i = 0; i < activeProfs.length; i++){
			if(type == activeProfs[i]){count++;}
		}
		if(count !=1 ){
			$('#rangedno').show();
			mark-=5;racc-=5;
			effectiveRange-=10;
		}
		count = 0;
		for (var i = 0; i < activeRed.length; i++){
			if(type == activeRed[i]){count++;}
		}
		if(count ==1 ){
			$('#rangedred').show();
			mark-=2;racc-=2;
		}
	}

	var removeweaponmods = function(){//removing weapon upgrades
		maxammo = 0;
		currentammo = 0;
		for(var i = 0; i < 4; i++){
			if(weaponMods[i] != 0){
				gold += rangedMods[weaponMods[i]]["cost"];
				rangedMods[weaponMods[i]].nay();
			}
		}
		$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		$('#sight').replaceWith('<b id = "sight">None</b>');
		$('#supp').replaceWith('<b id = "supp">None</b>');
		$('#accessory').replaceWith('<b id = "accessory">None</b>');
		$('#venomUsed').replaceWith('<b id = "venomUsed">None</b>');
		$('#maxBullet').replaceWith('<b id = "maxBullet">0</b>');
		$('#currentBullet').replaceWith('<b id = "currentBullet">0</b>');
		$('#fireNormal').hide();$('#fireBurst').hide();$('#venom').hide();$('.regran').hide();
		$('#weaponUpg').hide();
		weaponMods = [0, 0, 0, 0];
	}

	var psykerInit = function(){//Initialising psyker abilities
		schoolE = prompt("Choose an Elemental school - Pyromancy (1), Cryomancy (2) or Fulmination (3). Enter number below:");
		var i = 0;
		while (i==0){
			if (schoolE == 1){
				$('.fire').show();
				i = 1;
			}
			else if(schoolE == 2){
				$('.frost').show();
				i = 1;
			}
			else if(schoolE == 3){
				$('.shock').show();
				i = 1;
			}
			else{
				schoolE = prompt("Choose an Elemental school - Pyromancy (1), Cryomancy (2) or Fulmination (3). Enter number below:");
			}
		}
		schoolE--;
		i = 0;
		schoolM = prompt("Choose a Mental school - Telekinesis (1), Telepathy (2) or Divination (3). Enter number below:");
		while (i==0){
			if (schoolM == 1){
				$('.teke').show();
				i = 1;
			}
			else if(schoolM == 2){
				$('.tele').show();
				i = 1;
			}
			else if(schoolM == 3){
				$('.divi').show();
				i = 1;
				$('.divineItem').show();
			}
			else{
				schoolM = prompt("Choose a Mental school - Telekinesis (1), Telepathy (2) or Divination (3). Enter number below:");
			}
		}
		schoolM++;schoolM++;
		$('#schoolE').replaceWith('<b id = "schoolE">' + schoolNames[schoolE] + '</b>');
		$('#schoolM').replaceWith('<b id = "schoolM">' + schoolNames[schoolM] + '</b>');
	}

	var loadranged = function(hand, id, typ){//loading weapon
		var toload = ammo[id]["ammo"][typ];
		if(hand == 1){//right hand
			if((rightHand == 100 || rightHand == 110) && currentammo < maxammo){
				currentammo++;
			}
			else if(rightHand == 100 || rightHand == 110){}
			else{
				maxammo = toload;
				currentammo = toload;
			}
			$('#currentBullet').replaceWith('<b id = "currentBullet">' + currentammo + '</b>');
			$('#maxBullet').replaceWith('<b id = "maxBullet">' + maxammo + '</b>');
			$('#ammoEffect').replaceWith('<b id = "ammoEffect">' + ammo[id]["note"] + '</b>');
		}
		else{//left hand
			if((leftHand == 100 || leftHand == 110) && currentleft < maxleft){
				currentleft++;
			}
			else if(leftHand == 100 || leftHand == 110){}
			else{
				maxleft = toload;
				currentleft = toload;
			}
			$('#currentBulletLeft').replaceWith('<b id = "currentBulletLeft">' + currentleft + '</b>');
			$('#maxBulletLeft').replaceWith('<b id = "maxBulletLeft">' + maxleft + '</b>');
			$('#ammoEffectLeft').replaceWith('<b id = "ammoEffectLeft">' + ammo[id]["note"] + '</b>');
		}
	}

	//Getting basic info
	$('#nameSelect').click(function(){
		name = $('#name').val();
		$('#1').hide();
		$('#2').show();
	})
	$('#raceSelect').click(function(){
		var temp = "";
		$('#race option:selected').each(function(){
			temp += $(this).val();
		})
		if(temp == "sm"){race = 0; $('#2').hide(); $('#3').show();$('option.female').prop('disabled', true);}
		else if(temp == "as"){race = 1; $('#4').show();$('option.male').prop('disabled', true);}
		else if(temp == "ig"){race = 2;$('#4').show();}
		else if(temp == "t"){race = 3; $('#4').show();effectiveRange = 20;effrangeleft = 20;}
		else if(temp == "e"){race = 4; $('#4').show();$('.psykerPath').show();psykerInit();spellNum++;}
		raceName = racenames[race];
		$('#2').hide();
	})
	$('#chapterSelect').click(function(){
		var temp = "";
		$('#chapter option:selected').each(function(){
			temp += $(this).val();
		})
		if(temp == "ult"){chapter = 0;}
		else if(temp == "wolf"){chapter = 1;}
		else if(temp == "scar"){chapter = 2;}
		else if(temp == "sal"){chapter = 3;}
		else if(temp == "ang"){chapter = 4;}
		chapterName = chapternames[chapter];
		$('#3').hide(); $('#4').show();
	})
	$('#genSelect').click(function(){
		var temp = "";
		$('#sex option:selected').each(function(){
			temp += $(this).val();
		})
		if (temp == "m" && race == 1){alert("Male Sisters of Battle are disallowed"); return;}
		else if (temp == "f" && race == 0){alert("Female Space Marines are disallowed"); return;}
		if(temp == "m"){sex = 0; sexName = "male"; $('#4').hide(); $('.out').show();}
		else if(temp == "f"){sex = 1; sexName = "female"; $('#4').hide(); $('.out').show();}
		if (race == 3){
			$('#namechar').replaceWith('<b id = "namechar">Shas&#39;La ' + name + '</b>');
		}
		else{
			$('#namechar').replaceWith('<b id = "namechar">' + name + '</b>');
		}
		if(chapter != 5){
			$('#modifier').replaceWith('<b id = "modifier"> of the ' + chapterName + '.</b>');
		}
		$('#genchar').replaceWith('<b id = "genchar">' + sexName + '</b>');
		$('#racechar').replaceWith('<b id = "racechar">' + raceName + '</b>');

		//Setting stats
		str = stats[race][0];
		con = stats[race][1];
		mark = stats[race][2];
		agi = stats[race][3];
		intel = stats[race][4];
		chari = stats[race][5];
		wres = stats[race][6];
		movement = stats[race][7];
		rb = rbset[race];
		if (race == 0){
			switch (chapter){
				case 0:
					wres++;intel++;spellNum++;break;
				case 1:
					str++;frost += 2;break;
				case 2:
					agi++;shock+=2;break;
				case 3:
					con++;fire+=2;break;
				case 4:
					mark++;intel++;spellNum++;
			}
		}
		//setting skills
		perc = intel;
		macc = agi+str*0.5;
		racc = mark;
		dodge = agi;
		stealth = agi;
		dip = chari+intel*0.5;
		lead = chari;
		fire += wres+con*0.5;
		frost += wres+con*0.5;
		shock += wres+con*0.5;
		maxHP = con*2 + 6;
		currentRank = initR[race];
		spellNum += intel;
		$('#racebon').replaceWith('<td id = "racebon" colspan = "2">' + rb + '</td>');
		updating();
		$('#rank').replaceWith('<b id = "rank">' + initR[race] + '</b>');
		switch(race){
			case 0:
				$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[5] + ', ' + profs[6] + '</i>');activeProfs = [0, 1, 5, 6];break;
			case 1:
				$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[5] + ', ' + profs[6] + '</i>');activeProfs = [0, 1, 5, 6];break;
			case 2:
				$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + ', ' + profs[6] + '</i>');activeProfs = [0, 5, 6];break;
			case 3:
				$('#prof').replaceWith('<i id = "prof">' + profs[5] + ', ' + profs[6] + '</i>');$('#red').replaceWith('<i id = "red">' + profs[0] + '</i>');activeProfs = [5, 6];activeRed = [0];break;
			case 4:
				$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + ', ' + profs[6] + '</i>');activeProfs = [0, 5, 6];break;
		}
	})

	//Leveling up
	$('#incRank').click(function(){
		transit++;
		$('#rankup').replaceWith('<b id = "rankup">' + transit + '</b>');
	})
	$('#decRank').click(function(){
		if (transit == 1){alert("Cannot decrease interval!"); return;}
		transit--;
		$('#rankup').replaceWith('<b id = "rankup">' + transit + '</b>');
	})
	$('#levelup').click(function(){
		$('.increase').show();
		level++;
		$('#level').replaceWith('<b id = "level">' + level + '</b>');
		stat++;
		switch(race){
			case 0:
				if((level % 2) == 0){con++;maxHP += 2;fire += 0.5;frost += 0.5;shock += 0.5;}break;
			case 1:
				if((level % 2) == 0){wres++;fire++;frost++;shock++;}break;
			case 2:
				if((level % 3) == 0){stat++;}break;
			case 3:
				if((level % 2) == 0){mark++;racc++;}break;
			case 4:
				if((level % 2) == 0){intel++;spellNum++;perc++;dip += 0.5;}break;
		}
		updating();
		$('#free').replaceWith('<td id = "free">' + stat + '</td>');
		if ((level % transit) == 0 && rank < 5){
			alert("Rank Up!");
			rank++;
			if (race == 0){//Space Marines
				if(rank == 2){//Space Marine
					currentRank = smr[0][0];
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else if(rank == 3){
					var temp = prompt("Do you want to become a Sargeant (1) or a Lexicanum (2)? Please enter your choice below as a number:");
					i = 0;
					while (i == 0){
						if(temp == 1){//Sargeant
							str++;macc+=0.5;i = 1;
						}
						else if(temp == 2){//Lexicanum
							intel++;spellNum++;perc++;dip+=0.5;i = 1;
							$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[5] + ', ' + profs[2] + ', ' + profs[4] + '</i>');
							activeProfs = [0, 1, 5, 2, 4];
							$('.psykerPath').show();
							psykerInit();
						}
						else{
							temp = prompt("Do you want to become a Sargeant (1) or a Lexicanum (2)? Please enter your choice below as a number:");
						}
					}
					updating();
					currentRank = smr[1][temp-1];
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else if(rank == 4){
					if (currentRank == smr[1][1]){//Codicer
						currentRank = smr[2][2];
						intel++;spellNum++;perc++;dip+=0.5;
					}
					else{
						var temp = prompt("Do you want to become a Terminator (1) or a Chaplain (2)? Please enter your choice below as a number:");
						i = 0;
						while (i == 0){
							if(temp == 1){//Terminator
								str++;macc+=0.5;i = 1;
							}
							else if(temp == 2){//Chaplain
								wres+=2;frost+=2;fire+=2;shock+=2;i = 1;
								$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[5] + ', ' + profs[3] + '</i>');
								activeProfs = [0, 1, 5, 3];
							}
							else{
								temp = prompt("Do you want to become a Terminator (1) or a Chaplain (2)? Please enter your choice below as a number:");
							}
						}
						currentRank = smr[2][temp-1];
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else{
					if (currentRank == smr[2][0]){//Captain
						currentRank = smr[3][0];
						str+=2;macc++;
					}
					else if (currentRank == smr[2][1]){//Reclusiarch
						currentRank = smr[3][1];
						wres++;frost++;fire++;shock++;
					}
					else{
						var temp = prompt("Do you want to become a Epistolary (1) or a Grey Knight (2)? Please enter your choice below as a number:");
						i = 0;
						while (i == 0){
							if(temp == 1){//Epistolary
								intel+=2;spellNum+=2;perc+=2;dip++;i=1;
							}
							else if(temp == 2){//Grey Knight
								wres++;frost++;fire++;shock++;intel++;spellNum++;perc++;dip+=0.5;i = 1;
							}
							else{
								temp = prompt("Do you want to become a Epistolary (1) or a Grey Knight (2)? Please enter your choice below as a number:");
							}
						}
						temp++;
						currentRank = smr[3][temp];
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
			}
			else if(race == 1){//Sisters of Battle
				if(rank == 2){//Sister Superior
					currentRank = asr[0][0];
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else if(rank == 3){
					var temp = prompt("Do you want to become a Palatine Sister (1) or a Dominion Sister (2)? Please enter your choice below as a number:");
					i = 0;
					while (i == 0){
						if(temp == 1){//Palatine Sister
							str++;macc+=0.5;i = 1;
							$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', '  + profs[3] + ', ' + profs[5] + ', ' + profs[6] + '</i>');
							activeProfs = [0, 1, 3, 5, 6];
						}
						else if(temp == 2){//Dominion Sister
							mark++;racc++;i = 1;
							$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + ', ' + profs[6] + ', ' + profs[7] + '</i>');
							activeProfs = [0, 5, 6, 7];
						}
						else{
							temp = prompt("Do you want to become a Palatine Sister (1) or a Dominion Sister (2)? Please enter your choice below as a number:");
						}
					}
					updating();
					currentRank = asr[1][temp-1];
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else if(rank == 4){
					if (currentRank == asr[1][1]){//Dominion Sister Superior
						currentRank = asr[2][2];
						mark++;racc++;
					}
					else{
						var temp = prompt("Do you want to become a Canoness (1) or a Seraphim Sister (2)? Please enter your choice below as a number:");
						i = 0;
						while (i == 0){
							if(temp == 1){//Canoness
								str++;macc+=0.5;i = 1;
							}
							else if(temp == 2){//Seraphim Sister
								agi+=2;dodge+=2;macc+=2;stealth+=2;i = 1;
								$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', '  + profs[3] + ', ' + profs[5] + ', ' + profs[6] + ', ' + profs[9] + '</i>');
								activeProfs = [0, 1, 3, 5, 6, 9];
								canjet = 1;
							}
							else{
								temp = prompt("Do you want to become a Canoness (1) or a Seraphim Sister (2)? Please enter your choice below as a number:");
							}
						}
						currentRank = asr[2][temp-1];
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else{
					if (currentRank == asr[2][0]){//Prioress
						currentRank = asr[3][0];
						str++;macc+=0.5;con++;maxHP += 2;fire += 0.5;frost += 0.5;shock += 0.5;
					}
					else if (currentRank == asr[2][1]){//Seraphim Sister Superior
						currentRank = asr[3][1];
						agi++;dodge++;macc++;stealth++;
					}
					else{//Celestian Sister
						currentRank = asr[3][2];
						mark+=2;racc+=2;
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
			}
			else if(race == 2){//Imperial Guard
				if(rank == 2){
					var temp = prompt("Do you want to become a Sargeant (1) or a Novice Assasin (2) or a Sanctionite (3)? Please enter your choice below as a number:");
					i = 0;
					while (i == 0){
						if(temp == 1){//Sargeant
							i=1;
						}
						else if(temp == 2){//Novice Assasin
							i=1;
							j = 0;
							assasin = prompt("Do you want to serve the Callidus (1) or Vindicare (2) or Culexus (3) Temple? Please enter your choice below as a number:");
							while (j == 0){
								if (assasin == 1){//Callidus
									$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + '</i>');
									activeProfs = [0, 5];
									$('#red').replaceWith('<i id = "red">' + profs[1] + ', ' + profs[6] + '</i>');
									activeRed = [1, 6];
									j = 1;
								}
								else if (assasin == 2){//Vindicare
									$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + ', ' + profs[8] + '</i>');
									activeProfs = [0, 5, 8];
									j = 1;
								}
								else if (assasin == 3){//Culexus
									$('#prof').replaceWith('<i id = "prof">N/A</i>');
									activeProfs = [];
									$('#red').replaceWith('<i id = "red">' + profs[0] + ', ' + profs[1] + ', ' + profs[5] + ', ' + profs[6] + '</i>');
									activeRed = [0, 1, 5, 6];
									$('.pariahGene').show();
									j = 1;
								}
								else{
									assasin = prompt("Do you want to serve the Callidus (1) or Vindicare (2) or Culexus (3) Temple? Please enter your choice below as a number:");
								}
							}
							assasin--;
							$('#modifier').replaceWith('<b id = "modifier"> serving the ' + assasinNames[assasin] + ' Temple.</b>');
						}
						else if(temp == 3){//Sanctionite
							$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[4] + ', ' + profs[5] + '</i>');
							activeProfs = [0, 4, 5];
							$('.psykerPath').show();
							psykerInit();
							i=1;
						}
						else{
							temp = prompt("Do you want to become a Sargeant (1) or a Novice Assasin (2) or a Sanctionite (3)? Please enter your choice below as a number:");
						}
					}
					currentRank = igr[0][temp-1];
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else if(rank == 3){
					if (currentRank == igr[0][0]){
						var temp = prompt("Do you want to become a Leutenant (1) or an Acolyte (2)? Please enter your choice below as a number:");
						i = 0;
						while (i == 0){
							if(temp == 1){//Leutenant	
								con++;maxHP += 2;fire += 0.5;frost += 0.5;shock += 0.5;i = 1;
								$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[5] + ', ' + profs[6] + '</i>');
								activeProfs = [0, 1, 5, 6];
							}
							else if(temp == 2){//Acolyte
								wres++;fire++;frost++;shock++;i=1;
							}
							else{
								temp = prompt("Do you want to become a Leutenant (1) or an Acolyte (2)? Please enter your choice below as a number:");
							}
						}
						currentRank = igr[1][temp-1];
					}
					else if(currentRank == igr[0][1]){//Assasin
						agi++;dodge++;macc++;stealth++;
						currentRank = igr[1][2];
					}
					else{//Aspirant
						intel++;spellNum++;perc++;dip += 0.5;
						currentRank = igr[1][3];
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else if(rank == 4){
					if (currentRank == igr[1][0]){
						var temp = prompt("Do you want to become a Captain (1) or an Comissar (2)? Please enter your choice below as a number:");
						i = 0;
						while (i == 0){
							if(temp == 1){//Captain	
								con++;maxHP += 2;fire += 0.5;frost += 0.5;shock += 0.5;i = 1;
								$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[5] + ', ' + profs[6] + '</i>');
								activeProfs = [0, 1, 5, 6];
							}
							else if(temp == 2){//Comissar
								wres++;fire++;frost++;shock++;i=1;
							}
							else{
								temp = prompt("Do you want to become a Captain (1) or an Comissar (2)? Please enter your choice below as a number:");
							}
						}
						currentRank = igr[2][temp-1];
					}
					else if(currentRank == igr[1][1]){//Inquisitor
						wres++;fire++;frost++;shock++;
						currentRank = igr[2][2];
					}
					else if(currentRank == igr[1][2]){//Master Assasin
						agi++;dodge++;macc++;stealth++;
						currentRank = igr[2][3];
					}
					else{//Savant Warrant
						intel++;spellNum++;perc++;dip += 0.5;
						currentRank = igr[2][4];
						$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[2] + ', ' + profs[4] + ', ' + profs[5] + '</i>');
						activeProfs = [0, 2, 4, 5];
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else{
					if (currentRank == igr[2][0]){//Colonel
						currentRank = igr[3][0];
						str++;macc+=0.5;con++;maxHP += 2;fire += 0.5;frost += 0.5;shock += 0.5;
					}
					else if (currentRank == igr[2][1]){//Senior Comissar
						currentRank = igr[3][1];
						str++;macc+=0.5;wres++;fire++;frost++;shock++;
					}
					else if (currentRank == igr[2][2]){//Lord Inquisitor
						currentRank = igr[3][2];
						wres+=2;fire+=2;frost+=2;shock+=2;
					}
					else if (currentRank == igr[2][3]){//Grandmaster Assasin
						currentRank = igr[3][3];
						agi+=2;dodge+=2;macc+=2;stealth+=2;
					}
					else{//Perceptor Savant
						currentRank = igr[3][4];
						intel+=2;spellNum+=2;perc+=2;dip++;
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
			}
			else if(race == 3){//Tau
				if(rank == 2){
					$('#namechar').replaceWith('<b id = "namechar">Shas&#39;Ui ' + name + '</b>');
					var temp = prompt("Do you want to become a Veteran Warrior (1) or a Scout (2)? Please enter your choice below as a number:");
					i = 0;
					while (i == 0){
						if(temp == 1){//Veteran Warrior
							i=1;
						}
						else if(temp == 2){//Scout
							i=1;
							$('#prof').replaceWith('<i id = "prof">' + profs[5] + ', ' + profs[8] + '</i>');
							activeProfs = [5, 8];
							$('#red').replaceWith('<i id = "red">' + profs[0] + ', ' + profs[6] + '</i>');
							activeRed = [0, 6];
						}
						else{
							temp = prompt("Do you want to become a Veteran Warrior (1) or a Scout (2)? Please enter your choice below as a number:");
						}
					}
					currentRank = tr[0][temp-1];
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else if(rank == 3){
					$('#namechar').replaceWith('<b id = "namechar">Shas&#39;Vre ' + name + '</b>');
					if (currentRank == tr[0][0]){//Hero Warrior
						currentRank = tr[1][0];
						mark++;racc++;
						$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + ', ' + profs[6] + '</i>');
						activeProfs = [0, 5, 6];
						$('#red').replaceWith('<i id = "red">N/A</i>');
						activeRed = [];
					}
					else{//Hunter
						agi++;dodge++;macc++;stealth++;	
						currentRank = tr[1][1];
						$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + ', ' + profs[8] + '</i>');
						activeProfs = [0, 5, 8];
						$('#red').replaceWith('<i id = "red">' + profs[6] + '</i>');
						activeRed = [6];
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else if(rank == 4){
					$('#namechar').replaceWith('<b id = "namechar">Shas&#39;El ' + name + '</b>');
					if (currentRank == tr[1][0]){//Knight Warrior
						currentRank = tr[2][0];
						mark++;racc++;
						$('#red').replaceWith('<i id = "red">' + profs[1] + '</i>');
						activeRed = [1];
					}
					else{//XV15 Pilot
						agi++;dodge++;macc++;stealth++;	
						currentRank = tr[2][1];
						$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + ', ' + profs[6] + ', ' + profs[8] + '</i>');
						activeProfs = [0, 5, 6, 8];
						$('#red').replaceWith('<i id = "red">N/A</i>');
						activeRed = [];
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else{
					$('#namechar').replaceWith('<b id = "namechar">Shas&#39;O ' + name + '</b>');
					if (currentRank == tr[2][0]){
						var temp = prompt("Do you want to become a Commander Warrior (1) or a Crisis Pilot (2)? Please enter your choice below as a number:");
						i = 0;
						while (i == 0){
							if(temp == 1){//Commander Warrior
								mark+=2;racc+=2;
								i=1;
								$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[5] + ', ' + profs[6] + '</i>');
								activeProfs = [0, 1, 5, 6];
								$('#red').replaceWith('<i id = "red">' + profs[7] + '</i>');
								activeRed = [7];
							}
							else if(temp == 2){//Crisis Pilot
								mark+=2;racc+=2;
								i=1;
								$('#prof').replaceWith('<i id = "prof">' + profs[1] + ', ' + profs[7] + '</i>');
								activeProfs = [1, 7];
								$('#red').replaceWith('<i id = "red">N/A</i>');
								activeRed = [0];
							}
							else{
								temp = prompt("Do you want to become a Commander Warrior (1) or a Crisis Pilot (2)? Please enter your choice below as a number:");
							}
						}
						currentRank = tr[3][temp-1];
						$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
					}
					else{//XV25 Pilot
						currentRank = tr[3][2];
						agi++;dodge++;macc++;stealth++;mark++;racc++;
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
			}
			else{//Eldar
				spellNum++;
				updating();
				if(rank == 2){
					var temp = prompt("Do you want to become an Aspect Warrior (1) or a Harlequin Initiate (2) or a Seer (3)? Please enter your choice below as a number:");
					i = 0;
					while (i == 0){
						if(temp == 2){//Harlequin Initiate
							i=1;
							$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[5] + ', ' + profs[6] + '</i>');
							activeProfs = [0, 1, 5, 6];
						}
						else if(temp == 1){//Aspect Warrior
							i=1;
							j = 0;
							aspect = prompt("Do you want to belong to the Dire Avengers (1) or Dark Reapers (2) or Warp Spiders (3) or Howling Banshees (4) or Rangers (5) Aspect Shrine? Please enter your choice below as a number:");
							while (j == 0){
								if (aspect == 1){//Dire Avengers
									j = 1;
								}
								else if (aspect == 2){//Dark Reapers
									$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + ', ' + profs[7] + '</i>');
									activeProfs = [0, 5, 7];
									j = 1;
								}
								else if (aspect == 3){//Warp Spiders
									j = 1;
								}
								else if (aspect == 4){//Howling Banshees
									$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[5] + '</i>');
									activeProfs = [0, 1, 5];
									j = 1;
									movement+=5;
									updating();
								}
								else if (aspect == 5){//Rangers
									$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + ', ' + profs[8] + '</i>');
									activeProfs = [0, 5, 8];
									j = 1;
								}
								else{
									aspect = prompt("Do you want to serve the Dire Avengers (1) or Dark Reapers (2) or Warp Spiders (3) or Howling Banshees (4) or Rangers (5) Aspect Shrine? Please enter your choice below as a number:");
								}
							}
							aspect--;
							$('#modifier').replaceWith('<b id = "modifier"> of the ' + aspectNames[aspect] + ' Aspect Shrine.</b>');
						}
						else if(temp == 3){//Seer Initiate
							$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[2] + ', ' + profs[4] + '</i>');
							activeProfs = [0, 1, 2, 4];
							i=1;
						}
						else{
							temp = prompt("Do you want to become a Aspect Warrior (1) or a Harlequin Initiate (2) or a Seer (3)? Please enter your choice below as a number:");
						}
					}
					currentRank = er[0][temp-1];
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else if(rank == 3){
					if (currentRank == er[0][0]){//Exarch
						currentRank = er[1][0];
						con++;maxHP += 2;fire += 0.5;frost += 0.5;shock += 0.5;
						if (aspect == 2){//Warp Spiders getting Jet pack
							$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[5] + ', ' + profs[6] + ', ' + profs[9] + '</i>');
							activeProfs = [0, 5, 6, 9];
							canjet = 1;
						}
						else if(aspect == 3){//Howling Banshees getting Spears
							$('#prof').replaceWith('<i id = "prof">' + profs[0] + ', ' + profs[1] + ', ' + profs[2] + ', ' + profs[5] + '</i>');
							activeProfs = [0, 1, 2, 5];
						}
					}
					else if(currentRank == er[0][1]){//Harlequin
						agi++;dodge++;macc++;stealth++;
						currentRank = er[1][1];
					}
					else{//Seer
						intel++;spellNum++;perc++;dip += 0.5;
						currentRank = er[1][2];
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else if(rank == 4){
					if(currentRank == er[1][0]){//Shrine Master
						con++;maxHP += 2;fire += 0.5;frost += 0.5;shock += 0.5;
						currentRank = er[2][0];
					}
					else if(currentRank == er[1][1]){//Troupe Master
						agi++;dodge++;macc++;stealth++;
						currentRank = er[2][1];
					}
					else{//Farseer
						intel++;spellNum++;perc++;dip += 0.5;
						currentRank = er[2][2];
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
				else{
					if(currentRank == er[2][0]){//Aspect Lord
						con++;maxHP += 2;fire += 0.5;frost += 0.5;shock += 0.5;wres++;fire++;frost++;shock++;
						currentRank = er[3][0];
					}
					else if(currentRank == er[2][1]){//Masque Leader
						str++;macc += 0.5;
						var temp = prompt("Do you want to become a Masque Leader (1) or a Solitaire (2)? Please enter your choice below as a number:");
						i = 0;
						while (i == 0){
							if(temp == 1){//Masque Leader
								agi++;dodge++;macc++;stealth++;i=1;
								currentRank = er[3][1];
							}
							else if(temp == 2){//Solitaire
								con++;maxHP += 2;fire += 0.5;frost += 0.5;shock += 0.5;i=1;
								currentRank = er[3][2];
								$('.psykerPath').hide();
								$('.pariahGene').show();
							}
							else{
								temp = prompt("Do you want to become a Masque Leader (1) or a Solitaire (2)? Please enter your choice below as a number:");
							}
						}
					}
					else{//Council Member
						intel+=2;spellNum+=2;perc+=2;dip++;
						currentRank = er[3][3];
					}
					updating();
					$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
				}
			}
		}
	})
	//Increasing stats
	$('#incStr').click(function(){
		stat--;
		str++;
		macc += 0.5;
		$('#free').replaceWith('<td id = "free">' + stat + '</td>');
		if(stat == 0){$('.increase').hide();}
		updating();
	})
	$('#incCon').click(function(){
		stat--;
		con++;
		maxHP += 2;
		fire += 0.5;
		frost += 0.5;
		shock += 0.5;
		$('#free').replaceWith('<td id = "free">' + stat + '</td>');
		if(stat == 0){$('.increase').hide();}
		updating();
	})
	$('#incMark').click(function(){
		stat--;
		mark++;
		racc++;
		$('#free').replaceWith('<td id = "free">' + stat + '</td>');
		if(stat == 0){$('.increase').hide();}
		updating();
	})
	$('#incAgi').click(function(){
		stat--;
		agi++;
		dodge++;
		macc++;
		stealth++;
		$('#free').replaceWith('<td id = "free">' + stat + '</td>');
		if(stat == 0){$('.increase').hide();}
		updating();
	})
	$('#incInt').click(function(){
		stat--;
		intel++;spellNum++;
		perc++;
		dip += 0.5;
		$('#free').replaceWith('<td id = "free">' + stat + '</td>');
		if(stat == 0){$('.increase').hide();}
		updating();
	})
	$('#incChar').click(function(){
		stat--;
		chari++;
		lead++;
		dip++;
		$('#free').replaceWith('<td id = "free">' + stat + '</td>');
		if(stat == 0){$('.increase').hide();}
		updating();
	})
	$('#incWR').click(function(){
		stat--;
		wres++;
		fire++;
		frost++;
		shock++;
		$('#free').replaceWith('<td id = "free">' + stat + '</td>');
		if(stat == 0){$('.increase').hide();}
		updating();
	})

	//Shop Actions
	$('#buyArmour').click(function(){
		var temp = "";
		$('#armourShop option:selected').each(function(){
			temp += $(this).val();
		})
		var goldNeeded = clothes[temp]["cost"];
		temp = Number(temp);
		if(gold >= goldNeeded){
			$('#inventory').append('<option value = "arm' + temp + '">' + clothes[temp]["name"] + '</option>');
			gold -= goldNeeded;
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		}
		else{
			alert("Not Enough Gold");
		}
	})
	$('#buyClose').click(function(){
		var temp = "";
		$('#closeShop option:selected').each(function(){
			temp += $(this).val();
		})
		var goldNeeded = closeCombat[temp]["cost"];
		temp = Number(temp);
		if(gold >= goldNeeded){
			$('#inventory').append('<option value = "clo' + temp + '">' + closeCombat[temp]["name"] + '</option>');
			gold -= goldNeeded;
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		}
		else{
			alert("Not Enough Gold");
		}
	})
	$('#buyRanged').click(function(){
		var temp = "";
		$('#rangedShop option:selected').each(function(){
			temp += $(this).val();
		})
		var goldNeeded = rangedCombat[temp]["cost"];
		temp = Number(temp);
		if(gold >= goldNeeded){
			$('#inventory').append('<option value = "ran' + temp + '">' + rangedCombat[temp]["name"] + '</option>');
			gold -= goldNeeded;
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		}
		else{
			alert("Not Enough Gold");
		}
	})
	$('#buyRune').click(function(){
		var temp1 = "";
		$('#runeShop option:selected').each(function(){
			temp1 += $(this).val();
		})
		var temp2 = "";
		$('#runegrade option:selected').each(function(){
			temp2 += $(this).val();
		})
		var goldNeeded = clothesMods[temp1][temp2]["cost"];
		if(gold >= goldNeeded){
			$('#inventory').append('<option value = "run' + temp1 + temp2 + '">' + clothesMods[temp1]["name"] + ' (' + clothesMods[temp1][temp2]["rar"][0] + ')</option>');
			gold -= goldNeeded;
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		}
		else{
			alert("Not Enough Gold");
		}
	})
	$('#buyUpg').click(function(){
		var temp1 = "";
		$('#upgShop option:selected').each(function(){
			temp1 += $(this).val();
		})
		var temp2 = "";
		$('#upggrade option:selected').each(function(){
			temp2 += $(this).val();
		})
		var goldNeeded = clothesMods[temp1][temp2]["cost"];
		if(gold >= goldNeeded){
			$('#inventory').append('<option value = "upg' + temp1 + temp2 + '">' + clothesMods[temp1]["name"] + ' (' + clothesMods[temp1][temp2]["rar"] + ')</option>');
			gold -= goldNeeded;
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		}
		else{
			alert("Not Enough Gold");
		}
	})
	$('#buyweapUpg').click(function(){
		var temp = "";
		$('#weapUpgShop option:selected').each(function(){
			temp += $(this).val();
		})
		var goldNeeded = rangedMods[temp]["cost"];
		temp = Number(temp);
		if(gold >= goldNeeded){
			$('#inventory').append('<option value = "rmo' + temp + '">' + rangedMods[temp]["name"] + '</option>');
			gold -= goldNeeded;
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		}
		else{
			alert("Not Enough Gold");
		}
	})
	$('#buySpell').click(function(){
		var temp = "";
		$('#spellShop option:selected').each(function(){
			temp += $(this).val();
		})
		var goldNeeded = spells[temp]["cost"];
		temp = Number(temp);
		if(gold >= goldNeeded && intel >= spells[temp]["intel"]){
			gold -= goldNeeded;
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
			$('#spellsKnown').append('<li id = "s' + temp + '">' + spells[temp]["name"] + ' (' + temp + ')(' + schoolNames[spells[temp]["school"]] + '): ' + spells[temp]["note"] + '</li>');
			hasspells.push(temp);
		}
		else if(intel < spells[temp]["intel"]){
			alert("Not Enough Intelligence");
		}
		else{
			alert("Not Enough Gold");
		}
	})
	$('#buyOther').click(function(){
		var temp = "";
		$('#otherShop option:selected').each(function(){
			temp += $(this).val();
		})
		var goldNeeded = others[temp]["cost"];
		temp = Number(temp);
		if(gold >= goldNeeded){
			$('#inventory').append('<option value = "oth' + temp + '">' + others[temp]["name"] + '</option>');
			gold -= goldNeeded;
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		}
		else{
			alert("Not Enough Gold");
		}
	})
	$('#buyAmmo').click(function(){
		var temp = "";
		$('#ammoShop option:selected').each(function(){
			temp += $(this).val();
		})
		var goldNeeded = ammo[temp]["cost"];
		temp = Number(temp);
		if(gold >= goldNeeded){
			$('#inventory').append('<option value = "amm' + temp + '">' + ammo[temp]["name"] + '</option>');
			gold -= goldNeeded;
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		}
		else{
			alert("Not Enough Gold");
		}
	})
	//User Actions
	$('#addGold').click(function(){
		var i = 0;
		var addGold = prompt("How many Union Credits do you want to add? Enter number below");
		while (i == 0){
			if(isNaN(addGold) == true){
				addGold = prompt("How many Union Credits do you want to add? Enter number below");
			}
			else{
				i = 1;
			}
		}
		gold += Number(addGold);
		$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
	})
	$('#invSell').click(function(){
		var temp = "";
		$('#inventory option:selected').each(function(){
			temp += $(this).val();
			$(this).remove();
		})
		var code = temp[0] + temp[1] + temp[2];
		var num = temp.slice(3, temp.length);
		num = Number(num);
		if(code == "arm"){
			gold += clothes[num]["cost"];
		}
		else if(code == "clo"){
			gold += closeCombat[num]["cost"];
		}
		else if(code == "ran"){
			gold += rangedCombat[num]["cost"];
		}
		else if(code == "run"){
			var temp1 = num%10;
			num = (num-temp1)/10;
			gold += clothesMods[num][temp1]["cost"];
		}
		else if(code == "upg"){
			var temp1 = num%10;
			num = (num-temp1)/10;
			gold += clothesMods[num][temp1]["cost"];
		}
		else if(code == "rmo"){
			gold += rangedMods[num]["cost"];
		}
		else if(code == "oth"){
			gold += others[num]["cost"];
		}
		else if(code == "amm"){
			gold += ammo[num]["cost"];
		}
		$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
	})
	$('#invLose').click(function(){
		$('#inventory option:selected').each(function(){
			$(this).remove();
		})
	})
	$('#invEquip').click(function(){
		var temp = "";
		$('#inventory option:selected').each(function(){
			temp += $(this).val();
			$(this).remove();
		})
		var code = temp[0] + temp[1] + temp[2];//type of item
		var num = temp.slice(3, temp.length);//id of item
		num = Number(num);
		if(code == "arm"){
			if(wearing == 50){
				wearing = num;
				updateChar("arm");
			}
			else{
				$('#inventory').append('<option value = "arm' + wearing + '">' + clothes[wearing]["name"] + '</option>');
				strip("arm");
				wearing = num;
				updateChar("arm");
			}
		}
		else if(code == "clo"){
			var twohanded = closeCombat[num]["two"];
			var weaptype = closeCombat[num]["type"];
			if(weaptype == 3){//checking to see if enough strength
				if(closeCombat[num]["min"] > str){
					alert("Cannot equip!");
					$('#inventory').append('<option value = "clo' + num + '">' + closeCombat[num]["name"] + '</option>');
					return;
				}
			}
			//Stripping
			if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){//Stripping right arm close weapon
				$('#inventory').append('<option value = "clo' + rightHand + '">' + closeCombat[rightHand]["name"] + '</option>');
				strip("right");
			}
			else if(rightHand != 200){//Stripping right arm ranged weapon
				$('#inventory').append('<option value = "ran' + rightHand + '">' + rangedCombat[rightHand]["name"] + '</option>');
				strip("right");
			}
			if((leftHand < 150 || (leftHand > 175 && leftHand < 200)) && twohanded == 1){//Stripping left arm if two handed
				$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
				strip("left");
			}
			else if(leftHand != 200 && twohanded == 1){//Stripping shield
				$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
				strip("shield");
			}
			//Equipping
			if(weaptype != 3 && twohanded == 0){//Equipping to right hand one handed
				rightHand = num;
				updateChar("clo1");
			}
			else if(weaptype != 3){//two handed weapons
				rightHand = num;
				updateChar("clo2");
			}
			else{//hammers
				if(closeCombat[num]["two"] <= str){//One handed hammer
					rightHand = num;
					updateChar("clo1");
				}
				else{//two handed hammer
					rightHand = num;
					updateChar("clo2");
				}
			}
		}
		else if(code == "ran"){
			var twohanded = rangedCombat[num]["two"];
			var weaptype = rangedCombat[num]["type"];
			if(dualheavy == 1 && weaptype == 7){//
				var whichhand = confirm("Equip weapon to right hand?");
				if(whichhand == true){//Equipping heavy weapon to right hand
					if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){//Stripping right arm close weapon
						$('#inventory').append('<option value = "clo' + rightHand + '">' + closeCombat[rightHand]["name"] + '</option>');
						strip("right");
					}
					else if(rightHand != 200){//Stripping right arm ranged weapon
						$('#inventory').append('<option value = "ran' + rightHand + '">' + rangedCombat[rightHand]["name"] + '</option>');
						strip("right");
					}
					rightHand = num;
					updateChar("ran1");
				}
				else{//Equipping weapon to left hand
					if(leftHand < 150 || (leftHand > 175 && leftHand < 200)){
						$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
						strip("left");
					}
					else if(leftHand != 200){//Stripping shield
						$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
						strip("shield");
					}
					leftHand = num;
					updateChar("left");
				}
				return;
			}
			else if((rightHand < 46 || (rightHand < 176 && rightHand > 110)) && (dualpistol1 == 1 || dualpistol2 == 1) && weaptype == 5){//equipping pistol to left
				var righttype = closeCombat[rightHand]["type"];
				if(dualpistol1 == 1 && (righttype == 0 || righttype == 1 || righttype == 4)){//dagger/sword/staff with pistol
					if(leftHand < 150 || (leftHand > 175 && leftHand < 200)){
						$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
						strip("left");
					}
					else if(leftHand != 200){//Stripping shield
						$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
						strip("shield");
					}
					leftHand = num;
					updateChar("left");
					return;
				}
				else if(dualpistol2 == 2 && (righttype == 2 || righttype == 3)){//spear/hammer with pistol
					if(leftHand < 150 || (leftHand > 175 && leftHand < 200)){
						$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
						strip("left");
					}
					else if(leftHand != 200){//Stripping shield
						$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
						strip("shield");
					}
					leftHand = num;
					updateChar("left");
					return;
				}
			}
			else{//regular equipping
				if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){//Stripping right arm close weapon
					$('#inventory').append('<option value = "clo' + rightHand + '">' + closeCombat[rightHand]["name"] + '</option>');
					strip("right");
				}
				else if(rightHand != 200){//Stripping right arm ranged weapon
					$('#inventory').append('<option value = "ran' + rightHand + '">' + rangedCombat[rightHand]["name"] + '</option>');
					strip("right");
				}
				if(leftHand < 150 && twohanded == 1){
					$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
					strip("left");
				}
				else if(leftHand != 200 && twohanded == 1){//Stripping shield
					$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
					strip("shield");
				}
				if(twohanded == 0){//one handed
					rightHand = num;
					updateChar("ran1");
				}
				else{//two handed
					rightHand = num;
					updateChar("ran2");
				}
			}
		}
		else if(code == "run"){
			var temp1 = num%10;//rarity grade
			num = (num-temp1)/10;//id of rune
			if(temp1 == 0){//common rune
				if(aMA[0] == 1){//equipping to common
					if(armourMods[0] == 0){
						armourMods[0] = num*10+temp1;
						$('#cr').replaceWith('<b id = "cr">' + clothesMods[num]["name"] + ' (Common)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
				else if(aMA[1] == 1){//equipping to uncommon
					if(armourMods[1] == 0){
						armourMods[1] = num*10+temp1;
						$('#ur').replaceWith('<b id = "ur">' + clothesMods[num]["name"] + ' (Common)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
				else if(aMA[2] == 1){//equipping to rare
					if(armourMods[2] == 0){
						armourMods[2] = num*10+temp1;
						$('#rr').replaceWith('<b id = "rr">' + clothesMods[num]["name"] + ' (Common)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
				else if(aMA[3] == 1){//equipping to legendary
					if(armourMods[3] == 0){
						armourMods[3] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Common)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
				else if(aMA[3] == 2){//equipping to 2 legendaries
					if(armourMods[3][0] == 0){
						armourMods[3][0] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Common) and None</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(armourMods[3][1] == 0){
						armourMods[3][1] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[Math.floor(armourMods[3][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[3][0]/10)][(armourMods[3][0]%10)]["rar"] + ') and ' + clothesMods[num]["name"] + ' (Common)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
			}
			else if(temp1 == 1){//uncommon rune
				if(aMA[1] == 1){//equipping to uncommon
					if(armourMods[1] == 0){
						armourMods[1] = num*10+temp1;
						$('#ur').replaceWith('<b id = "ur">' + clothesMods[num]["name"] + ' (Uncommon)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[1]/10) && (armourMods[1]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[1]/10)][armourMods[1]%10]["cost"];
						clothesMods[Math.floor(armourMods[1]/10)][armourMods[1]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[1] = num*10+temp1;
						$('#ur').replaceWith('<b id = "ur">' + clothesMods[num]["name"] + ' (Uncommon)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
				else if(aMA[2] == 1){//equipping to rare
					if(armourMods[2] == 0){
						armourMods[2] = num*10+temp1;
						$('#rr').replaceWith('<b id = "rr">' + clothesMods[num]["name"] + ' (Uncommon)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[2]/10) && (armourMods[2]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[2]/10)][armourMods[2]%10]["cost"];
						clothesMods[Math.floor(armourMods[2]/10)][armourMods[2]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[2] = num*10+temp1;
						$('#rr').replaceWith('<b id = "rr">' + clothesMods[num]["name"] + ' (Uncommon)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
				else if(aMA[3] == 1){//equipping to legendary
					if(armourMods[3] == 0){
						armourMods[3] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Uncommon)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3]/10) && (armourMods[3]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[3]/10)][armourMods[3]%10]["cost"];
						clothesMods[Math.floor(armourMods[3]/10)][armourMods[3]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[3] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Uncommon)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
				else if(aMA[3] == 2){//equipping to 2 legendaries
					if(armourMods[3][0] == 0){
						armourMods[3][0] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Uncommon) and None</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3][0]/10) && (armourMods[3][0]%10 < temp1) && armourMods[3][1] == 0){
						gold += clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10]["cost"];
						clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[3][0] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Uncommon) and None</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3][0]/10) && (armourMods[3][0]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10]["cost"];
						clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[3][0] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Uncommon) and ' + clothesMods[Math.floor(armourMods[3][1]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[3][1]/10)][(armourMods[3][1]%10)]["rar"] + ')</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(armourMods[3][1] == 0){
						armourMods[3][1] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[Math.floor(armourMods[3][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[3][0]/10)][(armourMods[3][0]%10)]["rar"] + ') and ' + clothesMods[num]["name"] + ' (Uncommon)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3][1]/10) && (armourMods[3][1]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[3][1]/10)][armourMods[3][1]%10]["cost"];
						clothesMods[Math.floor(armourMods[3][1]/10)][armourMods[3][1]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[3][1] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[Math.floor(armourMods[3][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[3][0]/10)][(armourMods[3][0]%10)]["rar"] + ') and ' + clothesMods[num]["name"] + ' (Uncommon)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
			}
			else if(temp1 == 2){//rare rune
				if(aMA[2] == 1){//equipping to rare
					if(armourMods[2] == 0){
						armourMods[2] = num*10+temp1;
						$('#rr').replaceWith('<b id = "rr">' + clothesMods[num]["name"] + ' (Rare)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[2]/10) && (armourMods[2]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[2]/10)][armourMods[2]%10]["cost"];
						clothesMods[Math.floor(armourMods[2]/10)][armourMods[2]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[2] = num*10+temp1;
						$('#rr').replaceWith('<b id = "rr">' + clothesMods[num]["name"] + ' (Rare)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
				else if(aMA[3] == 1){//equipping to legendary
					if(armourMods[3] == 0){
						armourMods[3] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Rare)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3]/10) && (armourMods[3]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[3]/10)][armourMods[3]%10]["cost"];
						clothesMods[Math.floor(armourMods[3]/10)][armourMods[3]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[2] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Rare)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
				else if(aMA[3] == 2){//equipping to 2 legendaries
					if(armourMods[3][0] == 0){
						armourMods[3][0] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Rare) and None</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3][0]/10) && (armourMods[3][0]%10 < temp1) && armourMods[3][1] == 0){
						gold += clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10]["cost"];
						clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[3][0] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Rare) and None</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3][0]/10) && (armourMods[3][0]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10]["cost"];
						clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[3][0] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Rare) and ' + clothesMods[Math.floor(armourMods[3][1]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[3][1]/10)][(armourMods[3][1]%10)]["rar"] + ')</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(armourMods[3][1] == 0){
						armourMods[3][1] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[Math.floor(armourMods[3][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[3][0]/10)][(armourMods[3][0]%10)]["rar"] + ') and ' + clothesMods[num]["name"] + ' (Rare)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3][1]/10) && (armourMods[3][1]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[3][1]/10)][armourMods[3][1]%10]["cost"];
						clothesMods[Math.floor(armourMods[3][1]/10)][armourMods[3][1]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[3][1] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[Math.floor(armourMods[3][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[3][0]/10)][(armourMods[3][0]%10)]["rar"] + ') and ' + clothesMods[num]["name"] + ' (Rare)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
			}
			else{//legendary rune
				if(aMA[3] == 1){//equipping to legendary
					if(armourMods[3] == 0){
						armourMods[3] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Legendary)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3]/10) && (armourMods[3]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[3]/10)][armourMods[3]%10]["cost"];
						clothesMods[Math.floor(armourMods[3]/10)][armourMods[3]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[2] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Legendary)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
				else if(aMA[3] == 2){//equipping to 2 legendaries
					if(armourMods[3][0] == 0){
						armourMods[3][0] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Legendary) and None</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3][0]/10) && (armourMods[3][0]%10 < temp1) && armourMods[3][1] == 0){
						gold += clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10]["cost"];
						clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[3][0] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Legendary) and None</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3][0]/10) && (armourMods[3][0]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10]["cost"];
						clothesMods[Math.floor(armourMods[3][0]/10)][armourMods[3][0]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[3][0] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[num]["name"] + ' (Legendary) and ' + clothesMods[Math.floor(armourMods[3][1]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[3][1]/10)][(armourMods[3][1]%10)]["rar"] + ')</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(armourMods[3][1] == 0){
						armourMods[3][1] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[Math.floor(armourMods[3][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[3][0]/10)][(armourMods[3][0]%10)]["rar"] + ') and ' + clothesMods[num]["name"] + ' (Legendary)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(num == Math.floor(armourMods[3][1]/10) && (armourMods[3][1]%10 < temp1)){
						gold += clothesMods[Math.floor(armourMods[3][1]/10)][armourMods[3][1]%10]["cost"];
						clothesMods[Math.floor(armourMods[3][1]/10)][armourMods[3][1]%10].nay();
						$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
						armourMods[3][1] = num*10+temp1;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[Math.floor(armourMods[3][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[3][0]/10)][(armourMods[3][0]%10)]["rar"] + ') and ' + clothesMods[num]["name"] + ' (Legendary)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
			}
			alert("Rune cannot be equipped!");
			$('#inventory').append('<option value = "run' + num + temp1 + '">' + clothesMods[num]["name"] + ' (' + clothesMods[num][temp1]["rar"][0] + ')</option>');
		}
		else if(code == "upg"){
			var temp1 = num%10;//rarity grade
			num = (num-temp1)/10;//id of upg
			if(num == 26 || num == 27){//jetpack
				if(canjet == 1 && aMA[7] == 1){//equipping jetpack
					if(armourMods[7] != 0){//stripping jet
						strip("jet");
					}
					clothesMods[num][temp1].yay();
					armourMods[7] = num*10+temp1;
					$('#jetpack').replaceWith('<b id = "jetpack">' + clothesMods[num]["name"] + ' (' + clothesMods[num][temp1]["rar"] + ')</b>');
					return;
				}
			}
			else if(temp1 == 0){//mk1
				if(aMA[4] == 1){//equipping to mk1 slot
					if(armourMods[4] != 0){
						strip("upg");
					}
					armourMods[4] = num*10+temp1;
					$('#mk1').replaceWith('<b id = "mk1">' + clothesMods[num]["name"] + ' (MK1)</b>');
					clothesMods[num][temp1].yay();
					updating();
					return;
				}
				else if(aMA[5] == 1){//eqipping to mk2 slot
					if(armourMods[5] != 0){
						strip("upg");
					}
					armourMods[5] = num*10+temp1;
					$('#mk2').replaceWith('<b id = "mk2">' + clothesMods[num]["name"] + ' (MK1)</b>');
					clothesMods[num][temp1].yay();
					updating();
					return;
				}
				else if(aMA[6] == 1){//eqipping to mk3 slot
					if(armourMods[6] != 0){
						strip("upg");
					}
					armourMods[6] = num*10+temp1;
					$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK1)</b>');
					clothesMods[num][temp1].yay();
					updating();
					return;
				}
				else if(aMA[6] == 2){//eqipping to two mk3 slots
					if(armourMods[6][0] == 0 && armourMods[6][1] == 0){
						armourMods[6][0] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK1) and None</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(armourMods[6][0] == 0){
						armourMods[6][0] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK1) and ' + clothesMods[Math.floor(armourMods[6][1]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][1]/10)][armourMods[6][1]%10]["rar"] + ')</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(armourMods[6][1] == 0){
						armourMods[6][1] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') and ' + clothesMods[num]["name"] + ' (MK1)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					var choice = confirm('Replace ' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') ?');
					if(choice){
						strip("upg1");
						armourMods[6][0] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK1) and ' + clothesMods[Math.floor(armourMods[6][1]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][1]/10)][armourMods[6][1]%10]["rar"] + ')</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else{
						strip("upg2");
						armourMods[6][1] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') and ' + clothesMods[num]["name"] + ' (MK1)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
			}
			else if(temp1 == 1){//mk2
				if(aMA[5] == 1){//eqipping to mk2 slot
					if(armourMods[5] != 0){
						strip("upg");
					}
					armourMods[5] = num*10+temp1;
					$('#mk2').replaceWith('<b id = "mk2">' + clothesMods[num]["name"] + ' (MK2)</b>');
					clothesMods[num][temp1].yay();
					updating();
					return;
				}
				else if(aMA[6] == 1){//eqipping to mk3 slot
					if(armourMods[6] != 0){
						strip("upg");
					}
					armourMods[6] = num*10+temp1;
					$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK2)</b>');
					clothesMods[num][temp1].yay();
					updating();
					return;
				}
				else if(aMA[6] == 2){//eqipping to two mk3 slots
					if(armourMods[6][0] == 0 && armourMods[6][1] == 0){
						armourMods[6][0] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK2) and None</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(armourMods[6][0] == 0){
						armourMods[6][0] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK2) and ' + clothesMods[Math.floor(armourMods[6][1]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][1]/10)][armourMods[6][1]%10]["rar"] + ')</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(armourMods[6][1] == 0){
						armourMods[6][1] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') and ' + clothesMods[num]["name"] + ' (MK2)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					var choice = confirm('Replace ' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') ?');
					if(choice){
						strip("upg1");
						armourMods[6][0] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK2) and ' + clothesMods[Math.floor(armourMods[6][1]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][1]/10)][armourMods[6][1]%10]["rar"] + ')</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else{
						strip("upg2");
						armourMods[6][1] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') and ' + clothesMods[num]["name"] + ' (MK2)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
			}
			else{//mk3
				if(aMA[6] == 1){//eqipping to mk3 slot
					if(armourMods[6] != 0){
						strip("upg");
					}
					armourMods[6] = num*10+temp1;
					$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK3)</b>');
					clothesMods[num][temp1].yay();
					updating();
					return;
				}
				else if(aMA[6] == 2){//eqipping to two mk3 slots
					if(armourMods[6][0] == 0 && armourMods[6][1] == 0){
						armourMods[6][0] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK3) and None</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(armourMods[6][0] == 0){
						armourMods[6][0] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK3) and ' + clothesMods[Math.floor(armourMods[6][1]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][1]/10)][armourMods[6][1]%10]["rar"] + ')</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else if(armourMods[6][1] == 0){
						armourMods[6][1] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') and ' + clothesMods[num]["name"] + ' (MK2)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					var choice = confirm('Replace ' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') ?');
					if(choice){
						strip("upg1");
						armourMods[6][0] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[num]["name"] + ' (MK3) and ' + clothesMods[Math.floor(armourMods[6][1]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][1]/10)][armourMods[6][1]%10]["rar"] + ')</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
					else{
						strip("upg2");
						armourMods[6][1] = num*10+temp1;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') and ' + clothesMods[num]["name"] + ' (MK3)</b>');
						clothesMods[num][temp1].yay();
						updating();
						return;
					}
				}
			}
			alert("Upgrade cannot be equipped!");
			$('#inventory').append('<option value = "upg' + num + temp1 + '">' + clothesMods[num]["name"] + ' (' + clothesMods[num][temp1]["rar"] + ')</option>');
		}
		else if(code == "rmo"){
			if(rightHand < 46 || rightHand == 200){
				alert("Cannot equip upgrade onto melee weapons");
				$('#inventory').append('<option value = "rmo' + num + '">' + rangedMods[num]["name"] + '</option>');
				return;
			}
			else if(rangedCombat[rightHand]["type"] == 7 || rangedCombat[rightHand]["type"] == 0){
				alert("Cannot equip upgrade on this weapon");
				$('#inventory').append('<option value = "rmo' + num + '">' + rangedMods[num]["name"] + '</option>');
				return;
			}
			var typ = rangedMods[num]["type"];
			if(weaponMods[typ] != 0){
				strip(typ);
			}
			var toequip = "venomUsed";
			if(typ == 0){toequip = "sight";}
			else if(typ == 1){toequip = "supp";}
			else if(typ == 2){toequip = "accessory";}
			rangedMods[num].yay();
			weaponMods[typ] = num;
			updating();
			$('#' + toequip).replaceWith('<b id = "' + toequip + '">' + rangedMods[num]["name"] + '</b>');
		}
		else if(code == "oth"){
			var type = others[num]["type"];
			if(type == 0){//head
				if(helmet != 10){
					$('#inventory').append('<option value = "oth' + helmet + '">' + others[helmet]["name"] + '</option>');
					strip("head");
				}
				helmet = num;
				others[num].yay();
				$('#helmet').replaceWith('<b id = "helmet">' + others[num]["name"] + ' (' + others[num]["rar"] + ')</b>');
				updating();
				$('#headUnequip').show();
			}
			else if(type == 1){//comm
				if(commpiece != 0){
					$('#inventory').append('<option value = "oth' + commpiece + '">' + others[commpiece]["name"] + '</option>');
					strip("comm");
				}
				commpiece = num;
				others[num].yay();
				$('#comm').replaceWith('<b id = "comm">' + others[num]["name"] + ' (' + others[num]["rar"] + ')</b>');
				updating();
				$('#commmUnequip').show();
			}
			else if(type == 2){//bag
				if(backpack != 0){
					$('#inventory').append('<option value = "oth' + backpack + '">' + others[backpack]["name"] + '</option>');
					strip("bag");
				}
				backpack = num;
				others[num].yay();
				updating();
				$('#bagName').replaceWith('<b id = "bagName">' + others[num]["name"] + ' (' + others[num]["rar"] + ')</b>');
				$('#ammoBag').replaceWith('<b id = "ammoBag">' + canback[0] + '</b>');
				$('#oneBag').replaceWith('<b id = "oneBag">' + canback[1] + '</b>');
				$('#twoBag').replaceWith('<b id = "twoBag">' + canback[2] + '</b>');
			}
			else if(type == 3){//harness
				if(harness != 0){
					$('#inventory').append('<option value = "oth' + harness + '">' + others[harness]["name"] + '</option>');
					strip("har");
				}
				harness = num;
				others[num].yay();
				updating();
				$('#harnessName').replaceWith('<b id = "harnessName">' + others[num]["name"] + ' (' + others[num]["rar"] + ')</b>');
				$('#ammoHar').replaceWith('<b id = "ammoHar">' + canhar[0] + '</b>');
				$('#oneHar').replaceWith('<b id = "oneHar">' + canhar[1] + '</b>');
				$('#twoHar').replaceWith('<b id = "twoHar">' + canhar[2] + '</b>');
			}
			else if(type == 4){//shield
				if(rightHand < 46){//close combat can be used with shield
					var righttype = closeCombat[rightHand]["type"];
					if((righttype == 0 || righttype == 1) && dualpistol1 == 1){
						if(leftHand < 150){
							$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
							strip("left");
						}
						else if(leftHand != 200){
							$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
							strip("shield");
						}
						leftHand = num;
						others[num].yay();
						updating();
						$('#leftHand').replaceWith('<b id = "leftHand">' + others[num]["name"] + ' (' + others[num]["rar"] + ')</b>');
						return;
					}
					else if((righttype == 2 || righttype == 3 || righttype == 4) && dualpistol2 == 1){
						if(leftHand < 150){
							$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
							strip("left");
						}
						else if(leftHand != 200){
							$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
							strip("shield");
						}
						leftHand = num;
						others[num].yay();
						updating();
						$('#leftHand').replaceWith('<b id = "leftHand">' + others[num]["name"] + ' (' + others[num]["rar"] + ')</b>');
						return;
					}
				}
				alert("Cannot equip shield");
				$('#inventory').append('<option value = "oth' + num + '">' + others[num]["name"] + '</option>');
			}
			else{//divine
				if(divineHeld != 0){
					$('#inventory').append('<option value = "oth' + divineHeld + '">' + others[divineHeld]["name"] + '</option>');
					strip("divine");
				}
				divineHeld = num;
				others[num].yay();
				$('#divineHeld').replaceWith('<b id = "divineHeld">' + others[num]["name"] + ' (' + others[num]["rar"] + ')</b>');
				updating();
			}
		}
		else if(code == "amm"){
			var ammtype = ammo[num]["type"];
			if(((rightHand < 150 && rightHand > 45) || (rightHand < 200 && rightHand > 175)) && leftHand < 150){//dual heavy
				if(confirm("Load right hand weapon?")){//loading right hand
					var topass = rangedCombat[rightHand]["type"];
					topass -= 5;
					if(rangedCombat[rightHand]["ammo"] == ammtype && ammo[num]["ammo"][topass] != 0){
						loadranged(1, num, topass);
						return;
					}
				}
				else{//loading left weapon
					var topass = rangedCombat[leftHand]["type"];
					topass -= 5;
					if(rangedCombat[leftHand]["ammo"] == ammtype && ammo[num]["ammo"][topass] != 0){
						loadranged(0, num, topass);
						return;
					}
				}
			}
			else if((rightHand < 150 && rightHand > 45) || (rightHand < 200 && rightHand > 175)){//right hand weapon
				var topass = rangedCombat[rightHand]["type"];
				topass -= 5;
				if(rangedCombat[rightHand]["ammo"] == ammtype && ammo[num]["ammo"][topass] != 0){
					loadranged(1, num, topass);
					return;
				}
			}
			else if(leftHand < 150){//left hand weapon
				var topass = rangedCombat[leftHand]["type"];
				topass -= 5;
				if(rangedCombat[leftHand]["ammo"] == ammtype && ammo[num]["ammo"][topass] != 0){
					loadranged(0, num, topass);
					return;
				}
			}
			alert("Cannot load ammo");
			$('#inventory').append('<option value = "amm' + num + '">' + ammo[num]["name"] + '</option>');
		}
	})
	$('#addspecial').click(function(){
		var id = prompt("Input special item id:");
		id = Number(id);
		if(isNaN(id) || id > 20){
			alert("Invalid id entered");
			return;
		}
		alert(specials[id]["name"] + ' successfully added.')
		$('#inventory').append('<option value = "' + specials[id]["type"] + '">' + specials[id]["name"] + '</option>');
	})
	//Item Unequips
	$('#armUnequip').click(function(){//Removing armour and putting it in inventory
		if(wearing != 50){
			$('#inventory').append('<option value = "arm' + wearing + '">' + clothes[wearing]["name"] + '</option>');
			strip("arm");
		}
	})
	$('#rightUnequip').click(function(){
		if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){
			$('#inventory').append('<option value = "clo' + rightHand + '">' + closeCombat[rightHand]["name"] + '</option>');
			strip("right");
		}
		else if(rightHand != 200){
			$('#inventory').append('<option value = "ran' + rightHand + '">' + rangedCombat[rightHand]["name"] + '</option>');
			strip("right");
		}
	})
	$('#leftUnequip').click(function(){
		if(leftHand < 150){
			$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
			strip("left");
		}
		else if(leftHand != 200){//Stripping shield
			$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
			strip("shield");
		}
	})
	$('#upgUnequip').click(function(){
		if(armourMods[6].length == 2){
			if(armourMods[6][0] !=0 && armourMods[6][1] == 0){
				strip("upg1");
			}
			else if(armourMods[6][1] !=0 && armourMods[6][0] == 0){
				strip("upg2");
			}
			else if(armourMods[6][1] !=0 && armourMods[6][0] != 0){
				if(confirm('Remove ' + clothesMods[Math.floor(armourMods[6][0]/10)]["name"] + ' (' + clothesMods[Math.floor(armourMods[6][0]/10)][armourMods[6][0]%10]["rar"] + ') ?')){
					strip("upg1");
				}
				else{
					strip("upg2");
				}
			}
		}
		else if(armourMods[4] != 0 || armourMods[5] != 0 || armourMods[6] != 0){
			strip("upg");
		}
	})
	$('#jetunequip').click(function(){
		if(armourMods[7] != 0){
			$('#jetpack').replaceWith('<b id = "jetpack">None</b>');
			strip("jet");
		}
	})
	$('#wuUnequip').click(function(){
		var temp = prompt("Would you like to unequip the Sight (1), Suppressor (2), Accessory (3) or Venom (4)? Enter number below:");
		temp = Number(temp);
		if(isNaN(temp) == true){
			alert("Wrong input");
			return;
		}
		temp--;
		if(weaponMods[temp] != 0){strip(temp);}
	})
	$('#forgetSpell').click(function(){
		var temp = prompt("Enter ID of spell you want to forget:");
		temp = Number(temp);
		if(isNaN(temp) == true){
			alert("Incorrect ID entered");
			return;
		}
		$('#s' + temp).remove();
		for(var i = 0; i < hasspells.length; i++){
			if(hasspells[i] == temp){
				hasspells.splice(i, 1);
			}
		}
	})
	$('#headUnequip').click(function(){
		if(helmet != 10){
			$('#inventory').append('<option value = "oth' + helmet + '">' + others[helmet]["name"] + '</option>');
			strip("head");
		}
	})
	$('#commmUnequip').click(function(){
		if(commpiece != 0){
			$('#inventory').append('<option value = "oth' + commpiece + '">' + others[commpiece]["name"] + '</option>');
			strip("comm");
		}
	})
	$('#divineUnequip').click(function(){
		if(divineHeld != 0){
			$('#inventory').append('<option value = "oth' + divineHeld + '">' + others[divineHeld]["name"] + '</option>');
			strip("divine");
		}
	})
	//Backpack actions
	$('#bagunequip').click(function(){
		if(backpack != 0){
			$('#inventory').append('<option value = "oth' + backpack + '">' + others[backpack]["name"] + '</option>');
			strip("bag");
		}
	})
	$('#addbag').click(function(){
		var temp = "";
		$('#inventory option:selected').each(function(){
			temp += $(this).val();
		})
		var code = temp[0] + temp[1] + temp[2];//type of item
		var num = temp.slice(3, temp.length);//id of item
		num = Number(num);
		if(code == "amm"){
			var i = 0;
			for (i = 0; i < canback[0]; i++){
				if(inback[0][i] == 0 && ammo[num]["two"] == 0){
					inback[0][i] = num;
					$("#inventory option[value='" + code + num + "']:first").remove();
					$('#backpack').append('<option value = "0' + i + '">' + ammo[num]["name"] + '</option>');
					return;
				}
				else if(ammo[num]["two"] == 1 && inback[0][i] == 0 && inback[0][i+1] == 0 && i != (canback[0]-1)){
					inback[0][i] = num;
					inback[0][i+1] = 99;
					$("#inventory option[value='" + code + num + "']:first").remove();
					$('#backpack').append('<option value = "0' + i + '">' + ammo[num]["name"] + '</option>');
					return;
				}
			}
		}
		else if(code == "clo"){
			var twohands = closeCombat[num]["two"];
			if(twohands == 1 && canback[2] == 1 && inback[2][0] == 200){
				inback[2][0] = num;
				$("#inventory option[value='" + code + num + "']:first").remove();
				$('#backpack').append('<option value = "20">' + closeCombat[num]["name"] + '</option>');
				return;
			}
			else if(twohands == 0){
				var i = 0;
				for (i = 0; i < canback[1]; i++){
					if(inback[1][i] == 200){
						inback[1][i] = num;
						$("#inventory option[value='" + code + num + "']:first").remove();
						$('#backpack').append('<option value = "1' + i + '">' + closeCombat[num]["name"] + '</option>');
						return;
					}
				}
			}
		}
		else if(code == "ran"){
			var twohands = rangedCombat[num]["two"];
			if(twohands == 1 && canback[2] == 1 && inback[2][0] == 200){
				inback[2][0] = num;
				$("#inventory option[value='" + code + num + "']:first").remove();
				$('#backpack').append('<option value = "20">' + rangedCombat[num]["name"] + '</option>');
				return;
			}
			else if(twohands == 0){
				var i = 0;
				for (i = 0; i < canback[1]; i++){
					if(inback[1][i] == 200){
						inback[1][i] = num;
						$("#inventory option[value='" + code + num + "']:first").remove();
						$('#backpack').append('<option value = "1' + i + '">' + rangedCombat[num]["name"] + '</option>');
						return;
					}
				}
			}
		}
		alert('Cannot put into backpack');
	})
	$('#removebag').click(function(){
		var temp = "";
		$('#backpack option:selected').each(function(){
			temp += $(this).val();
			$(this).remove();
		})
		var code = temp[0];
		var num = temp.slice(1, temp.length);
		var id = inback[code][num];
		if(code == 0){
			$('#inventory').append('<option value = "amm' + id + '">' + ammo[id]["name"] + '</option>');
			inback[code][num] = 0;
		}
		else if(code == 1 || code == 2){
			if(id < 46){
				$('#inventory').append('<option value = "clo' + id + '">' + closeCombat[id]["name"] + '</option>');
			}
			else{
				$('#inventory').append('<option value = "ran' + id + '">' + rangedCombat[id]["name"] + '</option>');
			}
			inback[code][num] = 200;
		}
	})
	$('#equipbag').click(function(){
		var temp = "";
		$('#backpack option:selected').each(function(){
			temp += $(this).val();
			$(this).remove();
		})
		var code = Number(temp[0]);
		var num = Number(temp.slice(1, temp.length));
		var id = inback[code][num];
		if(code == 0){
			var ammtype = ammo[id]["type"];
			var occupiestwo = ammo[id]["two"];
			if(((rightHand < 150 && rightHand > 45) || (rightHand < 200 && rightHand > 175)) && leftHand < 150){//dual heavy
				if(confirm("Load right hand weapon?")){//loading right hand
					var topass = rangedCombat[rightHand]["type"];
					topass -= 5;
					if(rangedCombat[rightHand]["ammo"] == ammtype && ammo[id]["ammo"][topass] != 0){
						loadranged(1, id, topass);
						inback[code][num] = 0;
						if(occupiestwo == 1){
							inback[code][num+1] = 0;
						}
						return;
					}
				}
				else{//loading left weapon
					var topass = rangedCombat[leftHand]["type"];
					topass -= 5;
					if(rangedCombat[leftHand]["ammo"] == ammtype && ammo[id]["ammo"][topass] != 0){
						loadranged(0, id, topass);
						inback[code][num] = 0;
						if(occupiestwo == 1){
							inback[code][num+1] = 0;
						}
						return;
					}
				}
			}
			else if((rightHand < 150 && rightHand > 45) || (rightHand < 200 && rightHand > 175)){//right hand weapon
				var topass = rangedCombat[rightHand]["type"];
				topass -= 5;
				if(rangedCombat[rightHand]["ammo"] == ammtype && ammo[id]["ammo"][topass] != 0){
					loadranged(1, id, topass);
					inback[code][num] = 0;
					if(occupiestwo == 1){
						inback[code][num+1] = 0;
					}
					return;
				}
			}
			else if(leftHand < 150){//left hand weapon
				var topass = rangedCombat[leftHand]["type"];
				topass -= 5;
				if(rangedCombat[leftHand]["ammo"] == ammtype && ammo[id]["ammo"][topass] != 0){
					loadranged(0, id, topass);
					inback[code][num] = 0;
					if(occupiestwo == 1){
						inback[code][num+1] = 0;
					}
					return;
				}
			}
			alert("Cannot load ammo");
			$('#backpack').append('<option value = "' + code + num + '">' + ammo[id]["name"] + '</option>');
		}
		else{
			if(id < 46){
				var twohanded = closeCombat[id]["two"];
				var weaptype = closeCombat[id]["type"];
				if(weaptype == 3){//checking to see if enough strength
					if(closeCombat[id]["min"] > str){
						alert("Cannot equip!");
						$('#backpack').append('<option value = "' + code + num + '">' + closeCombat[id]["name"] + '</option>');
						return;
					}
				}
				//Stripping
				if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){//Stripping right arm close weapon
					$('#inventory').append('<option value = "clo' + rightHand + '">' + closeCombat[rightHand]["name"] + '</option>');
					strip("right");
				}
				else if(rightHand != 200){//Stripping right arm ranged weapon
					$('#inventory').append('<option value = "ran' + rightHand + '">' + rangedCombat[rightHand]["name"] + '</option>');
					strip("right");
				}
				if((leftHand < 150 || (leftHand > 175 && leftHand < 200)) && twohanded == 1){//Stripping left arm if two handed
					$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
					strip("left");
				}
				else if(leftHand != 200 && twohanded == 1){//Stripping shield
					$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
					strip("shield");
				}
				//Equipping
				if(weaptype != 3 && twohanded == 0){//Equipping to right hand one handed
					rightHand = id;
					updateChar("clo1");
				}
				else if(weaptype != 3){//two handed weapons
					rightHand = id;
					updateChar("clo2");
				}
				else{//hammers
					if(closeCombat[num]["two"] <= str){//One handed hammer
						rightHand = id;
						updateChar("clo1");
					}
					else{//two handed hammer
						rightHand = id;
						updateChar("clo2");
					}
				}
			}
			else{
				var twohanded = rangedCombat[id]["two"];
				var weaptype = rangedCombat[id]["type"];
				if(dualheavy == 1 && weaptype == 7){//
					var whichhand = confirm("Equip weapon to right hand?");
					if(whichhand == true){//Equipping heavy weapon to right hand
						if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){//Stripping right arm close weapon
							$('#inventory').append('<option value = "clo' + rightHand + '">' + closeCombat[rightHand]["name"] + '</option>');
							strip("right");
						}
						else if(rightHand != 200){//Stripping right arm ranged weapon
							$('#inventory').append('<option value = "ran' + rightHand + '">' + rangedCombat[rightHand]["name"] + '</option>');
							strip("right");
						}
						rightHand = id;
						updateChar("ran1");
					}
					else{//Equipping weapon to left hand
						if(leftHand < 150 || (leftHand > 175 && leftHand < 200)){
							$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
							strip("left");
						}
						else if(leftHand != 200){//Stripping shield
							$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
							strip("shield");
						}
						leftHand = id;
						updateChar("left");
					}
					inback[code][num] = 200;
					return;
				}
				else if((rightHand < 46 || (rightHand < 176 && rightHand > 110)) && (dualpistol1 == 1 || dualpistol2 == 1) && weaptype == 5){//equipping pistol to left
					var righttype = closeCombat[rightHand]["type"];
					if(dualpistol1 == 1 && (righttype == 0 || righttype == 1 || righttype == 4)){//dagger/sword/staff with pistol
						if(leftHand < 150 || (leftHand > 175 && leftHand < 200)){
							$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
							strip("left");
						}
						else if(leftHand != 200){//Stripping shield
							$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
							strip("shield");
						}
						leftHand = id;
						updateChar("left");
						inback[code][num] = 200;
						return;
					}
					else if(dualpistol2 == 2 && (righttype == 2 || righttype == 3)){//spear/hammer with pistol
						if(leftHand < 150 || (leftHand > 175 && leftHand < 200)){
							$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
							strip("left");
						}
						else if(leftHand != 200){//Stripping shield
							$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
							strip("shield");
						}
						leftHand = id;
						updateChar("left");
						inback[code][num] = 200;
						return;
					}
				}
				else{//regular equipping
					if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){//Stripping right arm close weapon
						$('#inventory').append('<option value = "clo' + rightHand + '">' + closeCombat[rightHand]["name"] + '</option>');
						strip("right");
					}
					else if(rightHand != 200){//Stripping right arm ranged weapon
						$('#inventory').append('<option value = "ran' + rightHand + '">' + rangedCombat[rightHand]["name"] + '</option>');
						strip("right");
					}
					if(leftHand < 150 && twohanded == 1){
						$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
						strip("left");
					}
					else if(leftHand != 200 && twohanded == 1){//Stripping shield
						$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
						strip("shield");
					}
					if(twohanded == 0){//one handed
						rightHand = id;
						updateChar("ran1");
					}
					else{//two handed
						rightHand = id;
						updateChar("ran2");
					}
				}
			}
		}
		inback[code][num] = 200;
	})
	$('#movehar').click(function(){
		var temp = "";
		$('#backpack option:selected').each(function(){
			temp += $(this).val();
			$(this).remove();
		})
		var code = Number(temp[0]);
		var num = Number(temp.slice(1, temp.length));
		var id = inback[code][num];
		if(code == 0){
			var occupiestwo = ammo[id]["two"];
			for(var i = 0; i < canhar[0]; i++){
				if(inhar[0][i] == 0 && occupiestwo == 0){
					inhar[0][i] = id;
					inback[0][num] = 0;
					$('#harness').append('<option value = "' + code + i + '">' + ammo[id]["name"] + '</option>');
					return;
				}
				else if(inhar[0][i] == 0 && inhar[0][i+1] == 0 && occupiestwo == 1){
					inhar[0][i] = id;
					inhar[0][i+1] = 99;
					inback[0][num] = 0;
					inback[0][num+1] = 0;
					$('#harness').append('<option value = "' + code + i + '">' + ammo[id]["name"] + '</option>');
					return;
				}
			}
			alert("Cannot move to harness");
			$('#backpack').append('<option value = "' + code + num + '">' + ammo[id]["name"] + '</option>');
			return;
		}
		if(id < 46){
			for(var i = 0; i < canhar[code]; i++){
				if(inhar[code][i] == 200){
					inhar[code][i] = id;
					inback[code][num] = 200;
					$('#harness').append('<option value = "' + code + i + '">' + closeCombat[id]["name"] + '</option>');
					return;
				}
			}
			alert("Cannot move to harness");
			$('#backpack').append('<option value = "' + code + num + '">' + closeCombat[id]["name"] + '</option>');
			return;
		}
		else{
			for(var i = 0; i < canhar[code]; i++){
				if(inhar[code][i] == 200){
					inhar[code][i] = id;
					inback[code][num] = 200;
					$('#harness').append('<option value = "' + code + i + '">' + rangedCombat[id]["name"] + '</option>');
					return;
				}
			}
			alert("Cannot move to harness");
			$('#backpack').append('<option value = "' + code + num + '">' + rangedCombat[id]["name"] + '</option>');
			return;
		}
	})
	//Harness actions
	$('#harunequip').click(function(){
		if(harness != 0){
			$('#inventory').append('<option value = "oth' + harness + '">' + others[harness]["name"] + '</option>');
			strip("har");
		}
	})
	$('#addhar').click(function(){
		var temp = "";
		$('#inventory option:selected').each(function(){
			temp += $(this).val();
		})
		var code = temp[0] + temp[1] + temp[2];//type of item
		var num = temp.slice(3, temp.length);//id of item
		num = Number(num);
		if(code == "amm"){
			var i = 0;
			for (i = 0; i < canhar[0]; i++){
				if(inhar[0][i] == 0 && ammo[num]["two"] == 0){
					inhar[0][i] = num;
					$("#inventory option[value='" + code + num + "']:first").remove();
					$('#harness').append('<option value = "0' + i + '">' + ammo[num]["name"] + '</option>');
					return;
				}
				else if(ammo[num]["two"] == 1 && inhar[0][i] == 0 && inhar[0][i+1] == 0 && i != (canhar[0]-1)){
					inhar[0][i] = num;
					inhar[0][i+1] = 99;
					$("#inventory option[value='" + code + num + "']:first").remove();
					$('#harness').append('<option value = "0' + i + '">' + ammo[num]["name"] + '</option>');
					return;
				}
			}
		}
		else if(code == "clo"){
			var twohands = closeCombat[num]["two"];
			if(twohands == 1 && canhar[2] == 1 && inhar[2][0] == 200 && inhar[1][0] == 200){
				inhar[2][0] = num;
				$("#inventory option[value='" + code + num + "']:first").remove();
				$('#harness').append('<option value = "20">' + closeCombat[num]["name"] + '</option>');
				return;
			}
			else if(twohands == 0 && canhar[1] == 1 && inhar[1][0] == 200){
				if(canhar[2] == 1){
					if(inhar[2][0] != 200){alert('Cannot put into harness');return;}
				}
				inhar[1][0] = num;
				$("#inventory option[value='" + code + num + "']:first").remove();
				$('#harness').append('<option value = "10">' + closeCombat[num]["name"] + '</option>');
				return;
			}
		}
		else if(code == "ran"){
			var twohands = rangedCombat[num]["two"];
			if(twohands == 1 && canhar[2] == 1 && inhar[2][0] == 200 && inhar[1][0] == 200){
				inhar[2][0] = num;
				$("#inventory option[value='" + code + num + "']:first").remove();
				$('#harness').append('<option value = "20">' + rangedCombat[num]["name"] + '</option>');
				return;
			}
			else if(twohands == 0 && canhar[1] == 1 && inhar[1][0] == 200){
				if(canhar[2] == 1){
					if(inhar[2][0] != 200){alert('Cannot put into harness');return;}
				}
				inhar[1][0] = num;
				$("#inventory option[value='" + code + num + "']:first").remove();
				$('#harness').append('<option value = "10">' + rangedCombat[num]["name"] + '</option>');
				return;
			}
		}
		alert('Cannot put into harness');
	})
	$('#removehar').click(function(){
		var temp = "";
		$('#harness option:selected').each(function(){
			temp += $(this).val();
			$(this).remove();
		})
		var code = temp[0];
		var num = temp.slice(1, temp.length);
		var id = inhar[code][num];
		if(code == 0){
			$('#inventory').append('<option value = "amm' + id + '">' + ammo[id]["name"] + '</option>');
			inhar[code][num] = 0;
		}
		else if(code == 1 || code == 2){
			if(id < 46){
				$('#inventory').append('<option value = "clo' + id + '">' + closeCombat[id]["name"] + '</option>');
			}
			else{
				$('#inventory').append('<option value = "ran' + id + '">' + rangedCombat[id]["name"] + '</option>');
			}
			inhar[code][num] = 200;
		}
	})
	$('#equiphar').click(function(){
		var temp = "";
		$('#harness option:selected').each(function(){
			temp += $(this).val();
			$(this).remove();
		})
		var code = Number(temp[0]);
		var num = Number(temp.slice(1, temp.length));
		var id = inhar[code][num];
		if(code == 0){
			var ammtype = ammo[id]["type"];
			var occupiestwo = ammo[id]["two"];
			if(((rightHand < 150 && rightHand > 45) || (rightHand < 200 && rightHand > 175)) && leftHand < 150){//dual heavy
				if(confirm("Load right hand weapon?")){//loading right hand
					var topass = rangedCombat[rightHand]["type"];
					topass -= 5;
					if(rangedCombat[rightHand]["ammo"] == ammtype && ammo[id]["ammo"][topass] != 0){
						loadranged(1, id, topass);
						inhar[code][num] = 0;
						if(occupiestwo == 1){
							inhar[code][num+1] = 0;
						}
						return;
					}
				}
				else{//loading left weapon
					var topass = rangedCombat[leftHand]["type"];
					topass -= 5;
					if(rangedCombat[leftHand]["ammo"] == ammtype && ammo[id]["ammo"][topass] != 0){
						loadranged(0, id, topass);
						inhar[code][num] = 0;
						if(occupiestwo == 1){
							inhar[code][num+1] = 0;
						}
						return;
					}
				}
			}
			else if((rightHand < 150 && rightHand > 45) || (rightHand < 200 && rightHand > 175)){//right hand weapon
				var topass = rangedCombat[rightHand]["type"];
				topass -= 5;
				if(rangedCombat[rightHand]["ammo"] == ammtype && ammo[id]["ammo"][topass] != 0){
					loadranged(1, id, topass);
					inhar[code][num] = 0;
					if(occupiestwo == 1){
						inhar[code][num+1] = 0;
					}
					return;
				}
			}
			else if(leftHand < 150){//left hand weapon
				var topass = rangedCombat[leftHand]["type"];
				topass -= 5;
				if(rangedCombat[leftHand]["ammo"] == ammtype && ammo[id]["ammo"][topass] != 0){
					loadranged(0, id, topass);
					inhar[code][num] = 0;
					if(occupiestwo == 1){
						inhar[code][num+1] = 0;
					}
					return;
				}
			}
			alert("Cannot load ammo");
			$('#harness').append('<option value = "' + code + num + '">' + ammo[id]["name"] + '</option>');
		}
		else{
			if(id < 46){
				var twohanded = closeCombat[id]["two"];
				var weaptype = closeCombat[id]["type"];
				if(weaptype == 3){//checking to see if enough strength
					if(closeCombat[id]["min"] > str){
						alert("Cannot equip!");
						$('#harness').append('<option value = "' + code + num + '">' + closeCombat[id]["name"] + '</option>');
						return;
					}
				}
				//Stripping
				if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){//Stripping right arm close weapon
					$('#inventory').append('<option value = "clo' + rightHand + '">' + closeCombat[rightHand]["name"] + '</option>');
					strip("right");
				}
				else if(rightHand != 200){//Stripping right arm ranged weapon
					$('#inventory').append('<option value = "ran' + rightHand + '">' + rangedCombat[rightHand]["name"] + '</option>');
					strip("right");
				}
				if((leftHand < 150 || (leftHand > 175 && leftHand < 200)) && twohanded == 1){//Stripping left arm if two handed
					$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
					strip("left");
				}
				else if(leftHand != 200 && twohanded == 1){//Stripping shield
					$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
					strip("shield");
				}
				//Equipping
				if(weaptype != 3 && twohanded == 0){//Equipping to right hand one handed
					rightHand = id;
					updateChar("clo1");
				}
				else if(weaptype != 3){//two handed weapons
					rightHand = id;
					updateChar("clo2");
				}
				else{//hammers
					if(closeCombat[num]["two"] <= str){//One handed hammer
						rightHand = id;
						updateChar("clo1");
					}
					else{//two handed hammer
						rightHand = id;
						updateChar("clo2");
					}
				}
			}
			else{
				var twohanded = rangedCombat[id]["two"];
				var weaptype = rangedCombat[id]["type"];
				if(dualheavy == 1 && weaptype == 7){//
					var whichhand = confirm("Equip weapon to right hand?");
					if(whichhand == true){//Equipping heavy weapon to right hand
						if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){//Stripping right arm close weapon
							$('#inventory').append('<option value = "clo' + rightHand + '">' + closeCombat[rightHand]["name"] + '</option>');
							strip("right");
						}
						else if(rightHand != 200){//Stripping right arm ranged weapon
							$('#inventory').append('<option value = "ran' + rightHand + '">' + rangedCombat[rightHand]["name"] + '</option>');
							strip("right");
						}
						rightHand = id;
						updateChar("ran1");
					}
					else{//Equipping weapon to left hand
						if(leftHand < 150 || (leftHand > 175 && leftHand < 200)){
							$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
							strip("left");
						}
						else if(leftHand != 200){//Stripping shield
							$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
							strip("shield");
						}
						leftHand = id;
						updateChar("left");
					}
					inhar[code][num] = 200;
					return;
				}
				else if((rightHand < 46 || (rightHand < 176 && rightHand > 110)) && (dualpistol1 == 1 || dualpistol2 == 1) && weaptype == 5){//equipping pistol to left
					var righttype = closeCombat[rightHand]["type"];
					if(dualpistol1 == 1 && (righttype == 0 || righttype == 1 || righttype == 4)){//dagger/sword/staff with pistol
						if(leftHand < 150 || (leftHand > 175 && leftHand < 200)){
							$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
							strip("left");
						}
						else if(leftHand != 200){//Stripping shield
							$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
							strip("shield");
						}
						leftHand = id;
						updateChar("left");
						inhar[code][num] = 200;
						return;
					}
					else if(dualpistol2 == 2 && (righttype == 2 || righttype == 3)){//spear/hammer with pistol
						if(leftHand < 150 || (leftHand > 175 && leftHand < 200)){
							$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
							strip("left");
						}
						else if(leftHand != 200){//Stripping shield
							$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
							strip("shield");
						}
						leftHand = id;
						updateChar("left");
						inhar[code][num] = 200;
						return;
					}
				}
				else{//regular equipping
					if(rightHand < 46 || (rightHand < 176 && rightHand > 110)){//Stripping right arm close weapon
						$('#inventory').append('<option value = "clo' + rightHand + '">' + closeCombat[rightHand]["name"] + '</option>');
						strip("right");
					}
					else if(rightHand != 200){//Stripping right arm ranged weapon
						$('#inventory').append('<option value = "ran' + rightHand + '">' + rangedCombat[rightHand]["name"] + '</option>');
						strip("right");
					}
					if(leftHand < 150 && twohanded == 1){
						$('#inventory').append('<option value = "ran' + leftHand + '">' + rangedCombat[leftHand]["name"] + '</option>');
						strip("left");
					}
					else if(leftHand != 200 && twohanded == 1){//Stripping shield
						$('#inventory').append('<option value = "oth' + leftHand + '">' + others[leftHand]["name"] + '</option>');
						strip("shield");
					}
					if(twohanded == 0){//one handed
						rightHand = id;
						updateChar("ran1");
					}
					else{//two handed
						rightHand = id;
						updateChar("ran2");
					}
				}
			}
		}
		inhar[code][num] = 200;
	})
	$('#movebag').click(function(){
		var temp = "";
		$('#harness option:selected').each(function(){
			temp += $(this).val();
			$(this).remove();
		})
		var code = Number(temp[0]);
		var num = Number(temp.slice(1, temp.length));
		var id = inhar[code][num];
		if(code == 0){
			var occupiestwo = ammo[id]["two"];
			for(var i = 0; i < canback[0]; i++){
				if(inback[0][i] == 0 && occupiestwo == 0){
					inback[0][i] = id;
					inhar[0][num] = 0;
					$('#backpack').append('<option value = "' + code + i + '">' + ammo[id]["name"] + '</option>');
					return;
				}
				else if(inback[0][i] == 0 && inback[0][i+1] == 0 && occupiestwo == 1){
					inback[0][i] = id;
					inback[0][i+1] = 99;
					inhar[0][num] = 0;
					inhar[0][num+1] = 0;
					$('#backpack').append('<option value = "' + code + i + '">' + ammo[id]["name"] + '</option>');
					return;
				}
			}
			alert("Cannot move to backpack");
			$('#harness').append('<option value = "' + code + num + '">' + ammo[id]["name"] + '</option>');
			return;
		}
		if(id < 46){
			for(var i = 0; i < canback[code]; i++){
				if(inback[code][i] == 200){
					inback[code][i] = id;
					inhar[code][num] = 200;
					$('#backpack').append('<option value = "' + code + i + '">' + closeCombat[id]["name"] + '</option>');
					return;
				}
			}
			alert("Cannot move to backpack");
			$('#harness').append('<option value = "' + code + num + '">' + closeCombat[id]["name"] + '</option>');
			return;
		}
		else{
			for(var i = 0; i < canback[code]; i++){
				if(inback[code][i] == 200){
					inback[code][i] = id;
					inhar[code][num] = 200;
					$('#backpack').append('<option value = "' + code + i + '">' + rangedCombat[id]["name"] + '</option>');
					return;
				}
			}
			alert("Cannot move to backpack");
			$('#harness').append('<option value = "' + code + num + '">' + rangedCombat[id]["name"] + '</option>');
			return;
		}
	})
	$('#grenthrow').click(function(){
		var temp = "";
		$('#harness option:selected').each(function(){
			temp += $(this).val();
		})
		var code = Number(temp[0]);
		var num = Number(temp.slice(1, temp.length));
		var id = inhar[code][num];
		if(code != 0){
			alert("Not a grenade!");
		}
		if(ammo[id]["type"] == 6){
			$('#harness option[value=' + temp + ']').remove();
			alert("Bombs away!");
			return;
		}
		alert("Not a grenade!");
	})
	//Training
	$('#buyTrain').click(function(){
		var temp1 = "";
		$('#training option:selected').each(function(){
			temp1 += $(this).val();
		})
		var temp2 = "";
		$('#traintype option:selected').each(function(){
			temp2 += $(this).val();
		})
		temp1 = Number(temp1);
		temp2 = Number(temp2);
		if(temp1 == 0 && corr < 5){
			alert("Insufficient Corruption");
			return;
		}
		else if(temp1 == 1 && training[temp1][temp2]["end"] > eval(training[temp1][temp2]["stat"])){
			alert("Cannot complete training");
			return;
		}
		else if(temp1 == 2){
			var kno = prompt("What branch of knowledge would you like to train: Xenos (1), Warp (2), History (3) or Geography (4)? Enter number below:");
			kno--;
			if(isNaN(kno) == true){
				alert("Strange number entered");
				return;
			}
			else if(eval(training[temp1][temp2][kno]["stat"]) > training[temp1][temp2][kno]["end"]){
				alert("Too much knowledge");
				return;
			}
			if(training[temp1][temp2]["cost"] > gold){
				alert("Not enough gold");
				return;
			}
			var reduced = confirm("Try to get discount?");
			if(reduced == true){
				var obtained = confirm("Roll for discount. Did you pass?");
				if(obtained == true){
					gold -= Math.floor(training[temp1][temp2]["cost"]/2);
					$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
				}
				else{
					gold -= training[temp1][temp2]["cost"];
					$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
					return;
				}
			}
			else{
				gold -= training[temp1][temp2]["cost"];
				$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
			}
			training[temp1][temp2][kno].yay();
			updating();
			return;
		}
		else if(temp1 == 7 && (temp2*3+3) > perc){
			alert("No such course discovered");
			return;
		}
		else if(training[temp1][temp2]["end"] < eval(training[temp1][temp2]["stat"])){
			alert("Cannot complete training");
			return;
		}
		if(training[temp1][temp2]["cost"] > gold){
			alert("Not enough gold");
			return;
		}
		var reduced = confirm("Try to get discount?");
		if(reduced == true){
			var obtained = confirm("Roll for discount. Did you pass?");
			if(obtained == true){
				gold -= Math.floor(training[temp1][temp2]["cost"]/2);
				$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
			}
			else{
				gold -= training[temp1][temp2]["cost"];
				$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
				return;
			}
		}
		else{
			gold -= training[temp1][temp2]["cost"];
			$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		}
		training[temp1][temp2].yay();
		updating();
	})
	$('#buyPerk').click(function(){
		var temp = "";
		$('#perks option:selected').each(function(){
			temp += $(this).val();
		})
		temp = Number(temp);
		if(gold < perks[temp]["cost"]){
			alert("Not enough gold!");
			return;
		}
		if(!(eval(perks[temp]["check1"]) >= perks[temp]["pass1"] || eval(perks[temp]["check2"]) >= perks[temp]["pass2"]) && temp < 31 && temp > 27){
			alert("Stat requirements not met");
			return;
		}
		else if((eval(perks[temp]["check1"]) < perks[temp]["pass1"] || eval(perks[temp]["check2"]) < perks[temp]["pass2"]) && (temp >= 31 || temp <= 27)){
			alert("Stat requirements not met");
			return;
		}
		if(perks[temp]["req"] != 99 && hasperks.length > 0){
			var checking = 0;
			for (var i = 0; i < hasperks.length; i++){
				if(hasperks[i] == perks[temp]["req"]){checking++;}
			}
			if(checking == 0){
				alert("Perk requirements not met");
				return;
			}
		}
		else if(temp == 27){
			var checking = 0;
			for (var i = 0; i < hasperks.length; i++){
				if(hasperks[i] == 26){checking++;}
				else if(hasperks[i] == 17){checking++;}
				else if(hasperks[i] == 20){checking++;}
				else if(hasperks[i] == 23){checking++;}
			}
			if(checking < 2){
				alert("Perk requirements not met");
				return;
			}
		}
		gold -= perks[temp]["cost"];
		$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		hasperks.push(temp);
		perks[temp].yay();
		updating();
		$('#perklist').append('<li>' + perks[temp]["name"] + ': ' + perks[temp]["note"] + '</li>');
		$('#perks option[value=' + temp + ']').toggle('disabled').prop('selected', false);
		$('#perks option[value=' + (temp+1) + ']').prop('selected', true);
		if(hasperks.length == 29){
			$('#buyPerk').hide();
			$('#perks').hide();
		}
		else if(schoolE == 0 && hasperks.length == 22){
			$('#buyPerk').hide();
			$('#perks').hide();
		}
	})
	//Firing
	$('#fireNormal').click(function(){
		if(fires > currentammo){
			alert("Reload");
			return;
		}
		currentammo -= fires;
		$('#currentBullet').replaceWith('<b id = "currentBullet">' + currentammo + '</b>');
		if(rangedCombat[rightHand]["range"] == 69 && currentammo == 0){
			strip("right");
		}
	})
	$('#fireBurst').click(function(){
		if(burst > currentammo){
			alert("Insufficient ammo");
			return;
		}
		currentammo -= burst;
		$('#currentBullet').replaceWith('<b id = "currentBullet">' + currentammo + '</b>');
		alert("Ranged accuracy for action: " + (racc-burstPenalty));
	})
	$('#fireleft').click(function(){
		if(firesLeft > currentleft){
			alert("Reload");
			return;
		}
		currentleft -= firesLeft;
		$('#currentBulletLeft').replaceWith('<b id = "currentBulletLeft">' + currentleft + '</b>');
	})
	$('#fireleftBurst').click(function(){
		if(burstLeft > currentammo){
			alert("Insufficient ammo");
			return;
		}
		currentammo -= burstLeft;
		$('#currentBulletLeft').replaceWith('<b id = "currentBulletLeft">' + currentammo + '</b>');
		alert("Ranged accuracy for action: " + (racc-burstPenalty));
	})
	//Character saving / loading
	$('#createnew').click(function(){
		$('#0').hide();
		$('#1').show();
	})
	$('#savecharacter').click(function(){
		var save = [name, sex, race, chapter, assasin, aspect, maxHP, str, con, mark, agi, intel, chari, wres, movement, corr, xeno, warp, hist, geo, perc, macc, racc, dodge,/*			  0    1     2      3       4         5       6    7    8    9     10    11     12    13      14      15    16     17   18    19   20    21     22    23*/ fire, frost, shock, stealth, dip, lead, rank, level, gold, wearing, divineHeld, rightHand, leftHand, commpiece, helmet, backpack, harness, canjet, schoolE, schoolM,/*24     25     26     27      28    29    30   31     32      33      34           35          36       37        38        39       40      41       42       43*/ currentRank, activeProfs, "p", activeRed, "a", armourMods, "b", inback, "h", inhar, "s", hasspells, "k", hasperks, "w", weaponMods];
		//44
		$('#savecode').replaceWith('<textarea id = "savecode">' + save + '</textarea>');
	})
	$('#loadcharacter').click(function(){
		var toread = prompt("Paste save code here");
		var read = toread.split(",");
		if(read.length < 73){
			alert("Invalid code used");
			return;
		}
		$('#0').hide();
		$('.out').show();
		//Character info
		name = read[0];
		sex = Number(read[1]);
		sexName = sexnames[sex];
		race = Number(read[2]);
		raceName = racenames[race];
		chapter = Number(read[3]);
		assasin = Number(read[4]);
		aspect = Number(read[5]);
		rank = Number(read[30]);
		level = Number(read[31]);
		maxHP = Number(read[6]);
		currentRank = read[44];
		if(race != 3){
			$('#namechar').replaceWith('<b id = "namechar">' + name + '</b>');
		}
		else{
			$('#namechar').replaceWith('<b id = "namechar">Shas&#39;' + taunames[rank] + " " + name + '</b>');
			effectiveRange = 20;
			effrangeleft = 20;
		}
		$('#genchar').replaceWith('<b id = "genchar">' + sexName + '</b>');
		$('#racechar').replaceWith('<b id = "racechar">' + racenames[race] + '</b>');
		$('#racebon').replaceWith('<td id = "racebon">' + rbset[race] + '</td>');
		if(chapter != 5){
			chapterName = chapternames[chapter];
			$('#modifier').replaceWith('<b id = "modifier"> ' + chapterName + '.</b>');
		}
		else if(assasin != 3){
			$('#modifier').replaceWith('<b id = "modifier"> ' + assasinNames[assasin] + '.</b>');
		}
		else if(aspect != 5){
			$('#modifier').replaceWith('<b id = "modifier"> ' + aspectNames[aspect] + '.</b>');
		}
		$('#level').replaceWith('<b id = "level">' + level + '</b>');
		$('#rank').replaceWith('<b id = "rank">' + currentRank + '</b>');
		//stats
		str = Number(read[7]);
		con = Number(read[8]);
		mark = Number(read[9]);
		agi = Number(read[10]);
		intel = Number(read[11]);
		chari = Number(read[12]);
		wres = Number(read[13]);
		movement = Number(read[14]);
		corr = Number(read[15]);
		xeno = Number(read[16]);
		warp = Number(read[17]);
		hist = Number(read[18]);
		geo = Number(read[19]);
		perc = Number(read[20]);
		macc = Number(read[21]);
		racc = Number(read[22]);
		dodge = Number(read[23]);
		fire = Number(read[24]);
		frost = Number(read[25]);
		shock = Number(read[26]);
		stealth = Number(read[27]);
		dip = Number(read[28]);
		lead = Number(read[29]);
		updating();
		//Proficiencies
		var temp = 45;
		while(read[temp] != "p"){
			if(read[temp] != ""){activeProfs.push(read[temp]);}
			temp++;
		}
		var topush = "";
		if(activeProfs.length > 0){
			for(var i = 0; i < activeProfs.length; i++){
				topush += profs[activeProfs[i]] + ", ";
			}
			topush = topush.slice(0, -2);
			$('#prof').replaceWith('<i id = "prof">' + topush + '</i>');
		}
		else{
			$('#prof').replaceWith('<i id = "prof">N/A</i>');
		}
		temp++;
		topush = "";
		while(read[temp] != "a"){
			if(read[temp] != ""){activeRed.push(read[temp]);}
			temp++;
		}
		if(activeRed.length > 0){
			for(var i = 0; i < activeRed.length; i++){
				topush += profs[activeRed[i]] + ", ";
			}
			topush = topush.slice(0, -2);
			$('#red').replaceWith('<i id = "red">' + topush + '</i>');
		}
		else{
			$('#red').replaceWith('<i id = "red">N/A</i>');
		}
		temp++;
		//Items
		gold = Number(read[32]);
		$('#gold').replaceWith('<b id = "gold">' + gold + '</b>');
		wearing = Number(read[33]);
		if(wearing != 50){
			updateChar("arm");
		}
		divineHeld = Number(read[34]);
		if(divineHeld != 0){
			others[divineHeld].yay();
			$('#divineHeld').replaceWith('<b id = "divineHeld">' + others[divineHeld]["name"] + ' (' + others[divineHeld]["rar"] + ')</b>');
		}
		rightHand = Number(read[35]);
		if(rightHand < 46 || (rightHand > 110 && rightHand < 176)){//close combat
			var twohanded = closeCombat[rightHand]["two"];
			var weaptype = closeCombat[rightHand]["type"];
			if(weaptype != 3 && twohanded == 0){//Equipping to right hand one handed
				updateChar("clo1");
			}
			else if(weaptype != 3){//two handed weapons
				updateChar("clo2");
			}
			else{//hammers
				if(closeCombat[rightHand]["two"] <= str){//One handed hammer
					updateChar("clo1");
				}
				else{//two handed hammer
					updateChar("clo2");
				}
			}
		}
		else if(rightHand != 200){//ranged
			var twohanded = rangedCombat[rightHand]["two"];
			var weaptype = rangedCombat[rightHand]["type"];
			if((dualheavy == 1 && weaptype == 7) || twohanded == 0){
				updateChar("ran1");
			}
			else{//two handed
				updateChar("ran2");
			}
		}
		leftHand = Number(read[36]);
		if(leftHand < 150 || (leftHand > 175 && leftHand < 200)){//ranged
			updateChar("left");
		}
		else if(leftHand != 200){//shield
			others[leftHand].yay();
			$('#leftHand').replaceWith('<b id = "leftHand">' + others[leftHand]["name"] + ' (' + others[leftHand]["rar"] + ')</b>');
		}
		commpiece = Number(read[37]);
		if(commpiece != 0){
			others[commpiece].yay();
			$('#comm').replaceWith('<b id = "comm">' + others[commpiece]["name"] + ' (' + others[commpiece]["rar"] + ')</b>');
			$('#commmUnequip').show();
		}
		helmet = Number(read[38]);
		if(helmet != 10){
			others[helmet].yay();
			$('#helmet').replaceWith('<b id = "helmet">' + others[helmet]["name"] + ' (' + others[helmet]["rar"] + ')</b>');
			$('#headUnequip').show();
		}
		backpack = Number(read[39]);
		if(backpack != 0){
			others[backpack].yay();
			$('#bagName').replaceWith('<b id = "bagName">' + others[backpack]["name"] + ' (' + others[backpack]["rar"] + ')</b>');
			$('#ammoBag').replaceWith('<b id = "ammoBag">' + canback[0] + '</b>');
			$('#oneBag').replaceWith('<b id = "oneBag">' + canback[1] + '</b>');
			$('#twoBag').replaceWith('<b id = "twoBag">' + canback[2] + '</b>');
		}
		harness = Number(read[40]);
		if(harness != 0){
			others[harness].yay();
			$('#harnessName').replaceWith('<b id = "harnessName">' + others[harness]["name"] + ' (' + others[harness]["rar"] + ')</b>');
			$('#ammoHar').replaceWith('<b id = "ammoHar">' + canhar[0] + '</b>');
			$('#oneHar').replaceWith('<b id = "oneHar">' + canhar[1] + '</b>');
			$('#twoHar').replaceWith('<b id = "twoHar">' + canhar[2] + '</b>');
		}
		canjet = Number(read[41]);
		//Adding runes
		for(var i = 0; i < 8; i++){
			var rar = Number(read[temp])%10;
			var id = (Number(read[temp])-rar)/10;
			switch(i){
				case 0:
					if(aMA[i] == 0 || id == 0){}
					else{
						clothesMods[id][rar].yay();
						armourMods[i] = id*10+rar;
						$('#cr').replaceWith('<b id = "cr">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ')</b>');
					}
					break;
				case 1:
					if(aMA[i] == 0 || id == 0){}
					else{
						clothesMods[id][rar].yay();
						armourMods[i] = id*10+rar;
						$('#ur').replaceWith('<b id = "ur">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ')</b>');
					}
					break;
				case 2:
					if(aMA[i] == 0 || id == 0){}
					else{
						clothesMods[id][rar].yay();
						armourMods[i] = id*10+rar;
						$('#rr').replaceWith('<b id = "rr">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ')</b>');
					}
					break;
				case 3:
					if(aMA[i] == 0){}
					else if(aMA[i] == 1 && id == 0){}
					else if(aMA[i] == 2 && id == 0){temp++;}
					else if(aMA[i] == 1){
						clothesMods[id][rar].yay();
						armourMods[i] = id*10+rar;
						$('#lr').replaceWith('<b id = "lr">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ')</b>');
					}
					else{
						clothesMods[id][rar].yay();
						temp++;
						armourMods[i][0] = id*10+rar;
						if(read[temp] != 0){
							var rar2 = Number(read[temp])%10;
							var id2 = (Number(read[temp])-rar2)/10;
							clothesMods[id2][rar2].yay();
							armourMods[i][1] = id2*10+rar2;
							$('#lr').replaceWith('<b id = "lr">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ') + ' + clothesMods[id2]["name"] + ' (' + clothesMods[id2][rar2]["rar"] + ')</b>');
						}
						else{
							clothesMods[id][rar].yay();
							$('#lr').replaceWith('<b id = "lr">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ') + None</b>');
						}
					}
					break;
				case 4:
					if(aMA[i] == 0 || id == 0){}
					else{
						clothesMods[id][rar].yay();
						armourMods[i] = id*10+rar;
						$('#mk1').replaceWith('<b id = "mk1">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ')</b>');
					}
					break;
				case 5:
					if(aMA[i] == 0 || id == 0){}
					else{
						clothesMods[id][rar].yay();
						armourMods[i] = id*10+rar;
						$('#mk2').replaceWith('<b id = "mk2">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ')</b>');
					}
					break;
				case 6:
					if(aMA[i] == 0){}
					else if(aMA[i] == 1 && id == 0){}
					else if(aMA[i] == 2 && id == 0){temp++;}
					else if(aMA[i] == 1){
						clothesMods[id][rar].yay();
						armourMods[i] = id*10+rar;
						$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ')</b>');
					}
					else{
						clothesMods[id][rar].yay();
						temp++;
						armourMods[i][0] = id*10+rar;
						if(read[temp] != 0){
							var rar2 = Number(read[temp])%10;
							var id2 = (Number(read[temp])-rar2)/10;
							clothesMods[id2][rar2].yay();
							armourMods[i][1] = id2*10+rar2;
							$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ') + ' + clothesMods[id2]["name"] + ' (' + clothesMods[id2][rar2]["rar"] + ')</b>');
						}
						else{
							clothesMods[id][rar].yay();
							$('#mk3').replaceWith('<b id = "mk3">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ') + None</b>');
						}
					}
					break;
				case 7:
					if(aMA[i] == 0 || id == 0){}
					else{
						clothesMods[id][rar].yay();
						armourMods[i] = id*10+rar;
						$('#jetpack').replaceWith('<b id = "jetpack">' + clothesMods[id]["name"] + ' (' + clothesMods[id][rar]["rar"] + ')</b>');
					}
			}
			temp++;
		}
		temp++;
		//Adding to backpack
		if(backpack != 0){
			for (var i = 0; i < 3; i++){
				for (var j = 0; j < canback[i]; j++){
					var id = Number(read[temp]);
					if(i == 0 && id != 0 && id != 99){
						inback[i][j] = id;
						$('#backpack').append('<option value = "0' + j + '">' + ammo[id]["name"] + '</option>');
					}
					else if(i == 0 && id == 99){
						inback[i][j] = id;
					}
					else if(i != 0 && id != 200 && read[temp] != ""){
						inback[i][j] = id;
						if(id < 46 || (id > 110 && id < 176)){
							$('#backpack').append('<option value = "' + i + j + '">' + closeCombat[id]["name"] + '</option>');
						}
						else{
							$('#backpack').append('<option value = "' + i + j + '">' + rangedCombat[id]["name"] + '</option>');
						}
					}
					temp++;
				}
			}
			if(canback[2] == 0){temp++;}
		}
		else{
			temp+=3;
		}
		temp++;
		//Adding to harness
		if(harness != 0){
			for (var i = 0; i < 3; i++){
				for (var j = 0; j < canhar[i]; j++){
					var id = Number(read[temp]);
					if(i == 0 && id != 0 && id != 99){
						inhar[i][j] = id;
						$('#harness').append('<option value = "0' + j + '">' + ammo[id]["name"] + '</option>');
					}
					else if(i == 0 && id == 99){
						inhar[i][j] = id;
					}
					else if(i != 0 && id != 200 && read[temp] != ""){
						inhar[i][j] = id;
						if(id < 46 || (id > 110 && id < 176)){
							$('#harness').append('<option value = "' + i + j + '">' + closeCombat[id]["name"] + '</option>');
						}
						else{
							$('#harness').append('<option value = "' + i + j + '">' + rangedCombat[id]["name"] + '</option>');
						}
					}
					temp++;
				}
				if(canhar[i] == 0){temp++;}
			}
		}
		else{
			temp+=3;
		}
		temp++;
		//Spells
		schoolE = Number(read[42]);
		schoolM = Number(read[43]);
		if(schoolE != 10){
			$('.psykerPath').show();
			switch(schoolE){
				case 0:
					$('.fire').show();break;
				case 1:
					$('.frost').show();break;
				case 2:
					$('.shock').show();break;
			}
			$('#schoolE').replaceWith('<b id = "schoolE">' + schoolNames[schoolE] + '</b>');
			$('#schoolM').replaceWith('<b id = "schoolM">' + schoolNames[schoolM] + '</b>');
		}
		if(schoolM == 5){
			$('.divineItem').show();
		}
		if(read[temp] == ""){temp++;}
		else{
			while(read[temp] != "k"){
				var spellid = Number(read[temp]);
				$('#spellsKnown').append('<li id = "s' + spellid + '">' + spells[spellid]["name"] + ' (' + spellid + ')(' + schoolNames[spells[spellid]["school"]] + '): ' + spells[spellid]["note"] + '</li>');
				hasspells.push(spellid);
				temp++;
			}
		}
		temp++;
		//Perks
		if(read[temp] == ""){temp++;}
		else{
			while(read[temp] != "w"){
				var perkid = Number(read[temp]);
				hasperks.push(perkid);
				perks[perkid].yay();
				updating();
				$('#perklist').append('<li>' + perks[perkid]["name"] + ': ' + perks[perkid]["note"] + '</li>');
				$('#perks option[value=' + perkid + ']').toggle('disabled');
				temp++;
			}
		}
		temp++;
		//Weapon upgs
		for(i = 0; i < 4; i++){
			var num = Number(read[temp]);
			if(num != 0){
				var typ = rangedMods[num]["type"];
				var toequip = "venomUsed";
				if(typ == 0){toequip = "sight";}
				else if(typ == 1){toequip = "supp";}
				else if(typ == 2){toequip = "accessory";}
				rangedMods[num].yay();
				weaponMods[typ] = num;
				$('#' + toequip).replaceWith('<b id = "' + toequip + '">' + rangedMods[num]["name"] + '</b>');
			}
			temp++;
		}
		//updating = Number(read[4]);
		updating();
	})
});