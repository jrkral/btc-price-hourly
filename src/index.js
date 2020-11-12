const cron = require('node-cron')
const useTwitter = require('./lib/useTwitter')
const getBitcoinData = require('./lib/getBitcoinData')
const { formatUSD, getTimestamp } = require('./lib/utils')

const CRON_SCHEDULE = '0 * * * *' // hourly

const makePost = async () => {
	try {
		console.log('⌛ Scraping BTC data...')
		const btcData = await getBitcoinData()
		const { price, percChange } = btcData
		if (price === undefined || percChange === undefined) {
			throw new Error(
				`Undefined value returned from BTC data scrape, check the scraper!\n${getTimestamp()}`
			)
		}
		console.log('✨ Scrape successful!')

		const twitter = await useTwitter()
		const chartIcon = val => (val > 0 ? '🟢 +' : '🔴 ')

		const status = `1 $BTC = ${formatUSD(btcData.price)} $USD
						${chartIcon(btcData.percChange)}${btcData.percChange.toFixed(2)}% chg/24h\n
						#Bitcoin #BTC #Crypto #Cryptocurrency`

		console.log('🐦 Posting tweet...')
		await twitter.post('statuses/update', { status })
		console.log(`🐦 Tweet posted! - ${getTimestamp()}`)
	} catch (error) {
		console.error(error)
	}
}

async function Main() {
	cron.schedule(CRON_SCHEDULE, makePost)
	console.log(`Cron started - ${getTimestamp()}`)
}

Main()
