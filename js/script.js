document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const recipeResults = document.getElementById('recipe-results');

    // Recipe database (now with image URLs and links)
    const recipes = [
        {
            name: "Margherita Pizza",
            ingredients: ["tomato", "cheese"],
            link: "pizza.html",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format"
        },
        {
            name: "Pasta Alfredo",
            ingredients: ["pasta", "cheese", "garlic"],
            link: "pasta.html",
            image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&auto=format"
        },
        {
            name: "Spinach Pasta",
            ingredients: ["pasta", "spinach", "garlic"],
            link: "spinach-pasta.html",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format"
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