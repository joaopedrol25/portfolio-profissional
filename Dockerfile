# Estágio 1: Build do app React
FROM node:18-alpine AS build

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
RUN npm install

# Copiar código fonte e rodar build do Vite
COPY . .
RUN npm run build

# Estágio 2: Servir o app usando Nginx
FROM nginx:stable-alpine

# Copiar arquivos do build para a pasta padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar a configuração personalizada do Nginx para suportar SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80
EXPOSE 80

# Iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
