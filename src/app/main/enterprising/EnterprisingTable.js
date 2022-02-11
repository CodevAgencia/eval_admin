import FuseScrollbars from '@fuse/core/FuseScrollbars';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import FuseLoading from '@fuse/core/FuseLoading';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import EnterprisingTableHead from './EnterprisingTableHead';

const initialFakeData = [
  {
    id: 1,
    nombre: 'Enprendedor 1',
    mail: '15/01/2022',
    intereses: 'Etapa',
  },
  {
    id: 2,
    nombre: 'Enprendedor 2',
    mail: '15/01/2022',
    intereses: 'Etapa',
  },
  {
    id: 3,
    nombre: 'Enprendedor 3',
    mail: '15/01/2022',
    intereses: 'Etapa',
  },
];

const rows = [
  {
    id: 'name',
    align: 'left',
    disablePadding: false,
    label: 'Nombre',
    sort: true,
  },
  {
    id: 'date',
    align: 'left',
    disablePadding: false,
    label: 'Fecha',
    sort: true,
  },
  {
    id: 'stage',
    align: 'left',
    disablePadding: false,
    label: 'Etapa',
    sort: true,
  },
  {
    id: 'actions',
    align: 'center',
    disablePadding: false,
    label: 'Acciones',
    sort: true,
  },
];

const EnterprisingTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const searchText = useSelector(({ users }) => users.searchText);

  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('');
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState(initialFakeData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [order, setOrder] = useState({
    direction: 'asc',
    id: null,
  });

  useEffect(() => {
    // dispatch(getProducts()).then(() => setLoading(false));
  }, [dispatch]);

  // SEARCH TEXT USE EFFECT
  // useEffect(() => {
  //   if (searchText.length !== 0) {
  //     setData(
  //       _.filter(data, (item) => item.nombre.toLowerCase().includes(searchText.toLowerCase()))
  //     );
  //     setPage(0);
  //   } else {
  //     setData(initialFakeData);
  //   }
  // }, [initialFakeData, searchText]);

  function handleChangePage(event, value) {
    setPage(value);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(event.target.value);
  }

  if (loading) {
    return <FuseLoading />;
  }

  if (data.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          No existen Enprendedores!
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <EnterprisingTableHead rows={rows} />
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n) => {
              return (
                <TableRow
                  className="h-72 cursor-pointer"
                  hover
                  // role="checkbox"
                  // aria-checked={isSelected}
                  tabIndex={-1}
                  key={n.id}
                  // selected={isSelected}
                  // onClick={(event) => handleClick(n)}
                >
                  <TableCell className="p-4 md:p-16" component="th" scope="row">
                    {n.nombre}
                  </TableCell>

                  <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                    {n.mail}
                  </TableCell>

                  <TableCell className="p-4 md:p-16 truncate" component="th" scope="row">
                    {n.intereses}
                  </TableCell>

                  <TableCell
                    className="p-4 md:p-16 truncate"
                    component="th"
                    scope="row"
                    align="center"
                  >
                    <Button
                      type="button"
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={() => {
                        history.push(`/results/${n.id}`);
                      }}
                    >
                      Ver resultados
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </FuseScrollbars>

      <TablePagination
        className="flex-shrink-0 border-t-1"
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        /* eslint-disable-next-line react/jsx-no-bind */
        onPageChange={handleChangePage}
        /* eslint-disable-next-line react/jsx-no-bind */
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default EnterprisingTable;
