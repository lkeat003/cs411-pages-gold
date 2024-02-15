function showPopup(name, role, major, experience, hobby, education) {
    var jpgPath = 'images/' + name.replace(' ', '') + '.jpg';
    var pngPath = 'images/' + name.replace(' ', '') + '.png';
    var jpgImage = new Image();
    jpgImage.onload = function() {
        document.getElementById('popup-img').src = jpgPath;
        showPopupContent(name, role, major, experience, hobby, education);
    }
    jpgImage.onerror = function() {
        var pngImage = new Image();
        pngImage.onload = function() {
            document.getElementById('popup-img').src = pngPath;
            showPopupContent(name, role, major, experience, hobby, education);
        }
        pngImage.onerror = function() {
            document.getElementById('popup-img').src = 'images/default.jpg';
            showPopupContent(name, role, major, experience, hobby, education);
        }
        pngImage.src = pngPath;
    }
    jpgImage.src = jpgPath;
}

function showPopupContent(name, role, major, experience, hobby, education) {
    document.getElementById('popup-name').textContent = name;
    document.getElementById('popup-role').textContent = 'Role: ' + role;
    document.getElementById('popup-major').textContent = 'Major: ' + major;
    document.getElementById('popup-age').textContent = 'Age: ' + experience;
    document.getElementById('popup-hobby').textContent = 'Hobbies: ' + hobby;
    document.getElementById('popup-education').textContent = 'Education: ' + education;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
