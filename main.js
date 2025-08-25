
//  Setup and start animation!  
var typed = new Typed('#element', {
            strings: ['Frontend developer', 'Java Enthusiast', 'Tech Learner'],
            typeSpeed: 60,
        }); 


// Path to your uploaded résumé
const RESUME_URL = "asset/resume.pdf";
const RESUME_FILENAME = "Krishna_Singh_Resume.pdf";

document.querySelector(".btn1").addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = RESUME_URL;
    a.download = RESUME_FILENAME; // Suggested name
    document.body.appendChild(a);
    a.click();
    a.remove();
});

// github connect 
document.querySelector(".btn").addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = "https://github.com/KrishnaSingh67"
    document.body.appendChild(a)
    a.click()
})



function openPopup(file) {
    const popup = document.getElementById('popup');
    const iframe = document.getElementById('popupFrame');
    iframe.src = file;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    const iframe = document.getElementById('popupFrame');
    iframe.src = '';
    popup.style.display = 'none';
}


 function openModal(file) {
            document.getElementById('certFrame').src = file;
            document.getElementById('certModal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('certModal').style.display = 'none';
            document.getElementById('certFrame').src = '';
        }