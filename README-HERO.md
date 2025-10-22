Hero background assets

This project supports an optional video or GIF background for the hero section.

Where to put files
- MP4 video: place at `public/assets/hero.mp4`
- Poster image (optional): `public/assets/hero-poster.jpg`
- GIF fallback (optional): `public/assets/hero.gif`

Notes
- Video should be muted and as small as possible for performance (recommend ~2-5s loop, H.264 or AV1 depending on browser support).
- If you don't add a local video, the component currently uses an Unsplash image for the hero background.

Free sources
- Unsplash (https://unsplash.com)
- Pexels (https://www.pexels.com)
- Videvo (https://www.videvo.net)

How it works
- The hero component attempts to play `/assets/hero.mp4` first.
- If the browser can't play the video, the CSS `poster` or the existing image fallback will show.

If you want, I can add a small optimization to lazy-load the video on desktop only and keep the image for mobile to save bandwidth.