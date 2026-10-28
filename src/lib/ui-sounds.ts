let audioContext: AudioContext | null = null;
let puppyBark: HTMLAudioElement | null = null;
let soundsMuted = false;

export function isSoundMuted() {
  return soundsMuted;
}

export function setSoundMuted(muted: boolean) {
  soundsMuted = muted;
  if (muted) {
    stopWoofSound();
    if (audioContext?.state === "running") void audioContext.suspend();
  }
}

function getAudioContext() {
  if (soundsMuted || typeof window === "undefined") return null;
  const AudioContextClass = window.AudioContext;
  if (!AudioContextClass) return null;
  audioContext ??= new AudioContextClass();
  if (audioContext.state === "suspended") void audioContext.resume();
  return audioContext;
}

export function playHoverSound() {
  const context = getAudioContext();
  if (!context) return;

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(680, now);
  oscillator.frequency.exponentialRampToValueAtTime(540, now + 0.035);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.018, now + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.05);
}

export function playClickSound() {
  const context = getAudioContext();
  if (!context) return;

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(880, now);
  oscillator.frequency.exponentialRampToValueAtTime(460, now + 0.06);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.038, now + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.08);
}

export function playWoofSound() {
  if (soundsMuted || typeof window === "undefined") return;

  // Real puppy bark sound by Alexander, Orange Free Sounds (CC BY 4.0).
  // Source: https://orangefreesounds.com/puppy-bark-sound/
  if (!puppyBark) {
    puppyBark = new Audio("https://www.orangefreesounds.com/wp-content/uploads/2015/05/Puppy-bark-sound.mp3");
    puppyBark.preload = "auto";
    puppyBark.volume = 0.42;
    puppyBark.addEventListener("timeupdate", () => {
      if (puppyBark && puppyBark.currentTime >= 4) stopWoofSound();
    });
  }

  puppyBark.currentTime = 0;
  void puppyBark.play().catch(() => {
    // Browsers can block playback until the user has interacted with the page.
  });
}

export function stopWoofSound() {
  if (!puppyBark) return;
  puppyBark.pause();
  puppyBark.currentTime = 0;
}
