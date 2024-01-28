// script.js

const dogBreeds = [
    {
        breed: 'Golden Retriever',
        description: 'You are known for being friendly, intelligent, and devoted, and your playful and gentle nature makes you a great companion.',
        image: 'https://d.newsweek.com/en/full/2297448/golden-retriever.jpg?w=1200&f=1827287652fa6225bf283a98bcac2466',
    },
    {
        breed: 'Portuguese Water Dog',
        description: 'Energetic, loyal, and loving, your adventurous spirit and intelligence make you a versatile and loyal friend.',
        image: 'https://neaterpets.com/cdn/shop/articles/Portuguese_Water_Dogs.jpg?v=1614868817&width=1600',
    },
    {
        breed: 'French Bulldog',
        description: 'Charming, easygoing, and affectionate, your adaptable and sociable nature makes you a delightful companion.',
        image: 'https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg',
    },
    {
        breed: 'Poodle',
        description: 'Intelligent, active, and alert, your keen intellect and friendly demeanor make you an excellent and trainable companion.',
        image: 'https://www.dailypaws.com/thmb/bbuoHmIBe8ePcdZZY-c2Tg72j2Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tan-standard-poodle-728881817-2000-9d977ef447f04116be3357711249d35f.jpg',
    },
    {
        breed: 'Beagle',
        description: 'Friendly, curious, and merry, your sociable and gentle personality makes you a great family member and friend.',
        image: 'https://www.thesprucepets.com/thmb/76Jd0a4_CBxXNyBah2gbK099xGo=/4367x0/filters:no_upscale():strip_icc()/beagle-RolfKopfle-Photolibrary-Getty-135631212-56a26b1d3df78cf772756667.jpg',
    },
    {
        breed: 'Dachshund',
        description: 'Clever, lively, and courageous, your playful and affectionate nature makes you a wonderful and devoted companion.',
        image: 'https://www.akc.org/wp-content/uploads/2017/11/Longhaired-Dachshund-standing-outdoors.jpg',
    },
    {
        breed: 'Australian Shepherd',
        description: 'Intelligent, work-oriented, and exuberant, your high energy and loyalty make you an excellent working and family dog.',
        image: 'https://image.petmd.com/files/styles/863x625/public/2022-10/Australian-Shepherd.jpeg',
    },
    {
        breed: 'Corgi',
        description: 'Affectionate, smart, and alert, your friendly and outgoing nature, along with your charming appearance, makes you a beloved companion.',
        image: 'https://jiminys.com/cdn/shop/articles/Depositphotos_87766636_S_68bc9d9a-1ef3-4234-bb73-9cae6bb8329c.jpg?v=1673977811',
    },
    {
        breed: 'Cavalier King Charles Spaniel',
        description: 'Gentle, affectionate, and graceful, your friendly and sociable personality makes you an ideal companion for all.',
        image: 'https://blog.healthypawspetinsurance.com/wp-content/uploads/2022/05/spaniel-outside.jpg',
    },
    {
        breed: 'Great Dane',
        description: 'You are friendly, dependable, and gentle. Despite your large size, your gentle and sweet nature makes you a lovable and protective companion.',
        image: 'https://d.newsweek.com/en/full/2204696/great-danes.webp?w=1600&h=900&q=88&f=ae4f63b0ec5ad5f02f3544e2ed8926c4',
    },
];



