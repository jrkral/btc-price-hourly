export default async (req, res) => {
	try {
		console.log('request received:\n', req.body)
		res.status(200).send('ok')
	} catch (error) {
		res.status(500).send('server error')
	}
}
