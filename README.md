# Learn with Jiji — Backend Assignment

## Overview

This project implements the backend service for **Learn with Jiji**, an AI learning companion.
The backend accepts a user query, retrieves relevant learning resources from Supabase, and returns a structured response consumable by the frontend.

No real AI integration is used; responses are mocked as per assignment instructions.

---

## Tech Stack

* Node.js
* Express.js
* Supabase (Database, Auth, Storage, RLS)
* REST API

---

## Project Structure

```
src/
 ├── config/
 │    └── supabaseClient.js
 ├── controllers/
 │    └── jijiController.js
 ├── routes/
 │    └── jijiRoutes.js
 ├── services/
 │    └── resourceService.js
 ├── middleware/
 │    ├── authMiddleware.js
 │    └── validationMiddleware.js
 ├── utils/
 └── server.js

supabase/
 ├── schema.sql
 ├── rls.sql
 └── storage.md
```

---

## Setup Instructions

### 1. Clone repository

```
git clone https://github.com/BiswayanBanerjee/learn-with-jiji-backend.git
cd learn-with-jiji-backend
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env`

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run server

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## API Documentation

### POST /api/ask-jiji

Accepts a user learning query and returns explanation + resources.

#### Headers

```
Authorization: Bearer testtoken
Content-Type: application/json
```

#### Request Body

```
{
  "query": "Explain RAG"
}
```

#### Response

```
{
  "success": true,
  "data": {
    "answer": "Here is a simple explanation for: Explain RAG",
    "resources": [
      {
        "title": "RAG Intro PPT",
        "type": "ppt",
        "file_url": "..."
      },
      {
        "title": "RAG Video",
        "type": "video",
        "file_url": "..."
      }
    ]
  }
}
```

---

## Supabase Usage

### Database

Tables:

* profiles
* queries
* resources

### Storage

Bucket:

* learning-resources

Contains:

* sample PPT
* sample video

### Auth

Basic mocked auth implemented using Authorization header.

### Row Level Security (RLS)

RLS enabled on tables.
Public read policy created for resources table.

---

## Security Measures

* Input validation middleware
* Mock authentication layer
* No secrets committed to repository
* Supabase RLS policies enabled

---

## How It Works

1. User sends query
2. Backend validates request
3. Query saved in database
4. Resources fetched from Supabase
5. Structured response returned

---

## Possible Improvements (with more time)

* Integrate real AI/LLM for dynamic answers
* Add user-specific resource recommendations
* Implement real Supabase Auth
* Pagination & search ranking
* Unit and integration testing

---

## Demo

Working demo video: https://drive.google.com/file/d/1X0Tq5VjRwu9hbh6S229xW4VT1E_MAE5Z/view?usp=sharing

---

## Author

Name: Biswayan Banerjee
LinkedIn: https://www.linkedin.com/in/biswayanbanerjee/
GitHub: https://github.com/BiswayanBanerjee
