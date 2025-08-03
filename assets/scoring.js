function calculateHBBI(answers) {
    const leftQuestions = [1,2,5,6,9,10];
    const rightQuestions = [3,4,7,8,11,12];
    
    let leftScore = 0;
    let rightScore = 0;
    
    leftQuestions.forEach(id => {
        const ans = answers[id];
        const q = questions.find(q => q.id === id);
        leftScore += q.value[ans];
    });
    
    // ... perhitungan dimensi lain
    
    return {
        left: (leftScore / 30) * 100,
        right: (rightScore / 30) * 100
    };
}
