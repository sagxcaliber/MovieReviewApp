# MovieReviewApp
MovieReviewApp

# Docker Installation CMD
# 1. Update your package index
sudo yum update -y

# 2. Install Docker
sudo amazon-linux-extras install docker -y

# 3. Start Docker service
sudo service docker start

# 4. Add ec2-user to the docker group (optional, so you can run docker without sudo)
sudo usermod -a -G docker ec2-user

# 5. Verify Docker is installed
docker --version

# ==========================

# Once the Docker is Installed and verified next steps Below:

# 1. give permission to sh files to execute
chmod +x dockerCMD.sh
chmod +x start.sh

# 2. verify that the docker is running
docker -info

# 2.1 if not running for mac use 
open -a docker

# 3. once you see it running after that we need to execute the dockerCMD that will build the image:

source dockerCMD.sh


Notes
Frontend URL (Local): http://localhost:3000

Backend API (Local): http://localhost:8000

Public Test URL: http://3.109.49.169:3000/
