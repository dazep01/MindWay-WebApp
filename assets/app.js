// Inisialisasi
let currentQuestion = 0;
let answers = {};
const questions = []; // Diisi dari questions.json

// Tampilkan soal
function showQuestion(index) {
    const q = questions[index];
    document.getElementById('questionStatement').textContent = q.statement;
    
    // Render opsi jawaban
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    q.option.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(q.id, i));
        optionsContainer.appendChild(btn);
    });
    
    // Update progress
    updateProgress(index);
}

// Simpan jawaban
function selectAnswer(questionId, optionIndex) {
    answers[questionId] = optionIndex;
    // Beri visual feedback pada jawaban terpilih
}

// Hitung hasil saat tes selesai
function calculateResults() {
    // Implementasi algoritma skoring
    const scores = {
        hbdi: { left: 0, right: 0 },
        vark: { visual: 0, auditory: 0, read: 0, kinesthetic: 0 },
        // ... dst
    };
    
    // Simpan hasil di localStorage
    localStorage.setItem('mindwayResults', JSON.stringify(scores));
    
    // Redirect ke halaman hasil
    window.location.href = 'result.html';
}
