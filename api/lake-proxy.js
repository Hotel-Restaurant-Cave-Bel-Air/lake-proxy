export default async function handler(req, res) {
	try {
		const r = await fetch('https://www.bateau24.ch/chfr/service/temperaturen/lacdemorat/', {
			headers: { 'User-Agent': 'Mozilla/5.0 (Bel-Air Widget)' }
		});
		const txt = await r.text();

		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Content-Type', 'text/html; charset=utf-8');
		res.status(200).send(txt);
	} catch (e) {
		res.status(502).json({ error: 'fetch_failed', detail: e.message });
	}
}
