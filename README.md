# Midterm – Responsive MVC Site

## Team
- **Leader:** Jason L.
- **Member:** Christian U.

## Live Site (Web4)
🔗 https://in-info-web4.luddy.indianapolis.iu.edu/~jasoluu/n315/midtermNav/

## Assignment Details
This is a group project. The team had to build a fully responsive website that:

- Has navigation that switches to a mobile menu on small screens
- Has at least 4 links that change the page content
- Uses the MVC (Model–View–Controller) pattern
- Loads some content on each page (it doesn't need a lot)

The team leader puts both names in this README and submits the GitHub link.

## Pages
| Link    | Route      |
|---------|------------|
| Home    | `#home`    |
| About   | `#about`   |
| Photos  | `#photos`  |
| Contact | `#contact` |

## How It Works (MVC)
- **Model** (`model/model.js`): `loadPage(pageID)` puts the matching page content into `<main>`.
- **View** (`pages/*.js`): each page exports its HTML as a template string.
- **Controller** (`app/app.js`): listens for `hashchange`, reads the hash from the URL and calls `loadPage()`.

## Project Structure
```
├── index.html
├── app/
│   └── app.js
├── model/
│   └── model.js
├── pages/
│   ├── home.js
│   ├── about.js
│   ├── photos.js
│   └── contact.js
└── css/
    └── styles.css
```

## Running Locally
The site uses ES modules, so it has to run on a local server (VS Code Live Server, for example). Opening `index.html` directly from your files won't load the scripts.
