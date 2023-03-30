/*
const posts = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
];

const getPosts = () => {
    setTimeout(() => {
        posts.forEach(post => {
            console.log(`${post.id} ${post.title}`);
        })
    }, 1000);

}

const addPosts = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

addPosts({ id: 3, title: 'three' }, getPosts);

*/
/*
let p1 = new Promise((resolve, reject) => {
    reject();
});
p1.then(() => {
    console.log('resolve');
}).catch(() => {
    console.log('reject');
});
*/
/*
const posts = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
];

const getPosts = () => {
    setTimeout(() => {
        posts.forEach(post => {
            console.log(`${post.id} ${post.title}`);
        })
    }, 1000);

}

const addPosts = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let err = false;

            ((err) ? reject() : resolve());


        }, 2000);
    });

}

addPosts({ id: 3, title: 'three' }).then(getPosts).catch(() => {
    console.log('error');
});
*/

const posts = [
    { id: 1, title: "one" },
    { id: 2, title: "two" },
];

const getPosts = () => {
    setTimeout(() => {
        posts.forEach(post => {
            console.log(`${post.id} ${post.title}`);
        })
    }, 1000);

}

const addPosts = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let err = false;

            ((err) ? reject() : resolve());


        }, 2000);
    });

}

// addPosts({ id: 3, title: 'ghi' }).then(getPosts).catch(() => {
//     console.log('error');
// });

async function trigger(){
    await addPosts({ id: 3, title: 'three' });
    getPosts();
}

trigger();