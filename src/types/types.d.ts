export interface Patient {
    dni: number
    patientName: string
    patientSurName: string
    email: string
}

export interface Room {
    roomGroup: number
    roomSubGroup: string
    doctorName?: string
    patientsList: string[]
}
