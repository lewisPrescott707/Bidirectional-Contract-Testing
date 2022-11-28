# Bi-directional Contract Testing

## Setup

Pre-requisites:

1. [nodejs](https://nodejs.org/en/download/)
1. [yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

## App

Run app before tests:
1. Launch command prompt (cmd)
1. `npm start`

## Cypress

1. Launch another command prompt (cmd)
1. `npm run cy:open`

## Schemathesis

Run swagger tests
1. API Deployed to [render.com](https://render.com/docs/deploy-node-express-app)
1. `docker run -v $(pwd)/server:/mnt kiwicom/schemathesis:stable run --base-url https://bake-off-api.onrender.com --checks=all --validate-schema=false --junit-xml=/mnt/swagger.xml /mnt/api-swagger.yml`    

Publish results
1. Mac: `sudo chmod 755 ./server/publish.sh`
1. Terminal: `./server/publish.sh`
