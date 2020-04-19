import React from 'react'

const NoteContext = React.createContext({
    openFolder: () => {},
    isOpen: "",
    folders: [],
    notes: [],
    delete: () => {},
    update: () => {}
})

export default NoteContext