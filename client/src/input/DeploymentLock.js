// /client/src/input/DeploymentLock.js
// Prevents ANY possibility of card deployment faster than the server allows.
// Single source of truth for deployment availability.

export class DeploymentLock {
  constructor() {
    this.locked      = false;
    this.lockTimer   = null;
    this.LOCK_MS     = 1600; // slightly longer than server's 1500ms cooldown
    this.pendingDeploy = false; // flag: user clicked while locked
  }

  // Call before attempting any deployment
  tryAcquire() {
    if (this.locked) return false;
    this.locked = true;
    this.lockTimer = setTimeout(() => {
      this.locked  = false;
      this.lockTimer = null;
    }, this.LOCK_MS);
    return true;
  }

  // Force-release (e.g., server responded with rate_limited)
  release() {
    if (this.lockTimer) {
      clearTimeout(this.lockTimer);
      this.lockTimer = null;
    }
    this.locked = false;
  }

  // Force-extend lock (server rate limited us — wait longer)
  extendLock(extraMs) {
    if (this.lockTimer) clearTimeout(this.lockTimer);
    this.lockTimer = setTimeout(() => {
      this.locked  = false;
      this.lockTimer = null;
    }, extraMs + 200); // extra buffer
  }

  get isLocked() { return this.locked; }
}

export const deploymentLock = new DeploymentLock();
