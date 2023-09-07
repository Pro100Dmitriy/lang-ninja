FROM denoland/deno:latest
LABEL authors="dimshestak"

EXPOSE 5000

WORKDIR /server

RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache main.ts

#CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", "main.ts"]
CMD ["denon", "start"]
