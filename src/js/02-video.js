import Player from '@vimeo/player';

// const player = new Player('handstick', {
//     id: 19231868,
//     width: 640
// });
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
// ====
// {/* <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe> */}

// {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
// {/* <script>
//     const iframe = document.querySelector('iframe');
//     const player = new Vimeo.Player(iframe);

//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
// </script> */}
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);
// ===
player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
