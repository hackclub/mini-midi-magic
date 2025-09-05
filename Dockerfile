# Use Node 18 on Alpine for a small image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only package manifests first for better caching
COPY site/package*.json ./

# Install dependencies
RUN npm install --no-audit --no-fund

# Copy application source
COPY site/ ./

# Build the Next.js app
RUN npm run build

# --- Runtime image ---
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy built app and necessary files from builder
COPY --from=builder /app ./

# Expose Next.js default port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]