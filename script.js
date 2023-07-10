const btnLeftScroll = document.getElementById("button-left");
const btnRightScroll = document.getElementById("button-right");
const btnSurprise = document.getElementById("button-surprise");

const reviewerImg = document.getElementById("reviewer-img");
const reviewerName = document.getElementById("reviewer-name");
const reviewerJob = document.getElementById("reviewer-job");
const reviewerText = document.getElementById("review-text");

const johnDoe = {
    img: "url('img/johnDoe.webp')",
    name: "John Doe",
    job: "Developer",
    text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid eum voluptates,
    ducimus reprehenderit enim error magni, soluta autem non commodi iusto doloremque obcaecati id nostrum beatae. Dolore eos odio rem.`,
};

const juliaRedford = {
    img: "url('img/juliaRedford.webp')",
    name: "Julia Redford",
    job: "Saleswoman",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptate nemo deleniti exercitationem, ea libero voluptatem porro, qui aliquid sit officia aliquam deserunt a veritatis illo! Illo sunt recusandae itaque.`,
};

const peterParker = {
    img: "url('img/peterParker.webp')",
    name: "Peter Parker",
    job: "Photographer",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum odit ad accusamus distinctio deleniti nihil! Harum mollitia ducimus quibusdam sit vel delectus quas saepe, iure ab, culpa, reiciendis provident dolore.`,
};

const marieMae = {
    img: "url('img/marieMae.webp')",
    name: "Marie Mae",
    job: "Baker",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos libero quas veritatis? Atque molestiae, necessitatibus incidunt nihil, unde magni non quo, deserunt soluta expedita quaerat possimus assumenda maxime totam perspiciatis.`,
};

let reviewers = [johnDoe, juliaRedford, peterParker, marieMae];
let reviewerCount = 0;

renderReviewCard();

btnLeftScroll.addEventListener("click", scrollLeft);
btnRightScroll.addEventListener("click", scrollRight);
btnSurprise.addEventListener("click", scrollSurprise);

function scrollLeft() {
    if (reviewerCount == 0) {
        reviewerCount = reviewers.length - 1;
    } else {
        reviewerCount--;
    }

    renderReviewCard();
}

function scrollRight() {
    if (reviewerCount == reviewers.length - 1) {
        reviewerCount = 0;
    } else {
        reviewerCount++;
    }

    renderReviewCard();
}

function scrollSurprise() {
    reviewerCount = Math.floor(Math.random() * reviewers.length);
    renderReviewCard();
}

function renderReviewCard() {
    reviewerImg.style.backgroundImage = reviewers[reviewerCount].img;
    reviewerName.innerText = reviewers[reviewerCount].name;
    reviewerJob.innerText = reviewers[reviewerCount].job;
    reviewerText.innerText = reviewers[reviewerCount].text;
}
