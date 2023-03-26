import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ReadAll = () => {
    const [allItems, setAllItems] = useState()

    useEffect(() => {
        document.title = "MERN Market"

        const getAllItems = async () => {
            const response = await fetch("https://mern-stack-books.herokuapp.com")
            const jsonResponse = await response.json()
            setAllItems(jsonResponse)
        }
        getAllItems()
    }, [])

    return (
        <div className="grid-container-in">
            {allItems && allItems.allItems.map(item =>
                <Link to={`/item/${item._id}`} key={item._id} className="card">
                    <img src={item.image} alt="item" />
                    <div className="texts-area">
                        <h2>¥{item.price}</h2>
                        <h3>{item.title}</h3>
                        <p>{item.description.substring(0, 80)}...</p>
                    </div>
                </Link>

            )}
        </div>
    )
}

export default ReadAll
