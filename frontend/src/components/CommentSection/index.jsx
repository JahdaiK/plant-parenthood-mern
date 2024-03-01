import { useState, useEffect } from "react";
import { postComment, getComments } from "../../../utils/backend"
import Comment from "../Comment";

export default function CommentSection({ plantId }) {
  const [comments, setComments] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [createFormData, setCreateFormData] = useState({
    content: "",
  });

  useEffect(() => {
    getComments(plantId).then((comments) => setComments(comments));
  }, []);

  function handleInputChange(event) {
    setCreateFormData({
      ...createFormData,
      [event.target.name]: event.target.value,
    });
  }

  function toggleCreateForm() {
    setShowCreateForm(!showCreateForm);
  }

  function refreshComments() {
    getComments(plantId).then((newCommentData) => setComments(newCommentData));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCreateFormData({
      content: "",
    });
    setShowCreateForm(false);
    postComment({ ...createFormData, plantId: plantId }).then(
      () => refreshComments()
    );
  }

  let commentElements = [
    <p key="0" className="text-center">
      No comments yet. Be the first to comment!
    </p>,
  ];
  if (comments.length > 0) {
    commentElements = comments.map(comment => {
      return (
        <Comment
          key={comment._id}
          data={comment}
          refreshComments={refreshComments}
        />
      );
    });
  }

  let buttonText = "Create";
  if (showCreateForm) {
    buttonText = "Close";
  }
  return (
    <>
      <div className="bg-blue-200">
        <h1>Plarenting Advice</h1>
        <button onClick={toggleCreateForm}>{buttonText}</button>

        {showCreateForm && (
          <form onSubmit={handleSubmit}>
            <textarea
              name="content"
              className="p-2 my-2 h-[100px] w-full bg-gray-100"
              placeholder="Share your thoughts!"
              value={createFormData.content}
              required
              minLength={5}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2"
            >
              Post
            </button>
          </form>
        )}
        {commentElements}
      </div>
    </>
  );
}
