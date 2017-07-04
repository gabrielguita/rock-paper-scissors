define(function () {
    return {
        getHello: function () {
            return 'Hello World';
        },
        gameInterface: function() {
			 //Code responsible for New Game button

			var newGameBtn = document.getElementById('js-newGameButton');

			newGameBtn.addEventListener('click', newGame);

			//Code responsible for players choices

			var pickRock = document.getElementById('js-playerPick_rock'),
			    pickPaper = document.getElementById('js-playerPick_paper'),
			    pickScissors = document.getElementById('js-playerPick_scissors');

			pickRock.addEventListener('click', function(){playerPick('Rock');});
			pickPaper.addEventListener('click', function(){playerPick('Paper');});
			pickScissors.addEventListener('click', function(){playerPick('Scissors');});

			//Initial atributes

			var gameState ='notStarted',
			    player = {
			      name: '',
			      score: 0
			    },
			    computer = {
			      score: 0
			    };

			// Displaying game elements

			var newGameElem = document.getElementById('js-newGameElement'),
			    pickElem = document.getElementById('js-playerPickElement'),
			    resultsElem = document.getElementById('js-resultsTableElement');

			//Game state function

			function setGameElements() {
			  switch(gameState) {
			    case 'started':
			        newGameElem.style.display = 'none';
			        pickElem.style.display = 'block';
			        resultsElem.style.display = 'block';
			      break;
			    case 'ended':
			        newGameBtn.innerText = 'One more time';
			    case 'notStarted':
			    default:
			        newGameElem.style.display = 'block';
			        pickElem.style.display = 'none';
			        resultsElem.style.display = 'none';

			  }
			}
			setGameElements();
			// Beginning of the game

			var playerPointsElem = document.getElementById('js-playerPoints'),
			    playerNameElem = document.getElementById('js-playerName'),
			    computerPointsElem = document.getElementById('js-computerPoints');

			// Game start function

			function newGame() {
			  player.name = prompt("What's your name?", "player name");
			  if (player.name) {
			    player.score = computer.score = 0;
			    gameState = 'started';
			    setGameElements();

			    playerNameElem.innerHTML = player.name;
			    setGamePoints();
			  }
			}

			// Game logic

			//computers choices

			function getComputerPick() {
			  var possiblePicks = ['Rock', 'Paper', 'Scissors'];
			  return possiblePicks[Math.floor(Math.random()*3)];
			}

			var playerPickElem = document.getElementById('js-playerPick'),
			    computerPickElem = document.getElementById('js-computerPick'),
			    playerResultElem = document.getElementById('js-playerResult'),
			    computerResultElem = document.getElementById('js-computerResult');

			function playerPick(playerPick) {
			  var computerPick = getComputerPick();

			  playerPickElem.innerHTML = playerPick;
			  computerPickElem.innerHTML = computerPick;

			  checkRoundWinner(playerPick, computerPick);
			  endGame();
			}

			function checkRoundWinner(playerPick, computerPick) {
			  playerResultElem.innerHTML = computerResultElem.innerHTML = '';
			  setTimeout(function () {
			    $('.cover').css('display', 'block');
			    setTimeout(function () {
			      if(playerPick == 'Rock'){
			        $('.player-rock').show('puff',800);
			      } else if(playerPick == 'Paper'){
			        $('.player-paper').show('puff',800);
			      } else {
			        $('.player-scissors').show('puff',800);
			      }
			    },0);
			    setTimeout(function () {
			      if(computerPick == 'Rock'){
			        $('.computer-rock').show('puff',800);
			      } else if(computerPick == 'Paper'){
			        $('.computer-paper').show('puff',800);
			      } else{
			        $('.computer-scissors').show('puff',800);
			      }
			    },500);
			  },0);
			  setTimeout(function () {
			    $('.cover').css('display', 'none');
			  },3000);
			  var winnerIs = 'Player';

			    if (playerPick == computerPick) {
			        winnerIs = 'none';
			        setTimeout(function () {
			          $('.choice').hide('pulsate','slow');
			        },1000);
			    } else if (
			        (computerPick == 'Rock' && playerPick == 'Scissors') ||
			        (computerPick == 'Paper' && playerPick == 'Rock') ||
			        (computerPick == 'Scissors' && playerPick == 'Paper')
			    ) {
			      winnerIs = 'Computer';
			      setTimeout(function () {
			        $('.player-rock, .player-paper, .player-scissors').hide('explode','slow');
			        setTimeout(function () {
			          $('.choice').css('display', 'none');
			        },1000);
			      },800);
			    } else if(
			      (computerPick == 'Rock' && playerPick == 'Paper') ||
			      (computerPick == 'Paper' && playerPick == 'Scissors') ||
			      (computerPick == 'Scissors' && playerPick == 'Rock')
			    ){
			      winnerIs = 'Player';
			      setTimeout(function () {
			        $('.computer-rock, .computer-paper, .computer-scissors').hide('explode', 'slow');
			        setTimeout(function () {
			          $('.choice').css('display', 'none');
			        },1500);
			      },1000);
			    }

			    if (winnerIs == 'Player') {
			        playerResultElem.innerHTML = 'You won!';
			        computerResultElem.innerHTML = '';
			        player.score++;
			    } else if (winnerIs == 'Computer') {
			        computerResultElem.innerHTML = 'Computer won!';
			        playerResultElem.innerHTML = '';
			        computer.score++;
			    } else {
			      playerResultElem.innerHTML = "It's a tie!";
			      computerResultElem.innerHTML = "It's a tie!";
			    }
			    setGamePoints();
			}

			function setGamePoints() {
			  playerPointsElem.innerHTML = player.score;
			  computerPointsElem.innerHTML = computer.score;
			}

			//End game logic

			function endGame() {
			  if (player.score == 10) {
			    setTimeout(function() {
			      alert('Congratulations! You won!');
			      gameState = 'ended';
			      setGameElements();
			    },3200);
			  } else if (computer.score == 10){
			    setTimeout(function() {
			      alert('You lost! Try again');
			      gameState = 'ended';
			      setGameElements();
			    },3200);
			  }
			}
		}

    };
});
