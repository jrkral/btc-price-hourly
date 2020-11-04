export default async (req, res) => {
	try {
		console.log('request received from: ' + req.connection.remoteAddress)
		res.status(200).send('ok')
	} catch (error) {
		res.status(500).send('server error')
	}
}
