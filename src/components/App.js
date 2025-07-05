
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
      <h1>GenZ</h1>

      <nav>
        <a href="/">Posts</a> |{" "}
        <a href="/users">Users</a> |{" "}
        <a href="/notifications">Notifications</a>
      </nav>

      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:postId" element={<PostPage />} />
        <Route path="/editPost/:postId" element={<EditPostForm />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:userId" element={<UserPosts />} />
        <Route path="/notifications" element={<NotificationsList />} />
      </Routes>

      <AddPostForm />
    </div>
  )
}

export default App
