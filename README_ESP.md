# Agenda de Turnos para Centros Médicos (Frontend)

La Agenda de Turnos para Centros Médicos es una aplicación gestión de turnos diseñada para centros médicos. Esta aplicación mejora la experiencia del paciente en las salas de espera y permite al propietario mostrar anuncios mientras esperan.

## Descripción

Esta aplicación versátil ayuda en la gestión y la visualización de turnos a través de tres vistas diferentes:

- **Vista de Recepcionista**: Permite a los recepcionistas gestionar los turnos, incluyendo operaciones para registrar consultorios, médicos y pacientes.

  ![Captura de pantalla de vista de recepcionista](public/vista_recepcionistas.png)

- **Vista de Médico**: Proporciona a los médicos una vista organizada de su lista de pacientes, razon de consulta, y llamado del siguiente paciente.

  <img src="public/vista_medicos.jpg" alt="Captura de pantalla de vista de médico" width="300"/>
  <!-- ![Captura de pantalla de vista de médico](public/vista_medicos.jpg) -->

- **Vista de Paciente**: Mostrada en pantallas de TV agrupadas por sala de espera, los pacientes pueden ver el estado actual de todos los consultorios. Notifica a los pacientes cuando es su turno (esquina superior derecha).

  ![Captura de pantalla de vista de paciente](public/vista_pacientes.png)

## Pre-requisitos

Esta aplicación frontend requiere del backend para funcionar. Por favor, asegúrate de tener el backend en funcionamiento. Puedes encontrarlo [aquí](https://github.com/allanes/turnos-cm-backend).

## Instalación

```bash
# Clona este repositorio
git clone https://github.com/allanes/turnos-cm-frontend.git

# Ve al repositorio
cd <tu-repo>

# Instala las dependencias
npm install

# Ejecuta la aplicación
npm start
