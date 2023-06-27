#!/usr/bin/env sh

# остановить публикацию при ошибках

set -env

# сборка приложения

yarn run build

# переход в каталог сборки

cd dist

# инициализация репозитория

git init
git add -A
git commit -m 'deploy'

GIT_SSH_COMMAND='ssh -i C:/Users/devil/.new_ssh/id_rsa' git push -f git@github.com:refree9530/apps.git master:gh-pages
# git push -f git@github.com:refree9530/apps.git master:gh-pages

cd -
