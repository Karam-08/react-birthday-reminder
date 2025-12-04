const BirthdayItem = ({person}) =>{
    const {name, birthday, image} = person
    const date = new Date(birthday)
    const month = date.toLocaleString("default", {month: 'long'})
    const day = date.getDate()
    return(
        <div>
            <img src={image} alt={name}>
                <div>
                    <p className="name">{name}</p>
                    <p className="date">{month} {day}</p>
                </div>
            </img>
        </div>
    )
}

export default BirthdayItem