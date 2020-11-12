const Twitter = require('twitter-lite')
const env = require('../config/env')


const opts = {
	subdomain: 'api', // "api" is the default (change for other subdomains)
	version: '1.1', // version "1.1" is the default (change for other subdomains)
	consumer_key: env.CONSUMER_KEY, // from Twitter.
	consumer_secret: env.CONSUMER_SECRET, // from Twitter.
	access_token_key: env.ACCESS_TOKEN_KEY, // from your User (oauth_token)
	access_token_secret: env.ACCESS_TOKEN_SECRET, // from your User (oauth_token_secret)
}

const client = new Twitter(opts)

const useTwitter = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const results = await client.get('account/verify_credentials')
			console.log(
				`\n🐦 Twitter client connected to user @${results.screen_name}!\n`
			)
			resolve(client)
		} catch (error) {
			reject(error)
		}
	})
}

module.exports = useTwitter
