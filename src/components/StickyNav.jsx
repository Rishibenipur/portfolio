const StickyNav = () => {
  return (
    <>
      <div
        className="bg-gray-400 py-4 backdrop-filter 
        backdrop-blur-md sticky top-0 
        bg-opacity-40"
      >
        <div
          className="container mx-auto flex 
                    justify-between items-center
                    px-4"
        >
          <button>Fixed Icon</button>
          <button>Toggle Button</button>
        </div>
      </div>
    </>
  );
};
export default StickyNav;
