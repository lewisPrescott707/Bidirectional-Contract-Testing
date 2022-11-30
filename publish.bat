@echo off

SET current_dir=%cd%
docker "run" "-v" "%cd%/cypress:/mnt" "--rm" "pactfoundation/pact-cli:latest" "publish" "/mnt/pacts" "--consumer-app-version=%~2" "--broker-base-url=https://ministryoftesting.pactflow.io" "--broker-token=%~1"