FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json pnpm-lock.yaml  ./

RUN pnpm install --frozen-lockfile

ARG VITE_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

COPY . .

RUN pnpm build


#------------- Nginx server --------------
# Stage 2: Serve with Nginx
FROM nginx:1.25-alpine AS runner

# Remove default static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace the default site config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]