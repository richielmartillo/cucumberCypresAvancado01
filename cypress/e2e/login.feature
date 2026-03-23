#language: pt

Funcionalidade: Login do usuário
Como um usuário do sistema
Quero realizar login na plataforma
Para acessar as funcionalidades da conta

Cenário: Login realizado com sucesso
Dado que o usuário está na página de login
Quando faço login com credenciais válidas
Então deve exibir a mensagem "Olá, Usuário Padrão!"

Cenário: Login com senha inválida
Dado que o usuário está na página de login
Quando faço login com senha inválida
Então o sistema deve exibir a mensagem "Usuário ou senha inválidos"