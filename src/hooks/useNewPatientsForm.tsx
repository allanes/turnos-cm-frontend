import { useReducer } from "react"
import { Paciente } from "../codegen_output"

interface FormState {
    inputValues: Paciente
}

const INITIAL_STATE = {
    id: 12345678,
    nombre: "Nombre",
    apellido: "Apellido",
    email: "email@gmail.com",
    telefono: "03814567899",
    turnos: []
}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

const newPatientReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch (action.type) {
        case "change_value":
            const { inputName, inputValue } = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }

        case "clear":
            return INITIAL_STATE

        default:
            return state
    }
}

const useNewPatientForm = () => {
    return useReducer(newPatientReducer, INITIAL_STATE)
}

export default useNewPatientForm 