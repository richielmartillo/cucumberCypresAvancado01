import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`que o usuário está na página de login`, () => {
    cy.visit('http://localhost:3000/login.html')
    cy.wait(1000)
});

When(`faço login com credenciais válidas`, () => {
    cy.get('#email').type('usuario@teste.com')
    cy.get('#password').type('user123')
    cy.get('#login-btn').click()
    cy.wait(3000)
    // cy.url().should('include', '/dashboard.html')
});

Then(`deve exibir a mensagem {string}`, (mensagem) => {
    cy.url().should('include', '/dashboard.html')
    cy.get('h4').should('contain', mensagem)

});

When(`faço login com senha inválida`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`o sistema deve exibir a mensagem {string}`, (mensagem) => {
    // [Then] Describes the expected outcome or result of the scenario.
});