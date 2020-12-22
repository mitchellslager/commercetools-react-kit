#!/bin/bash
set -e
export PROJECT="commercetools_react_kit"

rm -rf dist
rm -rf test_output

if [ -n "$CI_REGISTRY_IMAGE" ]; then
    DOCKER_IMAGE=$CI_REGISTRY_IMAGE:frontend-latest
else
    DOCKER_IMAGE=$PROJECT:frontend-latest
fi


build () {
    if [ -n "$CI_REGISTRY_IMAGE" ]; then
        DOCKER_BUILDKIT=1 docker build \
            --build-arg BUILDKIT_INLINE_CACHE=1 \
            --cache-from $CI_REGISTRY_IMAGE:frontend-latest \
            --tag $DOCKER_IMAGE .
    else
        DOCKER_BUILDKIT=1 docker build \
            --build-arg BUILDKIT_INLINE_CACHE=1 \
            --tag $DOCKER_IMAGE .
    fi

    CONTAINER_ID=$(docker create $DOCKER_IMAGE)
    docker cp $CONTAINER_ID:/code/dist .

    docker rm -v $CONTAINER_ID
}

test () {
    # Run test suite and output reports
    TEST_CONTAINER=$PROJECT-frontend-test-$(openssl rand -hex 8)
    docker run --name $TEST_CONTAINER $DOCKER_IMAGE test:ci
    docker cp $TEST_CONTAINER:/code/test_output .

    docker rm -v $TEST_CONTAINER
}

case $1 in
    build)
        build
    ;;
    test)
        test
    ;;
    *)
        build
    ;;
esac
