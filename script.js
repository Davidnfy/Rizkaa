    // Fungsi untuk mengaktifkan animasi saat scroll
    document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll('.gallery img');

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Setelah terlihat, tidak perlu memantau lagi
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        images.forEach(image => {
            observer.observe(image);
        });
    });
