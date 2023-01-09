import { useReducer } from "react"
import { Consultorio } from "../codegen_output"

interface FormState {
    inputValues: Consultorio
}

const INITIAL_STATE = {
    id: 20,
    sala: 1,
    numero: 1,
    descripcion: "Consultorio"
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

const newOfficeReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
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

const useNewOfficeForm = () => {
    return useReducer(newOfficeReducer, INITIAL_STATE)
}

export default useNewOfficeForm 