function checkSEO() {
    const websiteURL = document.getElementById("website-url").value;
    if (websiteURL) {
        document.getElementById("seo-result").innerHTML = `SEO audit results for ${websiteURL}: <br> - SEO score: 80% <br> - Recommendations: Improve meta tags, add alt text to images.`;
    } else {
        document.getElementById("seo-result").innerHTML = "Please enter a valid website URL.";
    }
}
const sliderContainer = document.querySelector('.slider-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({ left: 220, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    sliderContainer.scrollBy({ left: -220, behavior: 'smooth' });
});