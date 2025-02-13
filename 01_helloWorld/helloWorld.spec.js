const helloWorld = require('./helloWorld');

// Se tiver dúvidas sobre a framework Jest, perguntar ao CHat por que razao precisamos de "describe" e "test", onde parece que apenas o "expect" faz de facto alguma coisa


describe('Teste 1', function() { // Estava escrito 'Hello World' ao invés de 'Teste 1', eu é que mudei
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
