import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

const testData = "test string";     

const SearchContainerDiv = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    * {
        padding: 0.5em;
    }
`

export default function SearchForm() {
    return (
        <SearchContainerDiv>
         <Form>
            <Form.Field>
                <label>
                    Search Strains 
                </label>
                <input /> 
            </Form.Field>
        </Form>
        </SearchContainerDiv>
    )
}