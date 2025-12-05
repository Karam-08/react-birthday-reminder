import BirthdayCard from "./BirthdayCards";

const BirthdayList = ({people}) =>{
    const today = new Date();

    const sorted = [...people].sort((a, b) =>{
        const getNextBirthday = (birthday) =>{
            const date = new Date(birthday);
            const thisYear = today.getFullYear();
            const nextBirthday = new Date(thisYear, date.getMonth(), date.getDate());

            if(nextBirthday < today){ // if the birthday already passed this year, it goes to the next year instead
                nextBirthday.setFullYear(thisYear + 1);
            }

            return nextBirthday;
        };
    return getNextBirthday(a.birthday) - getNextBirthday(b.birthday);
  });

    return(
        <section className="section">
            <h2 className="section-title">Upcoming Birthdays:</h2>
            <div className="list">
                {sorted.map((person) =>(
                    <BirthdayCard key={person.id || person.name} person={person} />
                ))}
            </div>
        </section>
    );
};

export default BirthdayList;