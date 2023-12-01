describe('Cenário 5: Conta de Usuário', () => {
  it('Deve testar a criação e edição de uma conta de usuário', () => {
    // Visite a página de registro (assumindo que a URL seja '/register' no seu site)
    cy.visit('https://www.saucedemo.com/register.html');

    // Preencha os detalhes para criar uma nova conta (adapte conforme necessário)
    cy.get('#first-name').type('SeuNome');
    cy.get('#last-name').type('SeuSobrenome');
    cy.get('#postal-code').type('12345');
    cy.get('#register-button').click();

    // Verifique se o usuário é redirecionado para a página correta após o registro
    cy.url().should('include', '/inventory.html');

    // Acesse a página de informações da conta (assumindo que a URL seja '/account' no seu site)
    cy.visit('https://www.saucedemo.com/account.html');

    // Edite as informações da conta (adapte conforme necessário)
    cy.get('#first-name').clear().type('NovoNome');
    cy.get('#last-name').clear().type('NovoSobrenome');
    cy.get('#postal-code').clear().type('54321');
    cy.get('#save-button').click();

    // Verifique se as alterações na conta foram salvas corretamente
    cy.get('.complete-header').should('contain', 'Your changes were saved successfully.');
  });
});
