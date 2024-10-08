import React, { useState, useEffect } from "react";
import useGeneral from "../context/GeneralContext";
import writeIcon from "../img/write.svg";

import Modal from "../components/Common/Modal";
import NewPost from "../components/Home/NewPost";

import Options from "../components/Common/Options";
import Post from "../components/Common/Post";
function Home() {
  const {
    category,
    setCategory,
    title,
    setTitle,
    body,
    setBody,
    handleSubmit,
    searchResult,
    text,
    setText,
    resetFocus,
    resetPostType,
  } = useGeneral();

  const [showModal, setShowModal] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleSubmitWithReset = (e) => {
    handleSubmit(e);
    setText("Post Type");
    setShowModal(false);
    setDrop(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  return (
    <div className="min-h-screen grow  flex-col items-center md:flex">
      <main className="mt-10 px-4 py-2 md:w-9/12">
        <div
          className="mb-5 flex items-center justify-between rounded-md bg-primary p-4 shadow-md hover:opacity-80 md:px-5"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <p className="font-medium text-white"> Write a post</p>
          <img src={writeIcon} className=" w-5" />
        </div>

        <Options />

        {searchResult.length ? (
          <Post posts={searchResult} />
        ) : (
          <div className="mb-4 rounded-lg border-2 border-secondary bg-primary p-5 text-white">
            <p className="font-semibold"> No Post Available</p>
          </div>
        )}
      </main>

      {/* Write a post modal */}
      <div className={`${showModal ? "" : "hidden"}`}>
        <Modal
          title={"Add Post"}
          closeModal={() => {
            setShowModal(false);
            setDrop(false);
            setTitle("");
            setBody("");
            setText("Post Type");
            resetPostType();
          }}
        >
          <NewPost
            category={category}
            setCategory={setCategory}
            title={title}
            setTitle={setTitle}
            body={body}
            setBody={setBody}
            handleSubmit={(e) => handleSubmit(e, setShowModal)}
            drop={drop}
            setDrop={setDrop}
            text={text}
            setText={setText}
          />
        </Modal>
      </div>
    </div>
  );
}

export default Home;
