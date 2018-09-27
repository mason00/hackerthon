const fetch = require('node-fetch');

async function GetWidgetData(req, res) {
    const merchantid = req.query && req.query.merchantid || '4f41a53e-1c44-4adf-9daf-117945cdf339';
    const url = `https://api.zipmoney.com.au/v1/assets?merchantid=${merchantid}`;
    
    let response = null;
    
    await fetch(url)
        .then(res => res.json())
        .then(json => response = json);
    
    if (response) {
        if (response.asset_values && response.asset_values.length) {
            response.asset_values.push({
                key: "{Price}",
                value: getPrice(),
            });
        }
        if (response.assets && response.assets.length) {
            response.assets.push({
                id: 3123,
                type: "hackerthon",
                sequence: 0,
                content_type: "html",
                url: null,
                value: "https://www.oxfordshop.com.au/Customisation/Theme/Oxford/assets/images/zippay.png?v=2"
            })
        }
    }

    console.log(response);
    res.send(response);
}

function getPrice() {
    const price = Math.floor(Math.random() * 2500) + 345;
    return `${price}`;
}

module.exports = { GetWidgetData }