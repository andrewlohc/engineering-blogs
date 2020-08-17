# Engineering Blogs

A blog build based on top engineering RSS feeds.

Built using MERN stack, updates daily.

Frontend Demo link: https://adoring-clarke-7bf77f.netlify.app

![Frontend Demo](https://github.com/andrewlohc/engineering-blogs/blob/master/docs/demo.png)

## Heroku Backend Deployment

```
heroku login
heroku git:remote -a engineeringblogs-backend
git subtree push --prefix backend heroku master
```

## Netlify Frontend Deployment

- Deployment is automatically triggered when commit pushes into Github. For details, checkout the netlify.toml file.
