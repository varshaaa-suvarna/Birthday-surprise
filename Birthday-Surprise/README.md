# Birthday Surprise — for Vaishnavi 🐾

A single-page interactive birthday site. Open `index.html` in any browser to run it — no server or build step needed.

## 1. Set the password
Open `config.js` → change the `password` value. Default is `puppylove`.

## 2. Add photos
Drop your images into the `/images` folder, then in `config.js`:
- `birthday.photo` → the big reveal photo
- `memories.images` → the gallery list (path + caption for each)

Until you add real files, the site shows a small "add this image" placeholder instead of breaking.

## 3. Add music
This template does **not** ship with any song audio or lyrics, since that content is copyrighted. To add music:
1. Get an mp3 you have the rights to use (your own recording, a royalty-free track, or a purchased/licensed file) and put it in `/music`.
2. Update `music.src` in `config.js` to match the filename.
3. Update `music.artist` and, if you like, replace the placeholder lines in `music.lyrics` with your own words — or leave them as decorative dots.

## 4. Edit any text
Everything you'd want to personalize — the welcome message, the letter, the timeline, the flip-card reasons, the wishes wall, the final message — lives in `config.js` with comments above each section.

## 5. Edit colors
All colors are CSS variables at the top of `style.css` (the `:root` block). Change one hex value and it updates everywhere it's used.

## Folder structure
```
Birthday-Surprise/
├── index.html      → structure of every page/scene
├── style.css        → all colors, fonts, layout, animation
├── script.js        → page transitions & interactions (rarely needs edits)
├── config.js        → ALL editable text, images list, password
├── images/          → your photos go here
├── music/           → your song file goes here
└── icons/, assets/  → optional extra assets
```

## Flow of the site
Loading → Password → Welcome (Yes/No) → Birthday Reveal → Memories Gallery → Timeline → Reasons You're Amazing → Music → Envelope → Letter → Wishes Wall → Final Surprise (with a Replay button).

Happy Birthday, Vaishnavi! 🎉
