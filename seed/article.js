const faker = require("faker");
const articles = [];

for (let i = 0; i < 7; i++) {
    articles.push({
        id: i,
        title: faker.lorem.sentence(),
        subTitle: faker.lorem.sentences(),
        createdDate: faker.date.past().toString(),
        content: faker.lorem.paragraphs(),
        // publish: [true, false][
        //     Math.floor(Math.random() * [true, false].length)
        // ],
        publish: true,
        url: `articles/${i}`,
        image: `/static/image/article-img-${i}.jpg`
    });
}

module.exports = articles;