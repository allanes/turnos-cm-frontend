import { useEffect } from 'react'
import io from 'socket.io-client'
import { PORT_SERVER } from '../types/config'

const socket = io(PORT_SERVER)

export const useSocket = (event: string, callback: (...args: any[]) => void) => {
  useEffect(() => {
    socket.on(event, callback)
    return () => {
      socket.off(event)
    }
  }, [event, callback])
}