#language: pt

Funcionalidade: Validação de formato de email no login

Contexto:
  Dado que o usuário está na página de login

Esquema do Cenário: Validar formato inválido de email
  Quando ele preencher o email inválido "<email>" e a senha "<senha>"
  Então deve aparecer a mensagem de email inválido "<mensagem>"

Exemplos:
  | email           | senha   | mensagem                           |
  | ere.mail.com    | use23   | Por favor, insira um email válido. |
  | erro@email      | user23  | Por favor, insira um email válido. |
  | er@@email.com   | use23   | Por favor, insira um email válido. |