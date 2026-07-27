import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Button from '../Button/Button'
import { useState } from 'react'

export default function Home() {
    let [likes, setLikes] = useState(0)
    let [dislikes, setDislikes] = useState(0)

    function increaseLikes() {
        setLikes(likes + 1)
    }

    function increaseDislikes() {
        setDislikes(dislikes + 1)
    }

    return (
        <>
            <Navbar />
            <div className="text-center my-4">
                <h2>👍 Likes: {likes}</h2>
                <h2>👎 Dislikes: {dislikes}</h2>

                <Button text="Like 👍" onClick={increaseLikes} />
                <Button text="Dislike 👎" onClick={increaseDislikes} />

                <div
                    className={
                        likes > dislikes ? 'bg-success text-white p-3 rounded' : 'bg-danger text-white p-3 rounded'
                    }
                >
                    <h4>
                        {likes > dislikes
                            ? 'THE BEST😍'
                            : "SO BAD🙂"}
                    </h4>
                </div>
            </div>
            <Footer />
        </>
    )
} 
