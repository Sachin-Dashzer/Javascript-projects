
const menu = document.querySelector(".menu");
const mealbtn = document.querySelector("button");




function itemslist(bata , items) {


    for (let i = 1; i <= 20; i++) {

		if (bata[`strIngredient${i}`]) {
            items.push(`${bata[`strIngredient${i}`]} - ${bata[`strMeasure${i}`]} . `);

        }
        else {
            break;
        }

    }


}





mealbtn.addEventListener("click", () => {



    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => res.json())
        .then((data) => {

            document.querySelector(".menu").style.display ="block";

            let items = [];

            itemslist(data?.meals[0] , items);

            menu.innerHTML = `
                                <h1 class="title">${data?.meals[0]?.strMeal} <span>( ${data?.meals[0]?.strCategory} )</span></h1>
                                <ul>
                                    <li><span>Region : </span>${data?.meals[0]?.strArea}</li>
                                    <li><span>Tags : </span>${data?.meals[0]?.strTags}</li>
                                </ul>

                                <div class="ingredient">
                                    <div class="img">
                                        <img src="${data?.meals[0]?.strMealThumb}" alt=""> 
                                    </div>
                                    <div>
                                        <h3>Required Ingredients</h3>
                                        <ul>
                                            ${items.map(ingredient => `<li>${ingredient}</li>`).join('')}
                                        </ul>
                                    </div>
                                </div>
                                <div class="recipe">
                                    <h3>Recipe of ${data?.meals[0]?.strMeal} </h3>
                                    <p>${data?.meals[0]?.strInstructions}</p>
                                    
                                    <h3>Video tutorial of ${data?.meals[0]?.strMeal} </h3>

                                    <iframe width="420" height="315"
                                    src="https://www.youtube.com/embed/${data?.meals[0].strYoutube.slice(-11)}">
                                    </iframe>
                                    </div>
                            `;

        })
	.catch((error) => "error found");

})

