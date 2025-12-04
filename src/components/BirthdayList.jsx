import BirthdayItem from "./BirthdayItem";

const BirthdayList = ({people}) =>{
    const sorted = [...people].sort((a, b) => new Date(a.birthday) - new Date(b.birthday));

    return(
        <section className="section">
            <h2 className="section-title">Upcoming Birthdays</h2>
            <div className="list">
                {sorted.map((person) => (
                    <BirthdayItem key={person.id} person={person} />
                ))}
            </div>
        </section>
    );
};

export default BirthdayList;