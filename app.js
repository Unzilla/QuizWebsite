window.onload = function () {
    show(0);
}
var questions = [
    {
        id: 1,
        question: "What does the acronym WWW stand for?",
        answer: "World wide Web",
        options: [
            "Web World Wall",
            "Web Wide Wave",
            "World wide Web",
            "Wide Wall Web"
        ]

    },

    {
        id: 2,
        question: "What is software?",
        answer: "Instructions that tell the hardware what to do",
        options: [
            "Clothing designed to be worn by computer users",
            "Any part of the computer that has a physical structure",
            "Instructions that tell the hardware what to do",
            "Flexible parts of a computer case",

        ]

    },

    {
        id: 3,
        question: "The computer’s main circuit board is called?",
        answer: "motherboard",
        options: [
            "monitor",
            "hard drive",
            "motherboard",
            "Bluetooth card",

        ]

    },

    {
        id: 4,
        question: "What is Wi-Fi?",
        answer: "A type of wireless network",
        options: [
            "A type of wireless network",
            "A type of software that scans for viruses",
            "A type of sound card",
            "An extra-wide computer case used by servers",

        ]

    },


    {
        id: 5,
        question: "Windows, macOS, and Linux are examples of?",
        answer: "operating systems",
        options: [
            "web browsers",
            "operating systems",
            "mobile devices",
            "Internet service providers",

        ]

    },

    {
        id: 6,
        question: "Which of the following performs arithmetic and logical operations?",
        answer: "Arithmetic Logic Unit",
        options: [
            "Arithmetic Logic Unit",
            "operating systems",
            "I/O Unit",
            "Registers",

        ]

    },

    {
        id: 7,
        question: "A Bit Stands for:?",
        answer: "Binary Digit",
        options: [
            "Control Unit",
            "Binary Digit",
            "Binary Deci",
            "None of above",

        ]

    },

    {
        id: 8,
        question: "________ is used to communicate from one city to another?",

        answer: "WAN",
        options: [
            "LAN",
            "PAN",
            "WAN",
            "MAN",

        ]

    },

    {
        id: 9,
        question: " ISP stands for:",

        answer: "Internet Service Provider",
        options: [
            "Internet Service Presenter",
            "International Service Provider",
            "Internet Service Provider",
            "International Service Parameter",

        ]

    },
    {
        id: 10,
        question: " Collection of 1024 kilo Bytes:?",

        answer: "1 MB",
        options: [
            "1 MB",
            "1 GB",
            "1 TB",
            "1 KB",

        ]

    },







]



function submitForm(e) {
    e.preventDefault();
    var userName = document.getElementById('user');

    sessionStorage.setItem("user", userName.value);
    location.href = "quiz.html";

}
var q_count = 0;
var score = 0;
function next() {

    var selectOption = document.querySelector('li.option.active');
    if (selectOption.innerHTML == questions[q_count].answer) {
        score = score + 10;
        sessionStorage.setItem("Points", score);
    }



    if (q_count == questions.length - 1) {
        sessionStorage.setItem("time", `${minutes} minute and ${seconds} seconds`);
        clearInterval(resetTime);
        location.href = "end.html";
        return;
    }
    q_count++;
    show(q_count);

}
function show(count) {
    var allquestions = document.getElementById('questions');
    allquestions.innerHTML = `<h2>Q ${q_count + 1}. ${questions[count].question} </h2>
    <ul class="option_Group">
    <li class="option ">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li></ul>`;
    activeClass();
}
function activeClass() {
    let options = document.querySelectorAll("li.option");
    for (let i = 0; i < options.length; i++) {
        options[i].onclick = function () {
            for (let j = 0; j < options.length; j++) {
                if (options[j].classList.contains("active")) {
                    options[j].classList.remove("active");
                }
            }
            options[i].classList.add("active");
        }
    }
}
function restart(){
    location.href="index.html";
    
}

