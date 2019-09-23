import React from 'react';
import axios from 'axios';
import { Search } from 'semantic-ui-react';

const testData = "test string";     

export default function SearchForm() {
    return (
        <Form>
            <Form.Field>
                <label>
                    Search Strains
                </label>
                <input /> 
            </Form.Field>
        </Form>
    )
}