"use strict";
$(document).ready(() =>{
    $(".available").on("click", (event) => {
        $("form").show();
    })
    $(".save").on("click", (event) => {
        $("form").hide();
        $(event.target).addClass("reserved").removeClass("available");
    })

    


   
    
});