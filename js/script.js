document.addEventListener('DOMContentLoaded', function() {
  // Typewriter Effect
  const typewriter = document.getElementById('typewriter');
  const name = "Atharva Kassa";
  let i = 0;
  
  function typeWriter() {
    if (i < name.length) {
      typewriter.textContent += name.charAt(i);
      i++;
      setTimeout(typeWriter, 150);
    } else {
      typewriter.style.animation = 'none';
    }
  }
  setTimeout(typeWriter, 500);

  // Light/Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  icon.classList.toggle('bi-sun-fill', savedTheme === 'dark');
  icon.classList.toggle('bi-moon-fill', savedTheme === 'light');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Toggle icon
    icon.classList.toggle('bi-sun-fill');
    icon.classList.toggle('bi-moon-fill');
  });

  // Progress Bars
  function createProgressBar(selector, valueSelector, color, endValue, speed) {
    const progressElement = document.querySelector(selector);
    const valueElement = document.querySelector(valueSelector);
    let startValue = 0;
    
    const progress = setInterval(() => {
      startValue++;
      valueElement.textContent = `${startValue}%`;
      progressElement.style.background = `conic-gradient(${color} ${startValue * 3.6}deg, #ededed 0deg)`;
      
      if (startValue === endValue) clearInterval(progress);
    }, speed);
  }

  createProgressBar('.html-css', '.html-progress', '#fca61f', 90, 30);
  createProgressBar('.javascript', '.javascript-progress', '#7d2ae8', 75, 30);
  createProgressBar('.php', '.php-progress', '#20c997', 95, 30);
  createProgressBar('.reactjs', '.reactjs-progress', '#3f396d', 60, 30);

  // Portfolio Filtering
  $(document).ready(function() {
    $(".filter-item").click(function() {
      const value = $(this).attr("data-filter");
      $(".post").hide();
      if (value === "all") $(".post").show(1000);
      else $(`.post.${value}`).show(1000);
    });
  });

  // Sticky Navbar
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar-top');
    if (window.scrollY > 50) {
      navbar.classList.add('fixed-top');
      document.body.style.paddingTop = navbar.offsetHeight + 'px';
    } else {
      navbar.classList.remove('fixed-top');
      document.body.style.paddingTop = '0';
    }
  });

  // Back to Top Button
  const mybutton = document.getElementById("btn-back-to-top");
  window.onscroll = function() {
    mybutton.style.display = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
      ? "block" : "none";
  };
  mybutton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile Detection
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  if (isMobileDevice()) {
    document.querySelectorAll('.phone-link').forEach(link => {
      link.style.cursor = 'pointer';
      link.style.fontWeight = 'bold';
    });
  }
});
