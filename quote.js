fetch('https://api.myjson.com/bins/16hm25')
    .then(res =>
        res.json()
            .then(json => window.qod = json)
            .finally(() => {
                let q = window.qod[Math.floor(Math.random() * window.qod.length)];
                document.getElementById('special').innerHTML = q.quoteText + ' - ' + '<em>' + q.quoteAuthor + '</em>';
}));
