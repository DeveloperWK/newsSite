const apiKey = "ce8ab7a84b9540098a97aad4dd7ed50d";
const blog_container = document.querySelector(".blog_container");
const searchForm = document.querySelector("form");
const searchInput = searchForm.querySelector("input");
const searchBtn = searchForm.querySelector(".search");
const fetchRandomNews = async () => {
  try {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ce8ab7a84b9540098a97aad4dd7ed50d`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(`Random data fetch error ${error}`);
    return [];
  }
};

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query !== "") {
    try {
      const articles = await searchResult(query);

      displayBlogs(articles);
    } catch (error) {
      console.error(error);
    }
  }
});

const searchResult = async (query) => {
  try {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=ce8ab7a84b9540098a97aad4dd7ed50d`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error(`Search Result Not Found ${error}`);
    return [];
  }
};

const displayBlogs = (articles) => {
  blog_container.innerHTML = "";
  articles.forEach((item) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog_box");
    const img = document.createElement("img");
    img.classList.add("blog_img");
    img.src = item.urlToImage;
    img.alt = item.title;
    const title = document.createElement("h2");
    const truncatedTitle =
      item.title.length > 30 ? item.title.slice(0, 30) + "...." : item.title;
    title.textContent = truncatedTitle;
    title.classList.add("blog_title");
    const des = document.createElement("p");
    const truncatedDes = item.description
      ? item.description.length > 120
        ? item.description.slice(0, 120) + "....."
        : item.description
      : "";
    des.textContent = truncatedDes;
    des.classList.add("blog_des");
    blogCard.appendChild(img);
    blogCard.appendChild(title);
    blogCard.appendChild(des);
    blogCard.addEventListener("click", () => {
      window.open(item.url, "_blank");
    });
    blog_container.appendChild(blogCard);
  });
};

(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles);

  } catch (error) {
    console.error(`Random data fetch error ${error}`);
  }
})();
