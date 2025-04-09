const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());

app.post("/verify-account", async (req, res) => {
  const { account_number, account_bank } = req.body;

  try {
    const response = await axios.get("https://api.flutterwave.com/v3/accounts/resolve", {
      params: { account_number, account_bank },
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
      },
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Verification failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
