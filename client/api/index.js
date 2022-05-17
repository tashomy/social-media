import axios from "axios";

const url = "http://localhost:500/posts";

const fetchPosts = () => axios.get(url);
