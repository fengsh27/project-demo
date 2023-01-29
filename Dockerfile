FROM node:16

ENV WORKSPACE /workspace
COPY . ${WORKSPACE}/

WORKDIR ${WORKSPACE}
RUN yarn install
CMD [ "yarn", "start" ]
