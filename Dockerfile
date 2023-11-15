# Use uma imagem base leve com suporte ao Node.js
FROM node:16-alpine

# Crie e defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do aplicativo
RUN npm install

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# Exponha a porta em que o aplicativo estará em execução
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]