/*
 * Version 
 * Author: WildfootW, Uier
 * GitHub: github.com/Wildfoot, github.com/Uier
 * Copyright (C) 2018 All rights reserved.
 *
 */

$(document).ready(function(){
    $(".link-to-graduation-ceremony").click(function(){
        console.log("click");
        window.location.href = "./Graduation_ceremony.html";
    });

    date_object = new Date();
    document.getElementById("date").innerHTML = 31 - date_object.getDate();
});

