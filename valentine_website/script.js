
document.getElementById('yes').addEventListener('change', function() {
    if(this.checked) {
        window.location.href = 'response.html';
    }
});

document.getElementById('no').addEventListener('change', function() {
    if(this.checked) {
        document.getElementById('response').innerHTML = '<img src="sad_emoji.gif" alt="Sad Emoticon">';
        document.getElementById('yes').checked = false;
    }
});
    