const BirthdayCards = ({person}) =>{
    const {name, birthday, image} = person
    const date = new Date(birthday)
    const month = date.toLocaleString("default", {month: 'long'})
    const day = date.getDate()
    return(
        <div className="birthday-item">
            <img src={image} alt={name}></img>
                <div>
                    <p className="name">{name}</p>
                    <p className="date">{month} {day}</p>
                </div>
        </div>
    )
}

export default BirthdayCards