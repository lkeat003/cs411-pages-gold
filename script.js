function showPopup(name, bio, email) {
    var jpgPath = 'images/' + name.replace(' ', '') + '.jpg';
    var pngPath = 'images/' + name.replace(' ', '') + '.png';
    var jpgImage = new Image();
    jpgImage.onload = function() {
        document.getElementById('popup-img').src = jpgPath;
        showPopupContent(name, bio, email);
    }
    jpgImage.onerror = function() {
        var pngImage = new Image();
        pngImage.onload = function() {
            document.getElementById('popup-img').src = pngPath;
            showPopupContent(name, bio, email);
        }
        pngImage.onerror = function() {
            document.getElementById('popup-img').src = 'images/default.jpg';
            showPopupContent(name, bio, email);
        }
        pngImage.src = pngPath;
    }
    jpgImage.src = jpgPath;
}

function showPopupContent(name, bio, email) {
    document.getElementById('popup-name').textContent = name;
    document.getElementById('popup-bio').textContent = ' ' + bio;
    document.getElementById('popup-email').textContent = ' ' + email;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


function openTab(tabName) {
    var i;
    var tabs = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

    var activeTabs = document.getElementsByClassName("active");
    for (i = 0; i < activeTabs.length; i++) {
        activeTabs[i].classList.remove("active");
    }
    document.getElementById(tabName + "-tab").classList.add("active");
}

window.onload = function() {
    openTab('home');
};



