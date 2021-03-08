import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const StyledHighscores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Highscores = () => {
  const [highscore, setHighscore] = useState([]);
  const [input, setInput] = useState("");
  const [world, setWorld] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [skill, setSkill] = useState("Sword");
  //Dropdown Menu
  const [open, setOpen] = useState(false); //open or not
  const items = [
    { id: 1, value: "Sword" },
    { id: 2, value: "Distance" },
    { id: 3, value: "Magic" },
  ];

  const toggle = () => setOpen(!open);

  const scorePerPage = 200;
  const pagesVisited = pageNumber * scorePerPage;

  const displayScores = highscore
    .slice(pagesVisited, pagesVisited + scorePerPage)
    .map((highscor) => {
      return (
        <div>
          <p>
            {highscor.name} : {highscor.level}
          </p>
        </div>
      );
    });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setWorld(input);
    console.log(world);
  };

  // const handleClick = (e) => {
  //   setCurrentPage(e.target.id);
  // };

  useEffect(() => {
    fetch(`https://api.tibiadata.com/v2/highscores/${world}/${skill}.json`)
      .then((res) => res.json())
      .then((data) => {
        setHighscore([...data.highscores.data]);
      });
  }, [world, skill]);

  const pageCount = Math.ceil(highscore.length / scorePerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <StyledHighscores>
      <h1> Highscores</h1>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          placeholder="Search Character..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div>
        <div
          tabIndex={0}
          role="button"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        >
          <p>{open ? "Close" : "Choose a skill"}</p>
        </div>
        {open && (
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <span>
                    {item.value}{" "}
                    <button type="button" onClick={() => setSkill(item.value)}>
                      Select
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {displayScores}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </StyledHighscores>
  );
};

export default Highscores;

//youtube.com/watch?v=HANSMtDy508&ab_channel=PedroTech
