import { useState, useEffect } from "react";
import { postComment, getComments } from "../../../utils/backend";
import Comment from "../Comment";

export default function CommentSection({ plantId, plantDetails }) {
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
    postComment({ ...createFormData, plantId: plantId }).then(() =>
      refreshComments()
    );
  }

  let commentElements = [
    <p
      key="0"
      className="font-bold md:text-md text-sm ml-5 mb-10 text-center text-[#0F6359]"
    >
      No comments yet. Be the first to comment!
    </p>,
  ];
  if (comments.length > 0) {
    commentElements = comments.map((comment) => {
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
      <h2 className="sm:text-2xl md:text-3xl font-bold text-center text-[#0F6359] mt-20 mb-6">
        Let's Talk: {plantDetails.commonName}
      </h2>
      <h4 className="font-bold text-[#0F6359] md:text-lg text-md ml-10 mb-">
        Sign In To Leave A Comment
      </h4>
      <div className="comment-section rounded-t-lg p-4 pb-10 mt-4 mx-10 space-y-4 relative shadow-xl bg-[#C7F07F]">
        <div className="">
          <button
            className="px-6 py-4 rounded mb-2 ml-10 mt-2 bg-[#0F6359] text-white md:font-bold sm:text-sm md:text-xl "
            onClick={toggleCreateForm}
          >
            {buttonText}
          </button>
        </div>

        {showCreateForm && (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0F6359] rounded-lg p-4 my-4 border-[#0F6359] border-2 text-right"
          >
            <textarea
              name="content"
              className="p-2 my-2 h-[100px] w-full bg-white"
              placeholder="Write Something!"
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
