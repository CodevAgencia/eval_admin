import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  actionsButtonWrapper: {
    background: theme.palette.background.paper,
  },
  subHeader: {},
}));

const EnterprisingTableHead = ({ rows }) => {
  const classes = useStyles();
  return (
    <TableHead className={clsx('', classes.subHeader)}>
      <TableRow className={clsx('h-64', classes.subHeader)}>
        {rows.map((row) => {
          return (
            <TableCell
              key={row.id}
              align={row.align || 'left'}
              className={clsx('whitespace-nowrap', classes.subHeader)}
              padding={row.disablePadding ? 'none' : 'normal'}
            >
              {row.label}
            </TableCell>
          );
        }, this)}
      </TableRow>
    </TableHead>
  );
};

export default EnterprisingTableHead;
