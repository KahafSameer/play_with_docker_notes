# Play with Docker: Notes Website

A static website of Docker concepts and notes (HTML/CSS/JS), containerized with **Nginx**.

## Files

| File | Purpose |
|---|---|
| `index.html`, `css/style.css`, `js/script.js` | The notes site |
| `Dockerfile` | `nginx:alpine` image that serves the site with the custom `nginx.conf` on port 80 |
| `docker-compose.yml` | `playwithdocker-site` service on **port 4000**, with the site and `nginx.conf` mounted as volumes for live edits |
| `nginx.conf` | Nginx configuration |

## Run with Docker Compose

```bash
git clone https://github.com/KahafSameer/play_with_docker_notes.git
cd play_with_docker_notes
docker compose up --build
```

Open http://localhost:4000.

## Run with Docker only

```bash
docker build -t play-with-docker-notes .
docker run -p 4000:80 play-with-docker-notes
```

Or just open `index.html` in a browser.
