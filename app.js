window.addEventListener('load', () => {
    
    //ABRIR Y CERRAR EL CARRITO

    const cartIcon = document.querySelector("#cart-icon");
    const cart = document.querySelector(".cart");
    const closeCart = document.querySelector("#cart-close");

    cartIcon.addEventListener("click", () => {
        cart.classList.add("active");
    });

    closeCart.addEventListener("click", () => {
        cart.classList.remove("active");
    });

    // COMENZAR CUANDO EL DOCUMENTO ESTA LISTO

    if(document.readyState == "loading"){
        document.addEventListener("DOMContentLoaded", start);
    }else{
        start();
    }

    // COMENZAR
    function start(){
        addEvents();
    }

    //ACTUALIZAR Y VOLVER A PRESENTAR
    function update(){
        addEvents();
        updateTotal();
    }

    //DARK MODE
    var darkMode = document.getElementById('dark-mode-container');
    var body = document.querySelector('body');

    darkMode.onclick = function () {
        darkMode.classList.toggle('active');
        body.classList.toggle('active');
    }

    
    //EVENTOS
    function addEvents(){

        //QUITAR ARTICULOS DEL CARRITO
        let cartRemove_btns = document.querySelectorAll(".cart-remove");

        console.log(cartRemove_btns);

        cartRemove_btns.forEach((btn) =>{
            btn.addEventListener("click", handle_removeCartItem);
        });

        //CAMBIAR CANTIDAD DE ARTICULOS
        let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");

        cartQuantity_inputs.forEach((input) =>{
            input.addEventListener("change", handle_changeItemQuantity);
        });

        //AÑADIR ARTICULOS AL CARRITO
        let addCart_btns = document.querySelectorAll(".add-cart");
        addCart_btns.forEach((btn) =>{
            btn.addEventListener("click", handle_addCartItem);
        });

    }


    //COMPRAR ORDEN
    const buy_btn = document.querySelector(".btn-buy");
    buy_btn.addEventListener("click", handle_buyOrden);

    //FUNCIONES DE MANEJOS DE EVENTOS
    let itemsAdded = [];


});
