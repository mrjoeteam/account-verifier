const axios = require("axios");

module.exports = async (req, res) => {
  const { account_number, account_bank } = req.body;

  try {
    const response = await axios.get(
      "https://api.flutterwave.com/v3/accounts/resolve",
      {
        params: { account_number, account_bank },
        headers: {
          Authorization: `FLWSECK-2205338cdf9a57d1859999d1be4ba1e6-1961c371d64vt-X`, // Replace this!
        },
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Verification failed" });
  }
};
