      #language: pt

      Funcionalidade: Validação de formato de email no login

      Contexto:
      Dado que o usuário está na página de login

      Esquema do Cenário: Validar formato inválido de email
      Quando ele preencher o email inválido "<email>" e a senha "<senha>"
      Então deve aparecer a mensagem de email inválido "<mensagem>"

      Exemplos:
      | email          | senha      | mensagem                           |
      
      | MarioBro@email | user230101 | Por favor, insira um email válido. |
      | Batmen.com     | 0000007    | Por favor, insira um email válido. |
        | Batmen.com     | 0000007    | Por favor, insira um email válido. |