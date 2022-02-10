import FusePageCarded from '../../../@fuse/core/FusePageCarded/FusePageCarded';
import ResultsHeader from './ResultsHeader';
import ResultsTable from './ResultsTable';

const Results = () => {
  return (
    <>
      <FusePageCarded
        classes={{
          content: 'flex',
          contentCard: 'overflow-hidden',
          header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
        }}
        header={<ResultsHeader />}
        content={<ResultsTable />}
        innerScroll
      />
    </>
  );
};

export default Results;
