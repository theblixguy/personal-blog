for (const element of document.querySelectorAll('pre.mermaid')) {
  pele.mount(element, element.textContent);
}
