document.addEventListener("DOMContentLoaded", () => {
    const produtos = [
        {
            nome: "Aparador com portas",
            descricao: "Aparador com 2 portas, de madeira pinus e acabamento rústico. Referência 03001.",
            preco: "R$ 300,00",
            categoria: "moveis",
            imagem: "images/aparador.jpg",
        },
        {
            nome: "Aparador com gavetas",
            descricao: "Aparador com 2 gavetas, de madeira pinus e acabamento rústico.  Referência 03002.",
            preco: "R$ 220,00",
            categoria: "moveis",
            imagem: "images/aparador2.jpg",
        },
        {
            nome: "Aparador",
            descricao: "Aparador rústico, de madeira pinus e acabamento rústico. Referência 03003.",
            preco: "R$ 180,00",
            categoria: "moveis",
            imagem: "images/aparador3.jpg",
        },
        {
            nome: "Cesto Pão de Queijo",
            descricao: "Cesto para pães em madeira pinus, com aplique em MDF. Referência 02001.",
            preco: "R$ 49,00",
            categoria: "cozinha",
            imagem: "images/cesto.jpg",
        },
        {
            nome: "Conjunto de bandejas",
            descricao: "Conjunto com 2 bandejas em madeira pinus. Referência 02002.",
            preco: "R$ 49,00",
            categoria: "cozinha",
            imagem: "images/kit-bandeja.jpg",
        },
        {
            nome: "Conjunto de bases decorativas",
            descricao: "Conjunto com 3 bases decorativas em madeira de reflorestamento e apliques de resina. Referência 01001.",
            preco: "R$ 70,00",
            categoria: "decoracao",
            imagem: "images/bases.jpg",
        },
        {
            nome: "Conjunto de mesas laterais",
            descricao: "Conjunto com 2 mesas laterais em madeira de reflorestamento e metal.  Referência 03004.",
            preco: "R$ 200,00",
            categoria: "moveis",
            imagem: "images/mesa.jpg",
        },
        {
            nome: "Conjunto de porta-copos",
            descricao: "Conjunto com 6 porta-copos quadrados em madeira pinus. Referência 02003.",
            preco: "R$ 30,00",
            categoria: "cozinha",
            imagem: "images/porta-copo.jpg",
        },
        {
            nome: "Espelho",
            descricao: "Espelho em madeira pinus com acabamento cru. Referência 01002.",
            preco: "R$ 80,00",
            categoria: "decoracao",
            imagem: "images/espelho.jpg",
        },
        {
            nome: "Nicho sextavado",
            descricao: "Nicho sextavado em madeira pinus com acabamento rústico. Referência 01003.",
            preco: "R$ 40,00",
            categoria: "decoracao",
            imagem: "images/nicho.jpg",
        },
        {
            nome: "Placa redonda com pintura orgânica",
            descricao: "Placa redonda em madeira pinus com pintura orgânica. Referência 01004.",
            preco: "R$ 40,00",
            categoria: "decoracao",
            imagem: "images/placa.jpg",
        },
        {
            nome: "Porta-talheres",
            descricao: "Porta-talheres em madeira pinus com alças. Referência 02004.",
            preco: "R$ 18,00",
            categoria: "cozinha",
            imagem: "images/porta-talher.jpg",
        },
        {
            nome: "Porta-xícaras",
            descricao: "Porta-xícaras em madeira pinus. Não vem com as xícaras. Referência 02005.",
            preco: "R$ 30,00",
            categoria: "cozinha",
            imagem: "images/porta-xicara.jpg",
        },
        {
            nome: "Sapateira",
            descricao: "Sapateira em madeira pinus com acabamento rústico. Pode ser usada como banco. Referência 03005.",
            preco: "R$ 100,00",
            categoria: "moveis",
            imagem: "images/sapateira.jpg",
        },
        {
            nome: "Totem Home",
            descricao: "Totem em madeira pinus com aplique em MDF. Referência 01005.",
            preco: "R$ 15,00",
            categoria: "decoracao",
           imagem: "images/totem.jpg",
        },
    ];
    
    const container = document.getElementById("productsGrid");
    
    function renderizarProdutos(categoria = "todos") {
        container.innerHTML = "";
    
        const produtosFiltrados = categoria === "todos" 
            ? produtos 
            : produtos.filter(produto => produto.categoria === categoria);
    
        produtosFiltrados.forEach(produto => {
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${produto.nome}</h3>
                    <p class="product-price">${produto.preco}</p>
                    <p class="product-description">${produto.descricao}</p>
                </div>
            `;
            container.appendChild(card);
        });
    
        if (produtosFiltrados.length === 0) {
            container.innerHTML = "<p>Nenhum produto encontrado nessa categoria.</p>";
        }
    }
    
    renderizarProdutos();
    
    const botoesFiltro = document.querySelectorAll(".filter-btn");
    botoesFiltro.forEach(botao => {
        botao.addEventListener("click", () => {
            document.querySelector(".filter-btn.active").classList.remove("active");
            botao.classList.add("active");
            const categoria = botao.getAttribute("data-category");
            renderizarProdutos(categoria);
        });
    });
});
    