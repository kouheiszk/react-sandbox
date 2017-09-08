FROM node:6.9.5-alpine

ENV APP_ROOT="/app"

RUN \
  # Install yarn
  npm install -g -s --no-progress yarn

RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

ENTRYPOINT sh -c "yarn && yarn cache clean && \
                  yarn start"
