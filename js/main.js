/*
 * Version 
 * Author: WildfootW, Uier
 * GitHub: github.com/Wildfoot, github.com/Uier
 * Copyright (C) 2018 All rights reserved.
 *
 */

$(document).ready(function(){
    $(".link-to-graduation-ceremony").click(function(){
        window.location.href = "./activity/Graduation_ceremony.html";
    });
    $(".baseball-activity").click(function(){
        window.location.href = "./activity/baseball.html";
    });
    $(".postcard-activity").click(function(){
        window.location.href = "./activity/postcard.html";
    });
    $(".song-activity").click(function(){
        window.location.href = "./activity/song.html";
    });
    $(".picture-activity").click(function(){
        window.location.href = "./activity/tack_picture.html";
    });

    date_object = new Date();
    document.getElementById("date").innerHTML = 31 - date_object.getDate();

    var lis = $('.nav > li');
    menu_focus( lis[0], 1 );

    $(".fancybox").fancybox({
        padding: 10,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

});

