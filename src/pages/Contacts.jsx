import { Filter } from "components/Filter/Filter";
// import Loader from "components/Loader/Loader";
import { Phonebook } from "components/Phonebook/Phonebook";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/Contacts/operations";
// import { selectIsLoading } from "redux/Contacts/selectors";

export default function Contacts() { 
    
    // const dispatch = useDispatch();
    // const isLoading = useSelector(selectIsLoading);

    // useEffect(() => {
    //     dispatch(fetchContacts())
    // }, [dispatch]);

    return (
        <>
            <h2>Phonebook</h2>
            <Phonebook />
            <h2>Contacts</h2>
            <Contacts />
            <Filter />
            {/* {isLoading && <Loader/>} */}
        </>
    )
}