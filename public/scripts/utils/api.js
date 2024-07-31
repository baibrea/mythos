export function getCover(isbn) {
  let coverUrl = "https://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg?default=false";
  let coverSrc = "";

  let http = new XMLHttpRequest();
  http.open('HEAD', coverUrl, false);
  http.send();
  if (http.status != 404) {
      coverSrc = coverUrl;
  } else {
      coverSrc = "/images/default-cover.png";
  }
  return coverSrc;
}

export async function getBook(edition) {

  const response = await fetch(`https://openlibrary.org/books/${edition}.json`);
  console.log(`https://openlibrary.org/books/${edition}.json`);

  if (response.status === 404) {
      // Add error message
      console.log("error");
  } else {
      const data = await response.json();
      return data;
  }
}