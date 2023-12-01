describe('Teste de Login no SauceDemo', () => {
  it('Deve fazer login com sucesso', () => {
    // Visite a página de login
    cy.visit('https://www.saucedemo.com/');

    // Insira o nome de usuário e senha nos campos de login
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');

    // Clique no botão de login
    cy.get('#login-button').click();

    // Verifique se o login foi bem-sucedido redirecionando para a página de produtos
    cy.url().should('include', '/inventory.html');

    // Verifique se o nome do usuário está correto após o login
    cy.get('.title').should('contain', 'Products');
  });

  // Adicione mais testes para lidar com casos de falha de login, recuperação de senha, etc.
});
