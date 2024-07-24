FROM node:alpine3.18 as build
# build the app
# ENV PORT=3000
WORKDIR /client
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# serve with nginx
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /client/dist .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]