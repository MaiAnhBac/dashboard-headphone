//dark-mode
var checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', function(event) {
    if(event.target.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkModeEnabled', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.removeItem('darkModeEnabled');
    }
});


var isDarkModeEnabled = localStorage.getItem('darkModeEnabled');

if (isDarkModeEnabled === 'true') {
    checkbox.checked = true;
    document.body.classList.add('dark-mode');
}




//en-vi
document.getElementById('language-select').addEventListener('change', function() {
    switchLanguage(this.value);
});

function switchLanguage(lang) {
    document.querySelectorAll('[data-en], [data-vi]').forEach(elem => {
        elem.textContent = elem.getAttribute('data-' + lang);
    });
    localStorage.setItem('selectedLanguage', lang);
}

document.addEventListener('DOMContentLoaded', function() {
    const selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        switchLanguage(selectedLanguage);
        document.getElementById('language-select').value = selectedLanguage;
    }
});

//loading
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('.middle').style.display = 'none';
      document.querySelector('.container').style.display = 'block';
      document.querySelector('main').style.display = 'block';
    }, 2000); // 2 seconds
  });
