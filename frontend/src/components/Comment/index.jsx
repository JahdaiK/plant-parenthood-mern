import { useState } from "react";
import { updateComment, deleteComment } from "../../../utils/backend";

export default function Comment({ data, refreshComments }) {
  const [showEditForm, setShowEditForm] = useState(false);
  const [editFormData, setShowEditFormData] = useState({
    content: data.content,
  });

  function handleInputChange(event) {
    setShowEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setShowEditForm(false);

    updateComment(editFormData, data._id).then(() => refreshComments());
  }

  function handleDelete() {
    deleteComment(data._id).then(() => refreshComments());
  }

  if (showEditForm) {
    return (
      <form onSubmit={handleSubmit}>
        <textarea
          name="content"
          className=" text-balance p-2 my-2 h-[100px] w-full bg-white"
          placeholder="Write Something"
          value={editFormData.content}
          onChange={handleInputChange}
        />
        <div>
          <button
            onClick={() => {
              setShowEditForm(false);
            }}
            className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2"
          >
            Close
          </button>
          <button
            type="submit"
            className="text-white hover:bg-green-800 font-bold py-2 px-4 bg-green-900 rounded cursor-pointer mr-2"
          >
            Post
          </button>
        </div>
      </form>
    );
  } else
    return (
      <>
        <div className="bg-white rounded-lg border-[#0F6359] border-2 mx-10">
          <div className="mx-10 mt-5">
            <h2 className="font-bold text-2xl mb-3 text-[#0F6359]">
              {data.userName}:
            </h2>
            <p className="break-words mb-5 text-xl">{data.content}</p>
          </div>

          <div className="flex justify-end mb-3 mr-3">
            <button
              onClick={() => {
                setShowEditForm(true);
              }}
              className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-[#0F6359] rounded cursor-pointer mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-[#C2AD97] hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </>
    );
}
