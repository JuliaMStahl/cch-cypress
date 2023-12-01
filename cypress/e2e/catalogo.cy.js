describe('Cenário 2: Catálogo de Produtos', () => {
  it('Deve verificar o catálogo de produtos e a funcionalidade de busca', () => {
    // Visite a página de produtos (assumindo que a URL seja '/inventory.html' no seu site)
    cy.visit('https://www.saucedemo.com/inventory.html');

    // Verificar se todos os produtos estão corretamente listados
    cy.get('.inventory_item').should('have.length.greaterThan', 0);

    // Verificar se as informações dos produtos estão corretas
    cy.get('.inventory_item')
      .each(($product) => {
        const productName = $product.find('.inventory_item_name').text();
        const productPrice = $product.find('.inventory_item_price').text();

        // Adicione mais verificações conforme necessário
        expect(productName).to.not.be.empty;
        expect(productPrice).to.match(/^\$\d+\.\d{2}$/); // Verifica se o preço está no formato correto
      });

    // Testar a funcionalidade de busca
    const searchTerm = 'Sauce';
    cy.get('#search_box').type(searchTerm);
    cy.get('.inventory_item').should('have.length.greaterThan', 0);

    // Verificar se os resultados da busca são consistentes e corretos
    cy.get('.inventory_item')
      .each(($product) => {
        const productName = $product.find('.inventory_item_name').text();

        // Certifique-se de que o nome do produto contém o termo de busca
        expect(productName.toLowerCase()).to.include(searchTerm.toLowerCase());
      });
  });
});
