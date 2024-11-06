{
    // ===========================

    function countWordOccurrences(sentence: string, word: string): number {
        const sentenceLower = sentence.toLowerCase();
        const wordLower = word.toLowerCase();
        const regex = new RegExp(`\\b${wordLower}\\b`, 'g');

        const matches = sentenceLower.match(regex);

        return matches ? matches.length : 0;
    }

    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript",));

    // ===========================

}