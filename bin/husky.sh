mkdir .husky
touch .husky/.gitignore
touch .husky/pre-commit
chmod 755 .husky/pre-commit
echo '#!/bin/sh' >> .husky/pre-commit
echo '. "$(dirname "$0")/_/husky.sh"' >> .husky/pre-commit
echo '' >> .husky/pre-commit
echo 'yarn pre-commit' >> .husky/pre-commit

# 프리커밋 훅 활성화
git config advice.ignoredHook false

