FROM node:19.7.0
LABEL authors="dimshestak"

WORKDIR /app

EXPOSE 5001

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN #npm run build

CMD ["npm", "run", "dev"]
