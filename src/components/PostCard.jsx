import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-3 sm:p-4 md:p-5 shadow hover:shadow-lg transition">
        <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 mb-3 sm:mb-4 overflow-hidden rounded-xl flex justify-center items-center">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold line-clamp-2">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
