# MovieReviewApp

A full-stack movie review sentiment analysis application built with React (frontend) and FastAPI (backend). This guide walks you through cloning, setting up, and running the app using Docker.

---

## GitHub Repository

Clone the repository:

```bash
git clone https://github.com/sagxcaliber/MovieReviewApp
```

---

## Docker Installation (Amazon Linux)

Follow these steps to install Docker on an Amazon Linux instance:

1. **Update the package index**

```bash
sudo yum update -y
```

2. **Install Docker**

```bash
sudo amazon-linux-extras install docker -y
```

3. **Start Docker service**

```bash
sudo service docker start
```

4. **Add current user to Docker group** (optional)

```bash
sudo usermod -a -G docker ec2-user
```

5. **Verify Docker installation**

```bash
docker --version
```

---

## Post-Docker Setup

Once Docker is installed and running:

1. **Give execute permission to shell scripts**

```bash
chmod +x dockerCMD.sh
chmod +x start.sh
```

2. **Verify Docker is running**

```bash
docker info
```

> If using macOS and Docker is not running, start it manually:

```bash
open -a Docker
```

3. **Build and run the Docker containers**

```bash
source dockerCMD.sh
```

---

## Access URLs

- **Frontend (server)**: [http://3.109.49.169:3000](http://3.109.49.169:3000)  
- **Backend API  Docs (server)**: [hhttp://3.109.49.169:8000/docs](http://3.109.49.169:8000/docs)  
- **Public Test URL**: [http://3.109.49.169:3000](http://3.109.49.169:3000)

---
