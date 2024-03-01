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

  if(showEditForm){
     return (
    <form onSubmit={handleSubmit}>
        <textarea
                    name="content"
                    className="p-2 my-2 h-[100px] w-full bg-gray-100"
                    placeholder="Share your thoughts!"
                    value={editFormData.content}
                    onChange={handleInputChange}
                />
        <div>
                    <button
                        onClick={() => { setShowEditForm(false) }}
                        className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2">
                        Close
                    </button>
                    <button
                        type="submit"
                        className="text-white hover:bg-green-800 font-bold py-2 px-4 bg-green-900 rounded cursor-pointer mr-2">
                        Post
                    </button>
                </div>
    </form>
  )
  } else
  return(
    <div
                className="bg-gray-100 rounded-lg p-4 my-4 border-gray-700 border-2 w-[80vw] mx-auto">
                <p className="my-2">{data.content}</p>
                <div className="flex justify-end">
                    <button
                        onClick={() => { setShowEditForm(true) }}
                        className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2">
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                        Delete
                    </button>
                </div>
            </div>
  )
 
}
