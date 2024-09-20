import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import {
  getAllPostData,
  addPostData,
  deletePostData,
} from "../firebase/firestore";
import {
  signup,
  login,
  getAuthState,
  logout,
  resetPassword,
} from "../firebase/auth";

import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import shortUUID from "short-uuid";

import Preloader from "../pages/Preloader";

//* Create a Context
const GeneralContext = createContext();

//* Configure GeneralContext
export function GeneralProvider({ children }) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [myPostSearch, setMyPostSearch] = useState("");
  const [myPostSearchResult, setMyPostSearchResult] = useState([]);
  const [postData, setPostData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  // Authentication
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true",
  );
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("currentUser"),
  );

  //State for adding new Post
  const [category, setCategory] = useState("");
  const [text, setText] = useState("Post Type");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [postType, setPostType] = useState("all");

  const deletePost = (id) => {
    // const newPost = posts.filter((post) => post.id !== id);
    // setPosts(newPost);
    deletePostData(id);
  };

  const handlePostType = (type, state = "posts") => {
    if (!currentUser) {
      return;
    }

    setPostType(type);
    if (type === "all") {
      state === "posts"
        ? setPosts(postData)
        : setMyPosts(
            postData.filter(
              (post) => post.userId === JSON.parse(currentUser).user.uid,
            ),
          );
    } else {
      const filteredPosts = postData.filter(
        (post) => post.type.toLowerCase() === type.toLowerCase(),
      );
      state === "posts"
        ? setPosts(filteredPosts)
        : setMyPosts(
            filteredPosts.filter(
              (post) => post.userId === JSON.parse(currentUser).user.uid,
            ),
          );
    }
  };

  const resetPostType = () => {
    setPostType("all");
    setPosts(postData);
    setMyPosts(
      postData.filter(
        (post) => post.userId === JSON.parse(currentUser).user.uid,
      ),
    );
  };

  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const handleNavClick = () => {
    if (navRef.current) {
      navRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e, setShowModal) => {
    e.preventDefault();
    const date = Date.now();
    const user = currentUser ? JSON.parse(currentUser).user : null;
    if (!user) {
      console.error("User is not logged in.");
      return;
    }

    const newPost = {
      id: shortUUID.generate(),
      type: category,
      title,
      date,
      body,
      userId: user.uid,
    };
    addPostData(newPost.id, newPost);
    setTitle("");
    setBody("");
    setCategory("");
    setText("Post Type");
    navigate("/");

    setShowModal(false);
  };

  //*useEffect to fetch Post Data from Firestore
  useEffect(() => {
    const unsubscribe = getAllPostData((fetchedPosts) => {
      const sortedPost = fetchedPosts.sort((a, b) => {
        return a.date - b.date;
      });
      const formatedDatePost = sortedPost.map((post) => {
        const date = format(new Date(post.date), "MMMM d, yyyy - h:mm a");

        return {
          ...post,
          date,
        };
      });

      setPostData(formatedDatePost);
      setPosts(formatedDatePost);

      if (!currentUser) {
        console.log("No Active User");
        return;
      }

      const parseUser = JSON.parse(currentUser);
      if (parseUser) {
        const userPost = formatedDatePost.filter((post) => {
          return post.userId === parseUser.user.uid;
        });

        setMyPosts(userPost.reverse());
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe;
  }, [currentUser]);

  // * useEffect to Filter Post by Search Result
  useEffect(() => {
    const filterResult = posts.filter(
      (post) =>
        post.type.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.date.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase()),
    );

    setSearchResult(filterResult.reverse());
  }, [posts, search]);

  // * useEffect to Filter Post by Search Result in My Posts
  useEffect(() => {
    const filterResult = myPosts.filter(
      (post) =>
        post.type.toLowerCase().includes(myPostSearch.toLowerCase()) ||
        post.title.toLowerCase().includes(myPostSearch.toLowerCase()) ||
        post.date.toLowerCase().includes(myPostSearch.toLowerCase()) ||
        post.body.toLowerCase().includes(myPostSearch.toLowerCase()),
    );

    setMyPostSearchResult(filterResult.reverse());
  }, [myPosts, myPostSearch]);

  //* useEffect to update isAuthenticated in local storage
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  //* useEffect to update currentUser in local storage
  useEffect(() => {
    localStorage.setItem("currentUser", currentUser);
  }, [currentUser]);

  //* useEffect for PreLoader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const value = {
    search,
    setSearch,
    searchResult,
    posts,
    setPosts,
    deletePost,
    handleSubmit,
    category,
    setCategory,
    title,
    setTitle,
    body,
    setBody,
    navRef,
    handleNavClick,
    showNav,
    setShowNav,
    text,
    setText,

    //Authentication
    signup,
    login,
    getAuthState,
    logout,
    resetPassword,
    currentUser,
    setCurrentUser,
    isAuthenticated,
    setIsAuthenticated,

    myPosts,
    setMyPosts,
    handlePostType,
    postType,
    setPostType,
    resetPostType,

    myPostSearch,
    setMyPostSearch,
    myPostSearchResult,
    setMyPostSearchResult,
    setIsLoading,
  };

  return (
    <GeneralContext.Provider value={value}>
      {isLoading ? <Preloader /> : children}
    </GeneralContext.Provider>
  );
}

//* Create Custom Hook- useGeneral
export default function useGeneral() {
  return useContext(GeneralContext);
}
