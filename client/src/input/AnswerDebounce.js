// /client/src/input/AnswerDebounce.js
// Prevents double-submit on question answers.
// One submit per question ID — server validates too, but this prevents UX flicker.

export class AnswerDebounce {
  constructor() {
    this.lastSubmittedId = null;
    this.submitting      = false;
    this.SUBMIT_LOCK_MS  = 1800; // block resubmission for 1.8s
    this._timer          = null;
  }

  trySubmit(questionId, answer, socketEmitFn) {
    // Already submitted this question
    if (this.lastSubmittedId === questionId) return false;
    // Currently in submit cooldown
    if (this.submitting) return false;

    this.lastSubmittedId = questionId;
    this.submitting      = true;

    socketEmitFn('submit_answer', {
      questionId,
      answer,
      clientTimestamp: Date.now()
    });

    this._timer = setTimeout(() => {
      this.submitting = false;
    }, this.SUBMIT_LOCK_MS);

    return true;
  }

  // Reset when new question arrives
  onNewQuestion() {
    this.lastSubmittedId = null;
    if (this._timer) clearTimeout(this._timer);
    this.submitting = false;
  }

  destroy() {
    if (this._timer) clearTimeout(this._timer);
  }
}

export const answerDebounce = new AnswerDebounce();
