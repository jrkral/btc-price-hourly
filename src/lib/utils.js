const moment = require('moment')

exports.formatUSD = number => {
	return number.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	})
}

exports.getTimestamp = () => moment().format('h:mm:ss a, MMMM Do YYYY')
