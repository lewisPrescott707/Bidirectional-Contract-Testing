#!/bin/bash
current_dir=$PWD

docker run --rm -v $current_dir/server:/server -e "PACT_BROKER_BASE_URL=https://ministryoftesting.pactflow.io" -e "PACT_BROKER_TOKEN=$1" pactfoundation/pact-cli:0.50.0.32 pactflow publish-provider-contract /server/swagger.json --broker-base-url https://ministryoftesting.pactflow.io --provider ingredients-api --provider-app-version $2 --branch test --content-type application/yaml --verification-exit-code=0 --verification-results /server/swagger.xml --verification-results-content-type text/xml --verifier schemathesis
