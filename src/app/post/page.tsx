"use client";
import React, { useState } from "react";

const PostPage = () => {
  // State for the input fields
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");

  // Handle the Save Post button click
  const handleSavePost = async () => {
    // Prepare the post data
    const postData = {
      title: postName,
      description: postDescription,
    };

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        const post = await response.json();
        console.log("Post saved successfully:", post);
        // Optionally reset the form or show a success message
      } else {
        console.error("Failed to save post");
      }
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Enter Post Name"
        value={postName}
        onChange={(e) => setPostName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Post Description"
        value={postDescription}
        onChange={(e) => setPostDescription(e.target.value)}
      />
      <button onClick={handleSavePost}>Save Post</button>
    </div>
  );
};

export default PostPage;
