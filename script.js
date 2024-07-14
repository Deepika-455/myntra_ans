// document.addEventListener('DOMContentLoaded', function () {
//     const createAccountBtn = document.getElementById('create-account-btn');
//     const createAccountModal = document.getElementById('create-account-modal');
//     const closeCreateAccountModal = document.getElementById('close-create-account-modal');
//     const saveAccountBtn = document.getElementById('save-account-btn');

//     const postSomethingBtn = document.getElementById('post-something-btn'); // Added this button in the HTML
//     const addPostModal = document.getElementById('add-post-modal');
//     const closeAddPostModal = document.getElementById('close-add-post-modal');
//     const savePostBtn = document.getElementById('save-post-btn');

//     let currentUser = null;
//     let likedPosts = new Set();

//     createAccountBtn.addEventListener('click', function () {
//         createAccountModal.style.display = 'block';
//     });

//     closeCreateAccountModal.addEventListener('click', function () {
//         createAccountModal.style.display = 'none';
//     });

//     saveAccountBtn.addEventListener('click', function () {
//         const accountName = document.getElementById('account-name').value;
//         const accountEmail = document.getElementById('account-email').value;
//         const accountPicInput = document.getElementById('account-pic-input').files[0];

//         if (accountName && accountEmail && accountPicInput) {
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 currentUser = {
//                     name: accountName,
//                     email: accountEmail,
//                     pic: e.target.result
//                 };

//                 document.getElementById('create-account-btn').style.display = 'none';
//                 document.getElementById('user-info').style.display = 'flex';
//                 document.getElementById('user-pic').src = currentUser.pic;
//                 document.getElementById('user-name').textContent = currentUser.name;
//                 createAccountModal.style.display = 'none';
//             };
//             reader.readAsDataURL(accountPicInput);
//         } else {
//             alert('Please fill in all fields and select a profile picture.');
//         }
//     });

//     if (postSomethingBtn) { // Ensure the button exists
//         postSomethingBtn.addEventListener('click', function () {
//             addPostModal.style.display = 'block';
//         });
//     }

//     closeAddPostModal.addEventListener('click', function () {
//         addPostModal.style.display = 'none';
//     });

//     savePostBtn.addEventListener('click', function () {
//         const postContent = document.getElementById('post-content').value;
//         const postFileInput = document.getElementById('post-file').files[0];

//         if (postContent && postFileInput) {
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 const postContainer = document.createElement('div');
//                 postContainer.classList.add('post');
//                 const postID = Date.now(); // Generate a unique post ID

//                 const postHeader = `
//                     <div class="post-header">
//                         <div class="post-profile-pic">
//                             <img src="${currentUser.pic}" alt="${currentUser.name}">
//                         </div>
//                         <h4>${currentUser.name}</h4>
//                         <button class="follow-btn">Follow</button>
//                     </div>
//                 `;

//                 const postContentHtml = `
//                     <div class="post-content">
//                         <img src="${e.target.result}" alt="Post Image">
//                     </div>
//                 `;

//                 const postActions = `
//                     <div class="post-actions">
//                         <button class="like-btn" data-post-id="${postID}">❤ <span class="like-count">0</span></button>
//                         <button class="comment-btn" data-post-id="${postID}">💬 <span class="comment-count">0</span></button>
//                         <button class="save-btn">💾</button>
//                         <button class="share-btn" data-post-id="${postID}">📤</button>
//                     </div>
//                     <div class="comments">
//                         <div class="comment-section"></div>
//                         <input type="text" class="comment-input" placeholder="Add a comment...">
//                         <button class="add-comment-btn" data-post-id="${postID}">Add Comment</button>
//                     </div>
//                     <div class="post-details">
//                         <p>${postContent}</p>
//                     </div>
//                 `;

//                 postContainer.innerHTML = postHeader + postContentHtml + postActions;
//                 document.getElementById('posts').prepend(postContainer);
//                 addPostModal.style.display = 'none';
//             };
//             reader.readAsDataURL(postFileInput);
//         } else {
//             alert('Please enter post content and select an image or video.');
//         }
//     });

//     // Event delegation for dynamically added elements
//     document.getElementById('posts').addEventListener('click', function (event) {
//         if (event.target.classList.contains('like-btn')) {
//             const postID = event.target.getAttribute('data-post-id');
//             if (!likedPosts.has(postID)) {
//                 const likeCountSpan = event.target.querySelector('.like-count');
//                 let likeCount = parseInt(likeCountSpan.textContent);
//                 likeCount++;
//                 likeCountSpan.textContent = likeCount;
//                 likedPosts.add(postID);
//             } else {
//                 alert('You have already liked this post.');
//             }
//         } else if (event.target.classList.contains('comment-btn')) {
//             const commentInput = event.target.closest('.post').querySelector('.comment-input');
//             commentInput.focus();
//         } else if (event.target.classList.contains('add-comment-btn')) {
//             const postID = event.target.getAttribute('data-post-id');
//             const commentInput = event.target.closest('.post').querySelector('.comment-input');
//             const commentSection = event.target.closest('.post').querySelector('.comment-section');
//             const commentText = commentInput.value;
//             if (commentText) {
//                 const comment = document.createElement('div');
//                 comment.classList.add('comment');
//                 comment.innerHTML = `<strong>${currentUser.name}:</strong> ${commentText}`;
//                 commentSection.appendChild(comment);
//                 commentInput.value = '';
//                 const commentCountSpan = event.target.closest('.post').querySelector('.comment-count');
//                 let commentCount = parseInt(commentCountSpan.textContent);
//                 commentCount++;
//                 commentCountSpan.textContent = commentCount;
//             }
//         } else if (event.target.classList.contains('share-btn')) {
//             const postID = event.target.getAttribute('data-post-id');
//             const shareLink = document.createElement('input');
//             document.body.appendChild(shareLink);
//             shareLink.value = window.location.href + '#' + postID;
//             shareLink.select();
//             document.execCommand('copy');
//             document.body.removeChild(shareLink);
//             alert('Link copied to clipboard');
//         }
//     });

//     window.onclick = function (event) {
//         if (event.target === createAccountModal) {
//             createAccountModal.style.display = 'none';
//         }
//         if (event.target === addPostModal) {
//             addPostModal.style.display = 'none';
//         }
//     };
// });

document.addEventListener('DOMContentLoaded', function () {
    const createAccountBtn = document.getElementById('create-account-btn');
    const createAccountModal = document.getElementById('create-account-modal');
    const closeCreateAccountModal = document.getElementById('close-create-account-modal');
    const saveAccountBtn = document.getElementById('save-account-btn');

    const postSomethingBtn = document.getElementById('post-something-btn'); // Added this button in the HTML
    const addPostModal = document.getElementById('add-post-modal');
    const closeAddPostModal = document.getElementById('close-add-post-modal');
    const savePostBtn = document.getElementById('save-post-btn');

    const viewProductBtn = document.getElementById('view-product-btn'); // Added this button in the HTML

    let currentUser = null;
    let likedPosts = new Set();

    createAccountBtn.addEventListener('click', function () {
        createAccountModal.style.display = 'block';
    });

    closeCreateAccountModal.addEventListener('click', function () {
        createAccountModal.style.display = 'none';
    });

    saveAccountBtn.addEventListener('click', function () {
        const accountName = document.getElementById('account-name').value;
        const accountEmail = document.getElementById('account-email').value;
        const accountPicInput = document.getElementById('account-pic-input').files[0];

        if (accountName && accountEmail && accountPicInput) {
            const reader = new FileReader();
            reader.onload = function (e) {
                currentUser = {
                    name: accountName,
                    email: accountEmail,
                    pic: e.target.result
                };

                document.getElementById('create-account-btn').style.display = 'none';
                document.getElementById('user-info').style.display = 'flex';
                document.getElementById('user-pic').src = currentUser.pic;
                document.getElementById('user-name').textContent = currentUser.name;
                createAccountModal.style.display = 'none';
            };
            reader.readAsDataURL(accountPicInput);
        } else {
            alert('Please fill in all fields and select a profile picture.');
        }
    });

    if (postSomethingBtn) { // Ensure the button exists
        postSomethingBtn.addEventListener('click', function () {
            addPostModal.style.display = 'block';
        });
    }

    closeAddPostModal.addEventListener('click', function () {
        addPostModal.style.display = 'none';
    });

    savePostBtn.addEventListener('click', function () {
        const postContent = document.getElementById('post-content').value;
        const postFileInput = document.getElementById('post-file').files[0];

        if (postContent && postFileInput) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const postContainer = document.createElement('div');
                postContainer.classList.add('post');
                const postID = Date.now(); // Generate a unique post ID

                const postHeader = `
                    <div class="post-header">
                        <div class="post-profile-pic">
                            <img src="${currentUser.pic}" alt="${currentUser.name}">
                        </div>
                        <h4>${currentUser.name}</h4>
                        <button class="follow-btn">Follow</button>
                    </div>
                `;

                const postContentHtml = `
                    <div class="post-content">
                        <img src="${e.target.result}" alt="Post Image">
                    </div>
                `;

                const postActions = `
                    <div class="post-actions">
                        <button class="like-btn" data-post-id="${postID}">❤ <span class="like-count">0</span></button>
                        <button class="comment-btn" data-post-id="${postID}">💬 <span class="comment-count">0</span></button>
                        <button class="save-btn">💾</button>
                        <button class="share-btn" data-post-id="${postID}">📤</button>
                    </div>
                    <div class="comments">
                        <div class="comment-section"></div>
                        <input type="text" class="comment-input" placeholder="Add a comment...">
                        <button class="add-comment-btn" data-post-id="${postID}">Add Comment</button>
                    </div>
                    <div class="post-details">
                        <p>${postContent}</p>
                    </div>
                `;

                postContainer.innerHTML = postHeader + postContentHtml + postActions;
                document.getElementById('posts').prepend(postContainer);
                addPostModal.style.display = 'none';
            };
            reader.readAsDataURL(postFileInput);
        } else {
            alert('Please enter post content and select an image or video.');
        }
    });

    // Add the functionality for the "View Product" button
    if (viewProductBtn) {
        viewProductBtn.addEventListener('click', function () {
            // Redirect to the product page
            window.location.href = 'product.html';
        });
    }

    // Event delegation for dynamically added elements
    document.getElementById('posts').addEventListener('click', function (event) {
        if (event.target.classList.contains('like-btn')) {
            const postID = event.target.getAttribute('data-post-id');
            if (!likedPosts.has(postID)) {
                const likeCountSpan = event.target.querySelector('.like-count');
                let likeCount = parseInt(likeCountSpan.textContent);
                likeCount++;
                likeCountSpan.textContent = likeCount;
                likedPosts.add(postID);
            } else {
                alert('You have already liked this post.');
            }
        } else if (event.target.classList.contains('comment-btn')) {
            const commentInput = event.target.closest('.post').querySelector('.comment-input');
            commentInput.focus();
        } else if (event.target.classList.contains('add-comment-btn')) {
            const postID = event.target.getAttribute('data-post-id');
            const commentInput = event.target.closest('.post').querySelector('.comment-input');
            const commentSection = event.target.closest('.post').querySelector('.comment-section');
            const commentText = commentInput.value;
            if (commentText) {
                const comment = document.createElement('div');
                comment.classList.add('comment');
                comment.innerHTML = `<strong>${currentUser.name}:</strong> ${commentText}`;
                commentSection.appendChild(comment);
                commentInput.value = '';
                const commentCountSpan = event.target.closest('.post').querySelector('.comment-count');
                let commentCount = parseInt(commentCountSpan.textContent);
                commentCount++;
                commentCountSpan.textContent = commentCount;
            }
        } else if (event.target.classList.contains('share-btn')) {
            const postID = event.target.getAttribute('data-post-id');
            const shareLink = document.createElement('input');
            document.body.appendChild(shareLink);
            shareLink.value = window.location.href + '#' + postID;
            shareLink.select();
            document.execCommand('copy');
            document.body.removeChild(shareLink);
            alert('Link copied to clipboard');
        }
    });

    window.onclick = function (event) {
        if (event.target === createAccountModal) {
            createAccountModal.style.display = 'none';
        }
        if (event.target === addPostModal) {
            addPostModal.style.display = 'none';
        }
    };
});

