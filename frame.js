<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="fc:frame" content="vNext">
    <meta name="fc:frame:image" content="https://www.vaults.fyi/images/emojis/bankEmoji.png">
    <meta name="fc:frame:button:1" content="vaults.fyi">
    <meta name="fc:frame:button:2" content="Get Aave v3 DAI rate">
    <meta name="fc:frame:post_url" content="https://0xsmoochie.github.io/fc-frame-demo1/">
    <meta name="og:image" content="https://www.vaults.fyi/images/emojis/bankEmoji.png">
    <title>Vaults.fyi Link</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .frame {
            text-align: center;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .cover-image {
            max-width: 50px;
            height: auto;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
            cursor: pointer;
        }
        .data-container {
            margin-top: 20px;
            font-weight: bold;
        }
        .description {
            margin-top: 10px;
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="frame">
        <img class="cover-image" src="https://www.vaults.fyi/images/emojis/bankEmoji.png" alt="Cover Image">
        <p class="description">Get the latest rates from vaults.fyi</p>
        <a class="button" href="https://vaults.fyi/" target="_blank" onclick="window.open('https://vaults.fyi/', '_blank').focus();">vaults.fyi</a>
        <a class="button" onclick="fetchData('https://api.vaults.fyi/v1/vaults/mainnet/0x018008bfb33d285247A21d44E50697654f754e63/')">Get Aave v3 DAI rate</a>
        <div class="data-container"></div>
    </div>
    <script>
        const buttons = document.querySelectorAll('.button');
        const dataContainer = document.querySelector('.data-container');

        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.currentTarget.href) {
                    window.open(e.currentTarget.href, '_blank').focus();
                } else {
                    const apiUrl = e.currentTarget.getAttribute('onclick').match(/'(.*?)'/)[1];
                    fetchData(apiUrl);
                }
            });
        });

        function fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const apy = data.apy;
                    const formattedApy = (apy / 100).toFixed(2) + '%';
                    dataContainer.textContent = `7-day APY: ${formattedApy}`;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    dataContainer.textContent = 'Error fetching data';
                });
        }
    </script>
</body>
</html>

const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/frame', (req, res) => {
  console.log('Received data:', req.body);
  res.status(200).json({ message: 'Frame received' });
});

// Export the Express app
module.exports = app;
