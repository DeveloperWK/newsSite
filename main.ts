const apiKey: string = "ce8ab7a84b9540098a97aad4dd7ed50d";
const blog_container = document.querySelector(
  ".blog_container"
) as HTMLDivElement;
const blog_box = blog_container?.querySelector(".blog_box") as HTMLDivElement;
const blog_img = blog_box?.querySelector(".blog_img") as HTMLImageElement;
const blog_title = blog_box?.querySelector(".blog_title") as HTMLTitleElement;
const blog_des = blog_box?.querySelector(".blog_des") as HTMLParagraphElement;

function fetchRandomNews() {
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=18&apiKey=ce8ab7a84b9540098a97aad4dd7ed50d`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(`Random data fetch error ${err}`);
      return [];
    });
}

(() => {
  fetchRandomNews();
})();