const quizData = [
    {
        question: "What is your favorite activity?",
        options: [
            { text: "Running", image: "https://media.istockphoto.com/id/1126265493/photo/canicross-exercises-man-runs-with-his-beagle-dog-at-sunny-morning.jpg?s=612x612&w=0&k=20&c=2dsmYX5620KhC-Jjry1WDlLJLZ_11twHnYIJbc2y83M=" },
            { text: "Swimming", image: "https://www.shutterstock.com/image-photo/underwater-action-young-woman-play-600nw-2109575963.jpg" },
            { text: "Cuddling on the couch", image: "https://media.istockphoto.com/id/1309835992/photo/giving-him-a-home-of-love.jpg?s=612x612&w=0&k=20&c=NFIbvlB2p5wavYydDla4fJGJHWDmMl0GJeryY99Yj4M=" },
            { text: "Cooking", image: "https://www.shutterstock.com/image-photo/healthy-eating-front-view-female-600nw-2079794737.jpg" }
        ],
        breeds: ["Golden Retriever", "Portuguese Water Dog", "French Bulldog", "Poodle"]
    },
    {
        question: "What is your preferred outdoor activity?",
        options: [
            { text: "Hiking", image: "https://www.shutterstock.com/image-photo/legs-traveler-sitting-on-high-600nw-710348986.jpg" },
            { text: "Playing fetch in the park", image: "https://media.istockphoto.com/id/1340548941/photo/senior-man-playing-fetch-with-his-golden-retriever.jpg?s=612x612&w=0&k=20&c=xPciSUnXbRvDUIYhWpJqhlKxeI6Jgqxxq-H32geKxX0=" },
            { text: "Sunbathing", image: "https://media.istockphoto.com/id/1365211040/photo/best-friends.jpg?s=612x612&w=0&k=20&c=ePTaRHXsidwmBVuIuKN6QWKZzPTW-_3rBQXuRDhyi9o=" },
            { text: "Learning new tricks", image: "https://www.shutterstock.com/image-photo/dog-corgisitting-on-his-hind-600nw-1357934858.jpg" }
        ],
        breeds: ["Golden Retriever", "Portuguese Water Dog", "French Bulldog", "Poodle"]
    },
    {
        question: "How do you spend your weekends?",
        options: [
            { text: "Lounging by the pool", image: "https://thumbs.dreamstime.com/b/woman-dog-swimming-pool-sunbathing-together-funny-summer-like-if-were-talking-to-each-other-beautiful-girl-her-32177713.jpg" },
            { text: "Attending social events", image: "https://media.istockphoto.com/id/1347845486/photo/dogs-birthday.jpg?s=612x612&w=0&k=20&c=ISnQ9gFFFwh1X2CtQt3WZEMNA11jBHjQt4OjhLVWdWU=" },
            { text: "Having a movie night", image: "https://media.istockphoto.com/id/1307895224/photo/family-watching-movie-in-the-evening-at-home.jpg?s=612x612&w=0&k=20&c=9qXPFvVvs59-BfD204lIrZATUHAtuSe65bPma_og884=" },
            { text: "Trying out new recipes", image: "https://media.sciencephoto.com/f0/13/75/02/f0137502-800px-wm.jpg" }
        ],
        breeds: ["Beagle", "Dachshund", "Australian Shepherd", "Corgi"]
    },
    {
        question: "Choose a vacation destination:",
        options: [
            { text: "Mountain retreat", image: "https://st2.depositphotos.com/5163433/47773/i/450/depositphotos_477736428-stock-photo-rendering-modern-cozy-chalet-pool.jpg" },
            { text: "Beach paradise", image: "https://www.shutterstock.com/image-photo/maldives-islands-ocean-tropical-beach-600nw-1938868960.jpg" },
            { text: "City with vibrant culture", image: "https://static.vecteezy.com/system/resources/previews/026/450/372/non_2x/vibrant-city-skyline-historic-architecture-bustling-streets-colorful-culture-generated-by-ai-free-photo.jpg" },
            { text: "Countryside getaway", image: "https://i0.wp.com/heelsinmybackpack.com/wp-content/uploads/2019/09/LRM_EXPORT_45989539438813_20190817_200745676.jpeg?resize=1400%2C1050&ssl=1" }
        ],
        breeds: ["Cavalier King Charles Spaniel", "Great Dane", "Golden Retriever", "Portuguese Water Dog"]
    },
    {
        question: "What's your favorite indoor activity?",
        options: [
            { text: "Listening to music", image: "https://as2.ftcdn.net/v2/jpg/04/57/90/17/1000_F_457901702_3bQCJJF6pPV0ziLHaS48gDfn1dO1FtAt.jpg" },
            { text: "Playing board games", image: "https://as1.ftcdn.net/v2/jpg/04/83/65/78/1000_F_483657817_2q8NKWbWnvavaYGkH3TSm9GYeBOMCNn3.jpg" },
            { text: "Reading a good book", image: "https://images.pexels.com/photos/5531280/pexels-photo-5531280.jpeg" },
            { text: "Arts and crafts", image: "https://dogtime.com/wp-content/uploads/sites/12/2020/07/dog-arts-crafts-1.jpg" }
        ],
        breeds: ["Poodle", "Beagle", "Dachshund", "French Bulldog"]
    },
    {
        question: "Pick a favorite toy:",
        options: [
            { text: "Plush squeaky toys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtTvqBBVpGtsrY46GaO-xYnx2XnMJfaGrDw&usqp=CAU" },
            { text: "Interactive puzzle toys", image: "https://www.shutterstock.com/image-photo/corgi-dog-bent-over-interactive-600nw-2340907407.jpg" },
            { text: "Chew toys", image: "https://www.shutterstock.com/image-photo/bratislava-slovakia-january-2020-popular-260nw-1894207627.jpg" },
            { text: "Tennis balls", image: "https://t3.ftcdn.net/jpg/01/88/76/78/360_F_188767810_LQzXHdk2H0AWvyUTFsKQfCL7oZPW5xaG.jpg" }
        ],
        breeds: ["Australian Shepherd", "Corgi", "Cavalier King Charles Spaniel", "Great Dane"]
    },
    {
        question: "What's your ideal weather?",
        options: [
            { text: "Sunny and warm", image: "https://static.vecteezy.com/system/resources/thumbnails/004/877/525/small_2x/blue-sky-background-texture-with-white-clouds-free-photo.jpg" },
            { text: "Cool and breezy", image: "https://cdn.naturettl.com/wp-content/uploads/2019/09/13140332/ideas-autumn-landscape-photography-6.jpg" },
            { text: "Rainy and cozy", image: "https://static.vecteezy.com/system/resources/thumbnails/029/945/300/small/autumn-rain-in-japan-view-through-vintage-wood-window-cozy-indoor-perspective-with-rainy-weather-background-wallpape-generative-ai-photo.jpg" },
            { text: "Snowy and festive", image: "https://st3.depositphotos.com/3915601/13189/i/450/depositphotos_131895004-stock-photo-winter-landscape-in-snowy-forest.jpg" }
        ],
        breeds: ["Dachshund", "French Bulldog", "Poodle", "Beagle"]
    },
    {
        question: "Choose a mode of transportation:",
        options: [
            { text: "Car rides", image: "https://media.istockphoto.com/id/1266454052/photo/on-the-road.jpg?s=612x612&w=0&k=20&c=dTcvWGzMHbrv1-dVEh7n_SVfK0Js6Pj63zqtGtgnkH8=" },
            { text: "Walking on a leash", image: "https://media.istockphoto.com/id/629076332/photo/smiling-african-american-girl-walking-her-dog-on-a-leash.jpg?s=612x612&w=0&k=20&c=SXZ7RBDPLV_gWqOkutGXRCN-WaPH7z_Y9e-_M6P_9Go=" },
            { text: "Traveling in a cozy carrier", image: "https://www.shutterstock.com/image-photo/yorkshire-terrier-dog-sitting-travel-600nw-1984321763.jpg" },
            { text: "Running alongside a bike", image: "https://static.vecteezy.com/system/resources/previews/024/064/540/non_2x/canine-joyride-dog-running-alongside-owner-on-bike-path-in-city-ai-generated-free-photo.jpg" }
        ],
        breeds: ["Golden Retriever", "Portuguese Water Dog", "Cavalier King Charles Spaniel", "Great Dane"]
    },
    {
        question: "What's your favorite type of music?",
        options: [
            { text: "Classical", image: "https://media.istockphoto.com/id/1302833945/photo/cellos-and-musicians.jpg?s=612x612&w=0&k=20&c=MmN3LZBeJb5CkUHnrvxZfPvPIibI8Wmj-EvY97eqgV8=" },
            { text: "Pop hits", image: "https://bigthink.com/wp-content/uploads/2022/09/AdobeStock_117487978.jpg?resize=1200,630" },
            { text: "Indie vibes", image: "https://thumbs.dreamstime.com/b/barcelona-jun-haim-indie-music-band-perform-concert-primavera-sound-festival-june-barcelona-spain-haim-indie-music-105343490.jpg" },
            { text: "Country tunes", image: "https://www.shutterstock.com/image-photo/music-festival-crowd-excitement-600nw-1231157515.jpg" }
        ],
        breeds: ["Corgi", "Cavalier King Charles Spaniel", "Great Dane", "Dachshund"]
    },
    {
        question: "Choose a favorite holiday:",
        options: [
            { text: "Christmas", image: "https://media.istockphoto.com/id/517895844/photo/dog-nova-scotia-duck-tolling-retriever-holiday.jpg?s=612x612&w=0&k=20&c=80A4D4remDw5EupzkmL8cMuR_HrGWg-HfZiwLmmFSm0=" },
            { text: "Halloween", image: "https://media.istockphoto.com/id/1338829508/photo/a-dog-dressed-as-a-witch-for-halloween-a-golden-retriever-sits-in-a-park-in-autumn-with.jpg?s=612x612&w=0&k=20&c=HECA_42OEuqcK4YR17h32d-CX9v94W5pK-e2h-WPka8=" },
            { text: "Thanksgiving", image: "https://thumbs.dreamstime.com/b/dog-serving-thanksgiving-day-turkey-funny-sitting-head-formal-dining-table-202590978.jpg" },
            { text: "Easter", image: "https://t3.ftcdn.net/jpg/00/78/35/44/360_F_78354441_on5i0XyqyvwjbMmv1peSzIrQFaK1xiFc.jpg" }
        ],
        breeds: ["Australian Shepherd", "Cavalier King Charles Spaniel", "Great Dane", "Poodle"]
    }
];

