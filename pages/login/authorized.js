export default function authorized(req, res) {
    res.status(200).json(req.query)
}