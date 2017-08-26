$(document).ready(function() {
  var myAudio = new Audio("http://codingtutorials360.com/14244764.mp3");
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  $("#reset").hide();
  $("#start").click(function() {
    var counter = setInterval(timer, 1000);
    count*=60
    function timer() {
      $(
        "#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #title1, #title2, #breakNum"
      ).hide();
      $("#timeType").html("Session Time: ");
      count -= 1;
      if (count === 0) {
        myAudio.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        breakTime*=60
        $("#num").hide();
      }
      if (count%60>=10){
        $("#num").html(Math.floor(count/60)+":"+count%60)
      }
      else{
        $("#num").html(Math.floor(count/60)+":"+"0"+count%60)
}
      
      
      function breakTimer() {
        $("#timeType").html("Break Time: ");
        $("#breakNum").show();
       
        breakTime -= 1;
        if (breakTime === 0) {
          clearInterval(startBreak);
          $("#reset").show()
          myAudio.play();
          $("#breakNum").hide()
        }
              if (breakTime%60>=10){
        $("#breakNum").html(Math.floor(breakTime/60)+":"+breakTime%60)
      }
      else{
        $("#breakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60)
}
        
        $("#breakNum").html(breakTime)
      }
    }
  });
  $("#reset").click(function(){
    $("#num").html(25)
    $("#breakNum").html(5)
          $(
        "#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #title1, #title2, #breakNum, #num"
      ).show();
    $("#reset, #timeType").hide();   
    
  })
  $("#minus5Clock").click(function() {
    if (count > 5) {
      count -= 5;
      $("#num").html(count);
    }
  });
  $("#add5Clock").click(function() {
    count += 5;
    $("#num").html(count);
  });
  $("#minus5Break").click(function() {
    if (breakTime > 5) {
      breakTime -= 5;
      $("#breakNum").html(breakTime);
    }
  });
  $("#add5Break").click(function() {
    breakTime += 5;
    $("#breakNum").html(breakTime);
  });
});
