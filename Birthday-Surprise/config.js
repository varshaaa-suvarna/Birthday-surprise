/* ============================================================
   CONFIG.JS
   Edit everything here. Nothing else in the project needs to
   change if you just want new text, a new password, or new
   photos. Follow the comments above each section.
============================================================ */

const CONFIG = {

  /* ---------- BASICS ---------- */
  friendName: "Vaishnavi",

  // The password your friend has to type to unlock the site.
  // Not case sensitive.
  password: "27/07/2006",

  /* ---------- WELCOME PAGE ---------- */
  welcome: {
    heading: "Hey! I made something for you.\nDo you wanna see it?",
    yesLabel: "YES",
    noLabel: "NO",
    noText: "SERIOUSLY?! How dare you! Hmph 😤",
    noButton: "Go Back",
    yesText: "That's my good girl ❤️",
    yesButton: "Continue"
  },

  /* ---------- BIRTHDAY REVEAL PAGE ---------- */
  birthday: {
    title: "HAPPY BIRTHDAY",
    subtitle: "to the girl who makes everything better",
    // Put your friend's photo in /images and name it here
    photo: "images/friend-photo.jpg",
    nextButton: "See our memories →"
  },

  /* ---------- MEMORIES / GALLERY PAGE ---------- */
  memories: {
    title: "Memories ❤️",
    searchPlaceholder: "Moments of us ❤️",
    // Add as many images as you like. Put the files in /images
    // and add a caption for each one.
    images: [
      { src: "images/memory1.jpg", caption: "The day it all started" },
      { src: "images/memory2.jpg", caption: "That road trip" },
      { src: "images/memory3.jpg", caption: "Way too much laughing" },
      { src: "images/memory4.jpg", caption: "College chaos" },
      { src: "images/memory5.jpg", caption: "Best. Day. Ever." },
      { src: "images/memory6.jpg", caption: "Just us being us" }
    ]
  },

  /* ---------- TIMELINE PAGE ---------- */
  timeline: [
    { title: "First Meet",         text: "The day two strangers became forever friends.",        icon: "🐾" },
    { title: "First Selfie",       text: "So awkward. So iconic. Still on my lock screen.",       icon: "📸" },
    { title: "Funniest Memory",    text: "The one we still can't tell without crying laughing.",  icon: "😂" },
    { title: "College Days",       text: "Late nights, deadlines, and way too much chai.",        icon: "📚" },
    { title: "Trips",              text: "Every trip is better with you causing chaos next to me.", icon: "🚗" },
    { title: "Birthday Memories",  text: "All the birthdays we've celebrated, and counting.",     icon: "🎂" },
    { title: "Today",              text: "Still my favourite person, hands down.",                icon: "❤️" }
  ],

  /* ---------- REASONS YOU'RE AMAZING (flip cards) ---------- */
  reasons: [
    { title: "Your Smile",          text: "It genuinely fixes bad days. Mine especially." },
    { title: "Your Kindness",       text: "You make people feel seen, always." },
    { title: "Your Support",        text: "You show up. Every single time." },
    { title: "Your Caring Nature",  text: "You worry about everyone before yourself." },
    { title: "Your Positivity",     text: "You find sunshine in the messiest days." },
    { title: "Your Dreams",         text: "Big, bold, and completely you. Chase them." },
    { title: "Your Strength",       text: "You carry more than people realise, gracefully." },
    { title: "Our Friendship",      text: "Easily one of my favourite things in this life." }
  ],

  /* ---------- MUSIC PAGE ----------
     Put an mp3 in /music and update the path below.
     IMPORTANT: this template does not ship with any copyrighted
     song file or lyrics. Add your own licensed / purchased audio
     file, and write out the lyrics you have rights to use below
     (or leave the placeholder lines for a purely instrumental feel).
  ---------------------------------- */
  music: {
    title: "A song for you",
    artist: "add the artist name here",
    src: "music/song.mp3",
    // One line at a time. Leave as-is if you'd rather not show lyrics.
    lyrics: [
      "🎵 ...",
      "🎵 add your own lyric lines here in config.js",
      "🎵 ...",
      "🎵 one line at a time, they'll animate in ✨"
    ]
  },

  /* ---------- LETTER PAGE ---------- */
  letter: {
    salutation: "Dear Vaishnavi,",
    body:
`Happy Birthday to the most amazing best friend anyone could ask for.

Thank you for always standing beside me, supporting me, making me laugh, and creating unforgettable memories.

You make life brighter just by being yourself.

May this year bring happiness, success, peace, love, laughter, good health, and everything you've dreamed of.

Never forget how beautiful, kind, talented and special you are.

No matter where life takes us, I hope we remain close forever.

Happy Birthday once again.`,
    signoff: "With lots of love ❤️"
  },

  /* ---------- WISHES WALL ---------- */
  wishes: [
    "May this year bring you everything you've been quietly hoping for.",
    "Stay exactly this kind. The world needs it.",
    "Here's to more chaos, more laughter, more us.",
    "You deserve every good thing coming your way.",
    "Keep chasing your dreams, I'm cheering loudly from here.",
    "Never change. Just grow into more of you.",
    "Thank you for a friendship I never take for granted.",
    "Happiest of birthdays to my favourite human."
  ],

  /* ---------- FINAL PAGE ---------- */
  final: {
    heading: "HAPPY BIRTHDAY VAISHNAVI ❤️",
    body:
`Thank you for being the best friend anyone could ever ask for.

May every dream come true.
Keep smiling. Stay healthy. Stay happy.

I'll always be cheering for you.

Happy Birthday ❤️`,
    replayButton: "Watch it again"
  }
};
