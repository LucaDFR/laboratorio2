function botonDeBorrar() {
    document.getElementById('input').value= '';
}

document.querySelector('.logo').addEventListener('click', function () {
    this.style.animation = 'none';
    void this.offsetWidth;
    this.style.animation = 'giroCompleto 2s ease-in-out forwards';
});



const ascenderButton = document.getElementById('ascender');

ascenderButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        ascenderButton.style.display = "block";
    } else {
        ascenderButton.style.display = "none";
    }
}