
// Function to update the content and progress bar
function updateContent(titleText, contentText, progressPercentage, imageSrc, titleId, contentId, imgId) {
    // Update the content in the original location
    document.getElementById(titleId).innerText = titleText;
    document.getElementById(contentId).innerText = contentText;
    document.getElementById(imgId).src = imageSrc;

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
        ;
        modalBody.innerHTML = `
        <div class="p-md-4 p-2">
            <img src="${imageSrc}" class="modal-image d-block mx-auto">
            <div class="progress my-4" role="progressbar" aria-label="Animated striped example" aria-valuenow="${progressPercentage}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: ${progressPercentage}%">${progressPercentage}%</div>
            </div>
            <p>${contentText}</p>
            </div>
            `;
    }

     // Hide long text after updating content
     hideLongText(250);
    }
    
    // Function to hide long text
    function hideLongText(maxLength) {
        var elements = document.querySelectorAll('.longtext');
        elements.forEach(function (element) {
            console.log("Text content:", element.innerText);
            if (element.innerText.length > maxLength) {
                console.log("Text content is longer than maxLength:", element.innerText);
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
    
                // Iterate over categories
                data.categories.forEach(function (category, categoryIndex) {
                    // Find the idea card corresponding to the category
                    var desktopIdeaCard = document.getElementById(category.name);
                    var mobileIdeaCard = document.getElementById('collapse' + category.name.charAt(0).toUpperCase() + category.name.slice(1)); // Generate mobile ID
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

                                var accordion = document.getElementById('accordionExample');
                                var bsAccordion = new bootstrap.Collapse(accordion, { toggle: false });
                                bsAccordion.hide();
                            
                                // Scroll to the top of the page
                                window.scrollTo({ top: 0, behavior: 'smooth' });

                                document.querySelectorAll('.collapse button').forEach(btn => btn.classList.remove('mobile-active'));
                             
                                mobileButton.classList.add('mobile-active');
                                // Update activeCategory to the current category
                                activeCategory = category.name;
    
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
    
    
    

  



