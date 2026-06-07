# ==========================================
# STAGE 1: Build the Frontend Static Assets
# ==========================================
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY Frontend/package*.json ./
RUN npm ci
COPY Frontend/ ./
RUN npm run build

# ==========================================
# STAGE 2: Build & Run the Backend API
# ==========================================
FROM node:20-alpine AS backend
WORKDIR /app/backend
COPY Backend/package*.json ./
# Production flags optimize dependencies
RUN npm ci --only=production 
COPY Backend/ ./

# Copy the compiled static frontend files into the backend 
# so Express can serve them if necessary, or for single-host deployments.
COPY --from=frontend-builder /app/frontend/dist /app/backend/public

EXPOSE 5000
CMD ["node", "app.js"]