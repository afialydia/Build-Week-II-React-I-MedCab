import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Button } from 'semantic-ui-react';
import StrainCard from "./StrainCard";
import strainData from "../dummydata/data"

// component styling

const HeadingContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;

const SubHeadingContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;

    p {
        color: black;
    }

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SearchContainerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    * {
        padding: 0.5em;
    }

    Button {
        width: 100%;
    }
`;

const StrainCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`

export default function SearchForm({ favorites, setFavorites }) {

    const [strainQuery, setQuery] = useState({
        search: "",
    });

    const [searchResults, setResults] = useState([]);

    const handleChange = event => {
        setQuery({...strainQuery, search: event.target.value});
    }

    // function to send an axios.post on submit, for when we have a working endpoint to send to
/*     const handleSubmit = () => {
        axios
            .post("https://reqres.in/api/users", strainQuery)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    } */

    const handleSubmit = () => {
         setResults(strainData.filter(strain => strain.Description.includes(strainQuery.search) && strain.Rating > 4.9));
    }

    return (
        <>
        <HeadingContainerDiv>
            <h1>Strain Search</h1>
            </HeadingContainerDiv>
        <Link to='/profile'>Profile</Link>
        <SubHeadingContainerDiv>
            <p>
                Search below to receive personalized recommendations for strains of medicinal marijuana.
            </p>
        </SubHeadingContainerDiv>
        <SearchContainerDiv>
         <Form onSubmit={() => handleSubmit()}>
            <Form.Field>
                <label>
                    Search Strains 
                </label>
                <input type="text" onChange={event => handleChange(event)}/> 
            </Form.Field>
        <ButtonContainer>
            <Button >Search</Button>
        </ButtonContainer>
        </Form>
        </SearchContainerDiv>
        <StrainCardContainer>
            {searchResults.map(item => <StrainCard data={item} favorites={favorites} setFavorites={setFavorites}></StrainCard>)}
        </StrainCardContainer>
        </>
    )
}