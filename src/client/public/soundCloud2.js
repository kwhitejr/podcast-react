SC.initialize({
  client_id: '89289477605a115f4826be4c766dcdb3'
});

$(document).ready(function() {
    SC.stream('/tracks/293', function(sound) {
       $('#start').click(function(e) {
        console.log('start');
        e.preventDefault();
        sound.start();
      });
      $('#stop').click(function(e) {
        console.log('start');
        e.preventDefault();
        sound.stop();
      });
    });
});