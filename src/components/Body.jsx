import TopVideoDiv from './TopVideoDiv';
import ShortBioDiv from './ShortBioDiv';
import RoutingDiv from './RoutingDiv';

export const Body = () => {
  return (
    <div
      className="flex flex-col border-2 mx-96 w-100 h-screen"
      style={{ marginLeft: '28%', marginRight: '28%' }}
    >
      <TopVideoDiv />
      <ShortBioDiv />
      <RoutingDiv />
    </div>
  );
}
export default Body;
