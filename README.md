# ms-shared-api-avtaler-stats

Stats service for avtaler

# API

## ```/stats/total```

Returns total number of agreements

## ```/stats/total/:type```

Returns total number of agreements filtered by type

## ```/stats/signed```

Returns total number of signed agreements

## ```/stats/signed/:type```

Returns total number of signed agreements filtered by type

## ```/stats/signedbyadmin```

Returns total number of agreements signed by admin

## ```/stats/signedbyadmin/:type```

Returns total number of agreements signed by admin filtered by type

## ```/stats/cancelled```

Returns total number of cancelled agreements

## ```/stats/cancelled/:type```

Returns total number of cancelled agreements filtered by type

## ```/stats/manual```

Returns total number of manual only agreements

## ```/stats/manual/:type```

Returns total number of manual only agreements filtered by type

## ```/stats/canbedigital```

Returns total number of agreements that could be digital

## ```/stats/canbedigital/:type```

Returns total number of agreements that could be digital filtered by type

## ```/stats/parts```

Returns total number of parts

## ```/stats/parts/:type```

Returns total number of parts filtered by type

## ```/stats/parts/:type/:status```

Returns total number of parts filtered by type and status

# Development

You'll need the [now-cli](https://zeit.co/now) installed

- clone the repo
- install dependencies
- add a `.env` file
- start the development environment ```$ npm run dev```

.env

```
NODE_ENV=development
JWT_SECRET=your-jwt-api-secret
MONGODB_CONNECTION=connection-string-to-your-mongodb
MONGODB_COLLECTION=mongodb-collection-name
MONGODB_NAME=mongodb-database-name
```

## Deploy

This service is created to run on the [ZEIT/Now](https://zeit.co/now) serverless infrastructure.

Make sure the settings in [now.json](now.json) matches your environment.

Run the deploy script.

```
$ npm run deploy
```

## License

[MIT](LICENSE)