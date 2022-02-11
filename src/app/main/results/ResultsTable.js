import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useParams } from 'react-router';
import FuseScrollbars from '../../../@fuse/core/FuseScrollbars/FuseScrollbars';
import FuseLoading from '../../../@fuse/core/FuseLoading';
import ResultsTableHead from './ResultsTableHead';
import { getResultsSummary, getResultsTable } from '../../store/app/resultsSlice';

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
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const { results, summary } = useSelector((state) => state.results);

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        dispatch(getResultsTable(id)).then(() => setLoading(false));
        dispatch(getResultsSummary(id)).then(() => setLoading(false));
        setLoading(false);
      }, 500);
    }
  }, [dispatch, id]);

  if (loading) {
    return <FuseLoading />;
  }

  if (results?.length === 0 && summary?.length === 0) {
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
            {results?.map((item) => (
              <>
                <TableRow
                  className="h-40 cursor-pointer bg-gray-400"
                  // hover
                  // role="checkbox"
                  // aria-checked={isSelected}
                  tabIndex={-1}
                  key={item.id}
                >
                  <TableCell
                    className="p-0 font-bold"
                    component="th"
                    scope="row"
                    colSpan={3}
                    align="center"
                  >
                    {item.thematic}
                  </TableCell>
                  <TableCell className="p-4 md:p-16" component="th" scope="row" colSpan={17} />
                </TableRow>
                {item.data.map((subItem) => (
                  <>
                    <TableRow
                      className="h-40 cursor-pointer bg-orange-100"
                      // hover
                      // role="checkbox"
                      // aria-checked={isSelected}
                      tabIndex={-1}
                      key={subItem.id}
                    >
                      <TableCell
                        className="p-0 font-bold"
                        component="th"
                        scope="row"
                        colSpan={3}
                        align="center"
                      >
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
                          <TableCell
                            className="p-4 md:p-16"
                            component="th"
                            scope="row"
                            colSpan={1}
                            style={{ minWidth: '180px' }}
                          >
                            {value.title}
                          </TableCell>
                          <TableCell
                            className="p-4 md:p-16"
                            style={{ minWidth: '370px' }}
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
            <TableRow
              className="h-32 cursor-pointer bg-gray-200"
              hover
              // role="checkbox"
              // aria-checked={isSelected}
              tabIndex={-1}
              // key={item.id}
            >
              <TableCell className="p-0" component="th" scope="row" colSpan={4} />
              {summary[0]?.results.map((item) => (
                <>
                  <TableCell className="p-0" component="th" scope="row" align="center" colSpan={1}>
                    {item > 0 ? 'Ok' : 'Incompleto'}
                  </TableCell>
                </>
              ))}
            </TableRow>

            {summary?.map((resultTotal, index) => (
              <TableRow
                className="h-32 cursor-pointer bg-gray-200"
                hover
                // role="checkbox"
                // aria-checked={isSelected}
                tabIndex={-1}
                // key={item.id}
              >
                {resultTotal?.total ? (
                  <>
                    <TableCell className="p-0" component="th" scope="row" colSpan={3} />
                    <TableCell
                      className="p-0"
                      component="th"
                      scope="row"
                      colSpan={1}
                      align="center"
                    >
                      {resultTotal?.total}
                    </TableCell>
                  </>
                ) : (
                  <TableCell className="p-0" component="th" scope="row" colSpan={4} />
                )}
                {resultTotal.results.map((result) => (
                  <>
                    <TableCell
                      className="p-0"
                      component="th"
                      scope="row"
                      align="center"
                      colSpan={1}
                    >
                      {result}
                    </TableCell>
                  </>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </FuseScrollbars>
    </div>
  );
};

export default ResultsTable;
