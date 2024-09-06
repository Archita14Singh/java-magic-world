document.getElementById('runCodeButton').addEventListener('click', function() {
    // Get the Java code from the textarea
    const code = document.getElementById('codeArea').value;

    // Send the code to the backend (Heroku server)
    fetch('https://your-app-name.herokuapp.com/run-java', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code: code })
    })
    .then(response => response.text())
    .then(result => {
        // Display the result in the output area
        document.getElementById('outputArea').innerText = result;
    })
    .catch(error => {
        document.getElementById('outputArea').innerText = 'Error: ' + error;
    });
});
