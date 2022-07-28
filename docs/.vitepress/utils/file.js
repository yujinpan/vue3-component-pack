export function getFileName(id) {
  const split = id.split(/[/\\]/);
  return split[split.length - 1].replace(/\.[^.]*$/, '');
}
