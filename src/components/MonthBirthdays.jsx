import BirthdayItem from "./BirthdayItem";

const today = new Date();
const todayMonth = today.getMonth() + 1;

const MonthBirthdays = ({people}) =>{
    const monthList = people.filter((p) =>{
        const d = new Date(p.birthday);
        return d.getMonth() + 1 === todayMonth;
    });

    if(monthList.length === 0) return null;

    return(
        <section className="section">
            <h2 className="section-title">Birthdays This Month</h2>
            <div className="list">
                {monthList.map((person) =>(
                    <BirthdayItem key={person.name} person={person}/>
                ))}
            </div>
        </section>
    );
};

export default MonthBirthdays;