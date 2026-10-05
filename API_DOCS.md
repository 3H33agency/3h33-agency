# API Documentation

## Base URL

- Development: `http://localhost:3000`
- Production: `https://3h33agency.fr`

## Endpoints

### GET /api/artists

Fetch all artists.

**Response:**
```json
{
  "artists": [
    {
      "id": "1",
      "name": "ADR",
      "slug": "adr",
      "bio": "Rising afro & urban talent",
      "location": "ANGERS / FRANCE",
      "styles": ["AFRO", "URBAN"],
      "instagram": "https://instagram.com/adr_dj"
    }
  ],
  "pagination": {
    "limit": 50,
    "offset": 0,
    "total": 5,
    "hasMore": false
  }
}
```

### POST /api/contact

Submit contact form.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "venue": "Q de Sac",
  "message": "Interested in booking ADR"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## Error Handling

All errors return:
```json
{
  "error": "Error message",
  "code": "ERROR_CODE"
}
```
