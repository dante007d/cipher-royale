import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class QuestionManager {
  constructor(bankFile = 'questions_default.json') {
    this.questions = [];
    this.loadBank(bankFile);
  }

  loadBank(filename) {
    try {
      const filePath = path.join(__dirname, '..', 'data', filename);
      const raw = readFileSync(filePath, 'utf8');
      const data = JSON.parse(raw);
      this.questions = data.questions || [];
      console.log(`[QuestionManager] Loaded ${this.questions.length} questions from ${filename}`);
    } catch (err) {
      console.error(`[QuestionManager] Failed to load ${filename}:`, err.message);
      this.questions = [];
    }
  }

  createPlayerState() {
    return {
      usedIds: new Set(),
      currentQuestion: null,
      state: 'IDLE',
    };
  }

  getNextQuestion(playerQState) {
    // Reset pool if exhausted
    if (playerQState.usedIds.size >= this.questions.length) {
      playerQState.usedIds.clear();
    }

    const available = this.questions.filter(q => !playerQState.usedIds.has(q.id));
    if (available.length === 0) return null;

    const q = available[Math.floor(Math.random() * available.length)];
    playerQState.usedIds.add(q.id);
    playerQState.currentQuestion = q;
    playerQState.state = 'QUESTION';

    return {
      id: q.id,
      text: q.text,
      type: q.type,
      difficulty: q.difficulty,
      options: q.options || null,
      timeLimit: 15000,
    };
  }

  validateAnswer(questionId, answer) {
    const q = this.questions.find(q => q.id === questionId);
    if (!q) return { correct: false, tokens: 0 };

    let correct = false;
    const normalizedAnswer = String(answer || '').toLowerCase().trim();

    if (q.type === 'fill_blank') {
      // Check accepted answers with Levenshtein distance ≤ 1
      const accepted = q.acceptedAnswers || [q.answer];
      correct = accepted.some(a => levenshtein(normalizedAnswer, a.toLowerCase().trim()) <= 1);
    } else {
      correct = normalizedAnswer === q.answer.toLowerCase().trim();
    }

    return {
      correct,
      tokens: correct ? (q.tokens || 0) : 0,
    };
  }
}

function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] = b[i - 1] === a[j - 1]
        ? matrix[i - 1][j - 1]
        : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
    }
  }
  return matrix[b.length][a.length];
}
