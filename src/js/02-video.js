import Player from '@vimeo/player';
// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
  // data is an object containing properties specific to that event
};

player.on('play', throttle(onPlay, 1000));

const time = localStorage.getItem('videoplayer-current-time');
console.log(time);

player.setCurrentTime(time || 0);
