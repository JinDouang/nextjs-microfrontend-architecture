#!/bin/bash

if [ ! -e node_modules ]
then
  mkdir node_modules
fi

case `uname -s` in
  MINGW*)
    USER_UID=1000
    GROUP_UID=1000
    ;;
  *)
    if [ -z ${USER_UID:+x} ]
    then
      USER_UID=`id -u`
      GROUP_GID=`id -g`
    fi
esac

clear () {
  docker-compose down ; rm pnpm-lock.yaml ; sudo rm -rf node_modules ; docker rmi nextjs-microfrontend-architecture:1.0.0
}

install () {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" app pnpm install
}

runDev () {
  docker-compose run -u "$USER_UID:$GROUP_GID" app pnpm run dev
}

build() {
  docker-compose run --rm -u "$USER_UID:$GROUP_GID" app pnpm run build
}

start() {
  docker-compose run -u "$USER_UID:$GROUP_GID" app pnpm run start
}

test() {
  docker-compose run -u "$USER_UID:$GROUP_GID" app pnpm run test
}

lint() {
  docker-compose run -u "$USER_UID:$GROUP_GID" app pnpm run lint
}

formatLint() {
  docker-compose run -u "$USER_UID:$GROUP_GID" app pnpm run lint-fix
}

for param in "$@"
do
  case $param in
    clear)
      clear
      ;;
    install)
      install
      ;;
    runDev)
      runDev
      ;;
    build)
      build
      ;;
     buildSlow)
      buildSlow
      ;;
    start)
      start
      ;;
    test)
      test
      ;;
    lint)
      lint
      ;;
    formatLint)
      formatLint
      ;;
    *)
      echo "Invalid argument : $param"
  esac
  if [ ! $? -eq 0 ]; then
    exit 1
  fi
done
