onmessage = function (e) {
  const start = e.data % 2 ? e.data : e.data - 1;
  for (let i = start; i >= 1; i -= 2) {
    postMessage(i);
  }
};
