var room;

$("#submit").click(function(){
  room=$("#user").val();
  $.post("/gameroom",{room: room}, function(data){
    if(data==='done')
      {
        alert("success"+room);
      }
  });
});