import React,{useState} from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'react-bootstrap';
import './FilterExpenses.css';

const FilterExpenses = (props) => {
    const [dropdownButtonValue, setDropdownButtonValue] = useState('--Select Year--');
    const dropdownButtonHandler = (event) => {
        setDropdownButtonValue(event)
        props.onChangeFilter(event);
    };
    return <div>
        <label className="filter-label">Filter by year</label>
        <DropdownButton id="dropdown-basic-button" title={dropdownButtonValue} onSelect={dropdownButtonHandler}>
            <Dropdown.Item eventKey="2019">2019</Dropdown.Item>
            <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
            <Dropdown.Item eventKey="2021">2021</Dropdown.Item>
            <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
            <Dropdown.Item eventKey="2023">2023</Dropdown.Item>
            <Dropdown.Item eventKey="2024">2024</Dropdown.Item>
            <Dropdown.Item eventKey="2025">2024</Dropdown.Item>
        </DropdownButton>
    </div>
};
export default FilterExpenses;