import axios from 'axios';

axios.defaults.validateStatus = () => {
    return true;
};

// Cria uma instância do plateau

// Cria uma instância de Rover e posiciona-o na posição inicial

// L - left / R - right / M - move forward
// Rover([1 2 N], [LRM])
test('rover andando no plateau', async () => {
    const input = '10 10\n1 2 N\nLMLMLMLMM';

    const inputToApi = { roverData: input };
    console.log(input);
    const response = await axios.post(
        'http://localhost:3000/walkingOnMars',
        inputToApi
    );
    const output = response.data;
    expect(output).not.toBe(undefined);
});

test('Rover chegando no limite do Plateau', async () => {
    const input = '5 5\n1 2 N\nLMLMLMLMM';

    const inputToApi = { roverData: input };
    console.log(input);
    const response = await axios.post(
        'http://localhost:3000/walkingOnMars',
        inputToApi
    );
    const output = response.data;
    expect(output).toBe('chegou no limite do Plateau');
});
test('Mandando um input inválido', async () => {
    const input = '5 5\n1 s';

    const inputToApi = { roverData: input };
    console.log(input);
    const response = await axios.post(
        'http://localhost:3000/walkingOnMars',
        inputToApi
    );
    const output = response.data;
    expect(output).toBe('input inválido');
});
