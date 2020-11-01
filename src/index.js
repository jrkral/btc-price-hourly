const twitterClient = require('./lib/twitterClient')
const getBTCData = require('./lib/getBTCData')

const formatUSD = number => {
	return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

const Main = async () => {
	try {
		const twitter = await twitterClient()
		const btc = await getBTCData()

		chartIcon = val => (val > 0 ? '🟢 +' : '🔴 ')

		const status = `1 $BTC = ${formatUSD(btc.price)} $USD
						${chartIcon(btc.percChange)}${btc.percChange.toFixed(2)}% chg/24h\n
						#Bitcoin #BTC #Crypto #Cryptocurrency`

		console.log('🐦 Posting tweet...')
		await twitter.post('statuses/update', { status })
		console.log('🐦 Tweet posted!')
	} catch (error) {
		console.error(error)
	}
}

Main()
