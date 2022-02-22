<script>
  import { onMount } from "svelte";
  import Rows from "./rows.svelte";
  import Keyboard from "./keyboard.svelte";
  import {
    gameData,
    keyboardData,
    initialiseStore,
    getWords,
  } from "./store.js";
  $: message =
    $gameData.currentRow > 5 && !$gameData.gameWorn
      ? "Bad Luck"
      : "Guess the word";
  onMount(async () => {
    let words = await getWords();
    $gameData.wordsToGuess = words;
    $gameData.wordToGuess = words[Math.floor(Math.random() * words.length)];
  });
  const handleKeydown = (event) => {
    if (event.key === "F12") {
      return;
    }
    event.preventDefault();
    if ($gameData.currentRow > 5) return;
    if (event.key === "Backspace" && $gameData.currentCol > 0) {
      $gameData.currentCol--;
      $gameData.rowstate[$gameData.currentRow][$gameData.currentCol].content =
        "";
      return;
    } else if (event.key === "Backspace") {
      return;
    } else if ($gameData.currentCol > 4 && event.key === "Enter") {
      $gameData.currentRow++;
      $gameData.currentCol = 0;
      $gameData.gameWon = checkWord(
        $gameData.rowstate[$gameData.currentRow - 1],
        $gameData.wordToGuess
      );
      $keyboardData.keystate = setKeyBoard(
        $keyboardData.keystate,
        $gameData.rowstate[$gameData.currentRow - 1]
      );
      return;
    } else if ($gameData.currentCol <= 4 && event.key === "Enter") {
      return;
    } else if (
      $gameData.currentCol <= 4 &&
      event.key.length === 1 &&
      ((event.key >= "a" && event.key <= "z") ||
        (event.key >= "A" && event.key <= "Z"))
    ) {
      $gameData.rowstate[$gameData.currentRow][$gameData.currentCol].content =
        event.key.toUpperCase();
      $gameData.currentCol++;
      return;
    } else if ($gameData.currentRow > 4) {
      message = "Bad Luck";
      return;
    }
  };
  const setKeyBoard = (keystate, rowstate) => {
    for (let i = 0; i < rowstate.length; i++) {
      for (let j = 0; j < keystate.length; j++) {
        for (let k = 0; k < keystate[j].length; k++) {
          if (keystate[j][k].keyLetter === rowstate[i].content) {
            if (rowstate[i].inWord && rowstate[i].rightPlace) {
              keystate[j][k].color = "lightgreen";
              keystate[j][k].inWord = true;
              keystate[j][k].rightplace = true;
              break;
            } else if (rowstate[i].inWord) {
              keystate[j][k].color = "#fad6a5";
              keystate[j][k].inWord = true;
              break;
            } else {
              keystate[j][k].color = "lightgrey";
              break;
            }
          }
        }
      }
    }
    return keystate;
  };
  const checkWord = (row, word) => {
    for (let i = 0; i <= 4; i++) {
      if (word[i] === row[i].content) {
        row[i].inWord = true;
        row[i].rightPlace = true;
        row[i].color = "lightgreen";
      }
    }
    for (let i = 0; i <= 4; i++) {
      for (let j = 0; j <= 4; j++) {
        if (!row[i].rightPlace && row[i].content === word[j]) {
          row[i].inWord = true;
          row[i].rightPlace = false;
          row[i].color = "#fad6a5";
        } else if (!row[i].rightPlace && !row[i].inWord)
          row[i].color = "lightgrey";
      }
    }
    let countDone = 0;
    for (let i = 0; i <= 4; i++) {
      if (row[i].inWord === true && row[i].rightPlace === true) countDone++;
    }
    if (countDone == 5) return true;
    else return false;
  };
  const handlekeypressed = (event) => {
    event.key = event.detail.keyLetter;
    if (event.key === "ENTER") event.key = "Enter";
    if (event.key === "DEL") event.key = "Backspace";
    handleKeydown(event);
  };
  const resetGame = async () => {
    const retVal = await initialiseStore($keyboardData, $gameData);
    $keyboardData = retVal.keyboardData;
    $gameData = retVal.gameData;
  };
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="container">
  <h1 style:color={$gameData.gameWon ? "red" : "black"}>WEBWORD</h1>
  <p>
    {$gameData.gameWon
      ? `You won in ${$gameData.currentRow} attempts`
      : message}
    {#if $gameData.gameWon || (!$gameData.gameWon && $gameData.currentRow > 5)}
      <button on:click={resetGame}>Reset Game</button>
    {/if}
  </p>

  <span class="rows">
    <Rows />
  </span>
  <Keyboard on:keypressed={handlekeypressed} />
</div>

<style>
  .container {
    height: 650px;
    display: grid;
    align-items: space-around;
    justify-content: center;
    justify-items: center;
  }
  p {
    display: grid;
    justify-content: center;
    justify-items: center;
    gap: 1rem;
    height: 4rem;
  }

  .rows {
    animation-name: show;
    animation-duration: 3s;
  }

  @keyframes show {
    from {
      opacity: 0;
      transform: rotate3d(1, 1, 1, 360deg);
    }

    to {
      opacity: 1;
    }
  }
</style>
