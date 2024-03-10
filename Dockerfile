# Stage 1: Build the React application
FROM node:alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --fetch-retry-maxtimeout=120000
COPY . ./
RUN npm run build

# Stage 2: Serve the React application from Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 to the outside once the container has launched
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
