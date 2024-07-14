FROM node:16

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
EXPOSE 4173

# Commande pour démarrer le serveur
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]
