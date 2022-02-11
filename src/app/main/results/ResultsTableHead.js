import TableHead from '@material-ui/core/TableHead';
import clsx from 'clsx';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  actionsButtonWrapper: {
    background: theme.palette.background.paper,
  },
  subHeader: {
    minWidth: 'max-content',
  },
}));

const dataRowLevels = {
  levelOne: [
    { id: 1, title: '', colSpan: '4', disablePadding: true },
    { id: 5, title: 'T', colSpan: '4', disablePadding: true },
    { id: 6, title: 'D', colSpan: '4', disablePadding: true },
    { id: 7, title: 'O', colSpan: '4', disablePadding: true },
    { id: 8, title: 'C', colSpan: '4', disablePadding: true },
  ],
  levelTwo: [
    { id: 1, title: '', colSpan: '4', disablePadding: true },
    { id: 5, title: 'T1', disablePadding: true },
    { id: 6, title: 'T2', disablePadding: true },
    { id: 7, title: 'T3', disablePadding: true },
    { id: 8, title: 'T4', disablePadding: true },
    { id: 9, title: 'D1', disablePadding: true },
    { id: 10, title: 'D2', disablePadding: true },
    { id: 11, title: 'D3', disablePadding: true },
    { id: 12, title: 'D4', disablePadding: true },
    { id: 13, title: 'O1', disablePadding: true },
    { id: 14, title: 'O2', disablePadding: true },
    { id: 15, title: 'O3', disablePadding: true },
    { id: 16, title: 'O4', disablePadding: true },
    { id: 17, title: 'C1', disablePadding: true },
    { id: 18, title: 'C2', disablePadding: true },
    { id: 19, title: 'C3', disablePadding: true },
    { id: 20, title: 'C4', disablePadding: true },
  ],
  levelThree: [
    { id: 1, title: '', colSpan: '3', disablePadding: false },
    { id: 4, title: 'Activa', disablePadding: false },
    { id: 5, title: 'Pasión y Compromiso', disablePadding: false },
    { id: 6, title: 'Capacidad de Logro', disablePadding: false },
    { id: 7, title: 'Apertura a Consejo', disablePadding: false },
    { id: 8, title: 'Ética y Honestidad', disablePadding: false },
    { id: 9, title: 'Acuerdo Justo', disablePadding: false },
    { id: 10, title: 'Inversión Suficiente', disablePadding: false },
    { id: 11, title: 'Habilita Crecimiento', disablePadding: false },
    { id: 12, title: 'Inversión protegida', disablePadding: false },
    { id: 13, title: 'Ventaja Significativa', disablePadding: false },
    { id: 14, title: 'Jugada Pionera', disablePadding: false },
    { id: 15, title: 'Oportunidad Única', disablePadding: false },
    { id: 16, title: 'Apalancamiento', disablePadding: false },
    { id: 17, title: 'Escalabilidad Regional', disablePadding: false },
    { id: 18, title: 'Necesidad Real', disablePadding: false },
    { id: 19, title: 'Baja Competencia', disablePadding: false },
    { id: 20, title: 'Pocas Barreras', disablePadding: false },
  ],
};

const ResultsTableHead = ({ rows }) => {
  const classes = useStyles();
  return (
    <TableHead className={clsx('', classes.subHeader)}>
      <TableRow className={clsx('h-32', classes.subHeader)}>
        {dataRowLevels.levelOne.map((row) => {
          return (
            <TableCell
              key={row.id}
              align={row?.align || 'center'}
              className={clsx('whitespace-nowrap', classes.subHeader)}
              padding={row?.disablePadding ? 'none' : 'normal'}
              colSpan={row?.colSpan || 1}
            >
              {row.title}
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow className={clsx('h-32', classes.subHeader)}>
        {dataRowLevels.levelTwo.map((row) => {
          return (
            <TableCell
              key={row.id}
              align={row?.align || 'center'}
              className={clsx('whitespace-nowrap', classes.subHeader)}
              padding={row?.disablePadding ? 'none' : 'normal'}
              colSpan={row?.colSpan || 1}
            >
              {row.title}
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow className={clsx('h-32', classes.subHeader)}>
        {dataRowLevels.levelThree.map((row) => {
          return (
            <TableCell
              key={row.id}
              align={row?.align || 'center'}
              className={clsx('whitespace-normal', classes.subHeader)}
              padding={row?.disablePadding ? 'none' : 'normal'}
              colSpan={row?.colSpan || 1}
            >
              {row.title}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default ResultsTableHead;
