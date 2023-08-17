const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function scrapeOtomoto() {
    const otomotoUrl = 'https://www.otomoto.pl/osobowe/nissan';

    try {
        const response = await fetch(otomotoUrl);
        const html = await response.text();
        const $ = cheerio.load(html);

        const cars = [];
        $('.adListingItem').each((index, element) => {
            const make = $(element).find('.offer-title__link span[itemprop="brand"]').text().trim();
            const model = $(element).find('.offer-title__link span[itemprop="model"]').text().trim();
            const year = $(element).find('.offer-item__params span[data-code="year"]').text().trim();
            const price = $(element).find('.offer-price__number').text().trim();
            const imageUrl = $(element).find('.photo-box__photo').attr('src');

            cars.push({ make, model, year, price, imageUrl });
        });

        return cars;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

module.exports = { scrapeOtomoto };
