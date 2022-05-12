// Muitas vezes precisamos utilizar o mesmo trecho de código em dois locais diferentes. Com hooks não será diferente e, para ajudar nesta questão, podemos criar um hook customizado.
// Para exemplificar, vamos criar uma função que possui dentro dela os hooks tradicionais. Dessa forma, o estado criado pela useState e a função useEffect serão reconhecidas e utilizadas no componente em que a hook customizada for chamada.
// Vamos criar um template padrão de uma hook customizada básica, somente com useState :

function useHookCustomizada(defaultValue) {
  const [variavel, setVariável] = useState(defaultValue);

  return variavel;
}

// Agora podemos chamar a nossa função useHookCustomizada para definir o estado da variavel no escopo de diferentes componentes.
// Vamos adicionar uma função useEffect ao exemplo anterior, modificando ele para receber um fetch qualquer:

function useHookCustomizada(defaultValue) {
  const [data, setData] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('url')
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return data;
}
