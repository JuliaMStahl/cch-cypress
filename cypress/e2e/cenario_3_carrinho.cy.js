describe('Cenário 3: Adição de Produtos ao Carrinho', () => {
  it('Deve testar a funcionalidade de adição ao carrinho', () => {
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
    
    //Voltando ao menu de produtos
    cy.get('#continue-shopping').click();

    for (let i = 2; i <= 5; i++) {
      cy.get('.inventory_item').eq(i - 1).find('.btn_primary').click();
    }

    // Tentar adicionar mais um produto além do limite
    cy.get('.inventory_item').eq(5).find('.btn_primary').click();

    // Visite a página do carrinho
    cy.get('.shopping_cart_link').click();

    //Realizando checkout
    cy.get('#checkout').click();
  });
});
