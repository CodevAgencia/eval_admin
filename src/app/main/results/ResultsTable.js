import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FuseScrollbars from '../../../@fuse/core/FuseScrollbars/FuseScrollbars';
import FuseLoading from '../../../@fuse/core/FuseLoading';
import ResultsTableHead from './ResultsTableHead';
import { dataResultTable } from '../../utils/fakeDataResultTable';

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

const ResultsTable = () => {
  const dispatch = useDispatch();
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
          No existen resultados!
        </Typography>
      </motion.div>
    );
  }

  return (
    <div className="w-full flex flex-col" id="BUSCAME">
      <FuseScrollbars className="flex-grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <ResultsTableHead rows={rows} />
          <TableBody>
            {dataResultTable.map((item) => (
              <>
                <TableRow
                  className="h-72 cursor-pointer bg-gray-400"
                  // hover
                  // role="checkbox"
                  // aria-checked={isSelected}
                  tabIndex={-1}
                  key={item.id}
                >
                  <TableCell className="p-4 md:p-16" component="th" scope="row" colSpan={3}>
                    {item.thematic}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" colSpan={17} />
                </TableRow>
                {item.data.map((subItem) => (
                  <>
                    <TableRow
                      className="h-72 cursor-pointer bg-orange-100"
                      // hover
                      // role="checkbox"
                      // aria-checked={isSelected}
                      tabIndex={-1}
                      key={subItem.id}
                    >
                      <TableCell className="p-4 md:p-16" component="th" scope="row" colSpan={3}>
                        {subItem.subThematic}
                      </TableCell>
                      <TableCell className="p-4 md:p-16" component="th" scope="row" colSpan={17} />
                    </TableRow>
                    {subItem.values.map((value) => (
                      <>
                        <TableRow
                          className="h-72 cursor-pointer"
                          hover
                          // role="checkbox"
                          // aria-checked={isSelected}
                          tabIndex={-1}
                          key={1}
                        >
                          <TableCell className="p-4 md:p-16" component="th" scope="row" colSpan={1}>
                            {value.code}
                          </TableCell>
                          <TableCell className="p-4 md:p-16" component="th" scope="row" colSpan={1}>
                            {value.title}
                          </TableCell>
                          <TableCell
                            className="p-4 md:p-16 min-w-max"
                            component="th"
                            scope="row"
                            colSpan={1}
                          >
                            {value.subTitle}
                          </TableCell>
                          <TableCell
                            className="p-4 md:p-16"
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {value.total}
                          </TableCell>
                          {value.results.map((result) => (
                            <TableCell
                              className="p-4 md:p-16"
                              component="th"
                              scope="row"
                              align="center"
                            >
                              {result}
                            </TableCell>
                          ))}
                        </TableRow>
                      </>
                    ))}
                  </>
                ))}
              </>
            ))}
          </TableBody>
        </Table>
      </FuseScrollbars>
    </div>
  );
};

export default ResultsTable;
