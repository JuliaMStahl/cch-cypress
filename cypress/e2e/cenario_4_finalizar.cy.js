describe('Cenário 4: Finalização da Compra', () => {
  it('Deve verificar o fluxo de finalização da compra', () => {
    // Visita a página de login
    cy.visit('https://www.saucedemo.com/');

    // Insere o nome de usuário e senha nos campos de login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Clica no botão de login
    cy.get('#login-button').click();

    // Verifica se o login foi bem-sucedido redirecionando para a página de produtos
    cy.url().should('include', '/inventory.html');

    // Adicione um produto ao carrinho
    cy.get('.inventory_item').first().find('.btn_primary').click();

    // Vá para o carrinho
    cy.get('.shopping_cart_link').click();

    // Prossiga para o checkout
    cy.get('.checkout_button').click();

    // Preencha os detalhes de entrega (adapte conforme necessário)
    cy.get('#first-name').type('SeuNome');
    cy.get('#last-name').type('SeuSobrenome');
    cy.get('#postal-code').type('12345');

    // Continue para a próxima etapa
    cy.get('#continue').click();

    // Finalize a compra
    cy.get('#finish').click();

    // Verifique se o recibo final está correto (adapte conforme necessário)
    cy.get('.complete-header').should('contain', 'Thank you for your order!');

    // Voltar a Home
    cy.get('#back-to-products').click();
  });
});
