// Get all accordion buttons
var acc = document.getElementsByClassName("accordion");

// Loop through each accordion button
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function(event) {
        // Check if the click occurred on a link within the accordion panel
        if (event.target.tagName === 'BUTTON') {
            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Remove active class from all accordion titles
            var accordionTitles = document.querySelectorAll('.accordion button');
            accordionTitles.forEach(function(title) {
                title.classList.remove('acc-active');
            });

            // Add active class to the clicked accordion title
            this.querySelector('button').classList.add('acc-active');
        }
        
        // Close all other accordion panels
        var allPanels = document.querySelectorAll('.panel');
        for (let j = 0; j < allPanels.length; j++) {
            if (allPanels[j] !== this.nextElementSibling) {
                // Check if the panel has an active link inside
                if (!allPanels[j].querySelector('button.active')) {
                    allPanels[j].previousElementSibling.classList.remove('acc-active');
                }
                
                // Check if the panel is currently visible
                if (allPanels[j].style.maxHeight) {
                    // If yes, hide it
                    allPanels[j].style.maxHeight = null;
                }
            }
        }
        
        // Toggle the active class to expand/collapse the panel
        this.classList.toggle("acc-active");
        
        // Get the next sibling element, which is the panel
        var panel = this.nextElementSibling;

        // Check if the panel is currently visible
        if (panel.style.maxHeight) {
            // If yes, hide it
            panel.style.maxHeight = null;
        } else {
            // If no, show it by setting its max-height to its scroll height
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}






function updateContent(titleText, contentText, progressPercentage, imageSrc, titleId, contentId, imgId) {

    // Close accordion panels
    var panels = document.querySelectorAll('.panel');
    panels.forEach(function(panel) {
        panel.style.maxHeight = null;
    });

   

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update the content in the original location
    document.getElementById(titleId).innerText = titleText;
    document.getElementById(contentId).innerText = contentText;
    document.getElementById(imgId).src = imageSrc;
    // Add 'anime' class to the image outside the modal
    var imgElement = document.getElementById(imgId);
    if (imgElement) {
        imgElement.classList.add('anim');

        // Add event listener for animation
        imgElement.addEventListener('animationend', function() {
            imgElement.classList.remove('anim'); // Remove the animation class after it finishes
        });
    }

    
    // Update the progress bar in the original location
    var progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = progressPercentage + '%';
    progressBar.innerHTML = progressPercentage + '%';
    progressBar.setAttribute('aria-valuenow', progressPercentage);

    // Update the content in the modal
    var modalTitle = document.querySelector('.modal-title');
    var modalBody = document.querySelector('.modal-body');

    if (modalTitle && modalBody) {
        modalTitle.innerText = titleText;
        modalBody.innerHTML = `
        <div class="px-lg-4 px-2">
            <img src="${imageSrc}" class="modal-image d-block mx-auto anim"> <!-- Added 'anim' class here -->
            <div class="progress my-4" role="progressbar" aria-label="Animated striped example" aria-valuenow="${progressPercentage}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${progressPercentage}%">${progressPercentage}%</div>
            </div>
            <p class="mb-0">${contentText}</p>
            </div>
            `;
    }

    // Add fade-in animation to the fadein column
    var fadeinColumn = document.getElementById('fadein');
    if (fadeinColumn) {
        fadeinColumn.classList.add('fadein');

        // Remove the animation class after it finishes
        setTimeout(function() {
            fadeinColumn.classList.remove('fadein');
        }, 1400); // Adjust the timeout to match the duration of the CSS animation
    }

    // Hide long text after updating content
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

    hideLongText(120);}
      else {
        hideLongText(250);
    }
    

}

// Function to hide long text
function hideLongText(maxLength) {
    var elements = document.querySelectorAll('.longtext');
    elements.forEach(function (element) {
        if (element.innerText.length > maxLength) {
            element.innerText = element.innerText.substring(0, maxLength) + '...';
        }
    });
}





