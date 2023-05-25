FROM mysql:latest
WORKDIR /docker-entrypoint-initdb.d
COPY . .
ENV MYSQL_ROOT_PASSWORD=senha_banco
ARG PORT=3306
EXPOSE $PORT