const testimonials = [
  {
    name: "John Smith",
    job: "Marketing Manager",
    image: "pexels-cottonbro-studio-5378700.jpg",
    testimonial:
      "Working with XYZ Marketing has been a game-changer for our company. Their strategic approach and innovative campaigns have significantly boosted our online presence and revenue. I highly recommend them to anyone looking to take their marketing to the next level.",
  },
  {
    name: "Sarah Johnson",
    job: "Small Business Owner",
    image: "pexels-andrea-piacquadio-774909.jpg",
    testimonial:
      "I can't thank ABC Marketing enough for their exceptional services. They helped my small business reach a broader audience and increase sales. Their personalized approach and commitment to our success are unparalleled. I'm extremely satisfied with their results.",
  },
  {
    name: "Michael Davis",
    job: "Digital Marketing Specialist",
    image: "pexels-pixabay-220453.jpg",
    testimonial:
      "I've been in the marketing industry for years, and partnering with LMN Marketing has been one of the best decisions I've made. Their expertise in digital marketing is unmatched, and they've consistently delivered outstanding results for our clients. I trust them to elevate any brand's online presence.",
  },
  {
    name: "Emily Carter",
    job: "E-commerce Entrepreneur",
    image: "pexels-monstera-production-5876695.jpg",
    testimonial:
      "As an e-commerce entrepreneur, I was struggling to find the right marketing partner until I found PQR Marketing. Their creative strategies and data-driven approach have driven substantial growth for my online store. Their team is passionate and dedicated, and I couldn't be happier with the results.",
  },
];

let i = 0;
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});

prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
    `;
};

window.onload = displayTestimonial;