let audioContext: AudioContext | null = null;
let puppyBark: HTMLAudioElement | null = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  const AudioContextClass = window.AudioContext;
  if (!AudioContextClass) return null;
  audioContext ??= new AudioContextClass();
  if (audioContext.state === "suspended") void audioContext.resume();
  return audioContext;
}

export function playClickSound() {
  const context = getAudioContext();
  if (!context) return;

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(880, now);
  oscillator.frequency.exponentialRampToValueAtTime(520, now + 0.05);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.065, now + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.065);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.07);
}

export function playWoofSound() {
  if (typeof window === "undefined") return;

  // Real puppy bark sound by Alexander, Orange Free Sounds (CC BY 4.0).
  // Source: https://orangefreesounds.com/puppy-bark-sound/
  if (!puppyBark) {
    puppyBark = new Audio("https://www.orangefreesounds.com/wp-content/uploads/2015/05/Puppy-bark-sound.mp3");
    puppyBark.preload = "auto";
    puppyBark.volume = 0.42;
  }

  puppyBark.currentTime = 0;
  void puppyBark.play().catch(() => {
    // Browsers can block playback until the user has interacted with the page.
  });
}
