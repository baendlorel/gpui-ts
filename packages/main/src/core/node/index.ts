export function text(content: string = ''): Text {
  return document.createTextNode(content);
}

export function comment(content: string = ''): Comment {
  return document.createComment(content);
}
