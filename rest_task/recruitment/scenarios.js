var rp = require('request-promise');

var scenario1 ={
    uri: 'https://jsonplaceholder.typicode.com/posts/',
    method: 'get',
    json: true
};

var scenario2 = {
    uri: 'https://jsonplaceholder.typicode.com/posts?userId=10',// + maxId,
    method: 'get',
    json: true
};


//scenario 1

rp(scenario1)
    .then((data) => {
        const maxId = data.reduce((maxUserId, post) => post.userId > maxUserId ? post.userId : maxUserId,data[0].userId);
        console.log('Highest userID is', maxId);
    })
    .catch(() => {
        console.log('error');

    });

//scenario 2

rp(scenario2)
    .then((data) => {
        let smallId = data.reduce((postWithMaxId, post) => post.id > postWithMaxId ? post.id : postWithMaxId,data[0].id);
        console.log('Highest ID is', smallId);
    })
    .catch(() => {
        console.log('error2');
    });