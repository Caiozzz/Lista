const addButton = document.querySelector('#add-button');
const input = document.querySelector('#input-item');
const list = document.querySelector('[data-lista]');
const alertMessage = document.querySelector('.alert');

let itemId = 1;

addButton.addEventListener('click', (event) => {
   event.preventDefault();

   const itemName = input.value;
   createNewItem(itemName, itemId);

   input.value = null;
   itemId++;
})

function createNewItem(item, id) {
   if (item == '') {
      return;
   }
   const newItem = `<li class="list-item">
         <input type="checkbox" id="${id}">
         <label for="${id}">${item}</label>
         <button class="item-delete" onclick="deleteElement(event)"><img src="./assets/icon-delete.svg" alt="Deletar"></button>
      </li>`;
      
   list.innerHTML += newItem;
}

let removeAlert;
function deleteElement(event) {
   const button = event.target.parentElement;
   const item = button.parentElement;
   list.removeChild(item);

   alertItemRemoved();
}

function alertItemRemoved() {
   alertMessage.classList.add('show');
   if (removeAlert) {
      clearTimeout(removeAlert);
   }
   removeAlert = setTimeout(() => {
      alertMessage.classList.remove('show');
   }, 4000);
}

alertMessage.querySelector('button').addEventListener('click', () => {
   alertMessage.classList.remove('show');
})
