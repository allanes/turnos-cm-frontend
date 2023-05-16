import officesIcon from '../assets/icons/officesIcon.png'
import doctorsIcon from '../assets/icons/doctorsIcon.png'
import patientsIcon from '../assets/icons/patientsIcon.png'
import turnsIcon from '../assets/icons/turnsIcon.png'
import waitingRoomIcon from '../assets/icons/waitingRoomIcon.png'
import waitingRoomIcon1 from '../assets/icons/waitingRoomIcon1.png'

export const  categoriesList_sidebar = [
    {title: "Consultorios", link: "/", icon: officesIcon},
    {title: "Médicos", link: "/doctors", icon:doctorsIcon},
    {title: "Pacientes", link: "/patients", icon:patientsIcon},
    {title: "Turnos", link: "/turns", icon:turnsIcon},
    {title: "Salas", link: "/waitingRoom/0", icon:waitingRoomIcon},
    {title: "Sala 1", link: "/waitingRoom/1", icon:waitingRoomIcon1},
    {title: "Sala 2", link: "/waitingRoom/2", icon:waitingRoomIcon1},
]

export const url_waitingRoom = '/waitingRoom'