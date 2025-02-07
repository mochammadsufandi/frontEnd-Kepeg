# Use official Node.js image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /laptri-app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Force Tailwind to generate CSS
RUN npx tailwindcss -o public/tailwind.css

# Build the Next.js app
RUN npm run build

# Install only production dependencies
RUN npm ci --production

# Use a smaller runtime image
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /laptri-app

# Copy built Next.js app from builder
COPY --from=builder /laptri-app/.next .next
COPY --from=builder /laptri-app/node_modules node_modules
COPY --from=builder /laptri-app/package.json package.json
COPY --from=builder /laptri-app/public public

# Expose the port Next.js runs on
EXPOSE 3001

# Start the Next.js app
CMD ["npm", "run", "start"]