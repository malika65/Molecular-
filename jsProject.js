$(document).ready(function(){
    
  	$(".up").hide(); 
  	$(".clickMenu").click(function(){
   
    $(".visibleMenu").toggle(400);
      
    $(".up").toggle(); 
    $(".down").toggle();
  }); 
});

function showStuff(id) {
	$("#content").css({
		display: "none"
	})

	document.getElementById("hidden").style.display = block;
    btn.style.display = 'none';
}
$("#content").html(content_main);
$("#open_first").click(function(){
	$("#content").html(content_first);
});

$("#open_main").click(function(){
	$("#content").html(content_main);
});
$("#open_second").click(function(){
	$("#content").html(content_second);
});
$("#open_third").click(function(){
	$("#content").html(content_third);
});
$("#open_fourth").click(function(){
	$("#content").html(content_fourth);
});
$("#open_video").click(function(){
	$("#content").html(video_page);
});
$("#open_tools").click(function(){
	$("#content").html(tools_for);
});
$("#open_signup").click(function(){
	$("#content").html(sign_up);
});




function send(){
  
  var name  = document.getElementById("name").value;
  var lastname  = document.getElementById("Surname").value;
  var email = document.getElementById("email").value;
  if( name == "" || lastname=="" || email ==""){
    alert("Fields can not be empty!");
  }
  else{
    var mystr  = "My congratulations "+  name +" "+lastname +"! You are sign up.For more information check your email."
    alert(mystr);
    document.location.href = "mailto:xyz@something.com";

}

  
  
}