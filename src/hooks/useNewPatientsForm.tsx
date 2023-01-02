import { useReducer } from "react"
import { Patient } from "../types/types"

interface FormState {
    inputValues: Patient
}

const INITIAL_STATE = {
    dni: 0,
    patientName: '',
    patientSurName: '',
    email: ''
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