const posts = [];

let lastActivityTime = null;



function createPost(post) {

  return new Promise((resolve) => {

    setTimeout(() => {

      posts.push(post);

      resolve();

    }, 1000);

  });

}



function updateLastUserActivityTime() {

  return new Promise((resolve) => {

    setTimeout(() => {

      lastActivityTime = new Date();

      resolve(lastActivityTime);

    }, 1000);

  });

}



function deletePost() {

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



// Example usage

createPost({ title: 'Post 1' })

  .then(() => updateLastUserActivityTime())

  .then((updatedTime) => {

    console.log('Posts:', posts);

    console.log('Last Activity Time:', updatedTime);

  })

  .then(() => deletePost())

  .then(() => {

    console.log('Remaining Posts:', posts);

  })

  .catch((error) => {

    console.error('Error:', error.message);

  });

