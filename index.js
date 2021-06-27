//console.log("hello");
//d639e7fb5e014f1e9ee7e75dac165faf

//To Grabs the news
let newsAccordion = document.getElementById("accordionnews");
let newsAccordion1 = document.getElementById("accordionnews1");

//source and apikey value(parameters used to access news)
source = 'bbc-news';
let api_key = 'd639e7fb5e014f1e9ee7e75dac165faf'

//Create a ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api_key}`, true);
//xhr.getResponseHeader();

//To do after getting the response
xhr.onload = function () {
    if (this.status === 200) {
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        let newsHtml="";
        articles.forEach(function(x,index) {
            let news = `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                            aria-expanded="false" aria-controls="collapse${index}">
                            ${x["title"]}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                        data-bs-parent="#newsAccordion">
                        <div class="accordion-body"> ${x["content"]} <a href="${x["url"]}" target="_blank">more..</a></div>
                    </div>
                </div>`;
            newsHtml+=news;
        });
        newsAccordion.innerHTML=newsHtml;
    }
    else {
        console.log("Some error message");
    }
}
xhr.send();



//Search function
values = document.getElementsByClassName("form-control").value;
//function after click

const dates=new Date;
const xhr1 = new XMLHttpRequest();
xhr1.open('GET', `https://newsapi.org/v2/top-headlines?q=India&sortBy=popularity&apiKey=${api_key}`,true);

//To do after getting the response
xhr1.onload = function () {
    if (this.status === 200) {
        let json1 = JSON.parse(this.responseText);
        let articles1 = json1.articles;
        let newsHtml1 = "";
        var i = 0;
        articles1.every(function (x, index) {
            i+=1;
            let news1 = `<div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index+10}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index + 10}"
                            aria-expanded="false" aria-controls="collapse${index + 10}">
                            ${x["title"]}
                        </button>
                    </h2>
                    <div id="collapse${index + 10}" class="accordion-collapse collapse " aria-labelledby="heading${index + 10}"
                        data-bs-parent="#newsAccordion">
                        <div class="accordion-body"> ${x["content"]} <a href="${x["url"]}" target="_blank">more..</a></div>
                    </div>
                </div>`;
            newsHtml1 += news1;
            if (i == 9) {
                return false;
            }
            return true;
            
        });
        newsAccordion1.innerHTML = newsHtml1;
    }
    else {
        console.log("Some error message");
    }

}
xhr1.send();