function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Variable to track the currently active category
            var activeCategory = '';
            var activeIdeaIndex = -1; // Initialize active idea index

            // Iterate over categories
            data.categories.forEach(function (category, categoryIndex) {
                // Find the idea card corresponding to the category
                var desktopIdeaCard = document.getElementById(category.name);
                var mobileIdeaCard = document.getElementById('panel' + category.name.charAt(0).toUpperCase() + category.name.slice(1)); // Generate mobile ID
                if (desktopIdeaCard && mobileIdeaCard) {
                    // Iterate over ideas in the category
                    category.ideas.forEach(function (idea, index) {
                        // Create a button element for desktop
                        var desktopButton = document.createElement('button');
                        desktopButton.textContent = idea.title;
                        // Assign data-index attribute
                        desktopButton.setAttribute('data-index', index);
                        // Add click event listener
                        desktopButton.addEventListener('click', function () {
                            // Remove active class from all buttons in other categories
                            document.querySelectorAll('.idea-card button').forEach(btn => btn.classList.remove('active'));
                            // Add active class to the clicked button
                            desktopButton.classList.add('active');

                           
                            // Update activeCategory to the current category
                            activeCategory = category.name;
                            activeIdeaIndex = index; // Update active idea index

                            // Get idea data based on the clicked button
                            var titleText = idea.title;
                            var contentText = idea.content;
                            var progressPercentage = idea.progress;
                            var imageSrc = idea.imageSrc;
                            // Call the updateContent function with the obtained data for desktop
                            updateContent(titleText, contentText, progressPercentage, imageSrc, 'title', 'content', 'img');

                            // Update content for mobile
                            var mobileTitle = document.querySelector('.accordion-body#' + mobileIdeaCard.id + ' h3');
                            var mobileContent = document.querySelector('.accordion-body#' + mobileIdeaCard.id + ' p');
                            var mobileProgressBar = document.querySelector('.accordion-body#' + mobileIdeaCard.id + ' .progress-bar');
                            var mobileImage = document.querySelector('.accordion-body#' + mobileIdeaCard.id + ' img');
                            if (mobileTitle && mobileContent && mobileProgressBar && mobileImage) {
                                mobileTitle.innerText = titleText;
                                mobileContent.innerText = contentText;
                                mobileProgressBar.style.width = progressPercentage + '%';
                                mobileProgressBar.innerHTML = progressPercentage + '%';
                                mobileProgressBar.setAttribute('aria-valuenow', progressPercentage);
                                mobileImage.src = imageSrc;
                            }
                        });

                        // Create a button element for mobile
                        var mobileButton = document.createElement('button');
                        mobileButton.textContent = idea.title;
                        // Assign data-index attribute
                        mobileButton.setAttribute('data-index', index);
                        // Add click event listener
                        mobileButton.addEventListener('click', function () {

                            window.scrollTo({ top: 0, behavior: 'smooth' });

                            document.querySelectorAll('.panel button').forEach(btn => btn.classList.remove('mobile-active'));

                            mobileButton.classList.add('mobile-active');
                            // Update activeCategory to the current category
                            activeCategory = category.name;
                            activeIdeaIndex = index; // Update active idea index
                            
                            // Get idea data based on the clicked button
                            var titleText = idea.title;
                            var contentText = idea.content;
                            var progressPercentage = idea.progress;
                            var imageSrc = idea.imageSrc;
                            // Call the updateContent function with the obtained data for mobile
                            updateContent(titleText, contentText, progressPercentage, imageSrc, 'title', 'content', 'img');
                        });

                        // Append the button to the idea cards for both desktop and mobile
                        desktopIdeaCard.appendChild(desktopButton);
                        mobileIdeaCard.appendChild(mobileButton);

                        // Add active class to the first idea button of the first category for desktop
                        if (categoryIndex === 0 && index === 0) {
                            desktopButton.classList.add('active');
                        }

                        // Add active class to the first idea button of the first category for mobile
                        if (categoryIndex === 0 && index === 0) {
                            mobileButton.classList.add('mobile-active');
                        }

                        // Check if the current idea is the active one
                        if (categoryIndex === 0 && index === activeIdeaIndex) {
                            // Add 'acc-active' class to the corresponding accordion button
                            var accordionButtons = document.querySelectorAll('.accordion button');
                            if (accordionButtons && accordionButtons.length > activeIdeaIndex) {
                                accordionButtons[activeIdeaIndex].classList.add('acc-active');
                            }
                        }
                    });
                }
            });

            // Load the content of the first idea on page load
            var firstCategory = data.categories[0];
            if (firstCategory && firstCategory.ideas && firstCategory.ideas.length > 0) {
                var firstIdea = firstCategory.ideas[0];
                var titleText = firstIdea.title;
                var contentText = firstIdea.content;
                var progressPercentage = firstIdea.progress;
                var imageSrc = firstIdea.imageSrc;

                // Call the updateContent function with the data of the first idea for both desktop and mobile
                updateContent(titleText, contentText, progressPercentage, imageSrc, 'title', 'content', 'img');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}



fetchData();


