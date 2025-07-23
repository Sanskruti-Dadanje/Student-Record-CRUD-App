# 🎓 Student Record CRUD App

A simple **Student Record Management System** built with **Node.js**, **Express**, **EJS**, and **MySQL**.

---

## ✅ Features

- Add student details (Name, Roll Number, Class)
- View all students in a single page table
- Delete student records
- Uses **EJS** to render one dynamic page
- Follows a simple **MVC structure**

---

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Templating:** EJS
- **Version Control:** Git & GitHub

---

## 🚀 Setup Instructions

Follow these steps to run the project locally:

### 1️⃣ Clone the repository


git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

---

 ### 2️⃣ Install dependencies

npm install

### 3️⃣ Create a .env file
Create a .env file in the project root and add your database config:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=student_db
PORT=3000

### 4️⃣ Set up the database
Run the schema.sql manually in your MySQL client or let the app create the database and table automatically when you start the server.


CREATE DATABASE IF NOT EXISTS student_db;

USE student_db;

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  roll_number VARCHAR(50) UNIQUE,
  class VARCHAR(50)
);

### 5️⃣ Run the server

node server.js

### 6️⃣ Open in your browser
Visit 👉 http://localhost:3000
