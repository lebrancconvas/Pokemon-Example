const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;

const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
	res.send("Test Pokemon Server.");
});

app.get('/api/v1/pokemons', async(req, res) => {
	const response = await fetch('http://localhost:9001/pokemons');
	let data = await response.json();
	const record = req.query.record;
	if(record !== undefined) {
		data = data.filter((_, index) => index < record);
		res.send(data);
	} else {
		res.send(data);
	}
})

app.listen(PORT, () => {
	console.log(`[SUCCESS] TASK_01: Server is running on port ${PORT}`);
});