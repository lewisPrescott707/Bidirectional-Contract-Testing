#!/bin/bash
current_dir=$PWD

docker run -v $(pwd)/cypress:/mnt --rm pactfoundation/pact-cli:latest publish /mnt/pacts --consumer-app-version=$2 --broker-base-url=https://ministryoftesting.pactflow.io --broker-token=$1
