const API = `http://127.0.0.1:8009/api/v1/category`;

const CATEGORIES = [
  {
    key: '0',
    text: 'Qualquer categoria',
    value: '0'
  }
];

const fetchCategories = () => {
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

        // Atualize o objeto CATEGORIES com os resultados
        CATEGORIES.push(...mappedData);
        })
        .catch((error) => {
        console.error(`Ocorreu um erro: ${error}`);
        });
}

fetchCategories()

export default CATEGORIES;
