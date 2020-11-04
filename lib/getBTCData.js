const fetch = require('node-fetch')
const cheerio = require('cheerio')

const BTC_URL = 'https://ca.investing.com/crypto/bitcoin'

// Builds request for fetching HTML and converting to a cheerio DOM object
const getDOM = async url => {
	return fetch(url, { mode: 'no-cors' })
		.then(res => res.text())
		.then(html => cheerio.load(html))
}

// Pulls required data from cheerio DOM object
const extractBTCData = async DOM => {
	// Scrape data
	const domData = []
	DOM('#last_last')
		.parent()
		.parent()
		.children('span[dir="ltr"]')
		.each((i, elem) => {
			domData[i] = DOM(elem).text()
		})

	// Check if no data returned
	if (!domData.length) {
		throw new Error(
			"No data was returned from the web scrape: check the scraper as the site's DOM may have changed!"
		)
	}

	// Check if any undefined values returned
	domData.forEach(item => {
		if (typeof item === undefined) {
			throw new Error(
				"Type 'undefined' found in web scrape: check the scraper as the site's DOM may have changed!"
			)
		}
	})

	return {
		price: domData[0],
		dlrChange: domData[1],
		percChange: domData[2],
	}
}

const formatBTCData = data => {
	const fmtPrice = data.price.replace(/[^\d.-]/g, '')
	const fmtDlrChange = data.dlrChange.replace(/[^\d.-]/g, '')
	const fmtPercChange = data.percChange.replace(/[^\d.-]/g, '')

	return {
		price: parseFloat(fmtPrice),
		dlrChange: parseFloat(fmtDlrChange),
		percChange: parseFloat(fmtPercChange),
	}
}

const getBTCData = async () => {
	const btcDOM = await getDOM(BTC_URL)
	const btcRaw = await extractBTCData(btcDOM)
	const btcFormatted = formatBTCData(btcRaw)
	return btcFormatted
}

export default getBTCData
