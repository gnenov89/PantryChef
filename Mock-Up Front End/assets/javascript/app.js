
//makes hamburger menu when screen is small
$(document).ready(function() {
    $(".button-collapse").sideNav();
})

//open search by recipe page
$("#search_by_recipe").click(function() {
    window.location.href = '/Users/asime/OneDrive/Homework/PantryChef/Mock-Up%20Front%20End/search_by_recipe.html?';
    return false;
});

$("#search_by_ingredient").click(function() {
    window.location.href = '/Users/asime/OneDrive/Homework/PantryChef/Mock-Up%20Front%20End/search_by_ingredient.html?';
    return false;
});