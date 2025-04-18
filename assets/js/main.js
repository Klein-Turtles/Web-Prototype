document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let currentIndex = 0;
    
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
      
    slides[index].classList.add('active');
    dots[index].classList.add('active');
  }
    
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
    
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
   
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
    
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });
    
  // Auto slide every 5 seconds
  setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
            // For mobile: ensure dropdowns work correctly with click
            if (window.innerWidth < 992) {
                document.querySelectorAll('.dropdown-toggle').forEach(item => {
                    item.addEventListener('click', event => {
                        const dropdownList = item.nextElementSibling;
                        if (dropdownList.classList.contains('show')) {
                            dropdownList.classList.remove('show');
                        } else {
                            document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
                                openMenu.classList.remove('show');
                            });
                            dropdownList.classList.add('show');
                        }
                    });
                });
            }
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', function(event) {
                if (!event.target.closest('.dropdown')) {
                    document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
                        openMenu.classList.remove('show');
                    });
                }
            });
        });