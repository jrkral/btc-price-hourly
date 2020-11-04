import Cors from 'cors'

import loadMiddleware from '../../lib/loadMiddleware'
import getTwitterClient from '../../lib/getTwitterClient'
import getBTCData from '../../lib/getBTCData'

const formatUSD = number => {
	return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export default async (req, res) => {
	try {
		const cors = Cors({
			methods: ['GET'],
		})

		await loadMiddleware(req, res, cors)

		const twitter = await getTwitterClient()
		const btc = await getBTCData()

		const chartIcon = val => (val > 0 ? '🟢 +' : '🔴 ')

		const status = `1 $BTC = ${formatUSD(btc.price)} $USD
						${chartIcon(btc.percChange)}${btc.percChange.toFixed(2)}% chg/24h\n
						#Bitcoin #BTC #Crypto #Cryptocurrency`

		console.log('🐦 Posting tweet...')
		await twitter.post('statuses/update', { status })
		console.log('🐦 Tweet posted!')

		res.status(200).send('🐦 Tweet posted!')
	} catch (error) {
		res.status(500).send('Server error')
		console.error(error)
	}
}
