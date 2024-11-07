"use strict";
{
    // ===========================
    function countWordOccurrences(sentence, word) {
        const sentenceLower = sentence.toLowerCase();
        const wordLower = word.toLowerCase();
        const regex = new RegExp(`\\b${wordLower}\\b`, 'g');
        const matches = sentenceLower.match(regex);
        return matches ? matches.length : 0;
    }
    console.log(countWordOccurrences("I love typescript", "typescript"));
    // ===========================
}
