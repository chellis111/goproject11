const blogs = Array.from({ length: 20 }, (v, i) => ({
  id: i + 1,
  title: `Blog ${i + 1}`,
  image: `${require("../assets/blog-image.png")}`,
  content: `This is the content of blog ${i + 1}.`,
}));

export default blogs;
