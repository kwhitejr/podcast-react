
window.onload = function() {
  console.log('seriously wtf');
  SC.initialize({
    client_id: '89289477605a115f4826be4c766dcdb3'
  });

  $(document).ready(function() {
    console.log('wtf is happening');
      SC.stream('/tracks/293', function(sound) {
         $('#start').click(function(e) {
          console.log('start');
          e.preventDefault();
          sound.start();
        });
        $('#stop').click(function(e) {
          console.log('stop');
          e.preventDefault();
          sound.stop();
        });
      });
  });
};

// function playSomeSound() {
//   SC.stream('/tracks/293').then(function(player){
//     player.play();
//   });
// }

// window.onload = function() {
//   SC.initialize({
//     client_id: '89289477605a115f4826be4c766dcdb3'
//     // redirect_uri: 'https://soundcloud.com/kevin-white-612475908/81515-rj-brown-w-intro'
//   });

//   var menuLinks = document.getElementsByClassName('genre');
//   for (var i=0; i < menuLinks.length; i++) {
//     var menuLink = menuLinks[i];
//     menuLink.onclick = function(e) {
//       e.preventDefault();
//       playSomeSound();
//     };
//   }
// };