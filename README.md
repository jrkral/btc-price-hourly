# btc-price-hourly
A bot to scrape the current BTC price from the web, and post it to Twitter on the hour, every hour, 24/7! Using [cheerio](https://github.com/cheeriojs/cheerio) for scraping data, [twitter-lite](https://github.com/draftbit/twitter-lite) for posting, and [node-cron](https://github.com/node-cron/node-cron) to run the cron job.

Demo:
https://twitter.com/BTCHourlyPrice

### To run
1. Install dependencies: `npm install`.
2. Make a copy of `.env.example` and name it `.env`, then add your private keys.
3. To start the bot, run `npm run cron-start`.
4. Run `npm run cron-stop` to stop, and `npm run cron-restart` to restart!

> ⚠️ *Warning!* This bot is using Forever to run as a service. The npm scripts in this project are set up assuming there are *no other Forever services running on the system*. The `cron-stop` and `cron-restart` commands stop and restart *all* Forever services.
