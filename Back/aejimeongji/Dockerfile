FROM openjdk:11-jdk

ARG JAR_FILE=build/libs/*.jar

COPY ${JAR_FILE} springbootap.jar

ENTRYPOINT ["java", "-Dspring.profiles.active=aws", "-jar", "/springbootap.jar"]

