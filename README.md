# Secure Backend API – INSY7314 POE Part 2

## 📌 Overview
This project is a **secure backend REST API** built with **Node.js and Express**.  
It provides features for **user authentication**, **employee management**, and **transaction processing**, and implements **strong security controls** including HTTPS encryption, input sanitization, rate limiting, and environment-based configuration.

This backend is designed for enterprise-grade systems that require secure communication and controlled access to internal resources.

---

## 🏗️ Project Structure
```
backend/
│ app.js                 # Core Express application setup
│ server.js              # HTTPS server launcher
│ .env                   # Environment configuration variables
│ package.json           # Dependencies & scripts
│
├── cert/                # SSL certificates for HTTPS
├── routes/              # API route modules
│   ├ authRoutes.js      # Login / Registration / Authentication
│   ├ employeeRoutes.js  # Employee CRUD operations
│   └ transactionRoutes.js # Transaction API
│
├── tests/               # Postman collections & automated tests
└── ci-scripts/          # Security & CI pipeline scripts (Snyk / Sonar / etc.)
```

---

## 🔒 Security Features
| Feature | Description |
|--------|-------------|
| **HTTPS Encryption** | All network traffic is encrypted using SSL certificates |
| **Helmet** | Protects against common vulnerabilities |
| **CSRF Protection** | Blocks cross-site request forgery attacks |
| **Rate Limiting** | Prevents brute-force/login abuse |
| **HPP** | Blocks HTTP parameter pollution attacks |
| **XSS-Clean** | Sanitizes input to prevent XSS injections |
| **JWT Authentication** | Secures API endpoints with token-based authentication |

---

## 🚀 Installation & Setup

### 1. Install Dependencies
```
cd backend
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in `/backend`:
```
PORT=5000
JWT_SECRET=yourSecretKey
DATABASE_URL=yourDatabaseURL
```

### 3. Start the Server
#### Development Mode:
```
npm run dev
```

#### Production Mode:
```
npm start
```

Server runs at:
```
https://localhost:5000
```

---

## 🌐 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/auth/login` | Authenticate user & return JWT |
| POST | `/api/auth/register` | Register a new user |
| GET | `/api/employee/` | Get employee list |
| POST | `/api/employee/create` | Add a new employee |
| GET | `/api/transaction/` | List transactions |
| POST | `/api/transaction/create` | Create a new transaction |

> Postman test collections are included in the **tests** folder.

---

## 🧪 Testing
```
npm test
```

---

## ✅ Health Check
Visit:
```
https://localhost:5000/
```
Output:
```
Secure backend is running 🚀
```

---

## 👤 Author
**Student:** ST10050768  
**Project:** INSY7314 Portfolio of Evidence – Part 2
