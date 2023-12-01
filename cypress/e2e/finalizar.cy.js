describe('Cenário 4: Finalização da Compra', () => {
  it('Deve verificar o fluxo de finalização da compra', () => {
    // Visite a página de produtos (assumindo que a URL seja '/inventory.html' no seu site)
    cy.visit('https://www.saucedemo.com/inventory.html');

    // Adicione um produto ao carrinho
    cy.get('.inventory_item')
      .first()
      .find('.btn_primary')
      .click();

    // Vá para o carrinho
    cy.get('.shopping_cart_link').click();

    // Prossiga para o checkout
    cy.get('.checkout_button').click();

    // Preencha os detalhes de entrega (adapte conforme necessário)
    cy.get('#first-name').type('SeuNome');
    cy.get('#last-name').type('SeuSobrenome');
    cy.get('#postal-code').type('12345');

    // Continue para a próxima etapa
    cy.get('.cart_button').click();

    // Escolha um método de pagamento (assumindo que o cartão de crédito é o primeiro método)
    cy.get('.payment_method_radio').first().check();

    // Preencha os detalhes do cartão de crédito (adapte conforme necessário)
    cy.get('#card-number').type('1234123412341234');
    cy.get('#expiration-date').type('12/23');
    cy.get('#cvv').type('123');

    // Continue para a revisão da compra
    cy.get('.cart_button').click();

    // Verifique se os produtos selecionados são exibidos corretamente no resumo da compra
    cy.get('.inventory_item_name').should('contain', 'NomeDoProduto');

    // Finalize a compra
    cy.get('.cart_button').click();

    // Verifique se o recibo final está correto (adapte conforme necessário)
    cy.get('.complete-header').should('contain', 'Thank you for your order');

    // Limpar o carrinho para testes futuros
    cy.get('.cart_button').click();
  });
});
