const faker = require("faker");
const articles = [];

for (let i = 0; i < 20; i++) {
    articles.push({
        title: faker.lorem.sentence(),
        subTitle: faker.lorem.sentences(),
        date: faker.date.past().toString(),
        content: faker.lorem.paragraphs(),
        publish: [true, false][
            Math.floor(Math.random() * [true, false].length)
        ],
        url: `articles/${i}`,
        image: `/static/image/article-img-${i}.jpg`
    });
}

module.exports = articles;