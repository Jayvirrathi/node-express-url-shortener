import Url from '../models/Url';
const path = require('path');
const yup = require('yup');
const { nanoid } = require('nanoid');
const notFoundPath = path.join(__dirname, '../../public/404.html');

exports.createUrl = async (req, res) => {
  let { slug, url } = req.body;

  if (!slug) {
    slug = nanoid(5);
  } else {
    const existing = await Url.findOne({ slug });
    if (existing) {
      let dataError = {
        error: 'Slug in use. 🍔'
      };
      return res.status(400).send(dataError);
    }
  }
  slug = slug.toLowerCase();
  const newUrl = {
    url,
    slug
  };

  let data = await Url.create({
    url: url,
    slug: slug
  });

  return res.send(data);
};

exports.getSingleUrl = async (req, res) => {
  const { id: slug } = req.params;
  try {
    const url = await Url.findOne({ slug });
    if (url) {
      return res.redirect(url.url);
    }
    return res.status(404).sendFile(notFoundPath);
  } catch (error) {
    return res.status(404).sendFile(notFoundPath);
  }
};
