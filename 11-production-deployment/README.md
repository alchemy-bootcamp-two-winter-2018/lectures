Class 11: Production & Deployment
===

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) </br>
[Lecture Notes](#notes) | [Readings](#readings)

<hr></hr>

## Schedule
1. Announcements
1. Code Review
1. Full Stack app across two repos
    1. Deploy Back End to Heroku
    1. Deploy Front End to Gh-Pages

## Announcements
- ?

## Learning Objectives
- Be able to push a dev site to production, so the world can see it.
- Understand the difference between a static page and a dynamically generated app page.

## Notes

Environments

* Dev vs Production environment
* ENV variables
    * **`PORT`**
    * `connString` will become **`DATABASE_URL`**
    * `dotenv` node module - loads env variables from `.env` file
* How to deploy to Heroku (step by step)
    * Create a heroku app using the CLI
    * (Note: adds the heroku app url to your git repo as a remote repo)
    * Deploy! `git push heroku master`
    * [Adding a database](https://devcenter.heroku.com/articles/heroku-postgresql)
        1. create a database using the postgresql addon
        1. check your configs to see the database url
        1. restart your heroku instance

        ```
        $ heroku addons:create heroku-postgresql:hobby-dev
        $ heroku config
        $ heroku ps:restart
        ```

* [More Heroku info](heroku.md)

## Readings

- [Heroku: Getting Started with Node](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
- [Deploying a Simple Blog to Heroku](https://howtonode.org/deploy-blog-to-heroku)