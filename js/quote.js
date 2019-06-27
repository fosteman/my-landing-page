require('@timfosteman/quote-generator').randomQuotePromise()
    .then(Qobj => document.getElementById('quote').innerHTML = '<em>' + Qobj.text + '</em>' + '<hr class="horizontal-rule-2">' + Qobj.author)
    .catch(err => console.error(err.message));
