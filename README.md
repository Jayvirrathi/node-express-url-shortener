# URL shortener with Node.js, MongoDB

> A Basic URL shortener with Vue

## Build Setup

```bash
# install dependencies
npm install

# serve at http://localhost:5000/

npm run dev
```

## Prerequisites

- Nodejs
- MongoDB

**Request:**

```json
POST /url

{
    "slug": "gh",
    "url": "https://github.com/"
}

GET /gh

```
