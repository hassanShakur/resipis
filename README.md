# Resipis Web App

![Resipis Home](./images/home.png)

<br/>

![Search Results](./images/results.png)

<br/>

Clone the repo and:

```shell
# For the frontend
cd client && npm start
```

```shell
# For the backend
cd server && npm start
```

Set the `REACT_APP_BACKEND_URL` as `https://resipis-kdcz.onrender.com` for the configured server. Remember to manage cors.

You can optionally set your node environments involving:

```shell
NODE_ENV=development

DATABASE_LOCAL=mongodb://127.0.0.1:27017/dbName

DATABASE_CLOUD=mongodb+srv://atlasDbName:password@clusterName.syvsqgx.mongodb.net/production?retryWrites=true&w=majority

JWT_SECRET_KEY=any_string_for_encryption
JWT_EXPIRES_IN=1h

FRONT_END_URL=http://localhost:3000
JWT_COOKIE_EXPIRES_IN=1
```

Visit [resipis website](https://resipis.netlify.app) for the complete project. If down, try later, it's still in the making.

<br/>

![Search page](./images/search.png)
