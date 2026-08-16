const nameInput = document.getElementById("nameInput");
const idInput = document.getElementById("idInput");

const cardName = document.getElementById("cardName");
const cardId = document.getElementById("cardId");


nameInput.addEventListener("input", function () {

    if (nameInput.value === "") {
        cardName.textContent = "YOUR NAME";
    } else {
        cardName.textContent = nameInput.value.toUpperCase();
    }

});


idInput.addEventListener("input", function () {

    if (idInput.value === "") {
        cardId.textContent = "ID: 000000";
    } else {
        cardId.textContent = "ID: " + idInput.value;
    }

});
const photoInput = document.getElementById("photoInput");
const cardPhoto = document.getElementById("cardPhoto");

photoInput.addEventListener("change", function () {

    const file = photoInput.files[0];

    if (file) {
        cardPhoto.src = URL.createObjectURL(file);
    }

});