
const menu = document.querySelector(".menu");
const mealbtn = document.querySelector("button");


mealbtn.addEventListener("click", () => {


    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => res.json())
        .then((data) => {

            console.log(data);


            menu.innerHTML = `

        <h1 class="title">${data?.meals[0]?.strMeal}</h1>
        <ul>
            <li><span>Region : </span>${data?.meals[0]?.strArea}</li>
            <li><span>Categroy : </span>${data?.meals[0]?.strCategory}</li>
            <li><span>Tags : </span>${data?.meals[0]?.strTags}</li>
        </ul>

        <div class="ingredient">
            <div class="img">
                 <img src="${data?.meals[0]?.strMealThumb}" alt=""> 
            </div>
            <h5></h5>
        </div>
        <div class="recipe">
        <p>${data?.meals[0]?.strInstructions}</p></div>
`;

        })

})

