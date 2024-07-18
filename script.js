async function get() {
    const response = await fetch("https://api.worldnewsapi.com/top-news?source-country=in&language=en&headlines-only=true&api-key=68d983de85ec42ca81803dd05717a9f5");
    if (!response.ok) {
        console.error('Network response was not ok', response.statusText);
        return;
    }
    const data = await response.json();
    const title = document.getElementById("title");
    title.innerHTML = JSON.stringify(data.top_news[3].news[0].title); 
    const href=document.getElementById("briefElement")
    href.href = JSON.stringify(data.top_news[3].news[0].url);
}

get();
