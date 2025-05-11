document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuOpenIcon = document.getElementById('menu-open-icon');
            const menuCloseIcon = document.getElementById('menu-close-icon');
            const menuBackdrop = document.getElementById('menu-backdrop');

            // Toggle mobile menu
            function toggleMenu() {
                const isOpen = mobileMenu.classList.toggle('hidden');
                menuBackdrop.classList.toggle('hidden');
                menuOpenIcon.classList.toggle('hidden');
                menuCloseIcon.classList.toggle('hidden');
                
                // Prevent scrolling when menu is open
                document.body.style.overflow = isOpen ? 'auto' : 'hidden';
            }

            // Close menu when clicking on backdrop
            function closeMenu() {
                mobileMenu.classList.add('hidden');
                menuBackdrop.classList.add('hidden');
                menuOpenIcon.classList.remove('hidden');
                menuCloseIcon.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }

            // Event listeners
            mobileMenuButton.addEventListener('click', toggleMenu);
            menuBackdrop.addEventListener('click', closeMenu);

            // Close menu when clicking on a nav link
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', closeMenu);
            });
        });