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
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import shortUUID from "short-uuid";

//* Create a Context
const GeneralContext = createContext();

//* Configure GeneralContext
export function GeneralProvider({ children }) {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postData, setPostData] = useState([]);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  //State for adding new Post
  const [category, setCategory] = useState("");
  const [text, setText] = useState("Post Type");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const deletePost = (id) => {
    // const newPost = posts.filter((post) => post.id !== id);
    // setPosts(newPost);
    deletePostData(id);
    navigate("/");
  };

  //Handle Selection of Type of Content
  const selectType = (option) => {
    if (option === "all") {
      setPosts(postData);
    } else {
      const typeSelected = postData.filter(
        (post) => post.type.toLowerCase() === option,
      );
      setPosts(typeSelected);
    }
  };

  // Handle Focus or Highlight
  const [focus, setFocus] = useState("all");
  const handleFocus = (click) => {
    setFocus(click);
    selectType(click);
  };
  const resetFocus = () => {
    setFocus("all");
    setPosts(postData);
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
    const newPost = {
      id: shortUUID.generate(),
      type: category,
      title,
      date,
      body,
    };
    addPostData(newPost.id, newPost);
    setTitle("");
    setBody("");
    setCategory("");
    setText("Post Type");
    navigate("/");
    resetFocus();
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
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe;
  }, []);

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
    handleFocus,
    focus,
    resetFocus,
    selectType,

    navRef,
    handleNavClick,
    showNav,
    setShowNav,
    text,
    setText,
    resetFocus,
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}

//* Create Custom Hook- useGeneral
export default function useGeneral() {
  return useContext(GeneralContext);
}
