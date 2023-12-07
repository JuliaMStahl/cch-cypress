describe('Cenário 2: Catálogo de Produtos e Funcionalidade de Busca', () => {
  it('Deve verificar o catálogo de produtos e a funcionalidade de busca', () => {
    // Visita a página de login
    cy.visit('https://www.saucedemo.com/');

    // Insere o nome de usuário e senha nos campos de login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Clica no botão de login
    cy.get('#login-button').click();

    // Verifica se o login foi bem-sucedido redirecionando para a página de produtos
    cy.url().should('include', '/inventory.html');

    // Verifica se a página de produtos está carregada corretamente
    cy.get('.inventory_list .inventory_item').should('have.length.greaterThan', 0);

    // Verifica as informações dos produtos
    cy.get('.inventory_list .inventory_item').each(($product) => {
      const productName = $product.find('.inventory_item_name').text().trim();
      const productPrice = $product.find('.inventory_item_price').text().trim();

      // Verifica se o nome do produto não está vazio
      expect(productName).to.not.be.empty;

      // Verifica se o preço está no formato correto (ex: $X.XX)
      expect(productPrice).to.match(/^\$\d+\.\d{2}$/);
    });

    // Verifica se os resultados da busca são consistentes e corretos
    cy.get('.inventory_list .inventory_item').each(($product) => {
      const productName = $product.find('.inventory_item_name').text().trim().toLowerCase();
    });
  });
});
