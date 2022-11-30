@echo off

SET current_dir=%cd%
curl https://bake-off-api.onrender.com/swagger.json --output server/swagger.json
docker run -v %cd%/server:/mnt kiwicom/schemathesis:stable run --base-url https://bake-off-api.onrender.com --checks=all --validate-schema=false --junit-xml=/mnt/swagger.xml /mnt/swagger.json
docker run --rm -v %cd%/server:/server -e "PACT_BROKER_BASE_URL=https://ministryoftesting.pactflow.io" -e "PACT_BROKER_TOKEN=%~1" pactfoundation/pact-cli:0.50.0.32 pactflow publish-provider-contract /server/swagger.json --broker-base-url https://ministryoftesting.pactflow.io --provider ingredients-api --provider-app-version %~2 --branch test --content-type application/yaml --verification-exit-code=0 --verification-results /server/swagger.xml --verification-results-content-type text/xml --verifier schemathesis
