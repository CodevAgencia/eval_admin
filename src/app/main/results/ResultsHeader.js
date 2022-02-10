import { useDispatch, useSelector } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import { selectMainTheme } from '../../store/fuse/settingsSlice';

const ResultsHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const searchText = useSelector(({ users }) => users.searchText);
  const mainTheme = useSelector(selectMainTheme);

  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex items-center">
        <Icon
          component={motion.span}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.2 } }}
          className="text-24 md:text-32"
        >
          poll
        </Icon>
        <Typography
          component={motion.span}
          initial={{ x: -20 }}
          animate={{ x: 0, transition: { delay: 0.2 } }}
          delay={300}
          className="hidden sm:flex text-16 md:text-24 mx-12 font-semibold"
        >
          Resultados
        </Typography>
        <Button
          type="button"
          variant="contained"
          color="default"
          size="small"
          onClick={() => {
            history.push('/enterprising');
          }}
        >
          Regresar
        </Button>
      </div>

      {/* <div className="flex flex-1 items-center justify-center px-12"> */}
      {/*  <ThemeProvider theme={mainTheme}> */}
      {/*    <Paper */}
      {/*      component={motion.div} */}
      {/*      initial={{ y: -20, opacity: 0 }} */}
      {/*      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }} */}
      {/*      className="flex items-center w-full max-w-512 px-8 py-4 rounded-16 shadow" */}
      {/*    > */}
      {/*      <Icon color="action">search</Icon> */}

      {/*      <Input */}
      {/*        placeholder="Search" */}
      {/*        className="flex flex-1 mx-8" */}
      {/*        disableUnderline */}
      {/*        fullWidth */}
      {/*        // value={searchText} */}
      {/*        value="searchText" */}
      {/*        inputProps={{ */}
      {/*          'aria-label': 'Search', */}
      {/*        }} */}
      {/*        // onChange={(ev) => dispatch(setUsersSearchText(ev))} */}
      {/*        onChange={(ev) => console.log('modificando')} */}
      {/*      /> */}
      {/*    </Paper> */}
      {/*  </ThemeProvider> */}
      {/* </div> */}
    </div>
  );
};

export default ResultsHeader;
