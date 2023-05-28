import { useReducer } from "react"
import { TurnoCreate } from "../codegen_output"

interface FormState {
    inputValues: TurnoCreate
}

const INITIAL_STATE = {
    id_medico: 1,
    id_paciente: 1,
    motivo_consulta: "Dolor de cabeza"
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

const newTurnReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
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

const useNewTurnForm = () => {
    return useReducer(newTurnReducer, INITIAL_STATE)
}

export default useNewTurnForm 