#!/usr/bin/bash
cd /var/www/proyecto/antcine || exit 1
if git pull; then
    find . -type d -exec chmod 755 {} \;
    find . -type f -exec chmod 644 {} \;
else
    echo "Error al actualizar el repositorio."
    exit 1
fi
