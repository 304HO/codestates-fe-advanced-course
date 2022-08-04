import styled from "styled-components";

const Pagenation = ({ pageLength, limit, page, setPage }) => {
  const length = Math.ceil(pageLength / limit);
  // console.log(pageLength, limit, length);

  return (
    <Container>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>

      {Array(length)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            cur={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}

      <Button onClick={() => setPage(page + 1)} disabled={page === length}>
        &gt;
      </Button>
    </Container>
  );
};
export default Pagenation;
const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;
const Button = styled.button`
  /* color: black; */
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  background: #e3e3e3;
  color: black;
  font-size: 1rem;

  &:hover {
    background: #000000;
    cursor: pointer;
    color: white;
  }
`;
