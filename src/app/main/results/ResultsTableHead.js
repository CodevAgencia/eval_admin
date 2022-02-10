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
    { id: 1, title: '', colSpan: '4' },
    { id: 5, title: 'T', colSpan: '4' },
    { id: 6, title: 'D', colSpan: '4' },
    { id: 7, title: 'O', colSpan: '4' },
    { id: 8, title: 'C', colSpan: '4' },
  ],
  levelTwo: [
    { id: 1, title: '', colSpan: '4' },
    { id: 5, title: 'T1' },
    { id: 6, title: 'T2' },
    { id: 7, title: 'T3' },
    { id: 8, title: 'T4' },
    { id: 9, title: 'D1' },
    { id: 10, title: 'D2' },
    { id: 11, title: 'D3' },
    { id: 12, title: 'D4' },
    { id: 13, title: 'O1' },
    { id: 14, title: 'O2' },
    { id: 15, title: 'O3' },
    { id: 16, title: 'O4' },
    { id: 17, title: 'C1' },
    { id: 18, title: 'C2' },
    { id: 19, title: 'C3' },
    { id: 20, title: 'C4' },
  ],
  levelThree: [
    { id: 1, title: '', colSpan: '3' },
    { id: 4, title: 'Activa' },
    { id: 5, title: 'Pasión y Compromiso' },
    { id: 6, title: 'Capacidad de Logro' },
    { id: 7, title: 'Apertura a Consejo' },
    { id: 8, title: 'Ética y Honestidad' },
    { id: 9, title: 'Acuerdo Justo' },
    { id: 10, title: 'Inversión Suficiente' },
    { id: 11, title: 'Habilita Crecimiento' },
    { id: 12, title: 'Inversión protegida' },
    { id: 13, title: 'Ventaja Significativa' },
    { id: 14, title: 'Jugada Pionera' },
    { id: 15, title: 'Oportunidad Única' },
    { id: 16, title: 'Apalancamiento' },
    { id: 17, title: 'Escalabilidad Regional' },
    { id: 18, title: 'Necesidad Real' },
    { id: 19, title: 'Baja Competencia' },
    { id: 20, title: 'Pocas Barreras' },
  ],
};

const ResultsTableHead = ({ rows }) => {
  const classes = useStyles();
  return (
    <TableHead className={clsx('', classes.subHeader)}>
      <TableRow className={clsx('h-64', classes.subHeader)}>
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
      <TableRow className={clsx('h-64', classes.subHeader)}>
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
      <TableRow className={clsx('h-64', classes.subHeader)}>
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
