/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("document").ready(function(){
    $(".practice").css("background-color", "yellow");
    
    $('#superhumans').accordion({header:"h3"});
    $('superhumans').css('width', '400px');
    
    $('h3').css('background', 'cyan')
    
    
    
    $('p:first').css({"background-color": "yellow", "color": "black" });
    
     $('p:last').css({"background-color": "purple", "color": "white" });
     
     $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
     
     $('div').bind('mouseover',  mouseOverMe());
   
     $('h1').bind('click', mouseClick);
     
     $('#replaceWText').bind('click', replaceWText);
     
     $('#randPara').bind('click', addAPara);
     
     $('#removePara').bind('click', removeAPara);
});

function removeAPara(){
    $('#randPara p:last').remove();
}


function addAPara(){
    $('#randPara').append('<p>ADDED</p>');
}

function replaceWText(){
    $('#replaceWText').text('Replaced!');
}

function mouseOverMe(){
    $("h1").html("Joshua is lame");
    }
    
function mouseOutMe(){
        $('h1').html('Nick is cool');
    }
    
function mouseClick(){
        $('p').html('Clicked!!!!');
    }

