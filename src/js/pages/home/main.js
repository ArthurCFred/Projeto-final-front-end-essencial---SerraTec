import { initializeSlider } from "../utils/slider.js";
import { setupSearchForm } from "../../components/pesquisa.js";
// import { setupUserIcon } from "./components/usuario.js";
import { irParaPrincipal } from '../../components/principal.js';
import { usuarioLogado } from "../../components/login.js";
import { logout } from "../../components/login.js";
import { renderProducts } from '../../components/produtos.js';
import { initializeCart } from '../../components/carrinho.js';
import { fetchProducts } from "../../services/api.js";

document.addEventListener('DOMContentLoaded', async function() {
    initializeSlider();
    setupSearchForm();
    // setupUserIcon();
    irParaPrincipal();
    usuarioLogado();
    initializeCart();

    const logoutButton = document.getElementById('exit');
    logoutButton.addEventListener('click', logout);


    const produtos = await fetchProducts();
    if (produtos) {
        renderProducts(produtos);
    }
});