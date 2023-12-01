describe('Cenário 3: Adição de Produtos ao Carrinho', () => {
  it('Deve testar a funcionalidade de adição ao carrinho', () => {
    // Visite a página de produtos (assumindo que a URL seja '/inventory.html' no seu site)
    cy.visit('https://www.saucedemo.com/inventory.html');

    // Adicione um produto ao carrinho
    cy.get('.inventory_item')
      .first()
      .find('.btn_primary')
      .click();

    // Verificar se o ícone do carrinho mostra a quantidade correta de itens
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // Visite a página do carrinho
    cy.get('.shopping_cart_link').click();

    // Verificar se o produto está corretamente refletido no resumo do carrinho
    cy.get('.cart_item').should('have.length', 1);

    // Adicione mais produtos ao carrinho (opcional)
    // cy.get('.inventory_item').eq(1).find('.btn_primary').click();
    // cy.get('.inventory_item').eq(2).find('.btn_primary').click();

    // Testar o limite máximo de produtos no carrinho
    // Supondo que o limite seja 5
    for (let i = 1; i <= 5; i++) {
      cy.get('.inventory_item').eq(i - 1).find('.btn_primary').click();
    }

    // Tentar adicionar mais um produto além do limite
    cy.get('.inventory_item').eq(5).find('.btn_primary').click();

    // Verificar se o sistema trata corretamente o limite máximo
    cy.get('.error-message-container').should('have.text', 'Only 5 items allowed per order.');

    // Limpar o carrinho para testes futuros
    cy.get('.cart_button').click();
  });
});
