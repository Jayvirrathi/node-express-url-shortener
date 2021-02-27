# URL shortener with QRCode Node.js, MongoDB

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
```

```json
GET /gh
```

## Frontend localhost:5000/

## Input: Url

```
localhost:5000/qr

"slug": "gh",
"url": "https://github.com/"

```

## Output:

```
gh
```


## Input: Url QRCode 

```
localhost:5000/qr
```

