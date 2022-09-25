// khai báo module cheerio
const cheerio = require('cheerio');
// khai báo module request-promise
const request = require('request-promise');
const fs = require('fs'); // require thêm module filesystem






// gửi request đến trang
const time = function() {
    request('https://dantri.com.vn/the-gioi.htm', (error, response, html) => {
        if (!error && response.statusCode == 200) {
            const $ = cheerio.load(html);
            let data = []

            $(`.article-item`).each((index, el) => {
                const newimg = $(el).find('.article-thumb a').find('img').attr('src');
                const newim = $(el).find('.article-thumb a').find('img').attr('data-src');
                const heading = $(el).find('.article-title a').text();
                const content = $(el).find('.article-excerpt a').text();


                data.push({
                    newimg,
                    newim,
                    heading,
                    content

                }); // đẩy dữ liệu vào biến data

            })
            fs.writeFileSync('data.json', JSON.stringify(data)); // lưu dữ liệu vào file data.json
        } else {
            console.log(error);
        }
    });
}
setInterval(time, 300000);