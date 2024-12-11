document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial) => {
        testimonial.classList.remove("active");
      });
      
      testimonials[index].classList.add("active");
    }
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
      showTestimonial(currentIndex);
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
      showTestimonial(currentIndex);
    });
  
    showTestimonial(currentIndex);
});

// карта
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.9, lng: 27.5667 },
    zoom: 14,
  });

  const marker = new google.maps.Marker({
    position: { lat: 53.9, lng: 27.5667 },
    map: map,
    title: "Мы находимся здесь!",
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const faqButton = document.querySelectorAll('.faq-toggle');
  const mapContainer = document.getElementById('map');

  faqButton[1].addEventListener('click', function() {
    if (mapContainer.style.display === 'none') {
      mapContainer.style.display = 'block';
      initMap();
    } else {
      mapContainer.style.display = 'none';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {

        faqItems.forEach((el) => {
          if (el !== item) el.classList.remove("open");
        });

        item.classList.toggle("open");
      });
    });
  });

  function sendEmail(event) {
    event.preventDefault(); // Предотвращаем отправку формы
  
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phoneNumber').value;
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;
  
    var subject = "Запись на пробное занятие";
    var body = "Здравствуйте!\n\nЯ хочу записаться на бесплатное пробное занятие.\n\n" +
      "Имя: " + name + "\n" +
      "Телефон: " + phone + "\n" +
      "Услуга: " + service + "\n" +
      "Дата: " + date;
  
    var mailtoLink = "mailto:komisarciksport@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
  }
  
// о нас

  document.addEventListener('DOMContentLoaded', function () {
    const leftImage = document.querySelector('.image-gallery .left');
    const centerImage = document.querySelector('.image-gallery .center');
    const rightImage = document.querySelector('.image-gallery .right');
  
    leftImage.addEventListener('mouseenter', function () {
      leftImage.classList.add('enlarged');
      centerImage.classList.add('shrunk');
      rightImage.classList.add('shrunk');
    });
  
    leftImage.addEventListener('mouseleave', function () {
      leftImage.classList.remove('enlarged');
      centerImage.classList.remove('shrunk');
      rightImage.classList.remove('shrunk');
    });
  
    rightImage.addEventListener('mouseenter', function () {
      rightImage.classList.add('enlarged');
      centerImage.classList.add('shrunk');
      leftImage.classList.add('shrunk');
    });
  
    rightImage.addEventListener('mouseleave', function () {
      rightImage.classList.remove('enlarged');
      centerImage.classList.remove('shrunk');
      leftImage.classList.remove('shrunk');
    });
  
    centerImage.addEventListener('mouseenter', function () {
      centerImage.classList.add('enlarged');
      leftImage.classList.add('shrunk');
      rightImage.classList.add('shrunk');
    });
  
    centerImage.addEventListener('mouseleave', function () {
      centerImage.classList.remove('enlarged');
      leftImage.classList.remove('shrunk');
      rightImage.classList.remove('shrunk');
    });
  });
  
// тренера
  function openModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.classList.add("modal-open");
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.classList.remove("modal-open");
  }
  
  window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  };