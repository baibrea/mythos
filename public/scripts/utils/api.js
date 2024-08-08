export function getCover(id) {
  let coverUrl = "https://covers.openlibrary.org/b/id/" + id + "-M.jpg?default=false";
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

export async function getEditionData(edition) {
  const editionResponse = await fetch(`https://openlibrary.org/books/${edition}.json`);
  console.log(`edition URL: https://openlibrary.org/books/${edition}.json`);

  if (editionResponse.status === 404) {
    // Add error message
    console.log("error");
  } else {
    const editionData = await editionResponse.json();
    return editionData;
  }
}

export async function getWorkData(key) {
      const editionData = await getEditionData(key);

      const workKey = editionData.works[0].key;
      console.log(`work key: ${workKey}`);
      const workUrl = `https://openlibrary.org${workKey}.json`

      const workResponse = await fetch(workUrl);
      console.log(`work URL: ${workUrl}`);
      const workData = await workResponse.json();
      return workData;
}

export function getDesc(bookData) {
  let bookDesc = "";

  if (Object.hasOwn(bookData, 'description')) {
    bookDesc = bookData.description;
    if (typeof(bookDesc) == "object") {
        bookDesc = bookDesc.value;
    }
  } else {
    bookDesc = "This edition doesn't have a description yet."
  }

  return bookDesc;
}

export async function getAuthor(workData) {
  let authorId = workData.authors[0].author.key;
  console.log(`author ID: ${authorId}`);

  const response = await fetch(`https://openlibrary.org${authorId}.json`);
  const authorData = await response.json();

  return authorData.name;
}

export async function getPageCount(editionKey) {
  let pageCount = "";
  const editionData = await getEditionData(editionKey);

  if (Object.hasOwn(editionData, 'number_of_pages')) {
    pageCount = editionData.number_of_pages;
  } else {
    pageCount = "Unknown number of "
  }

  return pageCount;
}

export async function getSearchResults(input) {
  let apiUrl = "https://openlibrary.org/search.json";

  input = input.split(" ").join("+");
  const response = await fetch(apiUrl + input);
  console.log(apiUrl + input);

    if (response.status === 404) {
      // Add error message
    } else {
      const data = await response.json();
      return data;
    }

}
