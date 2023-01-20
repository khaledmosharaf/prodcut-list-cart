import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults } from 'reducers/productsReducer';

import styled from 'styled-components';

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState(undefined);
  console.log(searchTerm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchResults(searchTerm));
  }, [dispatch, searchTerm]);

  return (
    <SearchbarWrapper>
      <input
        type="text"
        placeholder="Search your product"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </SearchbarWrapper>
  );
}
const SearchbarWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  input {
    width: 70%;
    height: 40px;
    color: #555;
    border-radius: 6px;
    outline: 0;
    padding-left: 10px;
    font-size: 1.5rem;
    border: 1px solid #ccc;

    ::placeholder {
      font-size: 1.5rem;
      transform: translate(0, 1px);
      color: #999;
    }

    :focus {
      outline: 1px solid #aaa;
    }
  }
`;
