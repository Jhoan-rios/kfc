/* function modoDark(){
    document.getElementById('body').classList.remove('ligth')
    document.getElementById('body').classList.add('dark')
}

function modoLigth(){
    document.getElementById('body').classList.add('ligth')
    document.getElementById('body').classList.remove('dark')     
} 
 */

function cambioColor(){
    let color = document.getElementById('seleccionar_color').value;

    if(color == 'oscuro'){
        document.getElementById('body').classList.remove('ligth')
        document.getElementById('body').classList.add('dark')
        localStorage.setItem
    }
    else if(color = 'claro'){
        document.getElementById('body').classList.add('ligth')
        document.getElementById('body').classList.remove('dark')  
        localStorage.setItem('dark-mode','0')
    }
}


function cambiaIdioma(){
    let idioma = document.getElementById('seleccionar_idioma').value;

    if(idioma == 'en'){
        let btn = document.querySelectorAll('.btn')
        console.log(btn)
        for (let i = 0; i < btn.length; i++) {
            btn[i].innerHTML = "buy";
            
        }
        document.getElementById('text1').innerHTML = "1 BBQ Crunch Sandwich (1 breaded chicken fillet)"
        document.getElementById('text2').innerHTML = "1 Kentucky hamburger / Sandwich 1 breaded chicken breast fillet, pickles,..."
        document.getElementById('text3').innerHTML = "1 BBQ Crunch Sandwich (1 breaded chicken fillet) + 1 small potato + 1 PET Soda ..."
        document.getElementById('text4').innerHTML = "1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Fillet, Salad,..."
        document.getElementById('text5').innerHTML = "1 Kentucky hamburger / Sandwich (1 Breaded chicken breast fillet, pickles,..."
        document.getElementById('text6').innerHTML = "1 Kentucky Colonel Hamburger / Sandwich (1 Breaded chicken fillet, Salad,..."
        document.getElementById('text7').innerHTML = "1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, onion and..."
        document.getElementById('text8').innerHTML = "1 Crispy BBQ Sandwich (1 extra-large breast fillet, triple breaded, crispy onion, onion and..."
    }
    else if( idioma == 'es'){
        let btn = document.querySelectorAll('.btn')
        console.log(btn)
        for (let i = 0; i < btn.length; i++) {
            btn[i].innerHTML = "Comprar";
            
        }
        document.getElementById('text1').innerHTML = "1 Sándwich BBQ Crunch (1 filete de pollo apanado)"
        document.getElementById('text2').innerHTML = "1 Kentucky hamburguesa / Sandwich 1 filete de pechuga de pollo apanado, pepinillos,..."
        document.getElementById('text3').innerHTML = "1 Sándwich BBQ Crunch (1 filete de pollo apanado) + 1 papa pequeña + 1 Gaseosa PET ..."
        document.getElementById('text4').innerHTML = "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada..."
        document.getElementById('text5').innerHTML = "1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos,..."
        document.getElementById('text6').innerHTML = "1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pollo apanado, Ensalada..."
        document.getElementById('text7').innerHTML = "1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp..."
        document.getElementById('text8').innerHTML = "1 Sándwich Crispy BBQ (1 Filete de pechuga extragrande, triple empanizado, cebolla crisp..."
    }
}




