FROM node:18.2.0-alpine3.15

WORKDIR /app/auth-server
RUN npm install
COPY . . 

EXPOSE 3001 

CMD ["npm", "run", "start-dev"] 
