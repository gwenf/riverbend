
var PIXI = require('pixi.js');
var $ = require('jquery');

(function() {
    var renderer = PIXI.autoDetectRenderer(660, 660, {backgroundColor: 0xeeeeee, antialias: true});
    document.body.appendChild(renderer.view);
  
    var stage = new PIXI.Container();
  
    var boxWidth = renderer.width / 10;
    var boxHeight = renderer.height / 10;
  
    var playerBox = new PIXI.Graphics();
    playerBox.beginFill(0x3498db);
    playerBox.drawRect(0, 0, boxWidth, boxHeight);
    playerBox.endFill();
  
    var enemyBox = new PIXI.Graphics();
    enemyBox.beginFill(0xe34c3c);
    enemyBox.drawRect(0, 0, boxWidth, boxHeight);
    enemyBox.endFill();

    var playerStatBox = new PIXI.Graphics();
    playerStatBox.beginFill(0x444444);
    playerStatBox.drawRect(0, 0, boxWidth*10, boxHeight);
    playerStatBox.endFill();
  
    stage.addChild(playerBox);
    stage.addChild(enemyBox);
    stage.addChild(playerStatBox);
     
	document.addEventListener('keydown', onKeyDown);
  
  	enemyBoxSpawn();
    animate();
  
    function animate() {
        renderer.render(stage);
        checkPosition();
        requestAnimationFrame(animate);
    }

    function playerBoxSpawn(){
    	playerBox.position.x = 0;
	    playerBox.position.y = boxHeight * Math.floor((Math.random() * 9) + 1);
    }
     
    function enemyBoxSpawn() {
	    var randomX = Math.floor((Math.random() * 10) + 0);
	    var randomY = Math.floor((Math.random() * 9) + 1);
	  
	    enemyBox.position.x = boxWidth * randomX;
	    enemyBox.position.y = boxHeight * randomY;
	}

	function checkPosition() {
	    if (enemyBox.position.x === playerBox.position.x && enemyBox.position.y === playerBox.position.y) {
	        enemyBoxSpawn();
	    }
	}

	function onKeyDown(key) {
	    if (key.keyCode === 87 || key.keyCode === 38) {
	        if (playerBox.position.y != 0) {
	            playerBox.position.y -= boxHeight;
	        }
	    }
	    if (key.keyCode === 83 || key.keyCode === 40) {
	        if (playerBox.position.y != renderer.height - boxHeight) {
	            playerBox.position.y += boxHeight;
	        }
	    }
	  
	    if (key.keyCode === 65 || key.keyCode === 37) {
	        if (playerBox.position.x != 0) {
	            playerBox.position.x -= boxWidth;
	        }
	    }
	  
	    if (key.keyCode === 68 || key.keyCode === 39) {
	        if (playerBox.position.x != renderer.width - boxWidth) {
	            playerBox.position.x += boxWidth;
	        }
	    }
	}

  
})();

// var PIXI = require('pixi.js');
// var $ = require('jquery');

// var renderer = new PIXI.CanvasRenderer(window.innerWidth-20, window.innerHeight-20);
// document.body.appendChild(renderer.view);

// var stage = new PIXI.Stage;

// var circle = new PIXI.Circle(x, y, radius);

// var selfieTexture = PIXI.Texture.fromImage('../src/images/gwen.jpg');
// var selfie = new PIXI.Sprite(selfieTexture);

// selfie.position.x = window.innerWidth / 2 - 600;
// selfie.position.y = window.innerHeight / 2 - 300;

// stage.addChild(selfie);

// function draw() {
//   renderer.render(stage);
//   requestAnimationFrame(draw);
// }

// draw();


// var collection__string = '';
// for (var i=0;i<player.collection.length;i++){
//   // console.log(player.collection.length)
//   if (i>2){
//     collection__string += `<li><a href='#'>View All</a></li>`;
//     break;
//   }
//   collection__string += `<li>${player.collection[i]}</li>`;
// }
// document.getElementById('collection').innerHTML = collection__string;


// canvas display
// var canvas = document.getElementById("screen");
// var ctx = canvas.getContext("2d");
//
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();
//
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();
//
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();

console.log('app.js');


// var PIXI = require('pixi.js');
// var $ = require('jquery');
//
// var renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
//
// document.body.appendChild(renderer.view);
//
// var stage = new PIXI.Stage;
//
// var selfieTexture = PIXI.Texture.fromImage('gwen.jpg');
// var selfie = new PIXI.Sprite(selfieTexture);
//
// selfie.position.x = window.innerWidth / 2 - 600;
// selfie.position.y = window.innerHeight / 2 - 300;
//
// stage.addChild(zombie);
//
// function draw() {
//   renderer.render(stage);
//   requestAnimationFrame(draw);
// }
//
// draw();
