
export default function handler(req, res) {
  res.status(200).json({
    uptime: 98.5,
    failCount: 3,
    lastChecked: new Date().toISOString()
  });
}
