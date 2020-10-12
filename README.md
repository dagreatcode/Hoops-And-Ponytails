# project-2-group-15

## Set up the REPO
1. Create New Repo.
2. Add README and node gitignore.
3. Add contributors (Monday).

## setup the server

1. `touch server.js`
2. `npm init -y` (check to see the package.json was created)
3. `npm install express, express-handlebars, mysql`
4. Boilerplate the server

```javascript
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

5. Add middleware for POST body.
6. Add `/api/config` route to test.

## Add Handlebars
1. `npm install express-handlebars`
2. require express handlebars in server.js.
3. Add the handlebars middleware (view engine, etc...)

```javascript
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
```

4. setup your views directory with proper sub folders.
5. add boilerplate and "triple-stache" into main.handlebars.
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    {{{body}}}
</body>
</html>
```

6. (optional) Include your css library and jQuery
7. Add "Hellow WOrld" to the index.handlebars
8. Add a server route to test the index.handlebars file.

```javascript
app.get("/", (req, res) => {
    res.render("index");
```

## Add Database/Models
1. `