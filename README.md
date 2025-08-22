# Docker Compose Project

This project demonstrates a multi-container application using **Docker Compose**.

## Services

1. **Web** – Nginx serving static HTML (`http://localhost:8080`)  
2. **App** – Node.js API connecting to PostgreSQL (`http://localhost:3000`)  
3. **DB** – PostgreSQL database (`db-data` volume)  
4. **Admin** – pgAdmin to manage PostgreSQL (`http://localhost:5050`)

## How to Run

1. Clone the repository:
```bash
git clone <your-repo-url>
cd docker-compose-project
