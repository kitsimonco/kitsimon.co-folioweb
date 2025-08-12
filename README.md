# kitsimon.co - Portfolio (Static)

## Structure

- `index.html`: Main HTML
- `assets/css/styles.css`: Styles extracted from inline CSS
- `assets/js/main.js`: Scripts extracted from inline JS

## Local run

Use any static server. Examples:

- Python 3: `python3 -m http.server 5173`
- Node (http-server): `npx http-server . -p 5173 --silent`

Then open `http://localhost:5173`.

## Notes

- Custom cursor is disabled on touch devices via `@media (hover: none)`.
- Menu button has `aria-pressed` and `aria-label` for accessibility.