const API = `http://eduumach.ddns.net:8009/api/v1/difficulty`;

const DIFFICULTY = [
    {
        key: '0',
        text: 'Qualquer dificuldade',
        value: '0'
    }
];

const fetchDifficulties = () => {
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

            // Atualize o objeto DIFFICULTY com os resultados
            DIFFICULTY.push(...mappedData);
        })
        .catch((error) => {
            console.error(`Ocorreu um erro: ${error}`);
        });
};

fetchDifficulties();

export default DIFFICULTY;
