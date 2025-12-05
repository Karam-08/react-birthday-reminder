import BirthdayCard from "./BirthdayCards";

const today = new Date();
const todayMonth = today.getMonth() + 1;

const MonthBirthdays = ({people}) =>{
    const monthList = people
        .filter((p) => new Date(p.birthday).getMonth() + 1 === todayMonth)
        .sort((a, b) => new Date(a.birthday).getDate() - new Date(b.birthday).getDate());

    if(monthList.length === 0) return <p id="empty">There are no Birthdays for this month.</p>

    return(
        <section className="section">
            <h2 className="section-title">Birthdays This Month:</h2>
            <div className="list">
                {monthList.map((person) =>(
                    <BirthdayCard key={person.id || person.name} person={person}/>
                ))}
            </div>
        </section>
    );
};

export default MonthBirthdays;