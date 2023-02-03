FROM node:16.alpine

WORKDIR /server

COPY package*.json ./

RUN ["npm", "i"] 

COPY . .

EXPOSE 3005

CMD ["npm", "run", "dev"]
