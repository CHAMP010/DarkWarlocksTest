nftLeft = document.getElementById('nft-left')
nftRight = document.getElementById('nft-right')

nftLeft.addEventListener('mouseover', () => {
    // console.log('left hover')
    document.getElementById('popup-left').classList.add('active')
})
nftRight.addEventListener('mouseover', () => {
    document.getElementById('popup-right').classList.add('active')
    // console.log('right hover')
})
nftLeft.addEventListener('mouseout', () => {
    // console.log('left hover')
    document.getElementById('popup-left').classList.remove('active')
})
nftRight.addEventListener('mouseout', () => {
    document.getElementById('popup-right').classList.remove('active')
    // console.log('right hover')
})

roadmapBtn = document.getElementById('roadmapBtn')
roadmapBtn.addEventListener('click', () => {
    scrollToRoadmap()
})

function scrollToRoadmap() {
    let roadmapDiv = document.getElementById('roadmap');
    roadmapDiv.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
}

// window.onload = function () {
//     var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
//     if (mobile) {
//         alert("Visit this on a Computer for Better View");
//     }
// }

function toggleFaq(index) {
    faqToggle = document.getElementsByClassName('faq-toggle')[index]
    var st = window.getComputedStyle(faqToggle, null);

    if (st.getPropertyValue("transform").slice(7, st.getPropertyValue("transform").length - 7) !== "1, 0, 0, 1") {
        faqToggle.style.transform = "rotate(0deg)"
    }
    else {
        faqToggle.style.transform = "rotate(180deg)"
    }
    // console.log(st.getPropertyValue("transform").slice(7, st.getPropertyValue("transform").length - 7))
}
