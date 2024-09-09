function generateSeats() {
    const totalSeats = document.getElementById('totalSeats').value;
    const seatContainer = document.getElementById('seatContainer');
    seatContainer.innerHTML = '';

    for (let i = 0; i < totalSeats; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.innerText = i + 1;
        seat.draggable = true; 
        seat.style.top = `${Math.random() * 500}px`; 
        seat.style.left = `${Math.random() * 500}px`; 
        seat.addEventListener('dragstart', dragStart);
        seat.addEventListener('dragend', dragEnd);
        seatContainer.appendChild(seat);
    }

   
    seatContainer.addEventListener('dragover', dragOver);
    seatContainer.addEventListener('drop', drop);
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.innerText);
    event.target.classList.add('dragging');
}

function dragEnd(event) {
    event.target.classList.remove('dragging');
}

function dragOver(event) {
    event.preventDefault(); 
}

function drop(event) {
    event.preventDefault();
    const draggingSeat = document.querySelector('.dragging');
    const boxRect = event.currentTarget.getBoundingClientRect();
    const seatRect = draggingSeat.getBoundingClientRect();
    const offsetX = event.clientX - boxRect.left - seatRect.width / 2;
    const offsetY = event.clientY - boxRect.top - seatRect.height / 2;
    draggingSeat.style.left = `${Math.max(0, Math.min(boxRect.width - seatRect.width, offsetX))}px`;
    draggingSeat.style.top = `${Math.max(0, Math.min(boxRect.height - seatRect.height, offsetY))}px`;
}