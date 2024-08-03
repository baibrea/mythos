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

export async function getWork(key) {

  const editionResponse = await fetch(`https://openlibrary.org/books/${key}.json`);
  console.log(`https://openlibrary.org/books/${key}.json`);

  if (editionResponse.status === 404) {
      // Add error message
      console.log("error");
  } else {
      const editionData = await editionResponse.json();

      const workKey = editionData.works[0].key;
      console.log(workKey);
      const workUrl = `https://openlibrary.org${workKey}.json`

      const workResponse = await fetch(workUrl);
      console.log(workUrl);
      const workData = await workResponse.json();
      return workData;
  }
}
