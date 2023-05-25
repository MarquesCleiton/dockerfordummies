FROM amazoncorretto:11
WORKDIR /app
COPY ./jar .
ENV BD_HOST=app_banco
ARG PORT=8080
EXPOSE $PORT
ENTRYPOINT java -jar app.jar