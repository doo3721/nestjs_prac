FROM node:latest

RUN set -eux

COPY nest_prac/ /var/app

WORKDIR /var/app

# RUN apt update

# RUN npm install -g @nestjs/cli@latest

# RUN nest new app --package-manager npm --skip-git\

RUN npm install

# RUN npm run build

EXPOSE 3000

# package.json의 scripts에 적힌 npm start를 실행한다
# nest start시 npm run build도 같이 실행한다
CMD ["npm", "start"]

# CMD ["node", "dist/main.js"]
