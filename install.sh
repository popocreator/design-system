# 프로젝트 초기화
sh ./bin/reset.sh
npm init -y
mkdir src

# 타입스크립트 설치
yarn add -D typescript
sh ./bin/tsconfig.sh
sh ./bin/tsconfig.path.sh

# 리액트 패키지 설치
yarn add react
yarn add react-dom
yarn add react-router-dom
yarn add react-scripts
yarn add -D @types/react
yarn add -D @types/react-dom
yarn add -D @types/react-router-dom

# 프리티어
yarn add prettier

# 프리티어 - 환경설정 파일 생성
sh ./bin/prettierrc.sh
sh ./bin/prettierignore.sh

# 린트
yarn add eslint
yarn add eslint-config-prettier
yarn add eslint-plugin-prettier
yarn add -D @typescript-eslint/eslint-plugin
yarn add -D @typescript-eslint/parser

# 린트 - 환경설정 파일 생성
sh ./bin/eslintrc.sh

# 프리 커밋 훅
yarn add lint-staged
yarn add husky

# 프리 커밋 훅 - lint-staged 환경설정 파일 추가
sh ./bin/lintstagedrc.sh

# 프리 커밋 훅 - husky 환경설정 파일 추가
sh ./bin/husky.sh

# 크라코
yarn add @craco/craco
yarn add -D craco-alias

# 크라코 - 환경설정 파일 추가
sh ./bin/craco.config.sh

# 환경변수
yarn add dotenv

# 환경변수 - 환경변수 예제파일 추가
sh ./bin/env.sh

# 프로젝트 관리 스크립트
sh ./bin/package.sh

# 리코일
yarn add recoil
yarn add -D @types/recoil

# 깃허브 페이지
yarn add -D gh-pages

# 코드 아키텍처
sh ./bin/package.sh

# public 폴더
sh ./bin/public.sh
