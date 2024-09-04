import { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  position: relative;
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

const SuggestionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 5px 5px;
  position: absolute;
  width: 100%;
  background: #fff;
  z-index: 10;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const LocateMeButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #5542F6;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function SearchBar({ onSearch, onLocateMe }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // Mock suggestions for demonstration purposes
    setSuggestions([
      'New York',
      'Los Angeles',
      'San Francisco',
      'Chicago',
      'Miami',
    ]);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };

  const handleLocateMeClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        onLocateMe(latitude, longitude);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search for a place..."
        value={query}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <SuggestionsList>
          {suggestions.map((suggestion) => (
            <SuggestionItem
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
      <LocateMeButton onClick={handleLocateMeClick}>Locate Me</LocateMeButton>
    </SearchBarContainer>
  );
}
