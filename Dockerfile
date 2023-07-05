# Install dependencies only when needed
FROM node:18-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
# Using npm 7 as npm ci errors with npm 8
RUN npm install -g npm@7.24.2
RUN npm set-script prepare ""
RUN npm ci --production

# Rebuild the source code only when needed
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN

ENV CONTENTFUL_SPACE_ID=$CONTENTFUL_SPACE_ID
ENV CONTENTFUL_ACCESS_TOKEN=$CONTENTFUL_ACCESS_TOKEN

RUN npm run build:next

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "start"]
