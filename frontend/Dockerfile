FROM node:14

# Répertoire de travail de l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Exposer le port de l'application
EXPOSE 3000

# Commande pour démarrer le serveur
CMD ["npx", "serve", "-s", "build"]
