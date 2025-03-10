import Pagination from 'react-bootstrap/Pagination';

interface PaginationProps
{
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
};

const PaginationComp = ({totalPages, currentPage, onPageChange}: PaginationProps)=> {
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Ellipsis />
      {[...Array(totalPages)].map((_, i) => ( 
        <Pagination.Item
          key={i}
          active={i + 1 === currentPage}
          onClick={() => onPageChange(i + 1)}>
          {i + 1}
        </Pagination.Item>
      ))}
      <Pagination.Ellipsis />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationComp;