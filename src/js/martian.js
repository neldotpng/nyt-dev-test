const martian = () => {
  const toggleButtonEls = document.querySelectorAll(".toggle-button");
  const englishButtonEl = document.querySelector("#english-button");
  const martianButtonEl = document.querySelector("#martian-button");

  let englishNodes = [];

  toggleButtonEls.forEach(button => button.addEventListener("click", function() {
    const activeButton = document.querySelector(".is-active");
    activeButton.classList.remove("is-active");
    this.classList.add("is-active");
  }));

  const textNodeWalker = (fn) => {
    const body = document.querySelector('body');
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
    let node;
    let index = 0;
    while (node = walker.nextNode()) {
      if (node.nodeType === 3) {
        fn(node, index);
        index++;
      }
    }
  }

  const toggleEnglish = () => {
    textNodeWalker((node, index) => {
      node.nodeValue = englishNodes[index];
    });
  }

  const toggleMartian = () => {
    let nodes = [];
    textNodeWalker((node) => {
      nodes.push(node.nodeValue);
      node.nodeValue = node.nodeValue.replace(/[a-z]{4,}/g, "boinga");
      node.nodeValue = node.nodeValue.replace(/[A-Z][a-z]{3,}/g, "Boinga")
      node.nodeValue = node.nodeValue.replace(/[A-Z]{4,}/g, "BOINGA")
    });
    englishNodes = nodes;
  }

  englishButtonEl.addEventListener("click", toggleEnglish);
  martianButtonEl.addEventListener("click", toggleMartian);
}

export default martian;
