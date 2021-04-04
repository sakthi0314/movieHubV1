import React, { useEffect, useState } from "react";
import PersonRow from "../../Components/PersonRow/PersonRow";
import axios from "../../Services/axios";
import { APP_KEY } from "../../Services/request";
import "./Persons.scss";

function Persons() {
  const [persons, setPersons] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);

  console.log(persons);

  // Fetch Persons
  const fetchPersons = async () => {
    const { data } = await axios.get(
      `/person/popular?api_key=${APP_KEY}&language=en-US&page=${currentPage}`
    );
    setPersons(data.results);
  };

  const handleNext = () => {
    setcurrentPage(currentPage + 1);
    window.scroll(0, 0);
  };

  const handlePre = () => {
    setcurrentPage(currentPage - 1);
    window.scroll(0, 0);
  };

  useEffect(() => {
    fetchPersons();
  }, [currentPage]);
  return (
    <div className='persons'>
      <div className='persons__container'>
        <div className='persons__header'>
          <h1 className='persons__header--title'>Popular Person</h1>
        </div>
        <div className='persons__content'>
          {persons &&
            persons.map((person) => (
              <PersonRow
                id={person.id}
                key={person.id}
                name={person.name}
                known_for_department={person.known_for_department}
                profile_path={person.profile_path}
              />
            ))}
        </div>
        <div className='trending__pagination'>
          {currentPage >= 2 && (
            <button
              className='trending__pagination--one primary'
              onClick={handlePre}
            >
              Pre
            </button>
          )}
          <button
            className='trending__pagination-two primary'
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Persons;
