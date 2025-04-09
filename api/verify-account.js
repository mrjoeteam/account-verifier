const axios = require("axios");

module.exports = async (req, res) => {
  const { account_number, account_bank } = req.body;

  try {
    const response = await axios.get(
      "https://api.flutterwave.com/v3/accounts/resolve",
      {
        params: { account_number, account_bank },
        headers: {
          Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`
        },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Verification failed" });
  }
};
