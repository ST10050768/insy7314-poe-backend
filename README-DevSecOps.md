# 🛡️ DevSecOps CI/CD Pipeline (CircleCI)

This folder contains the full pipeline setup for **INSY7314 POE Backend**.

## 🚀 Pipeline Overview

1. **Install & Test** — Installs backend/frontend dependencies and runs lint/tests.  
2. **Snyk Scan** — Checks for vulnerabilities in dependencies.  
3. **SonarQube Scan** — Performs static code analysis.  
4. **Quality Gate Enforcement** — Fails the build if Sonar fails the gate.  
5. **Docker Build & Push** — Builds and pushes backend/frontend images to Docker Hub.

## 🔧 Environment Variables (add these in CircleCI)

| Variable | Purpose |
|-----------|----------|
| SONAR_HOST_URL | e.g. https://sonarcloud.io |
| SONAR_TOKEN | SonarQube access token |
| DOCKERHUB_USER | Your Docker Hub username |
| DOCKERHUB_PASS | Docker Hub password or token |
| SNYK_TOKEN | Snyk authentication token |

## 🌐 Deploy Locally or to Staging
1. Edit `deploy/nginx.conf` and set your domain name.
2. Run `docker-compose up -d` to start backend, frontend, and nginx.
3. For HTTPS, run Let's Encrypt certbot once:
   ```bash
   docker run --rm -it -v $(pwd)/certs:/etc/letsencrypt certbot/certbot certonly --webroot -w /var/www/certbot -d staging.example.com
   ```

