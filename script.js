document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progressBar');
    const sections = document.querySelectorAll('.entry-content .wp-block-group.alignfull');
    const progressContent = document.getElementById('progressBarContent');
    const buttonContainer = document.getElementById('buttonContainer'); // Access the first element
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // Create navigation buttons and set their positions
    sections.forEach(section => {
        
        // Ensure each section has an ID
        if (!section.id) {
            section.id = `section-${Math.random().toString(36).substr(2, 9)}`;
        }
        
        if(!section.classList.contains('wcd__bottom_road')){
            const button = document.createElement('button');
            button.innerHTML = `<img src="https://delhi.wordcamp.org/2024/files/2024/05/auto-stops.png" />
            
            <div class="hoverable__stop_content">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="35" viewBox="0 0 56 35" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.2324 3.58318C37.2314 3.57585 37.2247 3.57073 37.2173 3.57175L4.35806 8.1401C2.74508 8.36435 1.61929 9.85372 1.84354 11.4667L4.52425 30.7485C4.7485 32.3615 6.23787 33.4872 7.85085 33.263L40.7222 28.693C40.7229 28.6929 40.7233 28.6923 40.7232 28.6917V28.6917C40.7232 28.6913 40.7233 28.691 40.7235 28.6907L51.8812 16.6514C53.1484 15.2841 52.8446 13.0986 51.2525 12.1288L37.2387 3.59279C37.2353 3.5907 37.233 3.58717 37.2324 3.58318V3.58318Z" fill="#007D65"/>
                    <path d="M37.2387 3.59279L37.3154 3.46688L37.2387 3.59279ZM51.8812 16.6514L51.7731 16.5512L51.8812 16.6514ZM40.7235 28.6907L40.8317 28.7909L40.7235 28.6907ZM40.7222 28.693L40.7425 28.839L40.7222 28.693ZM7.85085 33.263L7.87115 33.409L7.85085 33.263ZM4.37836 8.28613L37.2376 3.71777L37.197 3.42572L4.33776 7.99408L4.37836 8.28613ZM4.67027 30.7282L1.98957 11.4464L1.69751 11.487L4.37822 30.7688L4.67027 30.7282ZM40.7019 28.5469L7.83055 33.117L7.87115 33.409L40.7425 28.839L40.7019 28.5469ZM51.7731 16.5512L40.6154 28.5905L40.8317 28.7909L51.9894 16.7516L51.7731 16.5512ZM37.1621 3.7187L51.1758 12.2548L51.3292 12.0029L37.3154 3.46688L37.1621 3.7187ZM37.3154 3.46688C37.3498 3.4878 37.3729 3.52304 37.3785 3.56288L37.0864 3.60348C37.0931 3.65129 37.1208 3.69359 37.1621 3.7187L37.3154 3.46688ZM51.9894 16.7516C53.3199 15.3159 53.0009 13.0212 51.3292 12.0029L51.1758 12.2548C52.6883 13.1761 52.9769 15.2522 51.7731 16.5512L51.9894 16.7516ZM40.8693 28.6714C40.8753 28.7148 40.8615 28.7587 40.8317 28.7909L40.6154 28.5905C40.5851 28.6232 40.5711 28.6678 40.5772 28.712L40.8693 28.6714ZM40.7425 28.839C40.8238 28.8277 40.8806 28.7526 40.8693 28.6714L40.5772 28.712C40.5661 28.6319 40.6219 28.5581 40.7019 28.5469L40.7425 28.839ZM4.37822 30.7688C4.61368 32.4624 6.17752 33.6445 7.87115 33.409L7.83055 33.117C6.29822 33.33 4.88331 32.2605 4.67027 30.7282L4.37822 30.7688ZM37.2376 3.71777C37.1643 3.72797 37.0966 3.67677 37.0864 3.60348L37.3785 3.56288C37.3662 3.47493 37.285 3.41348 37.197 3.42572L37.2376 3.71777ZM4.33776 7.99408C2.64413 8.22954 1.46205 9.79337 1.69751 11.487L1.98957 11.4464C1.77653 9.91406 2.84603 8.49917 4.37836 8.28613L4.33776 7.99408Z" fill="white"/>
                    <path d="M48.5215 14.6422C48.6964 14.7401 48.7248 14.9802 48.5775 15.1162L42.4784 20.7469C42.3015 20.9102 42.0139 20.804 41.9856 20.5648L40.8409 10.8806C40.8126 10.6414 41.0675 10.471 41.2777 10.5886L48.5215 14.6422Z" fill="white"/>
                </svg>

                <span>Why WordCamp</span>
            </div>`;
    
            button.setAttribute('data-target', section.id);
    
            // Calculate the left offset as a percentage of the total document height
            const offsetTop = section.offsetTop;
            const percentage = (offsetTop / totalHeight) * 100;
    
            button.style.position = 'absolute';
            button.style.left = `calc(${percentage}% - 0px)`; // Adjusting for button width
    
            buttonContainer.appendChild(button);
        }

    });

    // Smooth scroll to section
    buttonContainer.addEventListener('click', function (e) {
        let targetButton = e.target;
        
        // Check if the clicked element is the image inside the button
        if (targetButton.tagName === 'IMG') {
            targetButton = targetButton.closest('button');
        }
        
        // Check if the target is a button
        if (targetButton && targetButton.tagName === 'BUTTON') {
            const targetId = targetButton.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // Update progress bar on scroll
    window.onscroll = function () {
        let scrollDistance = document.documentElement.scrollTop;
        let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollPercentage = (scrollDistance / documentHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';

        if(scrollPercentage > 50){
            // alert('hi');
            progressContent.classList.add('progress-bar__content--reverted');
        }else{
            progressContent.classList.remove('progress-bar__content--reverted');
        }
    };

    // Update progress bar on page load
    window.dispatchEvent(new Event('scroll'));
});
