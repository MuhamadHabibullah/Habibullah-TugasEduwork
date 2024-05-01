document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '8864faee5a5043a388c71f5c6c7de6e2'; // Ganti dengan API key yang valid
    const apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' + apiKey;

    fetchNews(apiUrl);

    document.getElementById('search').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const searchQuery = event.target.value;
            const searchUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`;
            fetchNews(searchUrl);
        }
    });
});

async function fetchNews(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = '';

            data.articles.forEach(article => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('news-item');

                const title = document.createElement('h2');
                title.textContent = article.title;

                const image = document.createElement('img');
                image.src = article.urlToImage;
                image.alt = article.title;

                const description = document.createElement('p');
                description.textContent = article.description;

                const readMoreLink = document.createElement('a');
                readMoreLink.textContent = 'Read More';
                readMoreLink.href = article.url;
                readMoreLink.target = '_blank';

                newsItem.appendChild(title);
                newsItem.appendChild(image);
                newsItem.appendChild(description);
                newsItem.appendChild(readMoreLink);

                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
}
