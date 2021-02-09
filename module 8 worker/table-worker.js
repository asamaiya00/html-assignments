var output = '';
postMessage('Loading...');
for (i = 2; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    for (l = 0; l < 5000000; l++) {} //delay
    output += `${i * j}, `;
  }
  output += '<br>';
}
postMessage(output);
