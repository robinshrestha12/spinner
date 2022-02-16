//Spinner II
let icons = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];//array of lines
let count = 100;
for (let icon of icons) {//looping through array
  count += 200;
  setTimeout(() => {
    process.stdout.write(`\r${icon}   `);//writing to console
  }, count);
}
setTimeout(() =>
  process.stdout.write('\n') // fixing the new line at the end.
  , count);

