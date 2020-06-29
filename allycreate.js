$(document).ready(function(){
                                                                        //Tanks
    //Variable declaration
    var goldtank = 0;
    var nt = 0;
    var ns = 0;
    var chas = [];// [chassis name, grade, config]
    var gunners = [];
    var upg = [];// [armour, sight, engine], 100 empty
    var health = [];// [health, ab]
    var speed = [];// [type, move range]
    var pass = [];//0 to 45, 50 drone factory empty, 49 drone factory filled
    var top = [];// id = 100 N/A, 96 empty small, 97 empty med, 98 empty large, 99 empty super, 0-95 guns
    var left = [];// [id, slot size letter, slot size number, range]
    var right = [];
    var front = [];
    var notes = [];
    var damage = ['1d6', '2d4', '2d6', '2d8', '3d6', '3d8', '2d6+10', '2d6+20', '3d6+10', '3d6+20', '3d8+10', '3d8+20', '3d6+25', 'Varies'];
    //              0      1      2      3      4      5       6          7         8        9          10       11        12       13
    var grades = ['L', 'M', 'H', 'S'];
    var movetype = ['H', 'T', 'W'];
    var gunsizes = ['S', 'M', 'L', 'U'];
    var posshealth = [[10, 15], [15, 25], [15, 35], [25, 40]];//hp, ab - type property
    var positions = ["pass", "top", "left", "right", "front"];
    var tanktoadd = 0;
    var postoadd = 0;
    //Dictionaries
    var chassis = {//'config' num of configs, 0: [pass, top, left, right, front]
        0: {//Light
            'name': 'Sentinel',
            'cost': 700,
            'type': 0,
            'speed': 30,
            'move': 2,
            'config': 1,
            1: [0, 100, 100, 100, 96],
        },
        1: {
            'name': 'Land Speeder',
            'cost': 900,
            'type': 0,
            'speed': 50,
            'move': 0,
            'config': 2,
            1: [3, 100, 100, 100, 100],
            2: [2, 100, 100, 100, 96],
        },
        2: {
            'name': 'Vyper',
            'cost': 800,
            'type': 0,
            'speed': 45,
            'move': 0,
            'config': 1,
            1: [0, 100, 100, 100, 97],
        },
        3: {
            'name': 'Pirahna',
            'cost': 750,
            'type': 0,
            'speed': 60,
            'move': 0,
            'config': 1,
            1: [1, 100, 100, 100, 96],
        },
        4: {//Medium
            'name': 'Chimera',
            'cost': 900,
            'type': 1,
            'speed': 30,
            'move': 1,
            'config': 3,
            1: [0, 99, 100, 100, 100],
            2: [0, 97, 97, 97, 100],
            3: [12, 100, 100, 100, 96],
        },
        5: {
            'name': 'Falcon',
            'cost': 1000,
            'type': 1,
            'speed': 40,
            'move': 0,
            'config': 2,
            1: [8, 100, 100, 100, 96],
            2: [0, 98, 100, 100, 96],
        },
        6: {
            'name': 'Devilfish',
            'cost': 950,
            'type': 1,
            'speed': 30,
            'move': 0,
            'config': 3,
            1: [10, 100, 100, 100, 96],
            2: [0, 98, 100, 100, 96],
            3: [50, 100, 100, 100, 100],
        },
        7: {//Heavy
            'name': 'Rhino',
            'cost': 1100,
            'type': 2,
            'speed': 30,
            'move': 1,
            'config': 2,
            1: [10, 100, 96, 96, 100],
            2: [0, 98, 97, 97, 100],
        },
        8: {
            'name': 'Leman Russ',
            'cost': 1200,
            'type': 2,
            'speed': 30,
            'move': 1,
            'config': 1,
            1: [0, 98, 97, 97, 100],
        },
        9: {
            'name': 'Engine of Vaul',
            'cost': 1500,
            'type': 2,
            'speed': 25,
            'move': 0,
            'config': 1,
            1: [0, 99, 100, 100, 96],
        },
        10: {//Super
            'name': 'Land Raider',
            'cost': 1600,
            'type': 3,
            'speed': 25,
            'move': 1,
            'config': 2,
            1: [20, 97, 100, 100, 100],
            1: [14, 97, 97, 97, 100],
        },
        11: {
            'name': 'Bane Blade',
            'cost': 1800,
            'type': 3,
            'speed': 20,
            'move': 1,
            'config': 2,
            1: [0, 98, 97, 97, 97],
            2: [0, 99, 97, 97, 100],
        },
    }
    var guns = {
        0: {//small
            "name": "Gun Drone",
            "cost": 150,
            "damage": 0,
            "type": 96,
            "range": 100,
            "gunners": 0
        },
        1: {
            "name": "Assault Cannon",
            "cost": 100,
            "damage": 0,
            "type": 96,
            "range": 80,
            "gunners": 1
        },
        2: {
            "name": "Heavy Flamer",
            "cost": 130,
            "damage": 3,
            "type": 96,
            "range": 30,
            "gunners": 1
        },
        3: {
            "name": "Heavy Bolter",
            "cost": 140,
            "damage": 2,
            "type": 96,
            "range": 80,
            "gunners": 1
        },
        4: {
            "name": "Multilaser",
            "cost": 120,
            "damage": 0,
            "type": 96,
            "range": 100,
            "gunners": 1
        },
        5: {
            "name": "Shuriken Cannon",
            "cost": 130,
            "damage": 1,
            "type": 96,
            "range": 80,
            "gunners": 1
        },
        6: {//medium
            "name": "Ion Blaster",
            "cost": 200,
            "damage": 3,
            "type": 97,
            "range": 50,
            "gunners": 1
        },
        7: {
            "name": "Lascannon",
            "cost": 180,
            "damage": 2,
            "type": 97,
            "range": 120,
            "gunners": 1
        },
        8: {
            "name": "Twin Bolter",
            "cost": 220,
            "damage": 2,
            "type": 97,
            "range": 80,
            "gunners": 1
        },
        9: {
            "name": "Twin Flamer",
            "cost": 210,
            "damage": 5,
            "type": 97,
            "range": 40,
            "gunners": 1
        },
        10: {
            "name": "Twin Shuriken Cannon",
            "cost": 210,
            "damage": 1,
            "type": 97,
            "range": 80,
            "gunners": 1
        },
        11: {
            "name": "Missile Launcher",
            "cost": 200,
            "damage": 13,
            "type": 97,
            "range": 400,
            "gunners": 1
        },
        12: {//large
            "name": "Tempest Launcher",
            "cost": 500,
            "damage": 13,
            "type": 98,
            "range": 500,
            "gunners": 1
        },
        13: {
            "name": "Hunter-Killer Launcher",
            "cost": 700,
            "damage": 11,
            "type": 98,
            "range": 750,
            "gunners": 2
        },
        14: {
            "name": "Autocannon",
            "cost": 400,
            "damage": 4,
            "type": 98,
            "range": 150,
            "gunners": 1
        },
        15: {
            "name": "Battle Cannon",
            "cost": 400,
            "damage": 7,
            "type": 98,
            "range": 250,
            "gunners": 1
        },
        16: {
            "name": "Plasma Destructor",
            "cost": 600,
            "damage": 9,
            "type": 98,
            "range": 300,
            "gunners": 1
        },
        17: {
            "name": "Plasma Cannon",
            "cost": 550,
            "damage": 8,
            "type": 98,
            "range": 300,
            "gunners": 1
        },
        18: {
            "name": "Brightlance",
            "cost": 600,
            "damage": 5,
            "type": 98,
            "range": 400,
            "gunners": 1
        },
        19: {
            "name": "Fire Prism",
            "cost": 500,
            "damage": 4,
            "type": 98,
            "range": 300,
            "gunners": 1
        },
        20: {
            "name": "Death Spinner",
            "cost": 600,
            "damage": 3,
            "type": 98,
            "range": 250,
            "gunners": 1
        },
        21: {
            "name": "Rail Gun",
            "cost": 500,
            "damage": 6,
            "type": 98,
            "range": 500,
            "gunners": 1
        },
        22: {
            "name": "Sky Ray Platform",
            "cost": 600,
            "damage": 6,
            "type": 98,
            "range": 300,
            "gunners": 1
        },
        23: {//super
            "name": "Earth Shaker Cannon",
            "cost": 800,
            "damage": 8,
            "type": 99,
            "range": 1500,
            "gunners": 3
        },
        24: {
            "name": "Plasma Blast Gun",
            "cost": 1000,
            "damage": 12,
            "type": 99,
            "range": 350,
            "gunners": 1
        },
        25: {
            "name": "Baneblade Cannon",
            "cost": 900,
            "damage": 7,
            "type": 99,
            "range": 300,
            "gunners": 2
        },
        26: {
            "name": "Distortion Cannon",
            "cost": 1500,
            "damage": 3,
            "type": 99,
            "range": 40,
            "gunners": 1
        },
        27: {
            "name": "Twin Brightlance",
            "cost": 1000,
            "damage": 10,
            "type": 99,
            "range": 400,
            "gunners": 1
        },
    }
    var upgrades = {
        0: {//armour
            "name": "Light Plating",
            "cost": 150,
            yay: function(){health[tanktoadd][1]+=2;},
            nay: function(){health[tanktoadd][1]-=2;},
            "note": "",
            "type": 0
        },
        1: {
            "name": "Heavy Plating",
            "cost": 300,
            yay: function(){if(speed[tanktoadd][0] == 'H'){alert("Not a land vehicle!");return;}health[tanktoadd][1]+=5;},
            nay: function(){health[tanktoadd][1]-=5;},
            "note": "",
            "type": 0
        },
        2: {
            "name": "Void Shielding",
            "cost": 500,
            yay: function(){},
            nay: function(){},
            "note": "-25% dam, 30 damage absorbed before shutdown, -5m move while active",
            "type": 0
        },
        3: {
            "name": "Holo Field",
            "cost": 350,
            yay: function(){},
            nay: function(){},
            "note": "-4 racc to enemy, -2 racc to AOE enemy",
            "type": 0
        },
        4: {
            "name": "Light Inner Shielding",
            "cost": 150,
            yay: function(){health[tanktoadd][0]+=2;},
            nay: function(){health[tanktoadd][0]-=2;},
            "note": "",
            "type": 0
        },
        5: {
            "name": "Heavy Inner Shielding",
            "cost": 300,
            yay: function(){if(speed[tanktoadd][0] == 'H'){alert("Not a land vehicle!");return;}health[tanktoadd][0]+=5;},
            nay: function(){health[tanktoadd][0]-=5;},
            "note": "",
            "type": 0
        },
        6: {//Sight
            "name": "Basic Sights",
            "cost": 100,
            yay: function(){},
            nay: function(){},
            "note": "+2racc",
            "type": 1
        },
        7: {
            "name": "Advanced Sights",
            "cost": 200,
            yay: function(){},
            nay: function(){},
            "note": "+4racc",
            "type": 1
        },
        8: {
            "name": "Targeting Comp",
            "cost": 300,
            yay: function(){},
            nay: function(){},
            "note": "+6racc, no targeting friends",
            "type": 1
        },
        9: {
            "name": "Ballistics Comp",
            "cost": 200,
            yay: function(){eval(positions[postoadd])[tanktoadd][3]+=20;},
            nay: function(){eval(positions[postoadd])[tanktoadd][3]-=20;},
            "note": "",
            "type": 1
        },
        10: {
            "name": "Advanced Ballistics Comp",
            "cost": 300,
            yay: function(){eval(positions[postoadd])[tanktoadd][3]+=50;},
            nay: function(){eval(positions[postoadd])[tanktoadd][3]-=50;},
            "note": "",
            "type": 1
        },
        11: {
            "name": "Night Sight",
            "cost": 150,
            yay: function(){},
            nay: function(){},
            "note": "Night Vision",
            "type": 1
        },
        12: {
            "name": "Radar",
            "cost": 200,
            yay: function(){},
            nay: function(){},
            "note": "Perfect visibility to 1000m",
            "type": 1
        },
        13: {
            "name": "Cooling System",
            "cost": 200,
            yay: function(){},
            nay: function(){},
            "note": "+1 shots before cooldown",
            "type": 1
        },
        14: {
            "name": "Autoloader",
            "cost": 400,
            yay: function(){},
            nay: function(){},
            "note": "-50% reload time",
            "type": 1
        },
        15: {//Engine
            "name": "Jump Jets",
            "cost": 300,
            yay: function(){if(speed[tanktoadd][0] != 'H'){alert("Not a hover vehicle!");return;}},
            nay: function(){},
            "note": "100m jump, 1 turn cooldown",
            "type": 2
        },
        16: {
            "name": "Boosted Jets",
            "cost": 200,
            yay: function(){if(speed[tanktoadd][0] != 'H'){alert("Not a hover vehicle!");return;}speed[tanktoadd][1]+=10;},
            nay: function(){speed[tanktoadd][1]-=10;},
            "note": "",
            "type": 2
        },
        17: {
            "name": "Enhanced Engine",
            "cost": 200,
            yay: function(){if(speed[tanktoadd][0] == 'H'){alert("Not a land vehicle!");return;}speed[tanktoadd][1]+=5;},
            nay: function(){speed[tanktoadd][1]-=5;},
            "note": "",
            "type": 2
        },
    }
    //Buying stuff
    $('#buyChassis').click(function(){
        var temp = '';
        $('#chassis option:selected').each(function(){
			temp += $(this).val();
        })
        temp = Number(temp);
        var chosen = 1;
        if(chassis[temp]['config'] > 1){
            chosen = Number(prompt('Enter desired config number below:'));
            if(chassis[temp]['config'] < chosen || chosen < 1){alert('No such config');return;}
        }
        chas.push([chassis[temp]['name'], grades[chassis[temp]['type']], chosen]);
        gunners.push(0);
        upg.push([100, 100, 100]);
        health.push(posshealth[chassis[temp]['type']]);
        speed.push([movetype[chassis[temp]['move']], chassis[temp]['speed']]);
        pass.push(chassis[temp][chosen][0]);
        var passadd = chassis[temp][chosen][0];
        if(passadd == 50){passadd = "DF Slot";}
        var topadd = chassis[temp][chosen][1];
        switch(topadd){
            case 100: topadd = "N/A";break;
            case 99: topadd = "U";break;
            case 98: topadd = "L";break;
            case 97: topadd = "M";break;
            case 96: topadd = "S";break;
        }
        top.push([chassis[temp][chosen][1], topadd, chassis[temp][chosen][1]]);
        var leftadd = chassis[temp][chosen][2];
        switch(leftadd){
            case 100: leftadd = "N/A";break;
            case 99: leftadd = "U";break;
            case 98: leftadd = "L";break;
            case 97: leftadd = "M";break;
            case 96: leftadd = "S";break;
        }
        left.push([chassis[temp][chosen][2], leftadd, chassis[temp][chosen][2]]);
        var rightadd = chassis[temp][chosen][3];
        switch(rightadd){
            case 100: rightadd = "N/A";break;
            case 99: rightadd = "U";break;
            case 98: rightadd = "L";break;
            case 97: rightadd = "M";break;
            case 96: rightadd = "S";break;
        }
        right.push([chassis[temp][chosen][3], rightadd, chassis[temp][chosen][3]]);
        var frontadd = chassis[temp][chosen][4];
        switch(frontadd){
            case 100: frontadd = "N/A";break;
            case 99: frontadd = "U";break;
            case 98: frontadd = "L";break;
            case 97: frontadd = "M";break;
            case 96: frontadd = "S";break;
        }
        front.push([chassis[temp][chosen][4], frontadd, chassis[temp][chosen][4]]);
        notes.push('');
        $('#tanks tbody').append($('<tr>').append([
        '<td>' + nt + '</td>',//id
        '<td>' + chas[nt][0] + ' (' + chas[nt][2] + ') / ' + chas[nt][1] +  '</td>',//name
        '<td id = ' + nt + 'gun>' + gunners[nt] + '</td>',//gunn
        '<td id = ' + nt + 'arm>' + 'None' + '</td>',//arm u
        '<td id = ' + nt + 'sight>' + 'None' + '</td>',//sight u
        '<td id = ' + nt + 'eng>' + 'None' + '</td>',//eng u
        '<td id = ' + nt + 'heal>' + health[nt][0] + ' / ' + health[nt][1] + '</td>',//hp
        '<td id = ' + nt + 'speed>' + speed[nt][0] + ' / ' + speed[nt][1] + '</td>',//move
        '<td>' + passadd + '</td>',//pass
        '<td id = ' + nt + 'top>' + topadd + '</td>',//top
        '<td id = ' + nt + 'left>' + leftadd + '</td>',//left
        '<td id = ' + nt + 'right>' + rightadd + '</td>',//right
        '<td id = ' + nt + 'front>' + frontadd + '</td>',//front
        '<td id = ' + nt + 'note>' + notes[nt] + '</td>',//note
        '</tr>']));
        nt++;
        goldtank+=chassis[temp]["cost"];
        $('#goldtank').replaceWith('<b id = "goldtank">' + goldtank + '</b>');
    })
    $('#buyWeapon').click(function(){
        var temp = '';
        $('#weapons option:selected').each(function(){
			temp += $(this).val();
        })
        temp = Number(temp);
        var tid = Number(prompt("Enter tank id"));
        if(tid < 0 || tid >= nt){alert("No such tank ID");return;}
        var pos = Number(prompt("Where do you want the weapon to go? Top (1), Left (2), Right (3) or Front (4)? Enter number here:"));
        if(isNaN(pos) == true || pos < 1 || pos > 4){alert("Invalid number");return;}
        if(eval(positions[pos])[tid][2] < guns[temp]["type"] || eval(positions[pos])[tid][2] == 100){alert("Cannot equip");return;}
        if(eval(positions[pos])[tid][0] < 96){goldtank -= guns[eval(positions[pos])[tid][0]]["cost"];}
        eval(positions[pos])[tid][0] = temp;
        eval(positions[pos])[tid][3] = guns[temp]["range"];
        gunners[tid] += guns[temp]["gunners"];
        var gunsize = gunsizes[guns[temp]["type"] - 96];
        $('#' + tid + positions[pos]).replaceWith('<td id = "' + tid + positions[pos] + '">' + damage[guns[temp]["damage"]] + '/' + guns[temp]["range"] + '/' + gunsize + '/' + eval(positions[pos])[tid][1] + '</td>');
        goldtank += guns[temp]["cost"];
        $('#goldtank').replaceWith('<b id = "goldtank">' + goldtank + '</b>');
    })
    $('#buyUpg').click(function(){
        var temp = '';
        $('#upgs option:selected').each(function(){
			temp += $(this).val();
        })
    })
    //Removing stuff
})