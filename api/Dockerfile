FROM denoland/deno:latest
LABEL authors="dimshestak"

EXPOSE 5000

WORKDIR /server

# Update the package list and install prerequisites
RUN apt-get update && apt-get install -y curl xz-utils

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | bash -
RUN apt-get install nodejs -y

# Install Denon
RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

COPY package.json .

RUN npm install

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache main.ts

CMD ["denon", "start"]
