FROM node:latest

# Create directory
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# Copy and install bot
COPY package.json /usr/src/bot
RUN npm install

COPY . /usr/src/bot

CMD ["node", "discordbot.js"]
