# btc-price-hourly
A bot to scrape the current BTC price from the web, and post it to Twitter on the hour, every hour, 24/7! Using cheerio for scraping, and the twitter-lite for posting.

Demo:
https://twitter.com/BTCHourlyPrice

### To run
1. Install dependencies: `npm install`.
2. Make a copy of `.env.example` and name it `.env`, then add your private keys.
3. To start the bot, run `npm run cron-start`.
4. Run `npm run cron-stop` to stop, and `npm run cron-restart` to restart!
