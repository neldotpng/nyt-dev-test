import template from "./template";
window.NYTD = {};

const renderArticles = () => {
  const url = "http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js"
  const containerEl = document.querySelector(".articles-container");
  
  const s = document.createElement("script");
  s.src = `${url}`;
  document.body.appendChild(s);

  NYTD.render_section_front = (d) => {
    const { content } = d.page;
    let data,
        html = "";

    // Create new array with just collections
    data = content.map(item => {
      return item.collections;
    }).map(collection => {
      return collection.filter(item => {
        return item.assets.length >= 1;
      });
    });

    // Concat array of asset arrays
    data = data.reduce((acc, cur) => {
      let arr = cur.map(item => {
        return item.assets;
      });
      return acc.concat(arr);
    }) // Reduce array again
    .reduce((acc, cur) => {
      return acc.concat(cur);
    }) // Filter out results with less than 3 image types
    .filter(item => {
      return item?.images && item?.images[0]?.types.length >= 3;
    });

    // Get first 5 articles and inject data into template
    for (let i = 0; i <= 4; i++) {
      html = html + template(data[i]);
    }

    containerEl.innerHTML = html;
  }
}

export default renderArticles;
