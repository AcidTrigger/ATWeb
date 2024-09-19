document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all icons
    document.querySelectorAll('.icon').forEach(icon => {
        icon.addEventListener('click', function() {
            // Play the click sound
            const clickSound = document.getElementById('clickSound');
            clickSound.volume = 0.4;
            clickSound.currentTime = 0; // Reset to the start
            clickSound.play(); // Play the sound
        });
    });

    // Open a link in a new window when icon4 is clicked
    document.getElementById('icon4').addEventListener('click', function() {
        window.open('https://www.youtube.com/@AcidTrigger', '_blank'); // Replace with your desired URL
    });

    // Show the modal when icon6 is clicked
    document.getElementById('icon6').addEventListener('click', function() {
        console.log('Icon 6 clicked'); // Debugging line
        const modal = document.getElementById('modal');
        modal.style.display = 'block'; // Show the modal

        // Center the modal content
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.top = '50%';
        modalContent.style.left = '50%';
        modalContent.style.transform = 'translate(-50%, -50%)'; // Center it
    });

    // Close the modal when the close button is clicked
    document.getElementById('closeModal').addEventListener('click', function() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none'; // Hide the modal
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal
        }
    });

    // Make the modal draggable
    dragElement(document.getElementById("modal"));

    function dragElement(el) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        // Make the modal draggable
        el.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e.preventDefault();
            // Get the mouse cursor position at startup
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // Call a function whenever the cursor moves
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            // Calculate the new cursor position
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // Set the element's new position
            el.style.top = (el.offsetTop - pos2) + "px";
            el.style.left = (el.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // Stop moving when mouse button is released
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    // Add shake animation to icons when clicked
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.add('shake');
            setTimeout(() => {
                icon.classList.remove('shake'); // Remove the class after animation
            }, 500); // Match the duration of the animation
        });
    });
});