function calculateResult(userAnswers) {
    const breedScores = {};

    // Initialize scores for each breed to 0
    quizData.forEach(questionData => {
        questionData.breeds.forEach(breed => {
            breedScores[breed] = 0;
        });
    });

    // Update scores based on user's answers
    userAnswers.forEach((answer, index) => {
        const breed = quizData[index].breeds[userAnswers[index]];
        breedScores[breed]++;
    });

    // Find the breed with the highest score
    let maxScore = 0;
    let resultBreed = "";

    for (const breed in breedScores) {
        if (breedScores[breed] > maxScore) {
            maxScore = breedScores[breed];
            resultBreed = breed;
        }
    }

    return resultBreed;
}

function displayResult(result) {
    let description = "";
    let image = "";
    dogBreeds.forEach(breed => {
        if (breed.breed === result) {
            description = breed.description;
            image = breed.image;
        };
    });
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `<h2>You are a ${result}!</h2>
    <p id="description">${description}</p>
    <img src="${image}" alt="Photo of a ${result}">
    `;
    resultContainer.style.display = "block";
}

// Rest of the code...

let currentQuestionIndex = 0; // Keep track of the current question index
let userAnswers = [];


function buildQuestion() {
    const quizContainer = document.getElementById("quiz-container");

    if (currentQuestionIndex < quizData.length) {
        const currentQuestionData = quizData[currentQuestionIndex];

        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
    <h4 id="question-name">${currentQuestionData.question}</h4>
    <form id="question-form">
        ${currentQuestionData.options.map((option, index) => `
            <label class="option-label">
                <input type="radio" class="option" name="answer" value="${index}" required>
                <img src="${option.image}" alt="${option.text}" class="response-photo">
                ${option.text}
            </label>
        `).join('')}
    </form>
`;
        document.getElementById("result-container").style.display = "none";
        const existingQuestionDiv = document.getElementById("current-question");
        if (existingQuestionDiv) {
            existingQuestionDiv.innerHTML = questionDiv.innerHTML;
        } else {
            questionDiv.id = "current-question";
            quizContainer.appendChild(questionDiv);
        }
    } else {
        // No more questions, quiz is completed
        document.getElementById("quiz-container").style.display = "none";
        document.querySelector("button").style.display = "none";
        let result = calculateResult(userAnswers);
        displayResult(result);
    }
}

function submitAnswer() {
    const form = document.getElementById("question-form");

    // Check if a radio button is selected
    if (form && form.answer.value) {
        // Process the answer (you may want to update the scoring logic here)
        // For simplicity, this example assumes the user's answer is the index of the selected option
        const userAnswer = parseInt(form.answer.value, 10);

        // Perform any additional processing (e.g., update score, check completion)
        userAnswers.push(userAnswer);

        // Move to the next question
        currentQuestionIndex++;

        // Build and display the next question
        buildQuestion();
    } else {
        alert('Please select an answer before moving to the next question.');
    }
    return userAnswers;
}


// const questionForm = document.getElementById("question-form");

// if (questionForm) {
//     questionForm.addEventListener("change", function (event) {
//         const selectedLabel = event.target.closest('label');
//         if (selectedLabel) {
//             // Remove the previously selected class from all labels
//             document.querySelectorAll('label').forEach(label => {
//                if (label.classList.contains('selected')) {
//                 label.classList.remove('selected');
//                }
//             });
//             // Add the 'selected' class to the currently selected label
//             selectedLabel.classList.add('selected');
//         }
//     });
// }



function selectLabel(selectedLabel) {
    labels.forEach(label => {
        label.classList.remove('selected');
    })
    selectLabel.classList.add('selected');
    console.log("Added selected class")
}



document.addEventListener('DOMContentLoaded', () => {

    const nextButton = document.getElementById("next-button");
    nextButton.addEventListener("click", submitAnswer);


    const labels = document.querySelectorAll('label.option-label');

    labels.forEach(label => {
        label.addEventListener('change', selectLabel);
    });


    // Initialize the quiz with the first question
    buildQuestion();

});
