const postsContainer = document.querySelector('.posts');
const postForm = document.querySelector('#post-form');
const titleInput = document.querySelector('#title-input');
const bodyInput = document.querySelector('#body-input');
const submitBtn = document.querySelector('#submit-btn');
const API_URL = 'https://jsonplaceholder.typicode.com/posts';
let editingPostId = null;
async function fetchPosts() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      console.log("No data found");
      return;
    }
    const posts = await res.json();
    renderPosts(posts.slice(0, 10));

  } catch (err) {
    console.log(`Error: ${err}`);
  }
}
function renderPosts(posts) {
  let html = '';

  posts.forEach(post => {
    html += `
      <div class="card" data-id="${post.id}">
        <span>User ID: ${post.userId}</span>
        <h3 class="card-title">${post.title}</h3>
        <p class="card-text">${post.body}</p>
        <p>Post ID: ${post.id}</p>
        <div class="card-actions">
          <button class="edit-btn" onclick="startEdit(${post.id}, '${escapeQuotes(post.title)}', '${escapeQuotes(post.body)}')">Edit</button>
          <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
        </div>
      </div>
    `;
  });

  postsContainer.innerHTML = html;
}

function escapeQuotes(text) {
  return text.replace(/'/g, "\\'");
}

async function createPost(title, body) {
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      })
    });

    if (!res.ok) {
      console.log("Failed to create post");
      return;
    }

    const newPost = await res.json();
    console.log("New post created:", newPost);

    addPostToTop(newPost);

  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

function addPostToTop(post) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.id = post.id;
  card.innerHTML = `
    <span>User ID: ${post.userId}</span>
    <h3 class="card-title">${post.title}</h3>
    <p class="card-text">${post.body}</p>
    <p>Post ID: ${post.id}</p>
    <div class="card-actions">
      <button class="edit-btn" onclick="startEdit(${post.id}, '${escapeQuotes(post.title)}', '${escapeQuotes(post.body)}')">Edit</button>
      <button class="delete-btn" onclick="deletePost(${post.id})">Delete</button>
    </div>
  `;
  postsContainer.prepend(card);
}

function startEdit(id, title, body) {
  editingPostId = id;
  titleInput.value = title;
  bodyInput.value = body;
  submitBtn.textContent = 'Save Changes';
  titleInput.focus();
}

async function updatePost(id, title, body) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
        userId: 1
      })
    });

    if (!res.ok) {
      console.log("Failed to update post");
      return;
    }

    const updatedPost = await res.json();
    console.log("Post updated:", updatedPost);

    updatePostInPage(id, title, body);

  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

function updatePostInPage(id, title, body) {
  const card = document.querySelector(`.card[data-id="${id}"]`);
  if (!card) return;

  card.querySelector('.card-title').textContent = title;
  card.querySelector('.card-text').textContent = body;

  const editBtn = card.querySelector('.edit-btn');
  editBtn.setAttribute('onclick', `startEdit(${id}, '${escapeQuotes(title)}', '${escapeQuotes(body)}')`);
}

async function deletePost(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });

    if (!res.ok) {
      console.log("Failed to delete post");
      return;
    }

    console.log(`Post ${id} deleted`);

    const card = document.querySelector(`.card[data-id="${id}"]`);
    if (card) card.remove();

  } catch (err) {
    console.log(`Error: ${err}`);
  }
}

postForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (!title || !body) {
    alert('Please enter both a title and a body');
    return;
  }

  if (editingPostId) {
    updatePost(editingPostId, title, body);
    editingPostId = null;
    submitBtn.textContent = 'Add Post';
  } else {
    createPost(title, body);
  }

  postForm.reset();
});

fetchPosts();