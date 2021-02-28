export function strip(html){
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

export function getFirstAuthorName(authors) {
  const author = authors.items[0].author;
  return `${author.firstName} ${author.lastName}`;
}
