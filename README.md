# Secure Backend API – INSY7314 POE Part 2
## 👤 WebCraft
- Alwande Ngcobo:ST10050768
- Plamedi Minambo: ST10069618
- Troy Krause: ST10248581
- Sibusiso Sikhosana: ST10249733
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
SUPABASE_URL=YourSupabaseURL
SUPABASE_KEY=YourSupabaseKey
ACCESS_TOKEN_SECRET=yourAccessToken
REFRESH_TOKEN_SECRET=yourRefreshToken
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

## Improvements from Part 2
- Improved CORS to only allow our frontend domain as well as ensured only the GET, POST, PUT and DELETE methods are ever used.
- We limited the express Json payload to 10kb so that way any payload larger than 10kb will get rejected. The reason for this is to defend more against Denial-Of-Service attacks where attackers might try to crash the backend by sending huge J payloads that consume memory and also to prevent abuse of endpoints so attackers cannot flood endpoints with massive data to exploit validation logic (IBM, 2025).
- We added a new middleware called HTTP Parameter Pollution protection where it prevents attackers from sending multiple parameters with the same name in the body or even query string. Using HPP defends more against injection attacks as well as prevents privilege escalation (Codino, 2022).

## Additions for Part 3
- Added QR Code Scanning and Multi-Factor Authentication for both customers and employees. Customers register then they can scan a QR code using their authenticator app and they will then be able to get a verification code from their authenticator app to login. For employees since they cannot register to site then if they login for the first time ever then they can scan QR code using their authenticator app and they will be added as employee then from there they can get a verification code to allow them to login to the system.
- Application makes use of jwt, access tokens and refresh tokens for the login system. 
- Employee roles and functionality have been added to the system where they can add other employees into the system since employees cannot register themselves and also can view all the customer transactions data.

## Reference List
Codino. 2022. Secure Your Node.js App with HPP.js: A Step-by-Step Guide.
[Online]. Available at: <https://codino.medium.com/secure-your-node-js-app-with-hpp-js-a-step-by-step-guide-6926a9464f62>
[Accessed 6 November 2025].
IBM. 2025. How payload size and transformation affect performance for the API provider.
[Online]. Available at: 
<https://www.ibm.com/docs/en/zos-connect/3.0.0?topic=considerations-how-payload-size-transformation-affect-performance>
[Accessed 6 November 2025].



