# 🏆 RefTech 2026 FIFA World Cup Referee Management API

A production-ready, functional, and well-structured backend prototype API developed in collaboration with **RefTech** to digitalize the management of the refereeing body and match assignments for the **2026 FIFA World Cup** (hosted across the United States, Canada, and Mexico).

This backend is built following the **MVC (Model-View-Controller)** pattern using **Node.js, Express.js, PostgreSQL, and Sequelize ORM**. It handles data structures, relational integrity, robust input validation, centralized error logging, and performance optimizations like Eager Loading and composite indexes.

---

## 🎯 Project Core Objectives
* **Domain Context:** Digitalization of sports administration services for FIFA World Cup 2026.
* **Architecture:** Strict adherence to the Model-View-Controller (MVC) architectural separation of concerns.
* **Data Layer:** Relational mapping via Sequelize ORM with relational integrity constraints (FK/PK) and tailored index optimizations.
* **Middlewares:** Execution of custom interceptors for input schema verification, execution log tracing, and centralized semantic exception processing.
* **Testing:** End-to-end regression validation via automated/manual Postman collections.

---

## 🏗️ Imposed MVC Architecture

The codebase follows a modular layout separating data access, core application workflow mechanics, and interface routing layers:

```text
referee-api/
├── config/
│   └── database.js           # Sequelize connection instance & PostgreSQL driver config
├── models/
│   ├── index.js              # Model bootstrapping, registration, and association configurations
│   ├── arbitre.model.js      # Arbitre (Referee) Model configuration (PK definition)
│   ├── match.model.js        # Match Model configuration (PK definition)
│   └── affectation.model.js  # Affectation (Assignment) Bridge Model (Composite constraints & FKs)
├── controllers/
│   ├── arbitre.controller.js # Logic encapsulation for Referee resource entity mutation & query
│   ├── match.controller.js   # Logic encapsulation for Match scheduling & management
│   └── affectation.controller.js # Assignment logic, conflict verification, and execution routing
├── routes/
│   ├── arbitre.routes.js     # Declared endpoints mapping to Referee controllers
│   ├── match.routes.js       # Declared endpoints mapping to Match controllers
│   └── affectation.routes.js # Declared endpoints mapping to Assignment controllers
├── middlewares/
│   ├── logger.middleware.js  # Real-time HTTP semantic stream interceptor and logger
│   ├── validate.middleware.js# Declarative JSON payload assertion schemas
│   └── error.middleware.js   # Intercepted bubble-up error pipeline parser (Uniform JSON Error Formatter)
├── server.js                 # Unified entrypoint bootstrapping server listener and DB synchronizer
├── package.json              # System Manifest specifying production runtime dependencies
└── README.md                 # Project architecture documentation