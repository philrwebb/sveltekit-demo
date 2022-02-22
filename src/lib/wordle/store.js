import { writable } from 'svelte/store'
import supabase from './supabase'

export const getWords = async () => {
  let { data: words, error } = await supabase.from('words').select('word')
  if (error) {
    return error
  }
  const wordArray = words.map((elm) => elm.word.split(''))
  return wordArray
}

export const initialiseStore = async (keyboardData, gameData) => {
  for (let i = 0; i < keyboardData.keystate.length; i++) {
    for (let j = 0; j < keyboardData.keystate[i].length; j++) {
      keyboardData.keystate[i][j].inWord = false
      keyboardData.keystate[i][j].picked = false
      keyboardData.keystate[i][j].rightPlace = false
      keyboardData.keystate[i][j].color = 'white'
    }
  }
  for (let i = 0; i < gameData.rowstate.length; i++) {
    for (let j = 0; j < gameData.rowstate[i].length; j++) {
      gameData.rowstate[i][j].inWord = false
      gameData.rowstate[i][j].content = ''
      gameData.rowstate[i][j].rightPlace = false
      gameData.rowstate[i][j].color = 'white'
    }
  }
  gameData.gameWon = false
  gameData.currentRow = 0
  gameData.currentCol = 0
  gameData.wordToGuess =
    gameData.wordsToGuess[
      Math.floor(Math.random() * gameData.wordsToGuess.length)
    ]
  return { keyboardData, gameData }
}
export const keyboardData = writable({
  keystate: [
    [
      {
        keyLetter: 'Q',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'W',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'E',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'R',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'T',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'Y',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'U',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'I',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'O',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'P',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
    ],
    [
      {
        keyLetter: 'A',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'S',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'D',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'F',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'G',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'H',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'J',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'K',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'L',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
    ],
    [
      {
        keyLetter: 'ENTER',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'Z',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'X',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'C',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'V',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'B',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'N',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'M',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
      {
        keyLetter: 'DEL',
        inWord: false,
        picked: false,
        rightPlace: false,
        color: 'white',
      },
    ],
  ],
})

export const gameData = writable({
  wordToGuess: [],
  wordsToGuess: [],
  gameWon: false,
  currentRow: 0,
  currentCol: 0,
  rowstate: [
    [
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
    ],
    [
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
    ],
    [
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
    ],
    [
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
    ],
    [
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
    ],
    [
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
      { content: '', color: 'white', inWord: false, rightPlace: false },
    ],
  ],
})
