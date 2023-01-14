## Como testar ##

clonar o repositorio

instalar as dependencias:

- npm install

abrir dois terminais

1º terminal:

- npm run dev

2º terminal:

- npx jest


## BACKLOG ##


Passos gerais para resolver o problema:

Criar uma classe Rover que tenha as propriedades para armazenar a posição atual (x e y coordinates) e a direção (N, S, E, W) do robo.

Criar uma classe Grid para armazenar o tamanho da grade (largura e altura) e para validar se as coordenadas do robo estão dentro dos limites da grade.

Implementar métodos na classe Rover para mover o robo (moveForward, turnLeft, turnRight) de acordo com a direção atual.

Criar uma função main que lê os comandos do usuário (M-move, L-left, R-right) e chama os métodos apropriados na classe Rover.

Adicione testes para garantir que o seu programa está funcionando corretamente.



TESTES:

Testar se a posição inicial do robo está correta: Crie um teste que verifique se o robo está iniciando na posição esperada (x e y coordinates) e na direção correta (N, S, E, W).

Testar se o robo está se movendo corretamente: Crie um teste que envie comandos de movimento para o robo (M) e verifique se ele está se movendo para a posição esperada.

Testar se o robo está girando corretamente: Crie um teste que envie comandos de giro para o robo (L, R) e verifique se ele está mudando a direção esperada.

Testar se o robo está respeitando os limites da grade: Crie um teste que envie comandos que fariam o robo sair da grade e verifique se ele esta impedindo o movimento ou se esta respeitando os limites.

Testar se o robo está lidando com comandos inválidos: Crie um teste que envie comandos inválidos para o robo e verifique se ele está lidando corretamente com esses comandos.

Testar se o robo está movendo-se corretamente para todos os comandos: Crie um teste que envie uma sequencia de comandos e verifique se o robo está se movendo para a posição final esperada.