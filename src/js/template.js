const template = (data) => {
  const baseImageUrl = "https://www.nytimes.com/";
  const newData = {
    headline: data.headline,
    imageUrl: data.images[0]?.types[0]?.content,
    byline: data.byline,
    date: data.publicationDt,
    summary: data.summary,
  };

  const process = (data) => {

  }

  return `
    <div class="article">
      <aside>${newData.date}</aside>
      <div>
        <h1 class="article-headline">${newData.headline}</h1>
        <p class="article-summary">${newData.summary}</p>
        <h6 class="article-byline">${newData.byline}</h6>
      </div>
      <img src="${baseImageUrl + newData.imageUrl}" alt=""/>
    </div>
  `;
}

export default template;
