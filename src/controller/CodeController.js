const path = require('path');
const notFoundPath = path.join(__dirname, '../../public/404.html');
const qr = require('qrcode');

exports.getQRCode = async (req, res) => {
  const url = req.body.url;
  const qrOption = {
    margin: 7,
    width: 500,
    errorCorrectionLevel: 'H'
  };

  try {
    if (url.length === 0) res.send('Empty Data!');
    qr.toDataURL(url, qrOption, (err, src) => {
      if (err) res.send('Error occurred');

      return res.render('scan', { src });
    });
  } catch (error) {
    return res.status(404).sendFile(notFoundPath);
  }
};
