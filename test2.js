// tripPlan.js

function getButter() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Husband got butter.');
            resolve('Butter');
        }, 1000);
    });
}

function getColdDrinks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Wife got cold drinks.');
            resolve('Cold Drinks');
        }, 1000);
    });
}

async function planTrip() {
    try {
        console.log('=== Using Promises ===');
        const butterPromise = getButter();
        const drinksPromise = butterPromise.then(() => getColdDrinks());
        drinksPromise.then((drink) => {
            console.log(`Husband and wife got ${drink}.\n`);
        });

        console.log('=== Using Async/Await ===');
        const butter = await getButter();
        const drink = await getColdDrinks();
        console.log(`Husband and wife got ${drink}.\n`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function exampleWithPromiseAll() {
    const promises = [getButter(), getColdDrinks()];
    try {
        console.log('=== Using Promise.all with Async/Await ===');
        const [butter, drink] = await Promise.all(promises);
        console.log(`Husband got ${butter} and wife got ${drink}.\n`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Usage of createPost and deletePost with async/await
const posts = [];

async function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

async function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject(new Error('No posts to delete.'));
            }
        }, 1000);
    });
}

async function managePosts() {
    try {
        console.log('=== Using Async/Await for createPost and deletePost ===');
        await createPost({ title: 'New Post' });
        console.log('Posts after creation:', posts);

        const deletedPost = await deletePost();
        console.log('Deleted Post:', deletedPost);

        console.log('Remaining Posts:', posts);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the functions
planTrip();
exampleWithPromiseAll();
managePosts();
