// import { throttle } from 'lodash.throttle';
import { iframe } from '../js/scripts/refs';
import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';

let saveTime = localStorage.getItem(CURRENT_TIME);
let storageTime = checkStorageTime(saveTime);

player.setCurrentTime(storageTime).then(function (seconds) {});

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function checkStorageTime(time) {
  try {
    return time ? JSON.parse(time) : 0;
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}

function saveCurrentTime() {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
  });
}
