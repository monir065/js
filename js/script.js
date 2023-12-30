// javascript start 
// bulb on/off 
function bulbOn(){
  document.getElementById('my_img').src="images/on.gif";
}
function bulbOff(){
  document.getElementById('my_img').src="images/off.gif";
}
// bulb on/off 
// show date and time stert
function showDt(){
  document.getElementById('dt').innerHTML= Date();
}
function dtHide(){
  document.getElementById('dt').style.display = "none"; 
}
// show date and time end
// Welcome massage start
function welcome(){
  document.getElementById('wel').innerHTML =
  "Welcome to javaScript.";
} 
// Welcome massage end
// display show/hide start
function hideD(){
  document.getElementById('sh').style.display="none";
}
function showD(){
  document.getElementById('sh').style.display="block";
}
// display show/hide end
// Output start
function outPut(){
  document.getElementById('out').innerHTML= 5+6;
} 
// Output end
// statment start
let a, b, c;
a = 5;
b = 8; 
c = a+b
document.getElementById('stat').innerHTML = c;
// statment end

// Variables start
var x= 20;
var y= 15;
var z= x + y;
document.getElementById('vari').innerHTML = "X + Y value:" +z;

// Variables end
// Constant start
const person1 =40; 
const person2 =32; 
var total = person1 + person2;
document.getElementById('cons').innerHTML = "Total:" + total;
// Constant end 
// Assingment Operators start
var x =10;
var y = x;
document.getElementById('assi').innerHTML= "y value is:" + y;

// Assingment Operators end
// Add operator start
var x = 25;
var y = 30;
var z = x+y;
document.getElementById('addi').innerHTML = "x+y value is:" +z;

// Add operator end
// Multiplying start
var x = 8;
var y = 5;
var z = x*y;
document.getElementById('mul').innerHTML= "x*y value is:" +z;
// Multiplying end
// array start 
const cars = ["Monir", "Sabuj", "Pollob"];
document.getElementById('arra').innerHTML = cars;
// number start 
let o = 3.14;
let p = 15;
document.getElementById("num").innerHTML = o + "<br>" + p;
// Math start 
document.getElementById('pi').innerHTML = Math.PI;
// if start 
if (new Date().getHours() < 18) {
  document.getElementById('me').innerHTML = "Good day";
}
// object 
const car = {type: "Fiat", model: "500", color: "white"};
document.getElementById("ob").innerHTML = "The car type is" + car.type;
// event 
function evn(){
  document.getElementById('ev').innerHTML=Date();
}
// booleans start 
document.getElementById("boolens").innerHTML = (10 > 9);

// navigator
let language = window.navigator.language;
document.getElementById("navigator").innerHTML = "Browser language:" + language;

// Confirm box 
function myConfirm(){
  var txt;
  if (confirm("Press a  button")){
      txt = "You pressed OK";
  } else{
      txt = "You pressed cancel";
  }
  document.getElementById("confirm").innerHTML = txt;
}
// prompt start 
function myPrompt(){
  let text; 
  let per = prompt ("Please enter your name:" , "Monir");
  if ( per == null || per == ""){
      text = "User cancelled the prompt.";
  } else{
      text = "Hello" + per + "! How are you today?";
  }
  document.getElementById("prompt").innerHTML = text; 
}
// Line brack popup box 
function myPop(){
  alert("Hello\n How are you")
}
// Timing start 
function myTiming(){
  alert("Hello");
}
// javascript end

//  jquery start 
$(document).ready(function(){


    $('#btn').click(function(){
        alert("Welcome");
    })

    $(document).ready(function(){
        $('#hide').on('click', function(){
            $("p").hide();
        })
    });

    $(document).ready(function(){
        $('#show').on('click', function(){
            $("p").show();
        });
    });

    // down panel
    $(document).ready(function(){
        $('#flip').on('click', function(){
            $("#panel").slideDown("slow");
        });
    });
    
    // animation
    $(document).ready(function(){
        $('.ani_btn').on('click', function(){
            $(".animation").animate({left: '250px'});
        });
    });
// selector 
    $(document).ready(function(){
        $("#bt").on('click', function(){
          $(".par").hide();
        });
      });
    //   event 
    $(document).ready(function(){
        $(".evnt").on('click', function(){
          $(this).hide();
        });
      });
    //   stop 
    $(document).ready(function(){
        $("#flip1").on('click', function(){
          $("#panel").slideDown(5000);
        });
        $("#sto").on('click', function(){
          $("#panel").stop();
        });
      });
    //   call back 
    $(document).ready(function(){
        $(".c_bt").on('click', function(){
          $(".call_b").hide("slow", function(){
            alert("This page is hide");
          });
        });
       
      });
    //   change 
           $(document).ready(function(){
            $(".chang").on('click', function(){
                $("#cha").css("color", "red").slideUp(2000).slideDown(2000);
            });
           });

        //    show user input value 
        $(document).ready(function(){
            $(".bt_c").on('click', function(){
              alert("Value: " + $("#text").val());
            });
          });

          // faid 
          $("#hid").on('click', function(){
            $('#fai').fadeOut();
          })

          $("#sho").on('click', function(){
            $('#fai').fadeIn();
          })
          $('#toog').on('click', function(){
            $('#fai').fadeToggle();
          })

          // toggle 
          $('.ques').on('click', function(){
            $('.ans').fadeToggle();
          })
});
