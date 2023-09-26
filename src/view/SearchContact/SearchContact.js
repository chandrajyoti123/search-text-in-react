import { ContactDetails } from "../../data/data";
import ContactCard from "../../components/ContactCard/ContactCard";
import { useEffect, useState } from "react";
import './SearchContact.css'

const SearchContact = () => {
    const [contact, setContact] = useState(ContactDetails)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const fliterAns = ContactDetails.filter((contactsinfo) => {
            const {name,mobileno}=contactsinfo
            const names = name.toLowerCase();
            const mobilenos = mobileno.toString();
            const searchingvalue = search.toLowerCase();
            return (names.includes(searchingvalue)) || (mobilenos.includes(searchingvalue))
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

export default SearchContact;
