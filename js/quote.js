const getQuote = function() {
    fetch('https://graphql-api-backend.herokuapp.com/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: `
                query {
                    randomQuote {
                        id
                        text
                        author
                    }
                }
            `
        })
    })
        .then(res => res.json())
        .then(({data}) => data.randomQuote[0])
        .then(q => document.getElementById('quote').innerHTML = q.text + ' - ' + '<em>' + q.author + '</em>');
};

setTimeout(function() {
    getQuote();
}, 2000);

/*const { createApolloFetch } = require('./appolo-fetch.min');

const fetch = createApolloFetch({
    uri: 'https://graphql-api-backend.herokuapp.com/api',
});

fetch({
    query: '{ posts { title }}',
}).then(res => {
    console.log(res.data);
});
fetch(
    {
        query: `{
                query: {
                    randomQuote: {
                        "id",
                        "text",
                        "author",
                    }
                }
            }`
    }
)
    .then(res => res.json()
    .then(json => window.qod = json)
    .finally(() => {
        let q = window.qod[Math.floor(Math.random() * window.qod.length)];
        document.getElementById('quote').innerHTML = q.quoteText + ' - ' + '<em>' + q.quoteAuthor + '</em>';
    })
    .catch(err => console.error('Error!' + err.message))
);

*/
