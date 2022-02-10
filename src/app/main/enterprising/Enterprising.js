import FusePageCarded from '@fuse/core/FusePageCarded';
import EnterprisingHeader from './EnterprisingHeader';
import EnterprisingTable from './EnterprisingTable';

const Enterprising = () => {
  return (
    <>
      <FusePageCarded
        classes={{
          content: 'flex',
          contentCard: 'overflow-hidden',
          header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
        }}
        header={<EnterprisingHeader />}
        content={<EnterprisingTable />}
        innerScroll
      />
    </>
  );
};

export default Enterprising;
