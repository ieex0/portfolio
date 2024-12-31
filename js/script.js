// Select all cards in the services section
const serviceCards = document.querySelectorAll("#services .card");

// Add scroll event listener
window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight - 100;

    serviceCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerPoint) {
            card.classList.add("visible");
        }
    });
});

// تحريك قسم التواصل عند التمرير
const contactCards = document.querySelectorAll(".contact .card");

const handleContactRollEffect = () => {
    contactCards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // إذا كان العنصر داخل نافذة العرض
        if (cardPosition < windowHeight - 100) {
            setTimeout(() => {
                card.classList.add("roll-in");
            }, index * 150); // تأخير بسيط لكل بطاقة
        } else {
            // إزالة التأثير إذا خرج العنصر من نافذة العرض
            card.classList.remove("roll-in");
        }
    });
};

window.addEventListener("scroll", handleContactRollEffect);

const projectImages = document.querySelectorAll('.project-image img');

const handleImageScroll = () => {
    projectImages.forEach((img) => {
        const imgPosition = img.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (imgPosition < windowHeight - 100) {
            img.parentElement.classList.add('visible');
        } else {
            img.parentElement.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', handleImageScroll);



// هنا علامة الزر الاخضر للاعلى

// Add Scroll to Top Button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.textContent = "↑";
scrollToTopButton.classList.add("scroll-to-top");
document.body.appendChild(scrollToTopButton);

scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #48db13;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    display: none;
`;

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// ملف الهيرو 
const heroTitle = document.getElementById("hero-title");
const words = ["RAGT", "AND Trade import"];
let wordIndex = 0;

const typeEffect = () => {
    heroTitle.innerHTML = `<span>${words[wordIndex]}</span>`;
    wordIndex = (wordIndex + 1) % words.length;
};

setInterval(typeEffect, 2000);

//كود الاظهار تدريجي 
const cards = document.querySelectorAll(".card");

const handleScrollEffect = () => {
    cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 50) {
            card.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", handleScrollEffect);

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");

hamburgerMenu.addEventListener("click", () => {
    navigation.classList.toggle("show");
});
