const d = document;
const w = window;


let Busqueda = (input, selector) => {

    const $selector = d.querySelectorAll(selector);

    d.addEventListener('DOMContentLoaded', () => {

        d.addEventListener('keyup', e => {
            if (e.target.matches(input)) {
                console.log(e.target.value)
                $selector.forEach(element => {
                    element.textContent.toLowerCase().includes(e.target.value) ?
                        element.classList.remove('display')
                        :
                        element.classList.add('display')
                })
            }
        })

    })

}

Busqueda('#search', '.targeta-anime')


let slider = (contenedor, card) => {

    d.addEventListener('DOMContentLoaded', () => {
        let $contenedor = d.querySelector(contenedor)
        let $contenido = d.querySelectorAll(card)
        let whidth = $contenido[0].clientWidth;
        let contador = 1;
        console.log($contenido)
        d.addEventListener('resize', e => {
            whidth = $contenido[0].clientWidth;
        })

        let sliderMovi = () => {
            $contenedor.style.transform = `translateX(-${whidth * contador + 5}px)`
            $contenedor.style.transition = `all 1s ease`
            contador++
        }

        console.log($contenido.length)
        setInterval(() => {
            sliderMovi();
            console.log(contador)
            if (contador == $contenido.length - 3) {
                contador = 1
                $contenedor.style.transform = `translateX(0px)`;
                $contenedor.style.transition = `all 1s ease`
            }
        }, 2000);
    })
}

slider('.carrusel', '.contenido')