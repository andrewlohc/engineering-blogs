# engineering-blogs

A blog build base on RSS feeds.

Built using MERN stack.

Frontend link: https://adoring-clarke-7bf77f.netlify.app

## Heroku Backend Deployment

```
heroku login
heroku git:remote -a engineeringblogs-backend
git subtree push --prefix backend heroku master
```

## Netlify Frontend Deployment

- Deployment is automatically triggered when commit pushes into Github. For details, checkout the netlify.toml file.
