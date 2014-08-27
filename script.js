$(document).ready(function(){
//    $(".menu").hide();
//    $("#r1").click(function(){
//        $(".menu").hide();
//        $("#m1").show();
//    });
//    $("#r2").click(function(){
//        $(".menu").hide();
//        $("#m2").show();
//    });
//    $("#r3").click(function(){
//        $(".menu").hide();
//        $("#m3").show();
//    });
//    $("#r4").click(function(){
//        $(".menu").hide();
//        $("#m4").show();
//    });

//    console.log(data);

    var restaurants = "", menuItems = "";

    data.forEach(function(r, i){
        restaurants += "<li><a id='" + r.id + "'class='restaurant' href='#'>" +r.name + "</a></li>";

        r.menu.forEach(function(item, i){
            menuItems += "<li class='item' data-items='" + r.id + "'><input type='checkbox' data-price='"+item.price+"'/>" + item.title + " - $" + item.price +"</li>";
        });

    })
//   already existed       add  variable
    $("ul#restaurantList").append(restaurants);
    $("ul#menuItems").append(menuItems);
    $(".item").hide();

    $(".restaurant").on("click", function() {
        $(".item").hide().filter("[data-items=" + this.id +"]").show();
    });


    var sum = 0;
    $("input").on("click", function() {

        if($(this).is(':checked')){
            sum = sum + parseInt($(this).attr("data-price"));
        } else {
            sum = sum - parseInt($(this).attr("data-price"));
        }

        $("#count").text("You've selected " + $("input:checked").length + " items!");
        $("#total").text("Total amount due: $"+ sum + ".");


    });



});


var data = [
    {

        id: "r1",
        name: "McDonald's",
        menu: [
            {title: "burger", price:5},
            {title: "chicken nuggets", price:3},
            {title: "fries", price:2},
            {title: "burger", price:1}
        ]
    },
    {

        id: "r2",
        name: "La Foret",
        menu: [
            {title: "french onion soup", price:4},
            {title: "steak", price:30},
            {title: "creme brulee", price:8},
            {title: "wine", price:10}
        ]
    },
    {

        id: "r3",
        name: "Boiling Crab",
        menu: [
            {title: "shrimp", price:4},
            {title: "blue crab", price:5},
            {title: "cajun fries", price:2},
            {title: "beer", price:7}
        ]
    },
    {

        id: "r4",
        name: "Bill's Cafe",
        menu: [
            {title: "eggs", price:2},
            {title: "french toast", price:6},
            {title: "hash browns", price:3},
            {title: "OJ", price:1}
        ]
    }]

