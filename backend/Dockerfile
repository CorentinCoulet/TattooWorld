# Utilisez une image de base Node.js
FROM node:14

# Créez et définissez le répertoire de travail
WORKDIR /app

# Copiez le package.json et package-lock.json (ou yarn.lock)
COPY package.json .
COPY package-lock.json .

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers du backend
COPY . .

# Exposez le port sur lequel votre application Nest.js écoute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "start:prod"]
