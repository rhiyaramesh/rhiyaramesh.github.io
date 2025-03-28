document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const recipeResults = document.getElementById('recipe-results');

    // Recipe database (now with image URLs and links)
    const recipes = [
        {
            name: "Tresleches",
            ingredients: ["All purpose flour", "Baking powder", "Salt", "Egg", "Granulated sugar", "Milk", "Vanilla"],
            link: "tresleches.html",
            image: "../images/tresleches.jpeg"
        },
        {
            name: "Lasagna",
            ingredients: ["Lasagna noodles", "Garlic", "Pasta sauce", "Mozzarella cheese", "Parmesan cheese", "Salt", "Onions", "Tomato paste", "Italian seasoning", "Cottage cheese", "Parsley", "Egg"],
            link: "lasagna.html",
            image: "../images/lasagna.jpeg"
        },
        {
            name: "Brownies",
            ingredients: ["Granulated sugar", "All purpose flour", "Cocoa powder", "Powdered sugar", "Chocolate chips", "Salt", "Egg", "Canola oil", "Vanilla"],
            link: "Brownies.html",
            image: "../images/brownies.png"
        },
        {
            name: "Jalapeno Popper Quesadillas",
            ingredients: ["Flour tortillas", "Jalapenos", "Cream cheese", "Mozzarella cheese", "Monterey Jack cheese", "Garlic powder", "Onion powder", "Kosher salt", "Pepper"],
            link: "Jalapeno Popper Quesadillas.html",
            image: "../images/Jalapeno Popper Quesadillas.jpeg"
        },
        {
            name: "Pavlova",
            ingredients: ["White sugar", "Cornstarch", "Egg", "Lemon Juice", "Heavy whipping cream", "Granulated sugar", "Strawberries"],
            link: "Pavlova.html",
            image: "../images/pavlova.jpeg"
        },
        {
            name: "Potato Roses",
            ingredients: ["Potatoes", "Garlic", "Butter", "Kosher salt", "Pepper", "Cayenne pepper"],
            link: "Potato Roses.html",
            image: "../images/potato roses.jpeg"
        },
        {
            name: "Creme Brulee",
            ingredients: ["Egg", "White sugar", "Vanilla", "Heavy whipping cream", "Brown sugar"],
            link: "Creme Brulee.html",
            image: "../images/Creme Brulee.jpeg"
        }
    ];

    submitBtn.addEventListener('click', function() {
    const selectedIngredients = Array.from(
        document.querySelectorAll('input[name="ingredient"]:checked')
    ).map(checkbox => checkbox.value);

    // Filter recipes that include AT LEAST 2 selected ingredients
const matchedRecipes = recipes.filter(recipe => {
    const matchingIngredients = selectedIngredients.filter(ingredient => 
        recipe.ingredients.includes(ingredient)
    );
    return matchingIngredients.length >= 2; // Require at least 2 matches
});

// Display results
if (matchedRecipes.length > 0) {
    recipeResults.innerHTML = matchedRecipes.map(recipe => `
        <a href="${recipe.link}" class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                <h3>${recipe.name}</h3>
                <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
            </div>
        </a>
    `).join('');
} else {
    recipeResults.innerHTML = '<p>No recipes found with at least 2 matching ingredients.</p>';
}
/*
    // Filter recipes that include ANY selected ingredient (OR condition)
    const matchedRecipes = recipes.filter(recipe =>
        selectedIngredients.some(ingredient => 
            recipe.ingredients.includes(ingredient)
        )
    );

    // Display results
    if (matchedRecipes.length > 0) {
        recipeResults.innerHTML = matchedRecipes.map(recipe => `
            <a href="${recipe.link}" class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}">
                <div class="recipe-info">
                    <h3>${recipe.name}</h3>
                    <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
                </div>
            </a>
        `).join('');
    } else {
        recipeResults.innerHTML = '<p>No recipes found. Try different ingredients!</p>';
    } */
});
});