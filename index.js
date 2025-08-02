  // Photo gallery data - REPLACE THESE URLs WITH YOUR ACTUAL PHOTOS
    const photos = [
    {
        src: "nin.jpg",
    alt: "Our beautiful moment together",
    caption: "That smile that makes my heart skip a beat 🌸❤️"
            },
    {
        src: "photo_2025-08-02_12-52-30.jpg",
    alt: "Birthday celebration",
    caption: "Celebrating another year of your amazing life! 🌸❤️ "
            },
    {
        src: "dinner.jpg",
    alt: "Romantic dinner date",
    caption: "Our magical dinner under the stars ✨🌸❤️"
            },
    {
        src: "photo_2025-08-02_12-52-40.jpg",
    alt: "Adventure together",
    caption: "Every adventure is better with you by my side 🌸❤️"
            },
    {
        src: "date.jpg",
    alt: "Sweet moments",
    caption: "Every moment with you is a treasure 🌸❤️"
            },
    {
        src: "smile.jpg",
    alt: "Happy times",
    caption: "Your laughter is my favorite sound 😹🌸❤️"
            }
    ];

    // Create photo gallery
    function createPhotoGallery() {
            const photoGrid = document.getElementById('photo-grid');

            photos.forEach((photo, index) => {
                const photoCard = document.createElement('div');
    photoCard.className = 'photo-card';
    photoCard.style.animationDelay = `${index * 100}ms`;

    photoCard.innerHTML = `
    <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
        <div class="photo-overlay"></div>
        <div class="photo-caption">
            <p>${photo.caption}</p>
        </div>
        `;

        photoGrid.appendChild(photoCard);
            });
        }

        // Create floating hearts
        function createFloatingHeart() {
            const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';

        document.getElementById('floating-hearts').appendChild(heart);

            // Animate heart upward
            setTimeout(() => {
            heart.style.top = '-50px';
            }, 100);

            // Remove heart after animation
            setTimeout(() => {
            heart.remove();
            }, 3000);
        }

        // Initialize floating hearts
        function startFloatingHearts() {
            setInterval(createFloatingHeart, 2000);
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function () {
            createPhotoGallery();
        startFloatingHearts();
        });

        // Add click effect to photos
        document.addEventListener('click', function (e) {
            if (e.target.closest('.photo-card')) {
                const card = e.target.closest('.photo-card');
        card.style.transform = 'scale(0.95)';
                setTimeout(() => {
            card.style.transform = '';
                }, 150);
            }
        });
