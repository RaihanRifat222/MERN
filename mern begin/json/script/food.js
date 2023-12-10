function loadFood() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}

function displayFood(foods) {
    
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';   
    foods.forEach(food => {
        
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        foodDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${food.strMealThumb}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${food.strMeal}</h5>
          <p class="card-text">${food.strInstructions.slice(0,200)}. . . .</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `;
        foodContainer.appendChild(foodDiv);
    });
}

function searchFood() {
    const keyWord = document.getElementById('search-box').value;

    const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyWord}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}
loadFood();