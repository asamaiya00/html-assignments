function login() {
  let username = document.getElementById('username').value;
  if (!username) {
    error();
  } else {
    if (typeof Storage !== 'undefined') {
      sessionStorage.setItem('user', username);
      if (sessionStorage.getItem('numItems') == null)
        sessionStorage.setItem('numItems', 0);
      window.location.href = 'Car Mall.html';
    } else {
      console.log('Sorry! No Session Storage support..');
    }
  }
}

function error() {
  let error_msg = document.createTextNode('Username cannot be empty!');
  let br = document.createElement('BR');
  let err_msg = document.getElementById('err_msg');
  err_msg.appendChild(error_msg);
  err_msg.appendChild(br);
}

function getItems() {
  let items = [
    'Swift',
    'City',
    'Verna',
    'Creta',
    'Baleno',
    'i20',
    'Nexon',
    'Aura',
  ];
  return items;
}

function addItemToList(item) {
  let ul = document.getElementById('items');
  let li = document.createElement('li');
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('value', item);
  input.setAttribute('id', 'item');
  input.setAttribute('onclick', 'item_selected(this.value)');
  li.append(input);
  ul.appendChild(li);
}

function addItemToSelectedList(item, setToSession) {
  let ul = document.getElementById('selected-items');
  let li = document.createElement('li');
  li.textContent = item;
  ul.append(li);

  if (setToSession) {
    let numItems = sessionStorage.getItem('numItems');
    sessionStorage.setItem(numItems, item);
    sessionStorage.setItem('numItems', parseInt(numItems) + 1);
  }
}

function listItems() {
  let items = getItems();

  items.forEach((item) => {
    addItemToList(item);
  });
}

function listSelectedItems() {
  let numItems = parseInt(sessionStorage.getItem('numItems'));

  document.getElementById('selected-items').innerHTML = '';

  for (let i = 0; i < numItems; i++) {
    addItemToSelectedList(sessionStorage.getItem(i), false);
  }
}

function item_selected(item) {
  addItemToSelectedList(item, true);
}

function signin() {
  let user = sessionStorage.getItem('user');
  if (user != null) {
    document.getElementById('welcome').textContent = 'Welcome ' + user;
  }
  listItems();
  listSelectedItems();
}

function logout() {
  let user = sessionStorage.removeItem('user');
  window.location.href = 'login.html';
  sessionStorage.clear();
}
