const template = (data) => {
  const baseImageUrl = "https://www.nytimes.com/";
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const newData = {
    headline: data.headline,
    imageUrl: data.images[0]?.types[0]?.content,
    caption: data.images[0]?.caption,
    byline: data.byline,
    date: data.publicationDt,
    summary: data.summary,
  };

  const processDate = (data) => {
    let date = new Date(data.publicationDt.split('T')[0]);
    date = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    
    newData.date = date;
  }

  processDate(data);

  return `
    <div class="article">
      <aside class="article-date">${newData.date}</aside>
      <a class="article-link" href="#">
        <h1 class="headline article-headline">${newData.headline}</h1>
        <p class="summary article-summary">${newData.summary}</p>
        <h6 class="byline article-byline">${newData.byline}</h6>
      </a>
      <div class="article-thumbnail">
        <img src="${baseImageUrl + newData.imageUrl}" alt="${newData.caption}"/>
      </div>
    </div>
  `;
}

export default template;
