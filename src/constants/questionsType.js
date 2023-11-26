const API = `http://eduumach.ddns.net:8009/api/v1/type`;


const QUESTIONS_TYPE = [
  {
    key: '0',
    text: 'Qualquer Tipo',
    value: '0'
  }
];

const fetchQuestionsType = () => {
    return fetch(API)
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
        const mappedData = data.results.map((item) => ({
            key: item.id.toString(),
            text: item.name,
            value: item.id.toString()
        }));

        // Atualize o objeto QUESTIONS_TYPE com os resultados
        QUESTIONS_TYPE.push(...mappedData);
        })
        .catch((error) => {
        console.error(`Ocorreu um erro: ${error}`);
        });
}

fetchQuestionsType()

export default QUESTIONS_TYPE;
