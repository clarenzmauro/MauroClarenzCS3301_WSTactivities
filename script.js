document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const sentenceCount = document.getElementById('sentenceCount');

    function updateCounts() {
        const text = textInput.value.trim();
        
        // Count words
        const words = text === '' ? 0 : text
            .split(/\s+/)
            .filter(word => word.length > 0)
            .length;
        
        // Count sentences
        const sentences = text === '' ? 0 : text
            .split(/[.!?]+\s*/)
            .filter(sentence => sentence.length > 0)
            .length;
        
        // Update display
        wordCount.textContent = `Words: ${words}`;
        sentenceCount.textContent = `Sentences: ${sentences}`;
    }

    // Add event listeners for real-time updates
    textInput.addEventListener('input', updateCounts);
    
    // Initial count
    updateCounts();
});
