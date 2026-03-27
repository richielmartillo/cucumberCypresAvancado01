




#language: pt

Funcionalidade: Login do usuário padrão com massa de dados

Contexto:
  Dado que o usuário está na página de login

Esquema do Cenário: Validar tentativas de login inválidas com massa de dados
  Quando ele preencher o email "<email>" e a senha "<senha>"
  Então o sistema deve exibir a mensagem "<mensagem>"

Exemplos:
  | email              | senha        | mensagem                    |
  | usuario@teste.com  | senhaErrada  | Email ou senha incorretos.  |
  | errado@email.com   | user123      | Email ou senha incorretos.  |
  | usuariqi@teste.com | sen28rrada   | Email ou senha incorretos.  |
  | errq@email.om      | use23        | Email ou senha incorretos.  |

