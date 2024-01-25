document.addEventListener('DOMContentLoaded', function() {
    var tituloEducacion = document.getElementById('tituloEducacion');

    tituloEducacion.addEventListener('mouseover', function() {
        this.classList.add('destacado');
    });

    tituloEducacion.addEventListener('mouseout', function() {
        this.classList.remove('destacado');
    });
});