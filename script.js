document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    main.classList.add('active');
});

// script.js para admin.html
document.addEventListener('DOMContentLoaded', async () => {
    const tabProducts = document.getElementById('tab-products');
    const tabBruxos = document.getElementById('tab-bruxos');
    const productsContent = document.getElementById('products-content');
    const bruxosContent = document.getElementById('bruxos-content');
    const bruxosForm = document.getElementById('bruxos-form');
    const bruxosHtmlTextarea = document.getElementById('bruxos-html');

    // Função para carregar o conteúdo da página bruxos.html
    async function loadBruxosContent() {
        try {
            const response = await fetch('bruxos.html');
            const html = await response.text();
            bruxosHtmlTextarea.value = html;
        } catch (error) {
            console.error('Erro ao carregar bruxos.html:', error);
            alert('Erro ao carregar o conteúdo da página Bruxos.');
        }
    }

    // Função para salvar o conteúdo da página bruxos.html
    bruxosForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const newHtml = bruxosHtmlTextarea.value;

        try {
            const response = await fetch('bruxos.html', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'text/html',
                },
                body: newHtml,
            });

            if (response.ok) {
                alert('Página Bruxos atualizada com sucesso!');
            } else {
                console.error('Erro ao salvar bruxos.html:', response.status);
                alert('Erro ao salvar a página Bruxos.');
            }
        } catch (error) {
            console.error('Erro ao salvar bruxos.html:', error);
            alert('Erro ao salvar a página Bruxos.');
        }
    });

    // Event listeners para as abas
    tabProducts.addEventListener('click', () => {
        tabProducts.classList.add('active');
        tabBruxos.classList.remove('active');
        productsContent.classList.remove('hidden');
        bruxosContent.classList.add('hidden');
    });

    tabBruxos.addEventListener('click', () => {
        tabProducts.classList.remove('active');
        tabBruxos.classList.add('active');
        productsContent.classList.add('hidden');
        bruxosContent.classList.remove('hidden');
        loadBruxosContent(); // Carrega o conteúdo ao clicar na aba
    });
});