function rot13(str) {
  return str.split("").map(function (x) {
    x = x.charCodeAt(0);
    if (64 < x && x < 78)
      x += 13;
    else if (77 < x && x < 91)
      x -= 13;
    return String.fromCharCode(x)
  }).join("");
}
