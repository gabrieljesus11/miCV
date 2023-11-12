const toggleSwitch = document.getElementById('toggleDarkMode');
const body = document.body;
const nav = document.getElementById('nav');
const footer = document.getElementById('footer');
const actualPage = document.getElementById('actual-page');
const menuExperiencia = document.getElementById('menu-item-experiencia');
const menuEducacion = document.getElementById('menu-item-educacion');
const menuReferencia = document.getElementById('menu-item-referencia');
const menuHome = document.getElementById('menu-item-home');
const menuHomeMobile = document.getElementById('menu-item-home-mobile');
const menuExperienciaMobile = document.getElementById('menu-item-experiencia-mobile');
const menuEducacionMobile = document.getElementById('menu-item-educacion-mobile');
const menuReferenciaMobile = document.getElementById('menu-item-referencia-mobile');
const mobileFooter = document.getElementById('mobile-footer');
const uade = document.getElementById('logo-uade');
const referenciaSanti = document.getElementById('referencia-santi');
const referenciaMario = document.getElementById('referencia-mario');
const misContactosLabel = document.getElementById('mis-contactos');
const elements = [body, nav, footer, actualPage, menuHome, menuExperiencia, menuEducacion, menuReferencia, menuHomeMobile, menuExperienciaMobile, menuEducacionMobile, menuReferenciaMobile, uade, mobileFooter, referenciaSanti, referenciaMario, misContactosLabel]

function aplicarEstilosModoOscuro() {
    if(modoOscuro){
        elements.forEach( element =>{
            if(element != null){
                if (element.id.toLowerCase() != ''){
                    var className = 'dark-mode-'+ element.id.toLowerCase();
                }
                else{
                    var className = 'dark-mode-'+ element.tagName.toLowerCase();
                }
                element.classList.add(className);
            }
        })
        toggleSwitch.checked = true;
    }
    else{
        elements.forEach( element =>{
            if(element != null){
                if (element.id.toLowerCase() != ''){
                    var className = 'dark-mode-'+ element.id.toLowerCase();
                }
                else{
                    var className = 'dark-mode-'+ element.tagName.toLowerCase();
                }
                element.classList.remove(className);
            }
        })
        toggleSwitch.checked = false;
    }
}

function cargarEstadoModoOscuro() {
    modoOscuro = localStorage.getItem('modoOscuro') === 'true'; // Recuperar el estado
    console.log('Cargar modo oscuro?: ' + modoOscuro)
    aplicarEstilosModoOscuro(); // Aplicar estilos según el estado recuperado
}

function guardarEstadoModoOscuro() {
    localStorage.setItem('modoOscuro', modoOscuro);
}

function cambiarModoOscuro() {
    modoOscuro = !modoOscuro; // Cambiar el estado
    console.log(modoOscuro)
    guardarEstadoModoOscuro(); // Guardar el estado en el almacenamiento local
    aplicarEstilosModoOscuro(); // Aplicar estilos según el nuevo estado
}

// Event listener para el cambio del interruptor
toggleSwitch.addEventListener('change', () => {
    cambiarModoOscuro();
});

cargarEstadoModoOscuro();