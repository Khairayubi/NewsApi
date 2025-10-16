const div =document.querySelector(".container");
let News = document.querySelector(".News");
const form = document.getElementById("searchNews");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const search = document.querySelector("#search").value;

    buttons(search);
})
let newsCategories = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"];
newsCategories.forEach(item => {
    
    div.innerHTML += `
    <button onclick="buttons('${item}')">${item}</button>`
});

function buttons(item){
fetch(`https://newsapi.org/v2/everything?q=${item}&apiKey=2714720b94dc4944906c42560212a2d6`)
.then(res =>{
    return res.json()
})
.then(res =>{
    console.log(res)
    // div.innerHTML = ""
    News.innerHTML = "" 
    res.articles.forEach(article =>{
        
         
    News.innerHTML+= `<div class="card">
            <img src="${article.urlToImage}"
                alt="">
            <h3>${article.title}</h3>
            <p class="description">
               ${article.description}
            </p>
            <button onclick="window.open('${article.url}', '_blank')">Learn More</button>
        </div>`
})
})
.catch(err =>{
    console.log(err);
})
}

