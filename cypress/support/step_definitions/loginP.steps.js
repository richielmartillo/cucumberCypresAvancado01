import { Before, Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Before(() => {
  cy.visit('/login.html')
})

Given('que o usuário está na página de login', () => {
  cy.get('#email').should('be.visible')
  cy.get('#password').should('be.visible')
  cy.get('#login-btn').should('be.visible')
})

When('faço login com credenciais válidas', () => {
  cy.loginComoUsuarioPadrao()
})

Then('deve exibir a mensagem {string}', (mensagem) => {
  cy.url().should('include', '/dashboard.html')
  cy.get('h4').should('contain', mensagem)
})

When('faço login com senha inválida', () => {
  cy.preencherLoginMassa('usuario@teste.com', 'senhaErrada')
})

When('ele preencher o email {string} e a senha {string}', (email, senha) => {
  cy.preencherLoginMassa(email, senha)
})

Then('o sistema deve exibir a mensagem {string}', (mensagem) => {
  cy.get('#alert-container')
    .should('be.visible')
    .invoke('text')
    .then((texto) => {
      const textoNormalizado = texto.replace(/\s+/g, ' ').trim()
      expect(textoNormalizado).to.include(mensagem)
    })
})

When('ele preencher o email inválido {string} e a senha {string}', (email, senha) => {
  cy.get('#email').clear().type(email)
  cy.get('#password').clear().type(senha)
  cy.get('#login-btn').click()
})

Then('deve aparecer a mensagem de email inválido {string}', (mensagem) => {
  cy.get('#email').should('have.class', 'is-invalid')
  cy.contains('.invalid-feedback', mensagem).should('be.visible')
})