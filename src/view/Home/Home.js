import { ContactDetails } from "../../data/data";
import ContactCard from "../../components/ContactCard/ContactCard";
import { useEffect, useState } from "react";
import './Home.css'

const Home = () => {
    const [contact, setContact] = useState(ContactDetails)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fliterAns = ContactDetails.filter((contactsinfo) => {
            const name = contactsinfo.name.toLowerCase();
            const mobileno = contactsinfo.mobileno.toString();
            const searchingvalue = search.toLowerCase();
            return (name.includes(searchingvalue)) || (mobileno.includes(searchingvalue))
        })
        setContact(fliterAns)
    }, [search])

    return (
        <div>
            <div className="searchbarcontainer">
                <input
                    type="text"
                    placeholder="search"
                    className="searchbar"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value)
                    }}
                />
            </div>
            {
                contact.map((contactinfo, index) => {
                    const { name, mobileno } = contactinfo
                    return (<ContactCard key={index} name={name} mobileno={mobileno} />)
                })
            }
        </div>
    )
}

export default Home;
