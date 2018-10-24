"use strict";
$(document).ready(() => {
    let table = null;
    $(document).on("mouseenter", ".available", (event) => {
        $(event.target).fadeTo(500, 0.5);                                                            //adds an opacity when you hover
    });
    $(document).on("mouseout", ".available", (event) => {
        $(event.target).fadeTo(500, 1);
    });
    $(document).on("mouseenter", ".reserved", (event) => {                                          //does not allow you to hover over reserved
        $(event.target).css("cursor", "not-allowed");
    });
    $(document).on("click", ".available", (event) => {                                               //changes the form to display flex
        $("form")
        .fadeIn(2000)
        .css("display", "flex");
        table = $(event.target);

        
        $(".form-table-num").text(`Table Number: ${$(event.target).text()}`);             //gets the table number on the form 
    });
    $(document).on("click", ".form-x, .save", (event) => {
        $("form").fadeOut(2000);                                                                            //when you click exit or save, close the form
        if ($(event.target).hasClass("save")) {
            table.removeClass("available").addClass("reserved");                            //change the class to reserve when you click save

        };
    });



    //part 2
    let container = null;
    $(document).on("click", ".table", (event) => {
        container = $(event.target);                            //storing the clicked "container" into the variable container
        console.log(container);
    });

    $(document).on("click", "button", (event) => {
        console.log("clicked");
        container
            .attr("name", $("input").eq(0).val())                  //eq(0) is of the array of inputs selecting just the first index
            .attr("phone", $("input").eq(1).val())                  //assigning an attribute of lastname with a value of the the value of what we put in the second input
            .attr("numofpeeps", $("input").eq(2).val());
        $("input").each(function () {                               //loops through all your inputs clears the inputs after the button is clicked/ "for each input run the function that selects the obj and assigns and empty string to the val"
            $(this).val("");
        })
    });
    $(document).on("mouseenter", ".reserved", (event) => {
        if ($(event.target).attr("name") && $(event.target).attr("phone") && $(event.target).attr("numofpeeps")){
            $(event.target).append(`
            <section class="tooltip">
                <p>Name:${$(event.target).attr("name")}</p>
                <p>Size of Party:${$(event.target).attr("numofpeeps")}</p>
            </section>
            `);
        }
    });
    $(document).on("mouseleave", ".reserved", (event) =>{
        $(".tooltip").remove("");                                           
    });




});