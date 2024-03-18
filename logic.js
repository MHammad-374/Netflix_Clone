let questionsArr = [
    {
        id: 1,
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
        id: 2,
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 1,100 to Rs 250 a month. No extra costs, no contracts."
    },
    {
        id: 3,
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        id: 4,
        question: "How do I cancel?",
        answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        id: 5,
        question: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        id: 6,
        question: "Is Netflix good for kids?",
        answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }
]

let linkLists = [
    {
        id: 1,
        title: 'FAQ'
    },
    {
        id: 2,
        title: 'Help Center'
    },
    {
        id: 3,
        title: 'Account'
    },
    {
        id: 4,
        title: 'Media Center'
    },
    {
        id: 5,
        title: 'Investor Relations'
    },
    {
        id: 6,
        title: 'Jobs'
    },
    {
        id: 7,
        title: 'Ways to Watch'
    },
    {
        id: 8,
        title: 'Terms of Use'
    },
    {
        id: 9,
        title: 'Privacy'
    },
    {
        id: 10,
        title: 'Cookie Preferences'
    },
    {
        id: 11,
        title: 'Corporate Information'
    },
    {
        id: 12,
        title: 'Contact Us'
    },
    {
        id: 13,
        title: 'Speed Test'
    },
    {
        id: 14,
        title: 'Legal Notices'
    },
    {
        id: 15,
        title: 'Only on Netflix'
    }
]





function displayQuestions(id, question, answer) {
    let html = `<button onclick="showAnswer(${id})" class="question">
    <div class="upper">
    <p class="paragraph para-1">${question}</p>
    <svg class="plus" color="white" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="elj7tfr3 e164gv2o4 default-ltr-cache-1javmrk e1svuwfo1" data-name="Plus" aria-labelledby=":r54:" alt=""><path fill-rule="evenodd" clip-rule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
    <svg class="close" color="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </div>
    <p class="answer">${answer}</p>
    </button>`
    questionsBox.innerHTML = questionsBox.innerHTML + html;
}


const displayLinks = (title) => {
    let html = `<li class="lists">
    <a href="#">${title}</a>  
    </li>`;
    unorderList.innerHTML = unorderList.innerHTML + html;

}

function showAnswer(id) {
    if (answerBox[id - 1].style.display != 'block') {
        answerBox[id - 1].style.display = 'block'
        closeSvg[id - 1].style.display = 'inline'
        plus[id - 1].style.display = 'none'
    }
    else {
        answerBox[id - 1].style.display = 'none'
        closeSvg[id - 1].style.display = 'none'
        plus[id - 1].style.display = 'inline'
    }
}


let questionsBox = document.getElementsByClassName("questions")[0]
let answerBox = document.getElementsByClassName('answer')
let closeSvg = document.getElementsByClassName('close')
let plus = document.getElementsByClassName('plus')
let questionBtn = document.getElementsByClassName('question')

let unorderList = document.getElementsByTagName('ul')[0]
let footerList = document.getElementsByClassName("lists")



questionsArr.map((question) => {
    displayQuestions(question.id, question.question, question.answer)

})

linkLists.map(link => {
    displayLinks(link.title)
})