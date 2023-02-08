FROM node:16-alpine

ENV WORKSPACE /workspace
COPY . ${WORKSPACE}/

EXPOSE 80

WORKDIR ${WORKSPACE}
RUN yarn install



