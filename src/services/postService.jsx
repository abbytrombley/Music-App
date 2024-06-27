export const getAllPosts = () => {
    return fetch(`http://localhost:8088/posts`).then((res) =>
      res.json()
    )
  }

  export const createPost = (post) => {
    return fetch(`http://localhost:8088/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post)
    })
}

export const deletePost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`, { method: "DELETE" });
  };

  export const getPostById = (post) => {
    return fetch(
        `http://localhost:8088/posts/${post}?_expand=user`
      ).then((res) => res.json());
  }

  export const updatePost = (post) => {
    return fetch(`http://localhost:8088/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post)
    })
  }