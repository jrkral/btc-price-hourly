import puppeteer from 'puppeteer'
import env from '../../config/env'

// CSS selectors
const selLogin = 'input[name="session[username_or_email]"]'
const selPass = 'input[name="session[password]"]'
const selSubmit = 'div[data-testid="LoginForm_Login_Button"]'

const selTweetContent = 'div[aria-label="Tweet text"]'

export default async (req, res) => {
	try {
		const browser = await puppeteer.launch({ headless: false })

		const page = await browser.newPage()

		await page.goto('https://twitter.com/compose/tweet', {
			waitUntil: 'networkidle0',
			timeout: 0,
		})

		await page.waitForSelector(selLogin)

		// Login
		await page.type(selLogin, env.TWITTER_EMAIL)
		await page.type(selPass, env.TWITTER_PASS)
		await page.click(selSubmit)

		// Post Tweet
		await page.waitForSelector(selTweetContent)
		await page.type(selTweetContent, 'Testing...')

		for (let i = 0; i < 8; i++) {
			await page.keyboard.press('Tab')
		}

		await page.keyboard.press('Enter')

		res.status(200).send('ok')
	} catch (error) {
		console.error(error)
		res.status(500).send('server error')
	}
}
