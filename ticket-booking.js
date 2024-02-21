function buyBtn() {
  const buyTicket = document.getElementById('buyTicket');
  document.getElementById('ticketingSection').scrollIntoView();
}


// Seat no A1.
document.getElementById('A1').addEventListener('click', function () {
  const seatColorChange = document.getElementById('A1').classList.toggle('bg-[#1DD100]');
  if (seatColorChange === true) {
    // changing avaiable seat number
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber - 1;
    avaiableSeat.innerText = avaiableSeatCount;
    //Print Seat number
    const seatName = document.getElementById('A1').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = seatName;
    // printing price class
    const printClassName = document.getElementById('className');
    printClassName.innerText = 'Economy';
    // print price
    const ticketPrice = document.getElementById('Price');
    const singleTicketPrice = document.getElementById('singleFare').innerText;
    ticketPrice.innerText = singleTicketPrice;
    return ticketPrice;
    // // getting new line
    // let getNewLine = document.getElementById('printSection');
    // const lineBreak = document.createElement('br');
    // getNewLine.appendChild(lineBreak);

  } else {
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber + 1;
    avaiableSeat.innerText = avaiableSeatCount;
    // Deleting Seat name
    const seatName = document.getElementById('A1').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = '';
    // Deleting class name
    const printClassName = document.getElementById('className');
    printClassName.innerText = '';
    // deleting ticket price 
    const ticketPrice = document.getElementById('Price');
    ticketPrice.innerText = '';
  }
})

// Seat no A2.
document.getElementById('A2').addEventListener('click', function () {
  const seatColorChange = document.getElementById('A2').classList.toggle('bg-[#1DD100]');
  if (seatColorChange === true) {
    // changing avaiable seat number
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber - 1;
    avaiableSeat.innerText = avaiableSeatCount;
    //Print Seat number
    const seatName = document.getElementById('A2').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = seatName;
    // printing price class
    const printClassName = document.getElementById('className');
    printClassName.innerText = 'Economy';
    // print price
    const ticketPrice = document.getElementById('Price');
    const singleTicketPrice = document.getElementById('singleFare').innerText;
    ticketPrice.innerText = singleTicketPrice;
    return ticketPrice;
  } else {
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber + 1;
    avaiableSeat.innerText = avaiableSeatCount;
    // Deleting Seat name
    const seatName = document.getElementById('A2').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = '';
    // Deleting class name
    const printClassName = document.getElementById('className');
    printClassName.innerText = '';
    // deleting ticket price 
    const ticketPrice = document.getElementById('Price');
    ticketPrice.innerText = '';
  }
})
// Seat no A3.
document.getElementById('A3').addEventListener('click', function () {
  const seatColorChange = document.getElementById('A3').classList.toggle('bg-[#1DD100]');
  if (seatColorChange === true) {
    // changing avaiable seat number
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber - 1;
    avaiableSeat.innerText = avaiableSeatCount;
    //Print Seat number
    const seatName = document.getElementById('A3').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = seatName;
    // printing price class
    const printClassName = document.getElementById('className');
    printClassName.innerText = 'Economy';
    // print price
    const ticketPrice = document.getElementById('Price');
    const singleTicketPrice = document.getElementById('singleFare').innerText;
    ticketPrice.innerText = singleTicketPrice;
    return ticketPrice;
  } else {
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber + 1;
    avaiableSeat.innerText = avaiableSeatCount;
    // Deleting Seat name
    const seatName = document.getElementById('A3').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = '';
    // Deleting class name
    const printClassName = document.getElementById('className');
    printClassName.innerText = '';
    // deleting ticket price 
    const ticketPrice = document.getElementById('Price');
    ticketPrice.innerText = '';
  }
})

// Seat no A4.
document.getElementById('A4').addEventListener('click', function () {
  const seatColorChange = document.getElementById('A4').classList.toggle('bg-[#1DD100]');
  if (seatColorChange === true) {
    // changing avaiable seat number
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber - 1;
    avaiableSeat.innerText = avaiableSeatCount;
    //Print Seat number
    const seatName = document.getElementById('A4').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = seatName;
    // printing price class
    const printClassName = document.getElementById('className');
    printClassName.innerText = 'Economy';
    // print price
    const ticketPrice = document.getElementById('Price');
    const singleTicketPrice = document.getElementById('singleFare').innerText;
    ticketPrice.innerText = singleTicketPrice;
    return ticketPrice;
  } else {
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber + 1;
    avaiableSeat.innerText = avaiableSeatCount;
    // Deleting Seat name
    const seatName = document.getElementById('A4').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = '';
    // Deleting class name
    const printClassName = document.getElementById('className');
    printClassName.innerText = '';
    // deleting ticket price 
    const ticketPrice = document.getElementById('Price');
    ticketPrice.innerText = '';
  }
})

