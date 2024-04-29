FROM node:18.2.0-alpine3.15

WORKDIR /app/auth-client
RUN npm install
COPY . .

EXPOSE 3000 

CMD ["npm", "run","dev"]
