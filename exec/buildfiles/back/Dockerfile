FROM openjdk:11-jdk

ARG JAR_FILE=./aejimeongji-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-Dspring.profiles.active=aws", "-Duser.timezone=Asia/Seoul", "-jar", "/app.jar"]