// /server/validation/InputValidator.js
// Validates and sanitizes EVERY payload before touching game state.
// Returns { valid: bool, data: sanitized, error: string }

export class InputValidator {

  static deployTroop(raw) {
    if (!raw || typeof raw !== 'object')
      return { valid: false, error: 'Invalid payload type' };

    const VALID_CARDS = [
      'skirmisher','archerVolley','bombSquad',
      'shieldWall','cavalryRush','spellcaster',
      'champion','warEngine','titan',
      'low', 'mid', 'high'
    ];
    const VALID_LANES = ['left', 'center', 'right'];

    const cardType = String(raw.cardType || '').trim();
    const lane     = String(raw.lane     || '').trim();
    const roomCode = String(raw.roomCode || '').trim().toUpperCase();

    if (!VALID_CARDS.includes(cardType))
      return { valid: false, error: `Unknown card type: ${cardType}` };
    if (!VALID_LANES.includes(lane))
      return { valid: false, error: `Unknown lane: ${lane}` };
    if (!/^[A-Z0-9\-]{6,12}$/.test(roomCode)) // allow DEMO-XYZ
      return { valid: false, error: 'Invalid room code format' };

    return { valid: true, data: { cardType, lane, roomCode } };
  }

  static submitAnswer(raw) {
    if (!raw || typeof raw !== 'object')
      return { valid: false, error: 'Invalid payload' };

    const questionId = String(raw.questionId || '').trim();
    const answer     = String(raw.answer     || '').trim().slice(0, 200); // max 200 chars
    const roomCode   = String(raw.roomCode   || '').trim().toUpperCase();

    if (!questionId || questionId.length > 50)
      return { valid: false, error: 'Invalid question ID' };
    if (!answer)
      return { valid: false, error: 'Empty answer' };
    if (!/^[A-Z0-9\-]{6,12}$/.test(roomCode))
      return { valid: false, error: 'Invalid room code format' };

    return { valid: true, data: { questionId, answer, roomCode } };
  }

  static joinRoom(raw) {
    if (!raw || typeof raw !== 'object')
      return { valid: false, error: 'Invalid payload' };

    const roomCode   = String(raw.roomCode   || '').trim().toUpperCase();
    const playerName = String(raw.playerName || '').trim().slice(0, 20); // max 20 chars

    if (!/^[A-Z0-9\-]{6,12}$/.test(roomCode))
      return { valid: false, error: 'Invalid room code format' };
    if (!playerName || playerName.length < 1)
      return { valid: false, error: 'Player name required' };

    // Sanitize: allow only alphanumeric + space + basic punctuation
    const safeName = playerName.replace(/[^a-zA-Z0-9 _\-\.]/g, '').slice(0, 20);
    if (!safeName)
      return { valid: false, error: 'Player name contains only invalid characters' };

    return { valid: true, data: { roomCode, playerName: safeName } };
  }

  static roomCode(raw) {
    const code = String(raw || '').trim().toUpperCase();
    if (!/^[A-Z0-9\-]{6,12}$/.test(code))
      return { valid: false, error: 'Invalid room code format' };
    return { valid: true, data: code };
  }
}
