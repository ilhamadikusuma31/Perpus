// api url
const api_url =
"https://masak-apa-tomorisakura.vercel.app/api/recipes/";

// Defining async function
async function getapi(url) {

// Storing response
const response = await fetch(url);

// Storing data in form of JSON
var data = await response.json();
console.log(data.results);
if (response) {
    hideloader();
}
show(data.results);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
// Loop to access all rows
let res = "";
for (let r of data) {
    res += `<div class='col-md-4'>
    <div class='card' style='width: 18rem;'>
        <img src="${r.thumb}"class='card-img-top' alt='...'>
        <div class='card-body'>
            <h5 class='card-title'>${r.key}</h5>
            <p>${r.title}</p>
            <a href='#' class='btn btn-primary'>info</a>
        </div>
    </div>
</div>`;
}
// Setting innerHTML as tab variable
document.getElementById("list-books").innerHTML = res;
}
