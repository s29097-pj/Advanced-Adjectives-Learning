let words = [
    { polish: "przestraszony", english: "afraid", synonyms: ["fearful"] },
    { polish: "wściekły", english: "angry", synonyms: ["enraged"] },
    { polish: "irytujący", english: "annoying", synonyms: ["exasperating"] },
    { polish: "zły", english: "bad", synonyms: ["lousy"] },
    { polish: "piękny", english: "beautiful", synonyms: ["gorgeous"] },
    { polish: "duży", english: "big", synonyms: ["immense", "tremendous"] },
    { polish: "nudny", english: "boring", synonyms: ["tedious", "mundane"] },
    { polish: "zajęty", english: "busy", synonyms: ["swamped"] },
    { polish: "spokojny", english: "calm", synonyms: ["serene"] },
    { polish: "ostrożny", english: "careful", synonyms: ["cautious"] },
    { polish: "czysty", english: "clean", synonyms: ["spotless"] },
    { polish: "jasny", english: "clear", synonyms: ["obvious", "lucid"] },
    { polish: "konkurencyjny", english: "competitive", synonyms: ["cutthroat"] },
    { polish: "zmieszany", english: "confused", synonyms: ["perplexed"] },
    { polish: "zatłoczony", english: "crowded", synonyms: ["bustling"] },
    { polish: "uszkodzony", english: "damaged", synonyms: ["battered"] },
    { polish: "niebezpieczny", english: "dangerous", synonyms: ["perilous"] },
    { polish: "drogi", english: "dear", synonyms: ["cherished"] },
    { polish: "głęboki", english: "deep", synonyms: ["profound"] },
    { polish: "szczegółowy", english: "detailed", synonyms: ["meticulous"] },
    { polish: "brudny", english: "dirty", synonyms: ["filthy"] },
    { polish: "łatwy", english: "easy", synonyms: ["effortless"] },
    { polish: "pusty", english: "empty", synonyms: ["desolate"] },
    { polish: "podekscytowany", english: "excited", synonyms: ["thrilled"] },
    { polish: "ekscytujący", english: "exciting", synonyms: ["exhilarating"] },
    { polish: "drogi", english: "expensive", synonyms: ["pricey"] },
    { polish: "elegancki", english: "fancy", synonyms: ["lavish"] },
    { polish: "gruby", english: "fat", synonyms: ["obese"] },
    { polish: "przyjazny", english: "friendly", synonyms: ["amiable"] },
    { polish: "zabawny", english: "funny", synonyms: ["hilarious"] },
    { polish: "zadowolony", english: "glad", synonyms: ["overjoyed"] },
    { polish: "wspaniały", english: "great", synonyms: ["terrific"] },
    { polish: "szczęśliwy", english: "happy", synonyms: ["jubilant"] },
    { polish: "gorący", english: "hot", synonyms: ["scorching", "sweltering"] },
    { polish: "ogromny", english: "huge", synonyms: ["vast"] },
    { polish: "głodny", english: "hungry", synonyms: ["starving"] },
    { polish: "ważny", english: "important", synonyms: ["vital", "crucial"] },
    { polish: "interesujący", english: "interesting", synonyms: ["captivating"] },
    { polish: "leniwy", english: "lazy", synonyms: ["idle"] },
    { polish: "mały", english: "little", synonyms: ["tiny", "slight"] },
    { polish: "głośny", english: "loud", synonyms: ["thunderous"] },
    { polish: "złośliwy", english: "mean", synonyms: ["wicked"] },
    { polish: "niechlujny", english: "messy", synonyms: ["slovenly"] },
    { polish: "konieczny", english: "necessary", synonyms: ["essential", "imperative"] },
    { polish: "hałaśliwy", english: "noisy", synonyms: ["clamorous"] },
    { polish: "stary", english: "old", synonyms: ["obsolete"] },
    { polish: "bolesny", english: "painful", synonyms: ["excruciating"] },
    { polish: "doskonały", english: "perfect", synonyms: ["flawless"] },
    { polish: "biedny", english: "poor", synonyms: ["destitute"] },
    { polish: "szybki", english: "quick", synonyms: ["hasty"] },
    { polish: "cichy", english: "quiet", synonyms: ["secluded"] },
    { polish: "bogaty", english: "rich", synonyms: ["well-off", "affluent"] },
    { polish: "smutny", english: "sad", synonyms: ["sorrowful", "blue"] },
    { polish: "przestraszony", english: "scared", synonyms: ["petrified", "terrified"] },
    { polish: "rozsądny", english: "sensible", synonyms: ["prudent"] },
    { polish: "poważny", english: "serious", synonyms: ["grave"] },
    { polish: "nieśmiały", english: "shy", synonyms: ["timid"] },
    { polish: "szczupły", english: "slim", synonyms: ["thin"] },
    { polish: "mądry", english: "smart", synonyms: ["intelligent"] },
    { polish: "stabilny", english: "stable", synonyms: ["steady"] },
    { polish: "słodki", english: "sweet", synonyms: ["sugary"] },
    { polish: "złożony", english: "complex", synonyms: ["complicated"] },
    { polish: "niezwykły", english: "unusual", synonyms: ["extraordinary"] },
    { polish: "zdrowy", english: "healthy", synonyms: ["wholesome"] },
    { polish: "smaczny", english: "tasty", synonyms: ["flavorful"] },
    { polish: "zawodny", english: "unreliable", synonyms: ["undependable"] },
    { polish: "staroświecki", english: "old-fashioned", synonyms: ["outdated"] },
    { polish: "obcy", english: "foreign", synonyms: ["alien"] },
    { polish: "konserwatywny", english: "conservative", synonyms: ["traditional"] },
    { polish: "odważny", english: "brave", synonyms: ["courageous"] },
    { polish: "skromny", english: "humble", synonyms: ["modest"] },
    { polish: "przyjemny", english: "pleasant", synonyms: ["enjoyable"] },
    { polish: "piękny", english: "pretty", synonyms: ["attractive"] },
    { polish: "zabawny", english: "funny", synonyms: ["humorous"] },
    { polish: "zrozumiały", english: "understandable", synonyms: ["comprehensible"] }
];

