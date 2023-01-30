FROM node:16-alpine

ENV WORKSPACE /workspace
COPY . ${WORKSPACE}/

WORKDIR ${WORKSPACE}
RUN yarn install



