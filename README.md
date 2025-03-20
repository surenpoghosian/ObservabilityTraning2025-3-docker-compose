## cURL Commands

### Get all users
```sh
curl -X GET http://localhost:3000/users
```

### Create a new user
```sh
curl -X POST http://localhost:3000/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John Doe", "email": "john@example.com"}'
```

### Get a user by ID
```sh
curl -X GET http://localhost:3000/users/1
```

### Update a user
```sh
curl -X PUT http://localhost:3000/users/1 \
     -H "Content-Type: application/json" \
     -d '{"name": "Jane Doe", "email": "jane@example.com"}'
```

### Delete a user
```sh
curl -X DELETE http://localhost:3000/users/1
```

### Health check
```sh
curl -X GET http://localhost:3000/health
```