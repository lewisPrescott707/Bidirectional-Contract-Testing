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

## Server

## Schemathesis

1. `docker run -v $(pwd):/mnt kiwicom/schemathesis:stable run --base-url http://127.0.0.1:8080 --checks=all --validate-schema=false /mnt/api-swagger.yml`
