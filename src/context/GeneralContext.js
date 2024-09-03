import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

//* Create a Context
const GeneralContext = createContext();

//* Configure GeneralContext
export function GeneralProvider({ children }) {
  const postData = [
    {
      id: 1,
      type: "rant",
      title: "Homework Overload!",
      date: "March 17, 2023 - 02:30 AM",
      body: "I can't believe how much homework we're getting lately. It's like they want us to have no life outside of school! The sheer volume of assignments is becoming overwhelming, and it feels as if there's no time left for anything else. We're not robots; we need a balance between academics and personal time to maintain our mental and emotional well-being. It's essential for our development as individuals. I hope the school can reconsider the workload and find a more reasonable approach to ensure a healthy and productive learning environment.",
    },
    {
      id: 2,
      type: "complaint",
      title: "Broken Lockers",
      date: "January 20, 2023 - 10:30 AM",
      body: "Seriously, the locker on the third floor has been broken for weeks. Can we get it fixed already? The persistent issue with the locker is causing significant inconvenience for students who rely on it. Quick access to personal belongings is crucial for a smooth school experience. A prompt resolution to the locker problem would greatly improve the overall functionality of the school and contribute to a more positive atmosphere.",
    },
    {
      id: 3,
      type: "thought",
      title: "Importance of Extracurriculars",
      date: "July 15, 2023 - 09:45 AM",
      body: "I've been thinking about how important extracurricular activities are for personal growth. Let's encourage more diverse activities in our school! Engaging in such activities not only enhances our skills but also contributes to a more vibrant and inclusive school community. Whether it's sports, arts, or community service, extracurriculars play a vital role in shaping well-rounded individuals. Let's celebrate and promote a variety of activities to cater to the diverse interests and talents of our student body.",
    },
    {
      id: 4,
      type: "rant",
      title: "Lunch Portions are Too Small",
      date: "October 9, 2023 - 03:30 PM",
      body: "The cafeteria seriously needs to do something about the portion sizes. I'm always hungry after lunch! Insufficient food affects our concentration and energy levels, impacting our ability to focus during afternoon classes. We need nourishing meals to stay focused and energized throughout the school day. A reconsideration of the portion sizes is essential for the overall well-being of the students.",
    },
    {
      id: 5,
      type: "complaint",
      title: "Noisy Construction Outside",
      date: "September 21, 2023 - 01:50 PM",
      body: "The construction noise outside the classroom is making it impossible to focus. Can we have some quiet hours during classes? Distractions hinder our learning experience, and addressing this issue will create a more conducive environment for everyone. Implementing designated quiet hours or finding ways to minimize noise disruptions will significantly contribute to a better learning atmosphere and enhance the quality of education we receive.",
    },
    {
      id: 6,
      type: "thought",
      title: "Gratitude for Teachers",
      date: "June 12, 2023 - 06:00 PM",
      body: "Shoutout to all the amazing teachers who go above and beyond for us. We appreciate your hard work and dedication! Teachers play a crucial role in shaping our future, and expressing our gratitude is essential for fostering a positive and motivating learning atmosphere. Your dedication to our education does not go unnoticed, and we want to acknowledge and thank you for the significant impact you have on our lives. Keep inspiring and guiding us towards success!",
    },
    {
      id: 7,
      type: "rant",
      title: "Uniform Policy is Ridiculous",
      date: "April 5, 2023 - 08:15 AM",
      body: "I can't believe we have to wear these uniforms. It's so outdated. Can we have a say in the dress code, please? Students should have the opportunity to express their individuality through clothing while still maintaining a sense of professionalism. The current uniform policy feels restrictive and outdated. Let's open a dialogue and work towards a dress code that reflects a balance between personal expression and the school's standards.",
    },
    {
      id: 8,
      type: "complaint",
      title: "Wi-Fi Issues in the Library",
      date: "June 12, 2023 - 06:00 PM",
      body: "The Wi-Fi in the library is constantly dropping. It's impossible to research or get any work done. We need a reliable connection! A stable internet connection is crucial for academic success, and addressing the Wi-Fi issues will significantly enhance our ability to study and utilize library resources. Reliable internet access is essential for conducting research, accessing online materials, and completing assignments. Let's prioritize fixing the Wi-Fi to ensure a more productive and efficient learning environment.",
    },
    {
      id: 9,
      type: "thought",
      title: "Creating a Green Campus",
      date: "November 18, 2023 - 10:10 AM",
      body: "I propose we start a project to make our campus more eco-friendly. Plant more trees, use renewable energy sources – let's make a positive impact! A green campus not only contributes to environmental sustainability but also provides a healthier and more inspiring space for learning. By planting more trees, implementing recycling programs, and exploring renewable energy sources, we can make a positive impact on our environment and instill a sense of responsibility in our school community. Let's work together to create a greener and more sustainable campus.",
    },
    {
      id: 10,
      type: "rant",
      title: "Early Morning Classes are Torture",
      date: "May 8, 2023 - 02:35 PM",
      body: "Who thought it was a good idea to schedule classes at 8 AM? It's way too early for any productive learning! Early morning classes disrupt our sleep patterns and hinder our ability to concentrate. The scheduling of classes at such an early hour negatively impacts our academic performance. Let's reconsider the scheduling to ensure a more effective and student-friendly learning experience. A well-rested student is a more engaged and successful student.",
    },
  ];

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [posts, setPosts] = useState([...postData]);
  const navigate = useNavigate();

  //State for adding new Post
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e, setShowModal) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), "MMMM d, yyyy - h:mm a");
    const finalCategory = category === "Post Type" ? "Others" : category;
    const newPost = { id, type: category, title, date, body };
    const allPost = [...posts, newPost];
    setPosts(allPost);
    setTitle("");
    setBody("");
    navigate("/");
    setShowModal(false);
  };

  const deletePost = (id) => {
    const newPost = posts.filter((post) => post.id !== id);
    setPosts(newPost);
    navigate("/");
  };

  //Handle Selection of Type of Content
  const selectType = (option) => {
    if (option === "all") {
      setPosts([...postData]);
    } else {
      const typeSelected = postData.filter((post) => post.type === option);
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
    setPosts([...postData]);
  };

  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const handleNavClick = () => {
    if (navRef.current) {
      navRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  console.log(posts);

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
  };

  return (
    <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>
  );
}

//* Create Custom Hook- useGeneral
export default function useGeneral() {
  return useContext(GeneralContext);
}
