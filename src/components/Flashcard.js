import React from 'react'
import { useState } from 'react'
import { Home } from './FlashCardPages'

const Flashcard = () => {
    const [content, setContent] = useState(<Home />);
    return (
        <main>
            {content}
        </main>
    )
}

export default Flashcard