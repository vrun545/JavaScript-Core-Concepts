const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${pageCount}`
  );
  //   console.log(result);
  const data = await result.json();
  //   console.log(data);

  data.map((curr, index) => {
    const htmlData = `
    <div class="posts">
    <p class="post-id">${postCount++}</p>
    <h2 class="title">${curr.title}</h2>
    <p class="post-info">${curr.body}</p>
    </div>`;

    container.insertAdjacentHTML("beforeend", htmlData);
  });
};

getPost();

const showData = () => {
  setTimeout(() => {
    pageCount++;
    getPost().then(() => {
      console.log("New posts loaded!");
    });
  }, 100);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    showData();
  }
});