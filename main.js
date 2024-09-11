var apiKey = "ce8ab7a84b9540098a97aad4dd7ed50d";
var blog_container = document.querySelector(".blog_container");
var blog_box = blog_container === null || blog_container === void 0 ? void 0 : blog_container.querySelector(".blog_box");
var blog_img = blog_box === null || blog_box === void 0 ? void 0 : blog_box.querySelector(".blog_img");
var blog_title = blog_box === null || blog_box === void 0 ? void 0 : blog_box.querySelector(".blog_title");
var blog_des = blog_box === null || blog_box === void 0 ? void 0 : blog_box.querySelector(".blog_des");
function fetchRandomNews() {
    var apiUrl = "https://newsapi.org/v2/top-headlines?country=us&pageSize=18&apiKey=ce8ab7a84b9540098a97aad4dd7ed50d";
    fetch(apiUrl)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
    })
        .catch(function (err) {
        console.error("Random data fetch error ".concat(err));
        return [];
    });
}
(function () {
    fetchRandomNews();
})();