let currentWordIndex = 0;
let mistakes = [];
function nextWord() {
    if (currentWordIndex < words.length) {
        document.getElementById("polish-word").innerText = words[currentWordIndex].polish;
        document.getElementById("synonym-answer").value = '';
        document.getElementById("feedback").innerText = '';
        document.getElementById("hint").style.display = "none"; // Ukrycie podpowiedzi
        document.getElementById("options").style.display = "none"; // Ukrycie opcji
    } else {
        endQuiz();
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("synonym-answer").value.toLowerCase();
    const correctAnswers = words[currentWordIndex].synonyms.map(s => s.toLowerCase());

    if (correctAnswers.includes(userAnswer)) {
        document.getElementById("feedback").innerText = "Dobrze!";
        currentWordIndex++;
        nextWord();
    } else {
        document.getElementById("feedback").innerText = "Spróbuj ponownie!";
        document.getElementById("hint").innerText = `Podpowiedź: ${words[currentWordIndex].english}`; // Wyświetlenie podpowiedzi
        document.getElementById("hint").style.display = "block"; // Pokazanie podpowiedzi
        showOptions(); // Pokazanie opcji do wyboru
        mistakes.push(words[currentWordIndex]);
    }
}

function showOptions() {
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ''; // Czyszczenie poprzednich opcji

    // Wybór 5 synonimów (w tym poprawny)
    const correctAnswer = words[currentWordIndex].synonyms[0]; // Poprawna odpowiedź
    const options = [correctAnswer];

    // Dodawanie losowych synonimów
    while (options.length < 5) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const randomSynonym = randomWord.synonyms[0];
        if (!options.includes(randomSynonym)) {
            options.push(randomSynonym);
        }
    }

    // Tasowanie opcji
    options.sort(() => Math.random() - 0.5);

    // Tworzenie przycisków opcji
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkSelectedAnswer(option);
        optionsDiv.appendChild(button);
    });

    optionsDiv.style.display = "block"; // Pokazanie opcji
}

function checkSelectedAnswer(selected) {
    const correctAnswers = words[currentWordIndex].synonyms.map(s => s.toLowerCase());
    if (correctAnswers.includes(selected.toLowerCase())) {
        document.getElementById("feedback").innerText = "Dobrze!";
        currentWordIndex++;
        nextWord();
    } else {
        document.getElementById("feedback").innerText = "Spróbuj ponownie!";
        showNewOptions(); // Wywołanie funkcji do pokazania nowych opcji
    }
}

function showNewOptions() {
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ''; // Czyszczenie poprzednich opcji

    // Wybór 5 synonimów (w tym poprawny)
    const correctAnswer = words[currentWordIndex].synonyms[0]; // Poprawna odpowiedź
    const options = [correctAnswer];

    // Dodawanie losowych synonimów
    while (options.length < 5) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const randomSynonym = randomWord.synonyms[0];
        if (!options.includes(randomSynonym)) {
            options.push(randomSynonym);
        }
    }

    // Tasowanie opcji
    options.sort(() => Math.random() - 0.5);

    // Tworzenie przycisków opcji
    options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkSelectedAnswer(option);
        optionsDiv.appendChild(button);
    });

    optionsDiv.style.display = "block"; // Pokazanie opcji
}

function checkEnter(event) {
    if (event.key === "Enter") {
        checkAnswer(); // Sprawdzenie odpowiedzi po naciśnięciu klawisza Enter
    }
}

function endQuiz() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("repeat-btn").style.display = "block";
    alert("Quiz zakończony! Powtórz błędne odpowiedzi.");
}

function repeatMistakes() {
    currentWordIndex = 0;
    words = mistakes; // Powtarzamy tylko błędne odpowiedzi
    mistakes = []; // Resetujemy listę błędów
    document.getElementById("repeat-btn").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    nextWord();
}

// Inicjalizacja quizu
nextWord();