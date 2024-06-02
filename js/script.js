document.addEventListener('DOMContentLoaded', (event) => {
  loadTickets();
});

// This lets the user(s) know that there ticket has been added
function addFlightTicket(flightName) {
  const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
  tickets.push(flightName);
  localStorage.setItem('tickets', JSON.stringify(tickets));
  alert(`${flightName} added to your tickets`);
}

// This adds and removes the tickets from the cart
function addTicketToList(ticketName) {
  const ticketList = document.getElementById('ticketList');
  const newTicket = document.createElement('li');
  newTicket.className = 'list-group-item d-flex justify-content-between align-items-center';
  newTicket.textContent = ticketName;

  const removeButton = document.createElement('button');
  removeButton.className = 'btn btn-danger btn-sm';
  removeButton.textContent = 'Remove';
  removeButton.onclick = () => {
      ticketList.removeChild(newTicket);
      saveTickets();
  };

  newTicket.appendChild(removeButton);
  ticketList.appendChild(newTicket);
}


// This makes sure that the tickets stay displayed on the cart when moving between the pages
function saveTickets() {
  const ticketList = document.getElementById('ticketList');
  const tickets = [];
  for (let i = 0; i < ticketList.children.length; i++) {
      tickets.push(ticketList.children[i].textContent.replace('Remove', '').trim());
  }
  localStorage.setItem('tickets', JSON.stringify(tickets));
}

function loadTickets() {
  const ticketList = document.getElementById('ticketList');
  const tickets = JSON.parse(localStorage.getItem('tickets')) || [];
  tickets.forEach(ticket => addTicketToList(ticket));
}


// Code from W6 on how to add more than 1 ticket to the cart
// // how arrays are defined
// let numbers = [40, 100, 1];
// let points = new Array(40, 100 ,1);

// console.log(numbers);
// console.log(points);

// let good = [40];
// let bad = new Array(40);

// console.log(good);
// console.log(bad);

// let dogs = ["golden retriever", "labrador", "staffie", "bulldog", "rotweiller", "toi-pomme"];

// console.log(dogs); //whole array
// console.log(dogs.length); //just length
// console.log(dogs[0]); //specific item
// console.log(dogs[dogs.length-1]); //last item
// console.log(Array.isArray(dogs)); //is array, or not?
// console.log(dogs.toString()); 
// console.log(dogs.join(", "));
// console.log(dogs.join(" * "));

// dogs.pop();
// console.log(dogs);

// let dog = dogs.pop();
// console.log(dog);


// dogs.push("toi-pomme");
// console.log(dogs);

// let newDogs = dogs.slice(1, 4,);

// console.log(newDogs);
// console.log(dogs);

// dogs.splice(1, 2, "jack russel", "doberman", "pitbull");

// console.log(dogs);


// JS for counter thingy

function decreaseMars(){
  if (document.getElementById('ticketsMars').value != 0){
      document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) - 1;
  } else {
      document.getElementById('ticketsMars').value = 0;
  }
}

function increaseMars(){
  document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) + 1;
}

let totalMarsCost = 0;
let totalSaturnCost = 0;
let finalCost = 0;

function total(){
  totalMarsCost = parseInt(document.getElementById('ticketsMars').value) * 50;
  totalSaturnCost = parseInt(document.getElementById('ticketsSaturn').value) * 70;
  finalCost = totalMarsCost + totalSaturnCost;
  document.getElementById('total').innerHTML = "R " + finalCost;

}


//Saturn
function decreaseSaturn(){
  if (document.getElementById('ticketsSaturn').value != 0){
      document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) - 1;
  } else {
      document.getElementById('ticketsSaturn').value = 0;
  }
}

function increaseSaturn(){
  document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) + 1;
}



