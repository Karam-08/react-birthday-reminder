import BirthdayCard from "./BirthdayCards";

const today = new Date();
const todayMonth = today.getMonth() + 1;
const todayDay = today.getDate();

const TodayBirthdays = ({people}) =>{
    const todayList = people.filter((p) =>{
        const d = new Date(p.birthday);
        return d.getMonth() + 1 === todayMonth && d.getDate() === todayDay;
    });

    if(todayList.length === 0) return <p id="empty">There are no Birthdays for today.</p>

    return(
        <section className="section">
            <h2 className="section-title">Birthdays Today:</h2>
            <div className="list">
                {todayList.map((person) =>(
                    <BirthdayCard key={person.id || person.name} person={person} />
                ))}
            </div>
        </section>
    );
};

export default TodayBirthdays;