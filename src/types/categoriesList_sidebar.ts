import officesIcon from '../assets/icons/officesIcon.png'
import doctorsIcon from '../assets/icons/doctorsIcon.png'
import patientsIcon from '../assets/icons/patientsIcon.png'
import turnsIcon from '../assets/icons/turnsIcon.png'
import waitingRoomIcon from '../assets/icons/waitingRoomIcon.png'
import waitingRoomIcon1 from '../assets/icons/waitingRoomIcon1.png'
import downloadsIcon from '../assets/icons/file-earmark-arrow-down.svg'

export const  categoriesList_sidebar = [
    {title: "Turnos", link: "/", icon:turnsIcon},
    {title: "Consultorios", link: "/offices", icon: officesIcon},
    {title: "Pacientes", link: "/patients", icon:patientsIcon},
    {title: "Médicos", link: "/doctors", icon:doctorsIcon},
    {title: "Salas", link: "/waitingRoom/0", icon:waitingRoomIcon},
    {title: "Sala 1", link: "/waitingRoom/1", icon:waitingRoomIcon1},
    {title: "Sala 2", link: "/waitingRoom/2", icon:waitingRoomIcon1},
    {title: "Descargas", link: "/downloads", icon:downloadsIcon},
]

export const url_waitingRoom = '/waitingRoom'