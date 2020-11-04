const twitterClient = require('./lib/twitterClient')
const getBTCData = require('./lib/getBTCData')

const formatUSD = number => {
	return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

const Main = async (req, res) => {
	try {
		const twitter = await twitterClient()
		const btc = await getBTCData()

		const chartIcon = val => (val > 0 ? '🟢 +' : '🔴 ')

		const status = `1 $BTC = ${formatUSD(btc.price)} $USD
						${chartIcon(btc.percChange)}${btc.percChange.toFixed(2)}% chg/24h\n
						#Bitcoin #BTC #Crypto #Cryptocurrency`

		console.log('🐦 Posting tweet...')
		await twitter.post('statuses/update', { status })
		console.log('🐦 Tweet posted!')

		res.sendStatus(200)
	} catch (error) {
		res.status(500).json({ error })
		console.error(error)
	}
}

exports.handler = Main
