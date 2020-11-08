function helloworld() {
  // TODO melhorar esse código
  console.log('Hello World');
}

const saudacao = () => {
  const data = new Date();
  return data.getHours() <= 12 ? 'Bom dia' : data.getHours() <= 18 ? 'Boa Tarde' : 'Boa Noite';
};
// FIXME resolver isso aqui
helloworld();
console.log(` A saudação do momento é ${saudacao()}`);
