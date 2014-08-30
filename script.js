Parse.initialize("0ehE3x8PyWhvp9gboCISiMz7gL8IfonFChetw7Cz", "9XgdnH7iMTmeaxEabD8nM4vgS20LKkTtiB0X58QF");

$(document).ready(function(){

    $(".restaurantList").on("change", ".restaurant", function(event) {
    $("select option:selected").hide().filter("[data-source=" + this.id + "]").show();
        return false;
    });


   var parseData = function() {
 
        var restaurant = Parse.Object.extend("restaurant");
        var query = new Parse.Query(restaurant);
        query.find({
            success: function (results) {
                var restaurantListP = '';
                results.forEach(function (r, i) {
                    restaurantListP = $("<option />", { class: 'restaurant', "data-source": r.id, text: r.attributes.Name });
                    $('#restaurantList').append(restaurantListP);

                    console.log(restaurantListP)
                });
            },
            error: function (error) {
                alert("Error: " + error.code + " " + error.message);
            }
        });
 
        var MenuItem = Parse.Object.extend("MenuItem");
        var query = new Parse.Query(MenuItem);
        query.find({
        success: function(results) {
            var li, menuItems = [];
            results.forEach(function(mi, i) {
                var cb = $("<input />", { "type": 'checkbox' });
                menuItems.push($("<li />", { "class": 'item', "data-source": mi.attributes.Restaurant_ID }).append(cb).append(" " + mi.attributes.Title));
            })
            $("ul#itemList").append(menuItems);
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
 
    };

    parseData();
});



















//     var restaurants = "", menuItems = "";

//     data.forEach(function(r, i){
//         restaurants += "<li><a id='" + r.id + "'class='restaurant' href='#'>" +r.name + "</a></li>";

//         r.menu.forEach(function(item, i){
//             menuItems += "<li class='item' data-items='" + r.id + "'><input type='checkbox' data-price='"+item.price+"'/>" + item.title + " - $" + item.price +"</li>";
//         });

//     })
// //   already existed       add  variable
//     $("ul#restaurantList").append(restaurants);
//     $("ul#menuItems").append(menuItems);
//     $(".item").hide();

//     $(".restaurant").on("click", function() {
//         $(".item").hide().filter("[data-items=" + this.id +"]").show();
//     });


//     var sum = 0;
//     $("input").on("click", function() {

//         if($(this).is(':checked')){
//             sum = sum + parseInt($(this).attr("data-price"));
//         } else {
//             sum = sum - parseInt($(this).attr("data-price"));
//         }

//         $("#count").text("You've selected " + $("input:checked").length + " item(s)!");
//         $("#total").text("Total amount due: $"+ sum + ".");


//     });



// });


// var data = [
//     {

//         id: "r1",
//         name: "McDonald's",
//         menu: [
//             {title: "burger", price:5},
//             {title: "chicken nuggets", price:3},
//             {title: "fries", price:2},
//             {title: "coke", price:1}
//         ]
//     },
//     {

//         id: "r2",
//         name: "La Foret",
//         menu: [
//             {title: "french onion soup", price:4},
//             {title: "steak", price:30},
//             {title: "creme brulee", price:8},
//             {title: "wine", price:10}
//         ]
//     },
//     {

//         id: "r3",
//         name: "Boiling Crab",
//         menu: [
//             {title: "shrimp", price:4},
//             {title: "blue crab", price:5},
//             {title: "cajun fries", price:2},
//             {title: "beer", price:7}
//         ]
//     },
//     {

//         id: "r4",
//         name: "Bill's Cafe",
//         menu: [
//             {title: "eggs", price:2},
//             {title: "french toast", price:6},
//             {title: "hash browns", price:3},
//             {title: "OJ", price:1}
//         ]
//     }]