// Seat no B1.
document.getElementById('B1').addEventListener('click', function () {
  const seatColorChange = document.getElementById('B1').classList.toggle('bg-[#1DD100]');
  if (seatColorChange === true) {
    // changing avaiable seat number
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber - 1;
    avaiableSeat.innerText = avaiableSeatCount;
    //Print Seat number
    const seatName = document.getElementById('B1').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = seatName;
    // printing price class
    const printClassName = document.getElementById('className');
    printClassName.innerText = 'Economy';
    // print price
    const ticketPrice = document.getElementById('Price');
    const singleTicketPrice = document.getElementById('singleFare').innerText;
    ticketPrice.innerText = singleTicketPrice;
    return ticketPrice;
  } else {
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber + 1;
    avaiableSeat.innerText = avaiableSeatCount;
    // Deleting Seat name
    const seatName = document.getElementById('B1').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = '';
    // Deleting class name
    const printClassName = document.getElementById('className');
    printClassName.innerText = '';
    // deleting ticket price 
    const ticketPrice = document.getElementById('Price');
    ticketPrice.innerText = '';
  }
})

// Seat no B2.
document.getElementById('B2').addEventListener('click', function () {
  const seatColorChange = document.getElementById('B2').classList.toggle('bg-[#1DD100]');
  if (seatColorChange === true) {
    // changing avaiable seat number
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber - 1;
    avaiableSeat.innerText = avaiableSeatCount;
    //Print Seat number
    const seatName = document.getElementById('B2').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = seatName;
    // printing price class
    const printClassName = document.getElementById('className');
    printClassName.innerText = 'Economy';
    // print price
    const ticketPrice = document.getElementById('Price');
    const singleTicketPrice = document.getElementById('singleFare').innerText;
    ticketPrice.innerText = singleTicketPrice;
    return ticketPrice;
  } else {
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber + 1;
    avaiableSeat.innerText = avaiableSeatCount;
    // Deleting Seat name
    const seatName = document.getElementById('B2').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = '';
    // Deleting class name
    const printClassName = document.getElementById('className');
    printClassName.innerText = '';
    // deleting ticket price 
    const ticketPrice = document.getElementById('Price');
    ticketPrice.innerText = '';
  }
})
// Seat no B3.
document.getElementById('B3').addEventListener('click', function () {
  const seatColorChange = document.getElementById('B3').classList.toggle('bg-[#1DD100]');
  if (seatColorChange === true) {
    // changing avaiable seat number
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber - 1;
    avaiableSeat.innerText = avaiableSeatCount;
    //Print Seat number
    const seatName = document.getElementById('B3').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = seatName;
    // printing price class
    const printClassName = document.getElementById('className');
    printClassName.innerText = 'Economy';
    // print price
    const ticketPrice = document.getElementById('Price');
    const singleTicketPrice = document.getElementById('singleFare').innerText;
    ticketPrice.innerText = singleTicketPrice;
    return ticketPrice;
  } else {
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber + 1;
    avaiableSeat.innerText = avaiableSeatCount;
    // Deleting Seat name
    const seatName = document.getElementById('B3').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = '';
    // Deleting class name
    const printClassName = document.getElementById('className');
    printClassName.innerText = '';
    // deleting ticket price 
    const ticketPrice = document.getElementById('Price');
    ticketPrice.innerText = '';
  }
})

// Seat no B4.
document.getElementById('B4').addEventListener('click', function () {
  const seatColorChange = document.getElementById('B4').classList.toggle('bg-[#1DD100]');
  if (seatColorChange === true) {
    // changing avaiable seat number
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber - 1;
    avaiableSeat.innerText = avaiableSeatCount;
    //Print Seat number
    const seatName = document.getElementById('B4').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = seatName;
    // printing price class
    const printClassName = document.getElementById('className');
    printClassName.innerText = 'Economy';
    // print price
    const ticketPrice = document.getElementById('Price');
    const singleTicketPrice = document.getElementById('singleFare').innerText;
    ticketPrice.innerText = singleTicketPrice;
    return ticketPrice;
  } else {
    const avaiableSeat = document.getElementById('availableSeat');
    const avaiableSeatNow = avaiableSeat.innerText;
    const avaiableSeatNumber = parseInt(avaiableSeatNow);
    const avaiableSeatCount = avaiableSeatNumber + 1;
    avaiableSeat.innerText = avaiableSeatCount;
    // Deleting Seat name
    const seatName = document.getElementById('B').innerText;
    const showSeatName = document.getElementById('seatNumber');
    showSeatName.innerText = '';
    // Deleting class name
    const printClassName = document.getElementById('className');
    printClassName.innerText = '';
    // deleting ticket price 
    const ticketPrice = document.getElementById('Price');
    ticketPrice.innerText = '';
  }
})



// Total price calculating
let totalAmount = document.getElementById('totalAmount');
const singleTicketPrice = document.getElementById('singleFare').innerText;
totalAmount.innerText = singleTicketPrice;
let totalfare = parseInt(singleTicketPrice);


document.getElementById('couponCode').addEventListener('keyup', function (event) {
  const inputText = event.target.value;
  const coupon1 = document.getElementById('newMemberCoupon').innerText;
  const coupon2 = document.getElementById('coupleCoupon').innerText;

  if (coupon1 === inputText) {
    let grandTotal = totalfare - (totalfare / 100 * 15);
    let finalValue = document.getElementById('grandTotal');
    finalValue.innerText = grandTotal;
    return grandTotal;

  } else if (coupon2 === inputText) {
    let grandTotal = totalfare - (totalfare / 100 * 20);
    let finalValue = document.getElementById('grandTotal');
    finalValue.innerText = grandTotal;
    return grandTotal;
  } else {
    let grandTotal = totalfare;
    let finalValue = document.getElementById('grandTotal');
    finalValue.innerText = grandTotal;
    return grandTotal;
  }


})








